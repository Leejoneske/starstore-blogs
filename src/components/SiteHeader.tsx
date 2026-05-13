import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteHeader() {
  return (
    <header className="border-b border-rule bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="" className="w-10 h-10 rounded-full" />
          <div className="leading-none">
            <div className="font-display text-xl font-semibold tracking-tight">Insights</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
              Est. 2024 · The Journal
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
