import Link from "next/link";

export default function NotFound() {
  return <main className="page-hero not-found"><div className="shell"><span className="eyebrow">404</span><h1>That page is not in this operating system.</h1><p>Try the homepage, explore the ERP, or talk with the Helixium team.</p><div className="hero-actions"><Link className="button button-primary" href="/">Go home</Link><Link className="button button-secondary" href="/contact/">Contact us</Link></div></div></main>;
}
