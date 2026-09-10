import type { Locale } from "@/content/site";
import { copy, siteContent } from "@/content/site";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function HomePage({ locale }: { locale: Locale }) {
  const c = copy(locale);

  return (
    <>
      <SiteHeader locale={locale} page="home" />
      <main id="main-content">
        <section className="archive-home" aria-labelledby="archive-title">
          <h1 id="archive-title">{c.archiveTitle}</h1>
          {siteContent.email && <a className="archive-email" href={`mailto:${siteContent.email}`}>{siteContent.email}</a>}
        </section>
      </main>
      <SiteFooter locale={locale} compact />
    </>
  );
}
