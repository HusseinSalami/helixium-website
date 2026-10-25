import { AboutPage } from "../../../components/MarketingPages";
import { localizedMetadata } from "../../../lib/site";
export const metadata = localizedMetadata("en", "/about/", "about");
export default function Page() { return <AboutPage locale="en" />; }
