import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  return ["", "/work", "/about", "/zh", "/zh/work", "/zh/about"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path.includes("work") ? "monthly" as const : "yearly" as const,
    priority: path === "" ? 1 : path === "/zh" ? 0.9 : 0.7,
  }));
}
