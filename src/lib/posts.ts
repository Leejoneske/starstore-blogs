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
    slug: "what-is-usdt-and-usdt-on-ton",
    number: "07",
    title: "What Is USDT and What Is USDT on TON?",
    seoTitle: "What Is USDT and What Is USDT on TON? A Complete Guide",
    dek: "What is USDT on TON? Learn how Tether's stablecoin runs on Telegram's blockchain; instant, near-zero-fee transfers paid out by StarStore.",
    category: "Crypto Guides",
    date: "June 16, 2026",
    readTime: "7 min read",
    hero: "/og/what-is-usdt-and-usdt-on-ton.jpg",
  },
  {
    slug: "how-to-earn-money-on-telegram",
    number: "06",
    title: "How to Earn Real Cash on Telegram: The StarStore Referral Program",
    seoTitle: "How to Earn Money on Telegram: StarStore Referral Program",
    dek: "Earn money on Telegram with the StarStore referral program. Share your link via @TgStarStore_bot and get paid 0.5 USDT per active referral.",
    category: "Earn Money",
    date: "June 10, 2026",
    readTime: "6 min read",
    hero: "/og/how-to-earn-on-telegram.jpg",
  },
  {
    slug: "sell-telegram-stars-for-ton",
    number: "05",
    title: "How to Sell Telegram Stars for TON: Convert and Withdraw Guide",
    seoTitle: "Sell Telegram Stars for TON: Convert and Withdraw Guide",
    dek: "Sell Telegram Stars for TON or USDT inside @TgStarStore_bot. Step-by-step guide: minimum 50 Stars, live rates, and direct payout to your wallet.",
    category: "Selling Stars",
    date: "June 9, 2026",
    readTime: "6 min read",
    hero: "/og/sell-telegram-stars-for-ton.jpg",
  },
  {
    slug: "starstore-now-on-starstore-app",
    number: "01",
    title: "StarStore is Now Officially on starstore.app",
    dek: "StarStore officially moves to starstore.app. Same bot, same balances, same payouts; just a more secure domain. Here's what changes and what doesn't.",
    category: "Announcements",
    date: "May 5, 2026",
    readTime: "4 min read",
    hero: "/og/starstore-now-on-starstore-app.jpg",
  },
  {
    slug: "how-to-cash-out-telegram-stars",
    number: "02",
    title: "How to Cash Out Telegram Stars for Real Money",
    dek: "How to cash out Telegram Stars for real money: sell via @TgStarStore_bot, get paid in USDT on TON, and track your order by ID. Full walkthrough.",
    category: "Selling Stars",
    date: "December 10, 2024",
    readTime: "5 min read",
    hero: "/og/how-to-cash-out-telegram-stars.jpg",
  },
  {
    slug: "starstore-knowledge-base",
    number: "03",
    title: "StarStore Knowledge Base: Buying, Selling, and Referrals",
    dek: "StarStore explained: Star packages from 15 to 1,000,000; sell limits; the 21-day hold; referral program rules; and the full refund policy.",
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
    dek: "Telegram Stars explained: what they are, how to buy them via StarStore, how creators earn them, and how to convert Stars to USDT. Complete guide.",
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
