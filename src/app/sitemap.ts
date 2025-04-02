import { siteConfig, siteMapConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export const baseUrl: string =
  process.env.NEXT_PUBLIC_BASE_URL || siteConfig.url;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const searchLandingPages: MetadataRoute.Sitemap = siteMapConfig.map(
    (item) => ({
      url: `${baseUrl}${item.href}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    })
  );

  return [
    // pSEO pages
    ...searchLandingPages,

    // other pages
    // {
    //   url: `${baseUrl}` + "/blog",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 1,
    // },
  ];
}
