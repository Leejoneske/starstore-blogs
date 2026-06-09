import { Link } from "@tanstack/react-router";
import { Star, ArrowUpRight } from "lucide-react";
import type { Post } from "@/lib/posts";
import { getAdjacentPosts, posts } from "@/lib/posts";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function ArticleLayout({ post, children }: { post: Post; children: React.ReactNode }) {
  const { prev, next } = getAdjacentPosts(post.slug);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Masthead */}
        <div className="border-b border-rule">
          <div className="max-w-3xl mx-auto px-6 py-12">
            <Link to="/" className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-gold inline-flex items-center gap-1">
              ← Back to issue
            </Link>

            <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="text-gold flex items-center gap-1">
                <Star className="w-3 h-3 fill-gold" /> Article {post.number} / {String(posts.length).padStart(2, "0")}
              </span>
              <span>·</span>
              <span>{post.category}</span>
            </div>

            <h1 className="font-display font-semibold text-4xl md:text-6xl leading-[1.05] tracking-tight mt-6 text-balance">
              {post.title}
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty font-display italic">
              {post.dek}
            </p>

            <div className="mt-8 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        {post.hero && (
          <div className="border-b border-rule bg-card">
            <div className="max-w-5xl mx-auto px-6 py-10">
              <figure className="overflow-hidden rounded-lg border border-rule bg-paper">
                <img
                  src={post.hero}
                  alt={post.title}
                  width={1600}
                  height={896}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto block"
                />
              </figure>
            </div>
          </div>
        )}

        {/* Body */}
        <article className="max-w-3xl mx-auto px-6 py-16 prose-editorial">
          {children}
        </article>

        {/* Pager */}
        <div className="max-w-3xl mx-auto px-6 pb-16">
          <div className="double-rule pt-8 grid grid-cols-2 gap-6">
            {prev ? (
              <Link to="/blog/$slug" params={{ slug: prev.slug }} className="group">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">← Previous</div>
                <div className="font-display text-lg font-semibold leading-tight group-hover:text-gold transition-colors">{prev.title}</div>
              </Link>
            ) : <div />}
            {next ? (
              <Link to="/blog/$slug" params={{ slug: next.slug }} className="group text-right">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Next →</div>
                <div className="font-display text-lg font-semibold leading-tight group-hover:text-gold transition-colors">{next.title}</div>
              </Link>
            ) : <div />}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto px-6 pb-16">
          <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer"
             className="btn-press block bg-ink text-paper p-8 rounded-lg group hover:bg-gold hover:text-ink">

            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold group-hover:text-ink/60 mb-2">Try it</div>
            <div className="flex items-end justify-between gap-4">
              <div className="font-display text-2xl md:text-3xl font-semibold leading-tight">
                Open StarStore in Telegram
              </div>
              <ArrowUpRight className="w-8 h-8 shrink-0 group-hover:rotate-45 transition-transform" />
            </div>
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
