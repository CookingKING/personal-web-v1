import type { Metadata } from 'next';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({ variable: '--font-playfair', subsets: ['latin'], style: ['normal', 'italic'] });
const source = Source_Sans_3({ variable: '--font-source', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zhang — 独立设计师与创意开发者',
  description: '用策略、设计与代码，创造有温度的数字体验。',
  metadataBase: new URL('https://zhang-organic-portfolio.zhangruochen40.chatgpt.site'),
  openGraph: {
    title: 'Zhang — 独立设计师与创意开发者',
    description: '用策略、设计与代码，创造有温度的数字体验。',
    type: 'website',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: '设计有温度的数字体验' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zhang — 独立设计师与创意开发者',
    description: '用策略、设计与代码，创造有温度的数字体验。',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body className={`${playfair.variable} ${source.variable}`}>{children}</body></html>;
}
