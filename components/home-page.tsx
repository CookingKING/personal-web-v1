import type { Locale } from "@/content/site";
import { copy, localized, siteContent } from "@/content/site";
import { route } from "@/lib/routes";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function HomePage({ locale }: { locale: Locale }) {
  const c = copy(locale);

  return (
    <>
      <SiteHeader locale={locale} page="home" />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-kicker">
            <p className="eyebrow">{c.homeEyebrow}</p>
            <span aria-hidden="true">R / 01</span>
          </div>
          <h1 id="hero-title">{c.heroLineOne}<br /><em>{c.heroLineTwo}</em></h1>
          <div className="hero-footer">
            <p>{localized(siteContent.mission, locale)} {c.homeIntro}</p>
            <a className="primary-link" href={route(locale, "work")}>{c.exploreWork} <span aria-hidden="true">↗</span></a>
          </div>
        </section>
        <section className="index-strip" aria-label={locale === "en" ? "Site sections" : "网站栏目"}>
          <a href={route(locale, "work")}><span>01</span><strong>{c.selectedWork}</strong><i aria-hidden="true">↗</i></a>
          <a href={route(locale, "about")}><span>02</span><strong>{c.aboutRuochen}</strong><i aria-hidden="true">↗</i></a>
        </section>
        <section className="manifesto" aria-label={locale === "en" ? "Introduction" : "介绍"}>
          <p>{locale === "en" ? "A personal archive should feel like a conversation—not a catalogue." : "个人网站应该像一次对话，而不只是一份清单。"}</p>
          <span>{siteContent.name.toUpperCase()}</span>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
