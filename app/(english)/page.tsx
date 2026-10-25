import { HomePage } from "../../components/HomePage";
import { localizedMetadata } from "../../lib/site";

export const metadata = localizedMetadata("en", "/", "home");
export default function Page() { return <HomePage />; }
