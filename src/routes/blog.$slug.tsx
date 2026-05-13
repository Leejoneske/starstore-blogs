import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/ArticleLayout";
import { getPost } from "@/lib/posts";
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
    return {
      meta: [
        { title: `${post.title} — StarStore Insights` },
        { name: "description", content: post.dek },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.dek },
        { property: "og:type", content: "article" },
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
