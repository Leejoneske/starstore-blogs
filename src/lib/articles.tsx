import type { ComponentType } from "react";

const SellStarsToTon = () => (
  <>
    <p>
      Telegram Stars are easy to earn but hard to spend outside Telegram. StarStore fixes that: you can{" "}
      <strong>sell, convert, and withdraw your Telegram Stars to TON</strong> (or USDT on the TON network) in
      minutes — and the entire process happens inside the{" "}
      <a href="https://t.me/TgStarStore_bot">@TgStarStore_bot</a> Telegram Mini App, not on any website.
    </p>

    <h2>Where you sell: the @TgStarStore_bot Mini App</h2>
    <p>
      There is no web form for selling Stars. Everything — buying, selling, converting Stars to TON,
      referrals, and withdrawals — is handled inside Telegram through{" "}
      <a href="https://t.me/TgStarStore_bot">@TgStarStore_bot</a>. Open the bot in Telegram, tap{" "}
      <strong>Start</strong>, and launch the StarStore Mini App. This keeps your account, balances, and
      payouts tied to your Telegram identity and protected by Telegram's own security.
    </p>

    <h2>How to sell Telegram Stars for TON — step by step</h2>
    <ol>
      <li>Open <a href="https://t.me/TgStarStore_bot">@TgStarStore_bot</a> in Telegram and launch the Mini App.</li>
      <li>Go to the <strong>Sell</strong> page.</li>
      <li>Enter the number of Stars you want to convert (<strong>50 minimum, 80,000 maximum</strong> per transaction).</li>
      <li>Choose your payout: <strong>USDT on the TON network</strong> (default and cheapest) — TRC-20 is also supported if you prefer.</li>
      <li>Paste your <strong>TON-network wallet address</strong>. No memo or tag is required.</li>
      <li>Review the live rate shown in the Mini App, then confirm. You'll get an order ID instantly.</li>
      <li>Your Stars enter a <strong>21-day holding window</strong>. After it clears, your payout is sent to your wallet.</li>
      <li>Send your order ID to the bot at any time to check the current status.</li>
    </ol>

    <h2>Converting Stars to TON vs. USDT</h2>
    <p>
      "Selling," "converting," "cashing out," and "withdrawing" Stars all describe the same flow in StarStore:
      you hand over Stars and receive crypto on the TON network. Most users settle in{" "}
      <strong>USDT on TON</strong> because it's a stable value and the cheapest path. If you specifically want
      native <strong>TON</strong> or TRC-20 USDT, you can request it — just note that off-TON networks may
      carry a transaction cost you cover yourself, which eats into small payouts.
    </p>

    <h2>Why is there a 21-day holding window?</h2>
    <p>
      Stars are bought through third-party payment rails (cards, wallets, processors) that can reverse a
      charge days or weeks later. The 21-day hold mirrors Telegram's own Stars-revenue window and protects
      against chargebacks — which is exactly what keeps StarStore's payouts reliable and our fees low.
    </p>

    <h2>Limits & requirements at a glance</h2>
    <ul>
      <li><strong>Minimum sale:</strong> 50 Stars per transaction.</li>
      <li><strong>Maximum sale:</strong> 80,000 Stars per transaction.</li>
      <li><strong>Payout networks:</strong> USDT on TON (default), TON, or TRC-20 USDT.</li>
      <li><strong>Wallet:</strong> a valid TON-network address (no memo/tag needed).</li>
      <li><strong>Holding period:</strong> 21 days before settlement.</li>
      <li><strong>Where:</strong> exclusively inside <a href="https://t.me/TgStarStore_bot">@TgStarStore_bot</a>.</li>
    </ul>

    <h2>Common mistakes to avoid</h2>
    <ul>
      <li><strong>Wrong wallet address:</strong> crypto transfers can't be reversed — always paste and verify before confirming.</li>
      <li><strong>Wrong network:</strong> a TON wallet address is for the TON network; don't paste an Ethereum or BSC address.</li>
      <li><strong>Off-bot deals:</strong> only transactions through <a href="https://t.me/TgStarStore_bot">@TgStarStore_bot</a> are tracked and protected.</li>
    </ul>

    <p>
      Ready to convert your Stars? Open{" "}
      <a href="https://t.me/TgStarStore_bot">@TgStarStore_bot</a>, launch the Mini App, and head to the Sell
      page. For limits, the referral program, and refund policy, see the{" "}
      <a href="/blog/starstore-knowledge-base">StarStore Knowledge Base</a>.
    </p>
  </>
);



const Announcement = () => (
  <>
    <p>
      Today marks a milestone for our community: <strong>starstore.app</strong> is now the official home of
      StarStore. The old <code>starstore.site</code> address is being retired in favor of a domain that better
      reflects what we are — a Telegram Mini App and a real product, not just a website.
    </p>

    <h2>Why .app?</h2>
    <p>
      The <code>.app</code> top-level domain is HTTPS-only at the registry level, which means every visit is
      encrypted by default. For a platform that handles Telegram Stars, USDT withdrawals, and ambassador
      payouts, that baseline of trust matters. It also makes our identity unambiguous: StarStore is an
      application you use, not a directory you read.
    </p>

    <h2>What changes for you</h2>
    <ul>
      <li><strong>New URL:</strong> bookmark <a href="https://starstore.app">starstore.app</a>. Old <code>starstore.site</code> links will be redirected during the transition window.</li>
      <li><strong>Same Telegram bot:</strong> <code>@TgStarStore_bot</code> is unchanged. Open the Mini App from the bot exactly as before.</li>
      <li><strong>Same accounts & balances:</strong> your history, referrals, ambassador status, and pending payouts carry over. Nothing to re-register.</li>
    </ul>

    <h2>What stays the same</h2>
    <p>
      Our pricing, the 21-day holding window for Stars sales, the 0.5 USDT minimum referral payout, and the
      ambassador monthly auto-withdraw on day 1 are all unchanged. The only thing different is the address bar.
    </p>

    <h3>Action recommended</h3>
    <p>
      Update any saved bookmarks to <strong>starstore.app</strong>. If you operate a channel or community that
      links to us, please update those links — it helps with SEO and ensures your audience lands on the
      canonical domain.
    </p>

    <p>
      Thank you for being part of StarStore. The product, the team, and the mission are the same — only the
      address has grown up.
    </p>
  </>
);

const CashOut = () => (
  <>
    <p>
      Telegram doesn't offer a simple, in-app way to turn your Stars into spendable money. StarStore fills
      that gap: we buy your Stars directly and pay you in USDT on the TON network, usually within hours of
      admin approval.
    </p>

    <h2>Step-by-step: selling your Stars</h2>
    <ol>
      <li>Open <a href="https://t.me/TgStarStore_bot">@TgStarStore_bot</a> in Telegram and launch the Mini App.</li>
      <li>Go to the <strong>Sell</strong> page.</li>
      <li>Enter the number of Stars you want to sell (50 minimum, 80,000 maximum per transaction).</li>
      <li>Paste your <strong>USDT TON-network</strong> wallet address. No memo or tag is needed.</li>
      <li>Confirm the order. You will receive an order ID immediately.</li>
      <li>Stars are held for 21 days for fraud protection. After the holding window, USDT is sent to your wallet.</li>
      <li>Send your order ID to the bot at any time to check the current status.</li>
    </ol>

    <h2>Why the 21-day hold?</h2>
    <p>
      The hold exists because of chargebacks. Stars are purchased through payment rails we don't control —
      cards, wallets, and other third-party processors — and those payments can be reversed days or weeks
      later by banks or providers. We can't fight a reversal once it's issued, so we wait out the window
      Telegram itself uses for Stars revenue. It keeps payouts reliable and our fees low.
    </p>

    <h2>Common questions</h2>
    <h3>What rate do I get?</h3>
    <p>Live rates are shown in the Mini App before you confirm. They float with market USDT/Stars demand.</p>

    <h3>Can I use TRON / TRC-20 USDT?</h3>
    <p>
      Yes — but you'll need to cover the network transaction cost yourself, which usually eats into a small
      payout. We don't recommend it unless you specifically need TRC-20. The default and cheapest path is
      USDT on TON, which is what we settle on by default.
    </p>

    <h3>What if I send the wrong wallet?</h3>
    <p>Crypto transactions cannot be reversed. Always paste-and-verify your address before confirming.</p>

    <p>
      For limits, holding rules, and referral/refund policy details, see the{" "}
      <a href="/blog/starstore-knowledge-base">StarStore Knowledge Base</a>.
    </p>
  </>
);

const KnowledgeBase = () => (
  <>
    <h2>About StarStore</h2>
    <p>
      StarStore is a Telegram Mini App launched on December 4, 2024 that lets users buy and sell Telegram
      Stars and Telegram Premium subscriptions, with instant USDT settlement on supported flows. Access is
      via <code>@TgStarStore_bot</code>.
    </p>

    <h2>Star packages</h2>
    <p>
      We sell Stars from a minimum of <strong>15</strong> all the way up to <strong>1,000,000</strong> per
      order. A couple of things to know about the small end of the range:
    </p>
    <ul>
      <li>
        Orders <strong>under 50 Stars</strong> are <em>account-based</em> — they can only be delivered to
        your own Telegram account, not gifted to someone else.
      </li>
      <li>
        Orders of <strong>50 Stars and above</strong> can be sent to any Telegram username — yes, you can
        buy Stars for someone else as a gift.
      </li>
      <li>
        Buying for your own account also works at the small tiers, so the cheapest entry point (15 Stars)
        is fully available to you.
      </li>
    </ul>
    <p>
      Pricing is dynamic and shown live in the <a href="https://t.me/TgStarStore_bot">Mini App</a> — same
      goes for Telegram Premium (3, 6, and 12-month plans).
    </p>

    <h2>Selling Stars</h2>
    <p>
      To start a sell order, open <a href="https://t.me/TgStarStore_bot">@TgStarStore_bot</a> and launch the
      Mini App.
    </p>
    <ul>
      <li>Minimum: 50 Stars per transaction.</li>
      <li>Maximum: 80,000 Stars per transaction.</li>
      <li>Wallet: USDT on the TON network (no memo/tag).</li>
      <li>Holding period: 21 days before USDT settlement.</li>
    </ul>

    <h2>Referral program</h2>
    <p>
      Open <a href="https://t.me/TgStarStore_bot">@TgStarStore_bot</a> to get your referral link and track
      invited users in real time.
    </p>
    <p>Earn 0.5 USDT for every referred user who becomes <em>active</em>. A referral becomes active when they:</p>
    <ul>
      <li>Buy at least 100 Stars (cumulative across orders), <strong>or</strong></li>
      <li>Sell at least 100 Stars, <strong>or</strong></li>
      <li>Buy any Telegram Premium plan.</li>
    </ul>
    <p>
      Referral bonuses are credited <strong>instantly</strong> the moment the target is reached — including
      for sell orders. There's no waiting on the 21-day hold to see your bonus anymore.
    </p>
    <p>
      Referrals must come through <code>@TgStarStore_bot</code> with your link — off-bot transactions are not
      tracked. Minimum withdrawal is 0.5 USDT to TON or TRC-20 USDT.
    </p>

    <h2>Refund policy</h2>
    <p>
      Refunds are issued when a service charges more than expected, when an internal server error affects a
      transaction, or for technical issues on our side. Refunds are not available for issues with Telegram's
      native API, unrelated external problems, or change of mind. Type <code>/paysupport</code> in the bot to
      request one. Limit: one refund request per user per month.
    </p>
  </>
);

const StarsGuide = () => (
  <>
    <p>
      Telegram Stars are Telegram's in-platform digital currency. They can be sent to creators, used to unlock
      paid content, gifted to friends, and — through services like StarStore — converted to USDT.
    </p>

    <h2>What are Telegram Stars?</h2>
    <p>
      Stars are a unit of value inside the Telegram ecosystem, used to pay for digital goods and services
      across bots, channels, and Mini Apps.
    </p>

    <h2>How to buy Stars</h2>
    <ol>
      <li>Open <a href="https://t.me/TgStarStore_bot">@TgStarStore_bot</a> in Telegram and launch the StarStore Mini App.</li>
      <li>Go to the Buy section.</li>
      <li>Pick a package (15, 25, 50, 100, 500, or 1,000 Stars).</li>
      <li>Pay in TON or USDT.</li>
      <li>Stars arrive instantly in your Telegram account.</li>
    </ol>

    <h2>How to use them</h2>
    <ul>
      <li><strong>Support creators</strong> by tipping in channels and bots that accept Stars.</li>
      <li><strong>Unlock premium content</strong> in Mini Apps and paid posts.</li>
      <li><strong>Gift</strong> Stars to other users.</li>
      <li><strong>Sell</strong> earned Stars for USDT or TON in the <a href="https://t.me/TgStarStore_bot">@TgStarStore_bot</a> Mini App (see the <a href="/blog/how-to-cash-out-telegram-stars">cash-out walkthrough</a>).</li>
    </ul>

    <h2>Why people choose StarStore</h2>
    <ul>
      <li>Competitive, transparent pricing.</li>
      <li>Instant delivery on buys.</li>
      <li>Secure TON-network settlement on sells.</li>
      <li>A referral program that pays in real USDT.</li>
    </ul>
  </>
);

export const articles: Record<string, ComponentType> = {
  "sell-telegram-stars-for-ton": SellStarsToTon,
  "starstore-now-on-starstore-app": Announcement,
  "how-to-cash-out-telegram-stars": CashOut,
  "starstore-knowledge-base": KnowledgeBase,
  "telegram-stars-complete-guide": StarsGuide,
};
