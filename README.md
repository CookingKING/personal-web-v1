# Ruochen — personal site

An English-first, bilingual personal website with Home, Work, and About pages, built with Next.js and ready for GitHub + Vercel deployment.

## Run locally

Use Node.js 22.13 or newer, then run:

```bash
pnpm install
pnpm dev
```

Create the production build with:

```bash
pnpm build
```

## Update the content

Edit `content/site.ts`. All personal content is kept in one place:

- `mission` and `bio` contain the English and Chinese copy.
- Set `portrait` to an image in `public/` with its source dimensions, or leave it as `null` to keep the typography-only layout.
- Set `email` to a public email address, or leave it as `null` to hide the email link.
- Add only confirmed entries to `socialLinks` and `videos`; empty lists render a clean coming-soon state instead of broken links.
- For video thumbnails, use compressed 16:9 WebP or JPEG files in `public/videos/` and provide meaningful alt text in both languages.

Example video entry:

```ts
{
  title: { en: "English title", zh: "中文标题" },
  platform: "YouTube",
  thumbnail: "/videos/example.webp",
  thumbnailAlt: { en: "Description of the frame", zh: "画面内容说明" },
  url: "https://youtube.com/watch?v=...",
  date: "2026-09-05",
}
```

## Connect a domain later

Vercel automatically supplies `VERCEL_PROJECT_PRODUCTION_URL`, which the site uses for canonical links, language alternates, the social preview image, and the sitemap. When a custom domain is connected later, set `NEXT_PUBLIC_SITE_URL` to the complete HTTPS origin to make it the preferred public address.
