import type { Locale } from "@/content/site";
import { copy, siteContent } from "@/content/site";
import { otherLocale, route, type PageKey } from "@/lib/routes";

export function SiteHeader({ locale, page }: { locale: Locale; page: PageKey }) {
  const c = copy(locale);
  const alternate = otherLocale(locale);

  return (
    <header className="site-header">
      <a className="wordmark" href={route(locale, "home")} aria-label={`${siteContent.name} ${c.home}`}>
        {siteContent.name}<span>.</span>
      </a>
      <nav aria-label={c.navigationLabel}>
        <a aria-current={page === "work" ? "page" : undefined} href={route(locale, "work")}>{c.work}</a>
        <a aria-current={page === "about" ? "page" : undefined} href={route(locale, "about")}>{c.about}</a>
      </nav>
      <a className="language" href={route(alternate, page)} lang={alternate === "en" ? "en" : "zh-CN"}>
        {c.languageName}
      </a>
    </header>
  );
}
