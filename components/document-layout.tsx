import { localized, siteContent } from "@/content/site";
import type { Locale } from "@/content/site";
import { siteUrl } from "@/lib/metadata";

export function DocumentLayout({
  locale,
  children,
}: Readonly<{
  locale: Locale;
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: localized(siteContent.fullName, locale),
    alternateName: locale === "en" ? siteContent.fullName.zh : siteContent.fullName.en,
    description: localized(siteContent.bio, locale),
    homeLocation: {
      "@type": "Place",
      name: localized(siteContent.location, locale),
    },
    alumniOf: siteContent.education.map((entry) => ({
      "@type": "EducationalOrganization",
      name: localized(entry.organization, locale),
    })),
    knowsAbout: [
      ...siteContent.skills,
      locale === "en" ? "Information technology" : "信息技术",
      locale === "en" ? "Mathematics and statistics" : "数学与统计学",
      locale === "en" ? "Marketing operations" : "营销运营",
    ],
    ...(siteUrl ? { url: siteUrl } : {}),
    ...(siteContent.portrait && siteUrl ? { image: `${siteUrl}${siteContent.portrait.src}` } : {}),
    ...(siteContent.socialLinks.length ? { sameAs: siteContent.socialLinks.map((link) => link.url) } : {}),
  };

  return (
    <html lang={locale === "en" ? "en" : "zh-CN"}>
      <body>
        <a className="skip-link" href="#main-content">
          {locale === "en" ? "Skip to content" : "跳到主要内容"}
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
