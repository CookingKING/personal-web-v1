import { siteContent } from "@/content/site";
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
    name: siteContent.name,
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
