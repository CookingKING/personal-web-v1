import type { Metadata } from "next";
import { DocumentLayout } from "@/components/document-layout";
import "../globals.css";

export const metadata: Metadata = {
  applicationName: "Ruochen",
  generator: "Next.js",
};

export default function ChineseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <DocumentLayout locale="zh">{children}</DocumentLayout>;
}
