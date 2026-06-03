import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Copy } from "lucide-react";
import { FaTelegram } from "react-icons/fa6";
import { posts } from "@/lib/posts";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SubscribeForm } from "@/components/SubscribeForm";
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
    links: [
      // Preload the first (LCP) hero image so it's ready before paint.
      ...(posts[0]?.hero
        ? [{ rel: "preload", as: "image", href: posts[0].hero, fetchpriority: "high" } as const]
        : []),
      // Warm up subsequent hero images while the page is idle.
      ...posts.slice(1).flatMap((p) =>
        p.hero ? [{ rel: "prefetch", as: "image", href: p.hero } as const] : [],
      ),
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

            <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
              <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer"
                 className="btn-press inline-flex items-center justify-center gap-2 bg-ink text-paper px-6 py-3 rounded-full font-medium hover:bg-gold hover:text-ink w-full sm:w-auto text-center">
                <FaTelegram className="w-4 h-4" /> Open the App
              </a>
              <Link to="/blog/$slug" params={{ slug: posts[0].slug }}
                 className="btn-press inline-flex items-center justify-center gap-2 border border-ink px-6 py-3 rounded-full font-medium hover:bg-ink hover:text-paper w-full sm:w-auto text-center">
                Read articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* RSS */}
            <div className="mt-12 max-w-md">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Subscribe via RSS</div>
              <div className="flex flex-col sm:flex-row items-stretch gap-2 border border-rule rounded-md bg-card p-1.5">
                <code className="flex-1 font-mono text-xs px-2 py-2 sm:py-0 truncate self-center">{rss}</code>
                <button
                  onClick={() => { navigator.clipboard.writeText(rss); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
                  className="px-3 py-2 sm:py-1.5 bg-ink text-paper rounded text-xs font-mono uppercase tracking-wider hover:bg-gold hover:text-ink transition-colors flex items-center justify-center gap-1.5">
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
                {posts.length} posts <span className="text-muted-foreground font-normal italic">·</span>
                <span className="text-muted-foreground font-normal italic"> Updated {posts[0]?.date}</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider">
              {Array.from(new Set(posts.map((p) => p.category))).map((t) => (
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
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-1 font-display text-5xl md:text-6xl font-semibold text-gold leading-none">
                    {post.number}
                  </div>
                  <div className="md:col-span-7">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                      {post.category}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight tracking-tight group-hover:text-gold transition-colors text-balance">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                      {post.dek}
                    </p>
                    <div className="mt-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-3">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                      <span className="inline-flex items-center gap-1 text-foreground group-hover:text-gold transition-colors ml-auto md:hidden">
                        Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    {post.hero && (
                      <figure className="overflow-hidden rounded-md border border-rule bg-card aspect-[16/9]">
                        <img
                          src={post.hero}
                          alt={post.title}
                          loading={i === 0 ? "eager" : "lazy"}
                          fetchPriority={i === 0 ? "high" : "auto"}
                          decoding="async"
                          width={1600}
                          height={896}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </figure>
                    )}
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
          <div className="border border-rule rounded-lg p-8 sm:p-10 md:p-16 bg-card text-center">
            <img
              src={logo}
              alt="StarStore app icon"
              loading="lazy"
              width={96}
              height={96}
              className="w-20 h-20 mx-auto rounded-2xl drop-shadow-md"
            />
            <h2 className="font-display text-3xl md:text-5xl font-semibold mt-6 tracking-tight text-balance">
              Stay in the loop.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto">
              Get new posts in your inbox — no spam, unsubscribe anytime.
            </p>
            <div className="mt-8">
              <SubscribeForm source="homepage" />
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-md mx-auto">
              <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer"
                 className="btn-press inline-flex items-center justify-center gap-2 bg-ink text-paper px-6 py-3 rounded-full font-medium hover:bg-gold hover:text-ink w-full sm:w-auto">
                <FaTelegram className="w-4 h-4" /> Join us on Telegram
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
