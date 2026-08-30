import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { APP_URL, AMBASSADOR_URL, BOT_URL, SITE_URL } from "@/lib/posts";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // Page-specific title, description, og:title, og:description, and og:type
      // live on each leaf route. Defining them here too would duplicate the tags
      // in the concatenated head, so the root only holds sitewide defaults.
      { property: "og:site_name", content: "StarStore Insights" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@TgStarStore" },
      { name: "author", content: "StarStore" },
      { name: "application-name", content: "StarStore Insights" },
      // Without max-image-preview:large Google shows only a thumbnail (or no
      // image) in Search and Discover, which is the single biggest CTR lever
      // for an image-led editorial site.
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "theme-color", content: "#faf8f5" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      // Fonts load via <link> (not a CSS @import) so they don't block the
      // stylesheet chain; preconnect shaves a round trip off first paint.
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: "StarStore Insights — RSS",
        href: `${SITE_URL}/rss.xml`,
      },
      {
        rel: "alternate",
        type: "application/atom+xml",
        title: "StarStore Insights — Atom",
        href: `${SITE_URL}/atom.xml`,
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "StarStore Insights",
          alternateName: "blog.starstore.app",
          url: SITE_URL,
          description:
            "Editorial guides and updates on Telegram Stars, USDT payouts on TON, and the StarStore Mini App.",
          inLanguage: "en",
          publisher: {
            "@type": "Organization",
            name: "StarStore",
            url: APP_URL,
            logo: {
              "@type": "ImageObject",
              url: `${SITE_URL}/favicon.png`,
            },
            sameAs: [APP_URL, AMBASSADOR_URL, BOT_URL],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
