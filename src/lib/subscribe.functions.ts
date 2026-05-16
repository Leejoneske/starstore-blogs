import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { sendEmail, welcomeEmail } from "./email.server";

const SubscribeSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Enter a valid email address" })
    .max(320),
  source: z.string().trim().max(64).optional(),
});

export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .inputValidator((input) => SubscribeSchema.parse(input))
  .handler(async ({ data }) => {
    // Upsert: returning row gives us the unsubscribe_token whether new or existing.
    const { data: row, error } = await supabaseAdmin
      .from("newsletter_subscribers")
      .upsert(
        { email: data.email, source: data.source ?? "blog" },
        { onConflict: "email", ignoreDuplicates: false }
      )
      .select("email, unsubscribe_token, unsubscribed_at")
      .single();

    if (error || !row) {
      console.error("subscribeToNewsletter failed:", error);
      return { ok: false as const, message: "Couldn't save your email. Try again." };
    }

    // If they previously unsubscribed, re-activate.
    if (row.unsubscribed_at) {
      await supabaseAdmin
        .from("newsletter_subscribers")
        .update({ unsubscribed_at: null })
        .eq("email", row.email);
    }

    // Fire welcome email (don't block UX on email failures).
    const { subject, html, text } = welcomeEmail(row.email, row.unsubscribe_token);
    const result = await sendEmail({ to: row.email, subject, html, text });
    if (!result.ok) {
      console.error("Welcome email failed for", row.email, result.error);
    }

    return { ok: true as const, message: "You're on the list — check your inbox!" };
  });

const UnsubscribeSchema = z.object({
  token: z.string().uuid(),
});

export const unsubscribeFromNewsletter = createServerFn({ method: "POST" })
  .inputValidator((input) => UnsubscribeSchema.parse(input))
  .handler(async ({ data }) => {
    const { data: row, error } = await supabaseAdmin
      .from("newsletter_subscribers")
      .update({ unsubscribed_at: new Date().toISOString() })
      .eq("unsubscribe_token", data.token)
      .select("email")
      .maybeSingle();

    if (error) {
      console.error("unsubscribe failed:", error);
      return { ok: false as const, message: "Couldn't process unsubscribe. Try again." };
    }
    if (!row) {
      return { ok: false as const, message: "Invalid or expired unsubscribe link." };
    }
    return { ok: true as const, message: `${row.email} has been unsubscribed.` };
  });
