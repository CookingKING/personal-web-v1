import Image from "next/image";
import type { Locale } from "@/content/site";
import { copy, localized, siteContent } from "@/content/site";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function AboutPage({ locale }: { locale: Locale }) {
  const c = copy(locale);

  return (
    <>
      <SiteHeader locale={locale} page="about" />
      <main id="main-content">
        <section className="page-intro about-intro" aria-labelledby="about-title">
          <p className="eyebrow">{c.aboutEyebrow}</p>
          <h1 id="about-title">{c.aboutTitleOne}<br /><em>{c.aboutTitleTwo}</em></h1>
          <p>{c.aboutIntro}</p>
        </section>
        <section className="about-grid">
          {siteContent.portrait && (
            <figure className="portrait">
              <Image
                src={siteContent.portrait.src}
                alt={localized(siteContent.portrait.alt, locale)}
                width={siteContent.portrait.width}
                height={siteContent.portrait.height}
                sizes="(max-width: 800px) 92vw, 28vw"
              />
            </figure>
          )}
          <div className="about-story">
            <p className="eyebrow">{c.currentNoteTitle}</p>
            <p className="about-lede">{localized(siteContent.bio, locale)}</p>
            <p>{c.currentNote}</p>
          </div>
          <div className="values">
            <p className="eyebrow">{c.valuesTitle}</p>
            <ol>{c.values.map((value, index) => <li key={value}><span>0{index + 1}</span>{value}</li>)}</ol>
          </div>
        </section>
        <section className="contact-panel" aria-labelledby="connect-title">
          <p className="eyebrow">{c.connect}</p>
          <h2 id="connect-title">{siteContent.email || siteContent.socialLinks.length ? c.followWork : c.connectPending}</h2>
          {(siteContent.email || siteContent.socialLinks.length > 0) && (
            <div className="contact-links">
              {siteContent.email && <a href={`mailto:${siteContent.email}`}>{siteContent.email} <span aria-hidden="true">↗</span></a>}
              {siteContent.socialLinks.map((link) => <a href={link.url} key={link.url} target="_blank" rel="noopener noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}
            </div>
          )}
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
