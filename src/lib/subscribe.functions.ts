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
    // Look up any existing record FIRST so we never email an already-active
    // subscriber twice (idempotent subscribe — no duplicate welcome emails).
    const { data: existing, error: lookupError } = await supabaseAdmin
      .from("newsletter_subscribers")
      .select("email, unsubscribe_token, unsubscribed_at")
      .eq("email", data.email)
      .maybeSingle();

    if (lookupError) {
      console.error("subscribeToNewsletter lookup failed:", lookupError);
      return { ok: false as const, message: "Couldn't save your email. Try again." };
    }

    // Already subscribed and active → no-op, no second email.
    if (existing && !existing.unsubscribed_at) {
      return { ok: true as const, message: "You're already subscribed — thanks!" };
    }

    let row = existing;

    if (existing) {
      // Previously unsubscribed → re-activate, then send the welcome again.
      const { data: updated, error: updateError } = await supabaseAdmin
        .from("newsletter_subscribers")
        .update({ unsubscribed_at: null, source: data.source ?? "blog" })
        .eq("email", existing.email)
        .select("email, unsubscribe_token, unsubscribed_at")
        .single();
      if (updateError || !updated) {
        console.error("subscribeToNewsletter reactivate failed:", updateError);
        return { ok: false as const, message: "Couldn't save your email. Try again." };
      }
      row = updated;
    } else {
      // Brand-new subscriber → insert.
      const { data: inserted, error: insertError } = await supabaseAdmin
        .from("newsletter_subscribers")
        .insert({ email: data.email, source: data.source ?? "blog" })
        .select("email, unsubscribe_token, unsubscribed_at")
        .single();
      if (insertError || !inserted) {
        console.error("subscribeToNewsletter insert failed:", insertError);
        return { ok: false as const, message: "Couldn't save your email. Try again." };
      }
      row = inserted;
    }

    // Send the welcome email only for new or re-activated subscribers.
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
