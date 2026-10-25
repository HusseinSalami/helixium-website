import PricingPage from "../../(localized)/[locale]/pricing/page";
export const metadata = { title: "Pricing", description: "Trial, Pro, and Enterprise operating tiers for Helixium." };
export default function Page() { return <PricingPage params={{ locale: "en" }} />; }
