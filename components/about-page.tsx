import Image from "next/image";
import type { Locale, ProfileEntry } from "@/content/site";
import { copy, localized, siteContent } from "@/content/site";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

function ProfileSection({
  entries,
  id,
  locale,
  marker,
  title,
}: {
  entries: ProfileEntry[];
  id: string;
  locale: Locale;
  marker: string;
  title: string;
}) {
  return (
    <section className="resume-section" aria-labelledby={id}>
      <div className="resume-section-heading">
        <p className="eyebrow">R / {marker}</p>
        <h2 id={id}>{title}</h2>
      </div>
      <ol className="resume-list">
        {entries.map((entry) => (
          <li className="resume-entry" key={`${entry.period.en}-${entry.title.en}`}>
            <time>{localized(entry.period, locale)}</time>
            <div>
              <p className="resume-organization">{localized(entry.organization, locale)}</p>
              <h3>{localized(entry.title, locale)}</h3>
              <p>{localized(entry.summary, locale)}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

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
        <section className="about-grid" aria-labelledby="profile-title">
          {siteContent.portrait && (
            <figure className="portrait">
              <Image
                src={siteContent.portrait.src}
                alt={localized(siteContent.portrait.alt, locale)}
                width={siteContent.portrait.width}
                height={siteContent.portrait.height}
                sizes="193px"
                unoptimized
              />
            </figure>
          )}
          <div className="about-story">
            <p className="eyebrow">{c.currentNoteTitle}</p>
            <h2 id="profile-title" className="profile-name">{localized(siteContent.fullName, locale)}</h2>
            <p className="profile-location">{c.basedIn} · {localized(siteContent.location, locale)}</p>
            <p className="about-lede">{localized(siteContent.bio, locale)}</p>
            <p>{c.currentNote}</p>
          </div>
        </section>
        <div className="resume-sections">
          <ProfileSection entries={siteContent.education} id="education-title" locale={locale} marker="02" title={c.educationTitle} />
          <section className="resume-section toolkit-section" aria-labelledby="toolkit-title">
            <div className="resume-section-heading">
              <p className="eyebrow">R / 03</p>
              <h2 id="toolkit-title">{c.toolkitTitle}</h2>
            </div>
            <div className="toolkit-grid">
              <div>
                <h3>{c.skillsTitle}</h3>
                <ul className="tag-list">{siteContent.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </div>
              <div>
                <h3>{c.certificationsTitle}</h3>
                <ul className="plain-list">{siteContent.certifications.map((item) => <li key={item.en}>{localized(item, locale)}</li>)}</ul>
              </div>
              <div>
                <h3>{c.interestsTitle}</h3>
                <ul className="plain-list interests-list">{siteContent.interests.map((item) => <li key={item.en}>{localized(item, locale)}</li>)}</ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter locale={locale} compact />
    </>
  );
}
