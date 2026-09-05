import { AboutPage } from "@/components/about-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("zh", "about");

export default function Page() {
  return <AboutPage locale="zh" />;
}
