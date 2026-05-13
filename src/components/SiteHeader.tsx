import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b border-rule bg-paper/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 flex items-center justify-center rounded-full bg-ink text-gold">
            <Star className="w-5 h-5 fill-gold" strokeWidth={1.5} />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-gold twinkle" />
          </div>
          <div className="leading-none">
            <div className="font-display text-xl font-semibold tracking-tight">StarStore</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
              Insights · Est. 2024
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          <Link to="/" activeOptions={{ exact: true }} className="hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>
            Issue
          </Link>
          <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
            Open App
          </a>
          <a href="https://starstore.app" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
            starstore.app ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
