import { FaTelegram } from "react-icons/fa6";
import { Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule mt-32 bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="" className="w-9 h-9 rounded-full bg-paper" />
              <span className="font-display text-xl font-semibold">Insights</span>
            </div>
            <p className="text-sm text-paper/60 leading-relaxed max-w-xs">
              The editorial home of the journal — guides, updates, and field notes on Telegram Stars,
              referrals, and crypto payouts.
            </p>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4">
              Read
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-gold">Latest Issue</a></li>
              <li><a href="https://starstore.app/blog/rss.xml" className="hover:text-gold">RSS Feed</a></li>
              <li><a href="https://starstore.app/blog/atom.xml" className="hover:text-gold">Atom Feed</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4">
              Find us
            </div>
            <div className="flex gap-3">
              <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer" aria-label="Telegram"
                 className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition-all">
                <FaTelegram className="w-4 h-4" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X"
                 className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition-all">
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" aria-label="Discord"
                 className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition-all">
                <FaDiscord className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"
                 className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition-all">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href="https://ton.org" target="_blank" rel="noreferrer" aria-label="TON"
                 className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition-all">
                <SiTon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-paper/10 flex flex-col md:flex-row justify-between gap-4 font-mono text-[11px] text-paper/40 uppercase tracking-wider">
          <div>© 2026 · blog.starstore.app</div>
          <div>Settled on TON · Built for Telegram</div>
        </div>
      </div>
    </footer>
  );
}
