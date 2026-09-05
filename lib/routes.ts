import type { Locale } from "@/content/site";

export type PageKey = "home" | "work" | "about";

const englishRoutes: Record<PageKey, string> = {
  home: "/",
  work: "/work",
  about: "/about",
};

export function route(locale: Locale, page: PageKey) {
  const englishPath = englishRoutes[page];
  return locale === "en" ? englishPath : englishPath === "/" ? "/zh" : `/zh${englishPath}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "zh" : "en";
}
