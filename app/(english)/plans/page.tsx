import { PlansPage } from "../../../components/MarketingPages";
import { localizedMetadata } from "../../../lib/site";
export const metadata = localizedMetadata("en", "/plans/", "plans");
export default function Page() { return <PlansPage locale="en" />; }
