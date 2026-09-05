import type { Locale } from "@/content/site";
import { copy, siteContent } from "@/content/site";
import { route } from "@/lib/routes";

export function SiteFooter({ locale }: { locale: Locale }) {
  const c = copy(locale);
  const hasLinks = Boolean(siteContent.email || siteContent.socialLinks.length);

  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <p className="eyebrow">{c.followWork}</p>
        <h2>{hasLinks ? c.connect : c.followPrompt}</h2>
      </div>
      {hasLinks && (
        <div className="footer-links" aria-label={c.connect}>
          {siteContent.email && <a href={`mailto:${siteContent.email}`}>Email <span aria-hidden="true">↗</span></a>}
          {siteContent.socialLinks.map((link) => (
            <a href={link.url} key={link.url} target="_blank" rel="noopener noreferrer">
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      )}
      <div className="footer-base">
        <a className="wordmark inverse" href={route(locale, "home")}>{siteContent.name}<span>.</span></a>
        <p>© {new Date().getFullYear()} {siteContent.name} · {c.copyright}</p>
      </div>
    </footer>
  );
}
