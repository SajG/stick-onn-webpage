import type { MetadataRoute } from "next";
import { applicationPages, landingPages, products } from "@/lib/data";
import { client } from "@/lib/sanity/client";
import {
  postSitemapEntriesQuery,
  type PostSitemapEntry,
} from "@/lib/sanity/queries";
import { absoluteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/products"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/applications"), lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/blog"), lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];

  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts =
      (await client.fetch<PostSitemapEntry[]>(postSitemapEntriesQuery)) ?? [];
    blogRoutes = posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post._updatedAt ? new Date(post._updatedAt) : lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Failed to fetch blog posts for sitemap:", error);
  }

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: absoluteUrl(`/products/${product.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const applicationRoutes: MetadataRoute.Sitemap = applicationPages.map((page) => ({
    url: absoluteUrl(`/applications/${page.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const landingRoutes: MetadataRoute.Sitemap = landingPages.map((page) => ({
    url: absoluteUrl(`/${page.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...applicationRoutes,
    ...landingRoutes,
    ...blogRoutes,
  ];
}
