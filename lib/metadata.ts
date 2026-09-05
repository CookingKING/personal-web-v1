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
    home: "The personal site of Ruochen Zhang, a Sydney-based technology and data generalist with experience across software, marketing, and real-world operations.",
    work: "Selected video work from Ruochen, including future releases from YouTube, Bilibili, and Douyin.",
    about: "About Ruochen Zhang: education in information technology, mathematics, and statistics, with experience across software projects, marketing, and NSW SES volunteering.",
  },
  zh: {
    home: "张若宸的个人网站：现居悉尼，拥有信息技术、数学与统计学背景，并具备软件项目、市场营销和实际运营经验。",
    work: "Ruochen 的精选视频作品，未来将收录 YouTube、Bilibili 与抖音内容。",
    about: "了解张若宸的教育、技能与实践经历，包括软件项目、品牌营销、零售运营和 NSW SES 志愿服务。",
  },
};

const pageTitles: Record<Locale, Record<PageKey, string>> = {
  en: { home: "Ruochen Zhang — Technology & Data", work: "Selected work — Ruochen", about: "About Ruochen Zhang" },
  zh: { home: "张若宸 — 技术与数据", work: "精选作品 — Ruochen", about: "关于张若宸" },
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
    authors: [{ name: localizedName(locale) }],
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

function localizedName(locale: Locale) {
  return siteContent.fullName[locale];
}
