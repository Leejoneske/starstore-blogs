import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () =>
  createRouter({
    routeTree,
    scrollRestoration: true,
    // GitHub Pages serves each prerendered page as /blog/<slug>/index.html, so
    // /blog/<slug>/ is the page and /blog/<slug> is a redirect to it. The
    // canonicals and the sitemap already name the slash form; without this,
    // every link the router drew named the redirect, and a crawler following
    // the blog's own links paid a hop on each one.
    trailingSlash: "always",
    defaultPreloadStaleTime: 0,
  });
