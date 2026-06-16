import type { ComponentType } from "react";

const UsdtAndUsdtOnTon = () => (
  <>
    <p>
      If you've used <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a> to sell
      Telegram Stars or withdraw your StarStore referral earnings, you've already received{" "}
      <strong>USDT on TON</strong>: the world's most-used stablecoin, running on Telegram's own blockchain.
      This guide explains exactly what USDT is, what the TON network is, and why that combination matters
      for anyone using StarStore.
    </p>

    <div className="my-8 rounded-lg overflow-hidden border border-rule">
      <div className="relative w-full" style={{paddingBottom: "56.25%"}}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/ei0ObpQh5wc?controls=1&rel=0&modestbranding=1"
          title="What is USDT on TON? Explained"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <p className="text-center text-sm text-muted-foreground py-3 font-mono">
        Watch on YouTube:{" "}
        <a
          href="https://youtu.be/ei0ObpQh5wc"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-gold"
        >
          youtu.be/ei0ObpQh5wc
        </a>
      </p>
    </div>

    <h2>What is USDT?</h2>
    <p>
      <strong>USDT</strong> (also called Tether USD) is a <em>stablecoin</em>: a type of cryptocurrency
      whose value is designed to stay tied to the US dollar. It was launched in 2014 by Tether Limited and
      is now the most widely used stablecoin in the world by trading volume and market capitalization.
    </p>
    <p>
      Unlike Bitcoin or Toncoin, which can change in value rapidly, USDT is built to maintain a stable
      value by being pegged to the US dollar at a 1:1 ratio. Each USDT token is backed by Tether's reserves,
      which include cash, cash equivalents, and other assets held by Tether Limited. That stability is
      exactly why StarStore uses USDT to pay out sellers and referral earners: you receive a digital dollar,
      not a volatile asset.
    </p>
    <p>
      USDT does not have its own blockchain. Instead, it operates on top of established networks like
      Ethereum, TRON, and now <strong>The Open Network (TON)</strong>: each version of USDT is the same
      stablecoin but with different fee structures, speeds, and wallet requirements depending on which
      network you use.
    </p>

    <h2>Why does USDT matter?</h2>
    <ul>
      <li>
        <strong>Stable value by design:</strong> USDT is pegged to the US dollar, so its purchasing power
        stays consistent regardless of what the broader crypto market is doing. It's not immune to all
        risk, but it is far more stable than non-pegged cryptocurrencies.
      </li>
      <li>
        <strong>Global reach:</strong> anyone with a compatible crypto wallet can receive USDT; no
        traditional bank account is needed.
      </li>
      <li>
        <strong>Fast settlement:</strong> on the right network, USDT moves in seconds rather than days.
      </li>
      <li>
        <strong>StarStore payouts:</strong> when you{" "}
        <a href="/blog/how-to-cash-out-telegram-stars">sell Telegram Stars</a> or earn through the{" "}
        <a href="/blog/how-to-earn-money-on-telegram">StarStore referral program</a>, you are paid in
        USDT: real digital dollars you can spend, trade, or convert to local currency.
      </li>
    </ul>

    <h2>What is the TON network?</h2>
    <p>
      <strong>TON</strong> (The Open Network) is a fast, scalable, Layer-1 blockchain originally designed
      by the Telegram team and now developed by the independent TON Foundation. It is the blockchain
      natively integrated into Telegram: the same messaging app used by over 900 million people every month.
    </p>
    <p>
      TON uses a proof-of-stake consensus mechanism and a unique "workchains" architecture that allows it
      to process thousands of transactions simultaneously without slowing down. Its key practical strengths
      are <strong>speed</strong> (transactions confirm in seconds), <strong>low on-chain fees</strong>, and
      its <strong>direct integration with Telegram</strong>: users can access a TON wallet right inside the
      app without installing anything extra.
    </p>

    <h2>What is USDT on TON?</h2>
    <p>
      In April 2024, Tether launched a <strong>native USDT token directly on the TON blockchain</strong>.
      This is commonly called <em>USDT on TON</em> or <em>USDt-TON</em>. It is the same Tether stablecoin,
      pegged to the US dollar, but it lives on the TON network rather than on Ethereum or TRON.
    </p>
    <p>
      Because it is native to TON, it plugs straight into Telegram's built-in <strong>@wallet</strong> bot.
      That means you can send USDT to any Telegram contact <strong>instantly and with no fee</strong>:
      just like sending a message or a sticker. This was described by TON Foundation as a major step toward
      Satoshi Nakamoto's original vision of "a purely peer-to-peer electronic cash without an intermediary."
    </p>

    <h2>USDT on TON vs. other versions of USDT</h2>
    <ul>
      <li>
        <strong>USDT on Ethereum (ERC-20):</strong> the oldest and most widely supported version, but
        on-chain gas fees can be significant, especially during periods of high network activity.
      </li>
      <li>
        <strong>USDT on TRON (TRC-20):</strong> cheaper than Ethereum and widely used for exchanges
        and P2P platforms, but it still carries network fees and requires a TRON-compatible wallet.
      </li>
      <li>
        <strong>USDT on TON:</strong> near-zero on-chain fees, instant confirmation, and zero-fee
        transfers between Telegram users via the @wallet bot. TON Foundation has also optimized
        Tether's smart contract to make it significantly cheaper per transaction than other tokens on the
        network. This is the default and recommended network for all StarStore payouts.
      </li>
    </ul>

    <h2>How StarStore uses USDT on TON</h2>
    <p>
      Every payout from{" "}
      <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a>: whether
      from selling Stars or earning referral bonuses, is settled in{" "}
      <strong>USDT on the TON network</strong> by default. Here is why that is the right choice for
      StarStore users:
    </p>
    <ul>
      <li>
        <strong>You keep more of your earnings.</strong> Near-zero gas fees mean almost nothing is lost
        to transaction costs, which is especially important for smaller payouts like a 0.5 USDT referral
        bonus.
      </li>
      <li>
        <strong>Fast delivery.</strong> TON confirmations happen in seconds. Your payout lands in your
        wallet quickly after the 21-day Stars holding window closes.
      </li>
      <li>
        <strong>No extra apps needed.</strong> Your TON wallet address works natively inside Telegram;
        no separate browser wallet or extension is required.
      </li>
      <li>
        <strong>Stable purchasing power.</strong> Because USDT is pegged to the US dollar, you know
        roughly what your Stars or referral earnings are worth in dollar terms when they arrive in your
        wallet.
      </li>
    </ul>

    <h2>How to receive USDT on TON: step by step</h2>
    <ol>
      <li>
        Open the <strong>@wallet</strong> bot in Telegram (or use Tonkeeper, MyTonWallet, or any
        TON-compatible wallet).
      </li>
      <li>
        Find your <strong>TON wallet address</strong>: it starts with <code>UQ...</code> or{" "}
        <code>EQ...</code> and is a long string of letters and numbers.
      </li>
      <li>
        Copy that address and paste it into the withdrawal field inside{" "}
        <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a> when
        selling Stars or withdrawing referral earnings.
      </li>
      <li>
        After your payout is processed, open your wallet and look for the <strong>USDT</strong> token:
        it will appear alongside your TON balance.
      </li>
    </ol>
    <p>
      <strong>Important:</strong> always double-check your wallet address before confirming. Blockchain
      transactions cannot be reversed once submitted.
    </p>

    <h2>Frequently asked questions</h2>

    <h3>Is USDT on TON the same as regular USDT?</h3>
    <p>
      Yes: same issuer (Tether Limited), same dollar peg, different blockchain. The TON version is faster
      and cheaper to send than the Ethereum or TRON versions, and it works natively inside Telegram.
    </p>

    <h3>Do I need a special wallet?</h3>
    <p>
      Any TON-compatible wallet works: the built-in Telegram <strong>@wallet</strong> bot, Tonkeeper,
      MyTonWallet, or any other wallet that supports TON tokens (also called jettons). No memo or tag
      is required.
    </p>

    <h3>Can I convert USDT on TON to local currency?</h3>
    <p>
      Yes. You can swap or sell USDT on major crypto exchanges like Binance, OKX, or Bybit, or use
      peer-to-peer platforms. The process will vary depending on your country and the platform you choose.
    </p>

    <h3>Why does StarStore pay in USDT on TON and not TRC-20?</h3>
    <p>
      TON is StarStore's default because it has the lowest fees and integrates seamlessly with Telegram
      wallets. TRC-20 USDT is supported but carries a network fee you pay yourself: it is only worth
      selecting if you specifically need TRC-20 for your setup.
    </p>

    <p>
      Ready to receive USDT? Open{" "}
      <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a>, launch
      the StarStore Mini App, and start selling Stars or earning through the referral program. Your
      payouts land in USDT on TON: the fastest, cheapest, and most Telegram-native way to hold digital
      dollars. For full limits and policies, see the{" "}
      <a href="/blog/starstore-knowledge-base">StarStore Knowledge Base</a>.
    </p>
  </>
);

const EarnOnTelegram = () => (
  <>
    <p>
      Looking for a <strong>Telegram side hustle that really pays</strong>? StarStore's referral program is
      one of the simplest ways to <strong>make real cash on Telegram</strong>: no inventory, no upfront
      cost, and no waiting weeks for a payout. You share one link, your friends use the{" "}
      <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a> Mini App,
      and you <strong>earn StarStore</strong> rewards in real USDT.
    </p>

    <h2>What is the StarStore referral program?</h2>
    <p>
      The referral program pays you <strong>0.5 USDT</strong> for every person you invite who becomes an{" "}
      <em>active</em> user. It's a genuine way to earn money on Telegram: you're rewarded in cryptocurrency
      you can withdraw to your own wallet, not points or coupons. Everything is tracked automatically inside{" "}
      <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a>.
    </p>

    <h2>How to earn cash on Telegram: step by step</h2>
    <ol>
      <li>Open <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a> in Telegram and launch the StarStore Mini App.</li>
      <li>Go to the <strong>Referrals</strong> section to grab your unique referral link.</li>
      <li>Share your link with friends, in groups, channels, or on social media.</li>
      <li>When someone joins through your link and becomes active, you instantly earn <strong>0.5 USDT</strong>.</li>
      <li>Watch your referrals and earnings update in real time inside the Mini App.</li>
      <li>Withdraw your balance to TON or TRC-20 USDT once you reach the <strong>0.5 USDT</strong> minimum.</li>
    </ol>

    <h2>When does a referral count?</h2>
    <p>
      A referred user becomes <em>active</em>: and your bonus lands, the moment they do any one of the
      following:
    </p>
    <ul>
      <li>Buy at least <strong>100 Stars</strong> (cumulative across orders), <strong>or</strong></li>
      <li>Sell at least <strong>100 Stars</strong>, <strong>or</strong></li>
      <li>Buy any <strong>Telegram Premium</strong> plan.</li>
    </ul>
    <p>
      Bonuses are credited <strong>instantly</strong> the moment the target is reached, including for sell
      orders. You don't have to wait on any holding period to see your referral earnings.
    </p>

    <h2>Why this is a Telegram side hustle that actually pays</h2>
    <ul>
      <li><strong>Real money:</strong> you're paid in USDT, not in-app credit you can't cash out.</li>
      <li><strong>Zero cost:</strong> getting your link and sharing it is completely free.</li>
      <li><strong>Instant rewards:</strong> bonuses hit your balance the second a referral becomes active.</li>
      <li><strong>Low withdrawal threshold:</strong> cash out from just <strong>0.5 USDT</strong>.</li>
      <li><strong>Scales with you:</strong> the more active users you bring in, the more you earn.</li>
    </ul>

    <h2>Tips to maximize your StarStore earnings</h2>
    <ul>
      <li>Share where people already use Telegram Stars: gaming groups, creator channels, and crypto communities convert best.</li>
      <li>Explain the value: people can <a href="/blog/how-to-cash-out-telegram-stars">cash out Telegram Stars</a> and buy Stars or Premium at great rates.</li>
      <li>Pin your link in groups you run and add it to your bio.</li>
      <li>Only referrals that come through <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a> with your link are tracked; off-bot shares don't count.</li>
    </ul>

    <p>
      Ready to start earning? Open{" "}
      <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a>, launch the Mini App, and
      grab your referral link. For full limits and policies, see the{" "}
      <a href="/blog/starstore-knowledge-base">StarStore Knowledge Base</a>.
    </p>
  </>
);


const SellStarsToTon = () => (
  <>
    <p>
      Telegram Stars are easy to earn but hard to spend outside Telegram. StarStore fixes that: you can
      sell, convert, and withdraw your Telegram Stars to TON (or USDT on the TON network) in minutes, and
      the entire process happens inside the{" "}
      <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a> Telegram
      Mini App, not on any website.
    </p>

    <h2>Where you sell: the <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a> Mini App</h2>
    <p>
      There is no web form for selling Stars. Everything: buying, selling, converting Stars to TON,
      referrals, and withdrawals, is handled inside Telegram through{" "}
      <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a>. Open the
      bot in Telegram, tap <strong>Start</strong>, and launch the StarStore Mini App. This keeps your
      account, balances, and payouts tied to your Telegram identity and protected by Telegram's own security.
    </p>

    <h2>How to sell Telegram Stars for TON: step by step</h2>
    <ol>
      <li>Open <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a> in Telegram and launch the Mini App.</li>
      <li>Go to the <strong>Sell</strong> page.</li>
      <li>Enter the number of Stars you want to convert (<strong>50 minimum, 80,000 maximum</strong> per transaction).</li>
      <li>Choose your payout: <strong>USDT on the TON network</strong> (default and cheapest); TRC-20 is also supported if you prefer.</li>
      <li>Paste your <strong>TON-network wallet address</strong>. No memo or tag is required.</li>
      <li>Review the live rate shown in the Mini App, then confirm. You'll get an order ID instantly.</li>
      <li>Your Stars enter a <strong>21-day holding window</strong>. After it clears, your payout is sent to your wallet.</li>
      <li>Send your order ID to the bot at any time to check the current status.</li>
    </ol>

    <h2>Converting Stars to TON vs. USDT</h2>
    <p>
      "Selling," "converting," "cashing out," and "withdrawing" Stars all describe the same flow in
      StarStore: you hand over Stars and receive crypto on the TON network. Most users settle in{" "}
      <strong>USDT on TON</strong> because it provides a stable value and is the cheapest path. If you
      specifically want native <strong>TON</strong> or TRC-20 USDT, you can request it; just note that
      off-TON networks may carry a transaction cost you cover yourself, which eats into small payouts.
    </p>

    <h2>Why is there a 21-day holding window?</h2>
    <p>
      Stars are bought through third-party payment rails (cards, wallets, processors) that can reverse a
      charge days or weeks later. The 21-day hold mirrors Telegram's own Stars-revenue window and protects
      against chargebacks; which is exactly what keeps StarStore's payouts reliable and our fees low.
    </p>

    <h2>Limits and requirements at a glance</h2>
    <ul>
      <li><strong>Minimum sale:</strong> 50 Stars per transaction.</li>
      <li><strong>Maximum sale:</strong> 80,000 Stars per transaction.</li>
      <li><strong>Payout networks:</strong> USDT on TON (default); TON; or TRC-20 USDT.</li>
      <li><strong>Wallet:</strong> a valid TON-network address (no memo or tag needed).</li>
      <li><strong>Holding period:</strong> 21 days before settlement.</li>
      <li><strong>Where:</strong> exclusively inside <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a>.</li>
    </ul>

    <h2>Common mistakes to avoid</h2>
    <ul>
      <li><strong>Wrong wallet address:</strong> crypto transfers can't be reversed; always paste and verify before confirming.</li>
      <li><strong>Wrong network:</strong> a TON wallet address is for the TON network; don't paste an Ethereum or BSC address.</li>
      <li><strong>Off-bot deals:</strong> only transactions through <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a> are tracked and protected.</li>
    </ul>

    <p>
      Ready to convert your Stars? Open{" "}
      <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a>, launch
      the Mini App, and head to the Sell page. For limits, the referral program, and refund policy, see the{" "}
      <a href="/blog/starstore-knowledge-base">StarStore Knowledge Base</a>.
    </p>
  </>
);


const Announcement = () => (
  <>
    <p>
      Today marks a milestone for our community: <strong>starstore.app</strong> is now the official home of
      StarStore. The old <code>starstore.site</code> address is being retired in favor of a domain that
      better reflects what we are: a Telegram Mini App and a real product, not just a website.
    </p>

    <h2>Why .app?</h2>
    <p>
      The <code>.app</code> top-level domain is HTTPS-only at the registry level, which means every visit
      is encrypted by default. For a platform that handles Telegram Stars, USDT withdrawals, and ambassador
      payouts, that baseline of trust matters. It also makes our identity unambiguous: StarStore is an
      application you use, not a directory you read.
    </p>

    <h2>What changes for you</h2>
    <ul>
      <li><strong>New URL:</strong> bookmark <a href="https://starstore.app">starstore.app</a>. Old <code>starstore.site</code> links will be redirected during the transition window.</li>
      <li><strong>Same Telegram bot:</strong> <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a> is unchanged. Open the Mini App from the bot exactly as before.</li>
      <li><strong>Same accounts and balances:</strong> your history, referrals, ambassador status, and pending payouts carry over. Nothing to re-register.</li>
    </ul>

    <h2>What stays the same</h2>
    <p>
      Our pricing, the 21-day holding window for Stars sales, the 0.5 USDT minimum referral payout, and
      the ambassador monthly auto-withdraw on day 1 are all unchanged. The only thing different is the
      address bar.
    </p>

    <h3>Action recommended</h3>
    <p>
      Update any saved bookmarks to <strong>starstore.app</strong>. If you operate a channel or community
      that links to us, please update those links: it helps with SEO and ensures your audience lands on
      the canonical domain.
    </p>

    <p>
      Thank you for being part of StarStore. The product, the team, and the mission are the same: only
      the address has grown up.
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
      <li>Open <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a> in Telegram and launch the Mini App.</li>
      <li>Go to the <strong>Sell</strong> page.</li>
      <li>Enter the number of Stars you want to sell (50 minimum, 80,000 maximum per transaction).</li>
      <li>Paste your <strong>USDT TON-network</strong> wallet address. No memo or tag is needed.</li>
      <li>Confirm the order. You will receive an order ID immediately.</li>
      <li>Stars are held for 21 days for fraud protection. After the holding window, USDT is sent to your wallet.</li>
      <li>Send your order ID to the bot at any time to check the current status.</li>
    </ol>

    <h2>Why the 21-day hold?</h2>
    <p>
      The hold exists because of chargebacks. Stars are purchased through payment rails we don't control:
      cards, wallets, and other third-party processors, and those payments can be reversed days or weeks
      later by banks or providers. We can't fight a reversal once it's issued, so we wait out the window
      Telegram itself uses for Stars revenue. It keeps payouts reliable and our fees low.
    </p>

    <h2>Common questions</h2>
    <h3>What rate do I get?</h3>
    <p>Live rates are shown in the Mini App before you confirm. They float with market USDT and Stars demand.</p>

    <h3>Can I use TRON or TRC-20 USDT?</h3>
    <p>
      Yes; but you'll need to cover the network transaction cost yourself, which usually eats into a small
      payout. We don't recommend it unless you specifically need TRC-20. The default and cheapest path is
      USDT on TON, which is what we settle on by default.
    </p>

    <h3>What if I send the wrong wallet?</h3>
    <p>Crypto transactions cannot be reversed. Always paste and verify your address before confirming.</p>

    <p>
      For limits, holding rules, and referral and refund policy details, see the{" "}
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
      via <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a>.
    </p>

    <h2>Star packages</h2>
    <p>
      We sell Stars from a minimum of <strong>15</strong> all the way up to <strong>1,000,000</strong> per
      order. A couple of things to know about the small end of the range:
    </p>
    <ul>
      <li>
        Orders <strong>under 50 Stars</strong> are <em>account-based</em>: they can only be delivered to
        your own Telegram account, not gifted to someone else.
      </li>
      <li>
        Orders of <strong>50 Stars and above</strong> can be sent to any Telegram username; yes, you can
        buy Stars for someone else as a gift.
      </li>
      <li>
        Buying for your own account also works at the small tiers, so the cheapest entry point (15 Stars)
        is fully available to you.
      </li>
    </ul>
    <p>
      Pricing is dynamic and shown live in the <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">Mini App</a>; same
      goes for Telegram Premium (3, 6, and 12-month plans).
    </p>

    <h2>Selling Stars</h2>
    <p>
      To start a sell order, open <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a> and launch the
      Mini App.
    </p>
    <ul>
      <li>Minimum: 50 Stars per transaction.</li>
      <li>Maximum: 80,000 Stars per transaction.</li>
      <li>Wallet: USDT on the TON network (no memo or tag).</li>
      <li>Holding period: 21 days before USDT settlement.</li>
    </ul>

    <h2>Referral program</h2>
    <p>
      Open <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a> to get your referral link and track
      invited users in real time.
    </p>
    <p>Earn 0.5 USDT for every referred user who becomes <em>active</em>. A referral becomes active when they:</p>
    <ul>
      <li>Buy at least 100 Stars (cumulative across orders), <strong>or</strong></li>
      <li>Sell at least 100 Stars, <strong>or</strong></li>
      <li>Buy any Telegram Premium plan.</li>
    </ul>
    <p>
      Referral bonuses are credited <strong>instantly</strong> the moment the target is reached, including
      for sell orders. There's no waiting on the 21-day hold to see your bonus anymore.
    </p>
    <p>
      Referrals must come through <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a> with your
      link; off-bot transactions are not tracked. Minimum withdrawal is 0.5 USDT to TON or TRC-20 USDT.
    </p>

    <h2>Refund policy</h2>
    <p>
      Refunds are issued when a service charges more than expected, when an internal server error affects a
      transaction, or for technical issues on our side. Refunds are not available for issues with Telegram's
      native API, unrelated external problems, or change of mind. Type <code>/paysupport</code> in the bot
      to request one. Limit: one refund request per user per month.
    </p>
  </>
);

const StarsGuide = () => (
  <>
    <p>
      Telegram Stars are Telegram's in-platform digital currency. They can be sent to creators, used to
      unlock paid content, gifted to friends, and: through services like StarStore: converted to USDT.
    </p>

    <h2>What are Telegram Stars?</h2>
    <p>
      Stars are a unit of value inside the Telegram ecosystem, used to pay for digital goods and services
      across bots, channels, and Mini Apps.
    </p>

    <h2>How to buy Stars</h2>
    <ol>
      <li>Open <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a> in Telegram and launch the StarStore Mini App.</li>
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
      <li><strong>Sell</strong> earned Stars for USDT or TON in the <a href="https://t.me/TgStarStore_bot" target="_blank" rel="noreferrer">@TgStarStore_bot</a> Mini App (see the <a href="/blog/how-to-cash-out-telegram-stars">cash-out walkthrough</a>).</li>
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
  "what-is-usdt-and-usdt-on-ton": UsdtAndUsdtOnTon,
  "how-to-earn-money-on-telegram": EarnOnTelegram,
  "sell-telegram-stars-for-ton": SellStarsToTon,
  "starstore-now-on-starstore-app": Announcement,
  "how-to-cash-out-telegram-stars": CashOut,
  "starstore-knowledge-base": KnowledgeBase,
  "telegram-stars-complete-guide": StarsGuide,
};
