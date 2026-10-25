import { CustomersPage } from "../../../components/MarketingPages";
import { localizedMetadata } from "../../../lib/site";
export const metadata = localizedMetadata("en", "/customers/", "customers");
export default function Page() { return <CustomersPage locale="en" />; }
