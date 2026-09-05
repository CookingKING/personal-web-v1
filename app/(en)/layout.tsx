import type { Metadata } from "next";
import { DocumentLayout } from "@/components/document-layout";
import "../globals.css";

export const metadata: Metadata = {
  applicationName: "Ruochen",
  generator: "Next.js",
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <DocumentLayout locale="en">{children}</DocumentLayout>;
}
