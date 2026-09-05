import type { Locale } from "@/content/site";
import { copy } from "@/content/site";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { VideoGrid } from "./video-grid";

export function WorkPage({ locale }: { locale: Locale }) {
  const c = copy(locale);

  return (
    <>
      <SiteHeader locale={locale} page="work" />
      <main id="main-content">
        <section className="page-intro work-intro" aria-labelledby="work-title">
          <p className="eyebrow">{c.workEyebrow}</p>
          <h1 id="work-title">{c.workTitleOne}<br /><em>{c.workTitleTwo}</em></h1>
          <p>{c.workIntro}</p>
        </section>
        <VideoGrid locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
