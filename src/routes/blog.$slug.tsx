import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/ArticleLayout";
import { getPost, SITE_URL } from "@/lib/posts";
import { articles } from "@/lib/articles";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return {};
    const ogImage = post.hero ? `${SITE_URL}${post.hero}` : undefined;
    const url = `${SITE_URL}/blog/${post.slug}`;

    const articleSchema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.dek,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      datePublished: post.date,
      dateModified: post.date,
      articleSection: post.category,
      author: { "@type": "Organization", name: "StarStore", url: "https://starstore.app" },
      publisher: {
        "@type": "Organization",
        name: "StarStore",
        url: "https://starstore.app",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
      },
      ...(ogImage ? { image: [ogImage] } : {}),
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Insights", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: post.category },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    };

    const faqByPost: Record<string, { q: string; a: string }[]> = {
      "how-to-cash-out-telegram-stars": [
        { q: "How do I cash out Telegram Stars?", a: "Open @TgStarStore_bot in Telegram, launch the Mini App, go to Sell, enter the amount of Stars (50 minimum, 80,000 maximum), paste your USDT TON-network wallet address, and confirm. After the 21-day holding window, USDT is sent to your wallet." },
        { q: "Why is there a 21-day hold on selling Stars?", a: "Stars are purchased through third-party payment rails that can be reversed by banks or providers days or weeks later. The 21-day window mirrors Telegram's own Stars-revenue window and protects against chargebacks, which keeps payouts reliable and our fees low." },
        { q: "Can I receive USDT on TRC-20 instead of TON?", a: "Yes, but you'll need to cover the network transaction cost yourself, which usually eats into a small payout. The default and cheapest path is USDT on the TON network." },
        { q: "What happens if I send the wrong wallet address?", a: "Crypto transactions cannot be reversed. Always paste and verify your wallet address before confirming the order." },
      ],
      "starstore-knowledge-base": [
        { q: "What is the minimum and maximum order for buying Stars?", a: "You can buy from 15 Stars up to 1,000,000 Stars per order. Orders under 50 Stars are account-based and can only be delivered to your own Telegram account; orders of 50 Stars and above can be sent to any Telegram username as a gift." },
        { q: "How does the StarStore referral program work?", a: "You earn 0.5 USDT for every referred user who becomes active — defined as buying at least 100 Stars cumulatively, selling at least 100 Stars, or buying any Telegram Premium plan. Bonuses are credited instantly when the target is reached, including for sell orders." },
        { q: "What is the minimum referral withdrawal?", a: "0.5 USDT, paid out to TON or TRC-20 USDT." },
        { q: "What is StarStore's refund policy?", a: "Refunds are issued for overcharges, internal server errors, or technical issues on our side. They are not available for Telegram API issues, unrelated external problems, or change of mind. Send /paysupport in the bot to request one. Limit: one refund request per user per month." },
      ],
      "telegram-stars-complete-guide": [
        { q: "What are Telegram Stars?", a: "Telegram Stars are Telegram's in-platform digital currency, used to pay for digital goods and services across bots, channels, and Mini Apps." },
        { q: "How do I buy Telegram Stars?", a: "Open the StarStore Mini App via @TgStarStore_bot, pick a Stars package, pay in TON or USDT, and the Stars arrive in your Telegram account instantly." },
        { q: "Can I convert Telegram Stars to real money?", a: "Yes — through StarStore. You can sell earned Stars and receive USDT on the TON network after a 21-day holding window." },
      ],
    };
    const faq = faqByPost[post.slug];
    const faqSchema = faq && {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    return {
      meta: [
        { title: `${post.title} — StarStore Insights` },
        { name: "description", content: post.dek },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.dek },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "StarStore Insights" },
        { property: "article:section", content: post.category },
        { property: "article:published_time", content: post.date },
        {
          name: "keywords",
          content: [
            post.title,
            post.category,
            "StarStore",
            "StarStore blog",
            "StarStore news",
            "StarStore Ambassadors",
            "Telegram Stars",
            "buy Telegram Stars",
            "sell Telegram Stars",
            "Telegram Stars to USDT",
            "Telegram Stars to TON",
            "stars to TON",
            "stars to USDT",
            "convert Telegram Stars",
            "convert stars to USDT",
            "how to cash out Telegram Stars",
            "how to withdraw Telegram Stars",
            "Telegram Stars withdrawal",
            "Telegram Premium",
            "Telegram Mini App",
            "TgStarStore_bot",
            "starstore.app",
          ].join(", "),
        },
        ...(ogImage
          ? [
              { property: "og:image", content: ogImage },
              { property: "og:image:width", content: "1600" },
              { property: "og:image:height", content: "896" },
              { property: "og:image:alt", content: post.title },
              { name: "twitter:card", content: "summary_large_image" },
              { name: "twitter:title", content: post.title },
              { name: "twitter:description", content: post.dek },
              { name: "twitter:image", content: ogImage },
            ]
          : []),
      ],
      links: [
        { rel: "canonical", href: url },
        ...(post.hero
          ? [{ rel: "preload", as: "image", href: post.hero, fetchpriority: "high" } as const]
          : []),
      ],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(articleSchema) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
        ...(faqSchema
          ? [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }]
          : []),
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="font-display text-6xl text-gold">404</div>
        <p className="mt-2 text-muted-foreground">Article not found</p>
        <a href="/" className="mt-4 inline-block underline">Back to issue</a>
      </div>
    </div>
  ),
});

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const Body = articles[post.slug];
  return (
    <ArticleLayout post={post}>
      <Body />
    </ArticleLayout>
  );
}
