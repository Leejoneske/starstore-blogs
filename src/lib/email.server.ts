// Resend email sender (server-only)

const FROM = "StarStore <noreply@starstore.app>";
const SITE = "https://blog.starstore.app";

export interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
  text: string;
}

export async function sendEmail({ to, subject, html, text }: SendEmailParams) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY not configured");
    return { ok: false as const, error: "Email provider not configured" };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: FROM, to: [to], subject, html, text }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`Resend send failed [${res.status}]: ${body}`);
    return { ok: false as const, error: `Resend ${res.status}` };
  }
  return { ok: true as const };
}

export function welcomeEmail(email: string, unsubscribeToken: string) {
  const unsubUrl = `${SITE}/unsubscribe?token=${unsubscribeToken}`;
  const subject = "Welcome to StarStore updates";
  const text = `Hey,

Thanks for subscribing to StarStore. You'll get fresh posts from blog.starstore.app — guides on Telegram Stars, cashing out, and product updates — straight to ${email}.

Need help? Reply to this email or message us in-app at https://starstore.app

Unsubscribe any time: ${unsubUrl}

— The StarStore team`;

  const html = `<!doctype html>
<html><body style="margin:0;background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Arial,sans-serif;color:#0f172a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:32px;">
        <tr><td>
          <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#0f172a;">Welcome to StarStore updates ⭐</h1>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#334155;">
            Thanks for subscribing. You'll get our newest posts from
            <a href="${SITE}" style="color:#2563eb;text-decoration:none;">blog.starstore.app</a>
            — guides on Telegram Stars, cashing out to USDT/TON, and product updates — straight to <strong>${email}</strong>.
          </p>
          <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#334155;">
            Need help in the meantime? Reply to this email, message
            <a href="https://t.me/TgStarStore_bot" style="color:#2563eb;text-decoration:none;">@TgStarStore_bot</a>,
            or use live chat in the app.
          </p>
          <p style="margin:0 0 8px;">
            <a href="https://starstore.app" style="display:inline-block;background:#0f172a;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:10px;font-size:14px;font-weight:600;">Open StarStore</a>
          </p>
        </td></tr>
      </table>
      <p style="max-width:560px;margin:16px auto 0;font-size:12px;line-height:1.5;color:#94a3b8;text-align:center;">
        You're receiving this because you subscribed at blog.starstore.app.<br/>
        <a href="${unsubUrl}" style="color:#94a3b8;text-decoration:underline;">Unsubscribe</a>
      </p>
    </td></tr>
  </table>
</body></html>`;

  return { subject, html, text };
}
