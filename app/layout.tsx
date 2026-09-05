import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://zhang-organic-portfolio.zhangruochen40.chatgpt.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Zhang — 个人作品集',
    template: '%s | Zhang',
  },
  description: '认识 Zhang：精选项目、视频作品、专业能力与职业经历。',
  keywords: ['Zhang', '个人作品集', '作品案例', '视频作品', '求职'],
  authors: [{ name: 'Zhang' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Zhang — 个人作品集',
    description: '作品、视频与经历，一页认识 Zhang。',
    url: siteUrl,
    siteName: 'Zhang — 个人作品集',
    type: 'website',
    locale: 'zh_CN',
    images: [{ url: '/og.png', width: 1672, height: 941, alt: 'Zhang — 个人作品集；作品、视频、经历' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zhang — 个人作品集',
    description: '作品、视频与经历，一页认识 Zhang。',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
