export type Post = {
  slug: string;
  number: string;
  title: string;
  seoTitle?: string;
  dek: string;
  category: string;
  date: string;
  readTime: string;
  hero?: string;
};

export const SITE_URL = "https://blog.starstore.app";

export const posts: Post[] = [
  {
    slug: "sell-telegram-stars-for-ton",
    number: "05",
    title: "How to Sell Telegram Stars for TON: Convert & Withdraw Guide",
    seoTitle: "Sell Telegram Stars for TON — Convert & Withdraw Guide",
    dek: "A complete walkthrough for selling, converting, and withdrawing Telegram Stars to TON (and USDT) — done entirely inside the @TgStarStore_bot Telegram Mini App.",
    category: "Selling Stars",
    date: "June 9, 2026",
    readTime: "6 min read",
    hero: "/og/sell-telegram-stars-for-ton.jpg",
  },
  {
    slug: "starstore-now-on-starstore-app",
    number: "01",
    title: "StarStore is Now Officially on starstore.app",
    dek: "A milestone for the community: a new domain, hardened security, and faster ambassador navigation — without changing a single thing about your account.",
    category: "Announcements",
    date: "May 5, 2026",
    readTime: "4 min read",
    hero: "/og/starstore-now-on-starstore-app.jpg",
  },
  {
    slug: "how-to-cash-out-telegram-stars",
    number: "02",
    title: "How to Cash Out Telegram Stars for Real Money",
    dek: "Telegram doesn't let you turn Stars into cash. We do. A step-by-step walkthrough of selling Stars for USDT on the TON network.",
    category: "Selling Stars",
    date: "December 10, 2024",
    readTime: "5 min read",
    hero: "/og/how-to-cash-out-telegram-stars.jpg",
  },
  {
    slug: "starstore-knowledge-base",
    number: "03",
    title: "StarStore Knowledge Base: Buying, Selling, and Referrals",
    dek: "Everything in one place — packages, limits, the 21-day hold, the referral program that pays in real USDT, and our refund policy.",
    category: "Knowledge Base",
    date: "December 6, 2024",
    readTime: "6 min read",
    hero: "/og/starstore-knowledge-base.jpg",
  },
  {
    slug: "telegram-stars-complete-guide",
    number: "04",
    title: "Complete Guide to Telegram Stars: Everything You Need to Know",
    seoTitle: "Complete Guide to Telegram Stars: All You Need to Know",
    dek: "What Stars are, how to buy them, how creators use them, and how to turn earned Stars into spendable USDT.",
    category: "Telegram Guides",
    date: "December 4, 2024",
    readTime: "4 min read",
    hero: "/og/telegram-stars-complete-guide.jpg",
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const getAdjacentPosts = (slug: string) => {
  const i = posts.findIndex((p) => p.slug === slug);
  return { prev: posts[i - 1], next: posts[i + 1] };
};
