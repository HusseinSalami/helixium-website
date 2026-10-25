import type { Metadata } from "next";
import { ERPPage } from "../../../components/MarketingPages";
import { localizedMetadata } from "../../../lib/site";
export const metadata: Metadata = localizedMetadata("en", "/erp/", "erp");
export default function Page() { return <ERPPage locale="en" />; }
