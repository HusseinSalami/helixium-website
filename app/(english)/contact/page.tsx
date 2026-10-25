import { ContactPage } from "../../../components/MarketingPages";
import { localizedMetadata } from "../../../lib/site";
export const metadata = localizedMetadata("en", "/contact/", "contact");
export default function Page() { return <ContactPage locale="en" />; }
