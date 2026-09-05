import { WorkPage } from "@/components/work-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "work");

export default function Page() {
  return <WorkPage locale="en" />;
}
