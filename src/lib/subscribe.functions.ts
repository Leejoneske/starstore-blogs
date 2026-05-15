import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

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
    const { error } = await supabaseAdmin
      .from("newsletter_subscribers")
      .insert({ email: data.email, source: data.source ?? "blog" });

    // Treat duplicate (already subscribed) as success — same UX, no enumeration.
    if (error && error.code !== "23505") {
      console.error("subscribeToNewsletter failed:", error);
      return { ok: false as const, message: "Couldn't save your email. Try again." };
    }

    return { ok: true as const, message: "You're on the list — thanks!" };
  });
