import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowRight, Copy } from "lucide-react";
import { FaTelegram } from "react-icons/fa6";
import { posts } from "@/lib/posts";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState } from "react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StarStore Insights — Guides & updates from the StarStore team" },
      { name: "description", content: "Practical know-how for buying and selling Telegram Stars, growing referrals, and staying secure — from the team behind StarStore." },
      { property: "og:title", content: "StarStore Insights" },
      { property: "og:description", content: "Editorial guides on Telegram Stars, USDT payouts, and the StarStore Mini App." },
    ],
  }),
  component: Index,
});

function Index() {
  const [copied, setCopied] = useState(false);
  const rss = "https://blog.starstore.app/rss.xml";

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Masthead / Hero */}
        <section className="border-b border-rule grain">
          <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              <img src={logo} alt="" className="w-5 h-5 rounded-full" />
              <span>Vol. 01 · Introducing The Journal</span>
            </div>

            <h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mt-8 text-balance max-w-5xl">
              Guides & updates from the
              <span className="inline-flex items-baseline gap-3 ml-2">
                <img src={logo} alt="brand mark" className="inline-block w-[0.9em] h-[0.9em] rounded-full translate-y-[0.1em]" />
                <em className="text-gold not-italic font-display">team</em>
              </span>.
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty">
              Practical know-how for buying and selling <strong className="text-foreground">Telegram Stars</strong>,
              growing referrals, and staying secure — written by the people who build the platform.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 rounded-full font-medium hover:bg-gold hover:text-ink transition-colors">
                <FaTelegram className="w-4 h-4" /> Open the App
              </a>
              <Link to="/blog/$slug" params={{ slug: posts[0].slug }}
                 className="inline-flex items-center gap-2 border border-ink px-6 py-3 rounded-full font-medium hover:bg-ink hover:text-paper transition-colors">
                Read articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* RSS */}
            <div className="mt-12 max-w-md">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Subscribe via RSS</div>
              <div className="flex items-center gap-2 border border-rule rounded-md bg-card p-1.5">
                <code className="flex-1 font-mono text-xs px-2 truncate">{rss}</code>
                <button
                  onClick={() => { navigator.clipboard.writeText(rss); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
                  className="px-3 py-1.5 bg-ink text-paper rounded text-xs font-mono uppercase tracking-wider hover:bg-gold hover:text-ink transition-colors flex items-center gap-1.5">
                  <Copy className="w-3 h-3" /> {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <div className="font-mono text-[10px] text-muted-foreground mt-2">Paste into your feed reader to subscribe</div>
            </div>
          </div>
        </section>

        {/* In this issue */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold mb-2">In this issue</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
                4 posts <span className="text-muted-foreground font-normal italic">·</span>
                <span className="text-muted-foreground font-normal italic"> Updated May 5, 2026</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider">
              {["Announcements","Selling Stars","Knowledge base","Telegram guides"].map(t => (
                <span key={t} className="px-3 py-1.5 bg-secondary rounded-full text-secondary-foreground">{t}</span>
              ))}
            </div>
          </div>

          <div className="double-rule">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group block border-b border-rule py-10 hover:bg-card/60 -mx-6 px-6 transition-colors"
              >
                <div className="grid md:grid-cols-12 gap-6 items-baseline">
                  <div className="md:col-span-1 font-display text-5xl md:text-6xl font-semibold text-gold leading-none">
                    {post.number}
                  </div>
                  <div className="md:col-span-8">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                      {post.category}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight tracking-tight group-hover:text-gold transition-colors text-balance">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                      {post.dek}
                    </p>
                  </div>
                  <div className="md:col-span-3 md:text-right font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    <div>{post.date}</div>
                    <div className="mt-1">{post.readTime}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-foreground group-hover:text-gold transition-colors">
                      Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                {i === 0 && (
                  <div className="mt-4 inline-block font-mono text-[10px] uppercase tracking-[0.25em] bg-gold text-ink px-2 py-0.5 rounded">
                    ★ Latest
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* Stay in the loop */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="border border-rule rounded-lg p-10 md:p-16 bg-card text-center">
            <Star className="w-8 h-8 text-gold fill-gold mx-auto twinkle" />
            <h2 className="font-display text-3xl md:text-5xl font-semibold mt-6 tracking-tight text-balance">
              Stay in the loop.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto">
              New issues land in the StarStore Mini App and your favorite feed reader.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 rounded-full font-medium hover:bg-gold hover:text-ink transition-colors">
                <FaTelegram className="w-4 h-4" /> Join us on Telegram
              </a>
              <a href="https://starstore.app/blog/atom.xml"
                 className="inline-flex items-center gap-2 border border-ink px-6 py-3 rounded-full font-medium hover:bg-ink hover:text-paper transition-colors">
                Atom feed
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
