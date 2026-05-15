import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Mail, Loader2, Check } from "lucide-react";
import { subscribeToNewsletter } from "@/lib/subscribe.functions";

export function SubscribeForm({ source = "blog" }: { source?: string }) {
  const subscribe = useServerFn(subscribeToNewsletter);
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    try {
      const res = await subscribe({ data: { email, source } });
      if (res.ok) {
        setState("success");
        setMessage(res.message);
        setEmail("");
      } else {
        setState("error");
        setMessage(res.message);
      }
    } catch (err) {
      setState("error");
      setMessage(
        err instanceof Error && err.message.includes("email")
          ? "Enter a valid email address"
          : "Something went wrong. Try again.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row items-stretch gap-2 border border-rule rounded-md bg-card p-1.5">
        <div className="flex items-center gap-2 flex-1 px-3 py-2 sm:py-0">
          <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            disabled={state === "loading" || state === "success"}
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground/60 disabled:opacity-60"
            aria-label="Email address"
          />
        </div>
        <button
          type="submit"
          disabled={state === "loading" || state === "success"}
          className="px-5 py-2.5 bg-ink text-paper rounded text-xs font-mono uppercase tracking-wider hover:bg-gold hover:text-ink transition-colors flex items-center justify-center gap-1.5 disabled:opacity-70"
        >
          {state === "loading" && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
          {state === "success" && <Check className="w-3.5 h-3.5" />}
          {state === "success" ? "Subscribed" : state === "loading" ? "Sending" : "Subscribe"}
        </button>
      </div>
      {message && (
        <p
          className={`mt-2 font-mono text-[10px] uppercase tracking-wider ${
            state === "error" ? "text-red-600" : "text-muted-foreground"
          }`}
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}
