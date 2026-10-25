import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.helixiumsolutions.com";
  const paths = ["", "/products", "/agents", "/pricing", "/about", "/solutions", "/contact"];
  const locales = ["", "/ar", "/fr"];
  return locales.flatMap((locale) => paths.map((path) => ({ url: `${base}${locale}${path}/` })));
}
