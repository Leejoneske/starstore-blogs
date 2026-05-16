import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { unsubscribeFromNewsletter } from "@/lib/subscribe.functions";

type Search = { token?: string };

export const Route = createFileRoute("/unsubscribe")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    token: typeof s.token === "string" ? s.token : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Unsubscribe — StarStore" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: UnsubscribePage,
});

function UnsubscribePage() {
  const { token } = useSearch({ from: "/unsubscribe" });
  const unsub = useServerFn(unsubscribeFromNewsletter);
  const [state, setState] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function handleConfirm() {
    if (!token) return;
    setState("loading");
    try {
      const res = await unsub({ data: { token } });
      setMessage(res.message);
      setState(res.ok ? "ok" : "error");
    } catch {
      setMessage("Something went wrong. Please try again.");
      setState("error");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-background text-foreground">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">
        <h1 className="text-2xl font-semibold mb-2">Unsubscribe</h1>

        {!token && (
          <p className="text-muted-foreground">
            This link is missing an unsubscribe token. Please use the link from the email we sent you.
          </p>
        )}

        {token && state === "idle" && (
          <>
            <p className="text-muted-foreground mb-6">
              Click below to stop receiving StarStore email updates. You can resubscribe any time.
            </p>
            <button
              onClick={handleConfirm}
              className="w-full rounded-lg bg-primary text-primary-foreground py-2.5 font-medium hover:opacity-90 transition"
            >
              Confirm unsubscribe
            </button>
          </>
        )}

        {state === "loading" && (
          <p className="text-muted-foreground">Processing…</p>
        )}

        {(state === "ok" || state === "error") && (
          <>
            <p className={state === "ok" ? "text-foreground mb-6" : "text-destructive mb-6"}>
              {message}
            </p>
            <Link to="/" className="text-primary underline underline-offset-4">
              Back to blog
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
