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
        <section className="about-grid">
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
            <h2 className="profile-name">{localized(siteContent.fullName, locale)}</h2>
            <p className="profile-location">{c.basedIn} · {localized(siteContent.location, locale)}</p>
            <p className="about-lede">{localized(siteContent.bio, locale)}</p>
            <p>{c.currentNote}</p>
          </div>
          <div className="values">
            <p className="eyebrow">{c.valuesTitle}</p>
            <ol>{c.values.map((value, index) => <li key={value}><span>0{index + 1}</span>{value}</li>)}</ol>
          </div>
        </section>
        <div className="resume-sections">
          <ProfileSection entries={siteContent.education} id="education-title" locale={locale} marker="02" title={c.educationTitle} />
          <ProfileSection entries={siteContent.experience} id="experience-title" locale={locale} marker="03" title={c.experienceTitle} />
          <ProfileSection entries={siteContent.projects} id="projects-title" locale={locale} marker="04" title={c.projectsTitle} />
          <section className="resume-section toolkit-section" aria-labelledby="toolkit-title">
            <div className="resume-section-heading">
              <p className="eyebrow">R / 05</p>
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
        <section className="contact-panel" aria-labelledby="connect-title">
          <p className="eyebrow">{c.connect}</p>
          <h2 id="connect-title">{siteContent.email || siteContent.socialLinks.length ? c.connectPrompt : c.connectPending}</h2>
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
