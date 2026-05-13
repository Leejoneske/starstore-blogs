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
    return {
      meta: [
        { title: `${post.title} — StarStore Insights` },
        { name: "description", content: post.dek },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.dek },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
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
