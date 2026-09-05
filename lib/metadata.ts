import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import type { Locale } from "@/content/site";
import { route, type PageKey } from "@/lib/routes";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim()
  .replace(/^https?:\/\//, "")
  .replace(/\/$/, "");
const rawSiteUrl = configuredSiteUrl || (vercelProductionHost ? `https://${vercelProductionHost}` : undefined);

export const siteUrl = rawSiteUrl && /^https?:\/\//.test(rawSiteUrl)
  ? rawSiteUrl.replace(/\/$/, "")
  : undefined;

const pageDescriptions: Record<Locale, Record<PageKey, string>> = {
  en: {
    home: "The personal site of Ruochen. Selected videos, ideas, and thoughtful work in one place.",
    work: "Selected video work from Ruochen, including future releases from YouTube, Bilibili, and Douyin.",
    about: "About Ruochen and the ideas behind this growing personal archive.",
  },
  zh: {
    home: "Ruochen 的个人网站，集中展示精选视频、想法与持续发生的创作。",
    work: "Ruochen 的精选视频作品，未来将收录 YouTube、Bilibili 与抖音内容。",
    about: "了解 Ruochen，以及这个持续生长的个人档案背后的想法。",
  },
};

const pageTitles: Record<Locale, Record<PageKey, string>> = {
  en: { home: "Ruochen — Personal site", work: "Selected work — Ruochen", about: "About — Ruochen" },
  zh: { home: "Ruochen — 个人网站", work: "精选作品 — Ruochen", about: "关于 — Ruochen" },
};

export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const title = pageTitles[locale][page];
  const description = pageDescriptions[locale][page];
  const pagePath = route(locale, page);
  const englishPath = route("en", page);
  const chinesePath = route("zh", page);
  const absolutePageUrl = siteUrl ? `${siteUrl}${pagePath === "/" ? "" : pagePath}` : undefined;
  const imageUrl = siteUrl ? `${siteUrl}/og.png` : undefined;

  return {
    title,
    description,
    authors: [{ name: siteContent.name }],
    robots: { index: true, follow: true },
    alternates: siteUrl
      ? {
          canonical: absolutePageUrl,
          languages: {
            en: `${siteUrl}${englishPath === "/" ? "" : englishPath}`,
            "zh-CN": `${siteUrl}${chinesePath}`,
            "x-default": `${siteUrl}${englishPath === "/" ? "" : englishPath}`,
          },
        }
      : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Ruochen",
      locale: locale === "en" ? "en_US" : "zh_CN",
      alternateLocale: locale === "en" ? ["zh_CN"] : ["en_US"],
      url: absolutePageUrl,
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630, alt: "Ruochen — work, ideas, and motion" }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}
