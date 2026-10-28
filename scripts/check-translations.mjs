import { readFileSync } from "node:fs";
import { join } from "node:path";

const outputRoot = join(process.cwd(), "out");
const routes = [
  "/", "/about/", "/compare/", "/contact/",
  "/erp/", "/erp/accounting/", "/erp/inventory/", "/erp/sales-purchases/",
  "/erp/pos/", "/erp/manufacturing/", "/erp/payroll/", "/erp/field-service/",
  "/matchpulse/", "/plans/",
  "/solutions/agentic-ai/", "/solutions/custom-software/"
];
const allowlist = new Set([
  "Helixium", "Helixium Solutions", "ERP", "POS", "USDT", "CSV", "OFX", "EVM",
  "Tron", "Odoo", "QuickBooks Online", "Zoho Books", "Pantheon", "Olympus",
  "Elysium", "Pantheon", "Olympus", "pantheon", "olympus", "elysium", "MatchPulse", "Gandour", "Feel Nature", "MOM",
  "Endomedix", "Medco", "WhatsApp", "Austin", "France", "USD", "AED", "SAR", "EUR",
  "lb", "ae", "sa", "us", "fr", "monthly", "annual", "odoo.com/pricing",
  "Bassam Salame", "Fatme Assi", "Sahar Baaklini", "Jad Salame",
  "Master of Maintenance", "info@helixiumsolutions.com", "13800 Lyndhurst Street",
  "Austin, TX 78717", "[O1]", "[Q1]", "[Z1]", "EN", "AR", "FR"
]);

function fileFor(locale, route) {
  const relative = route === "/" ? "index.html" : `${route.replace(/^\/|\/$/g, "")}/index.html`;
  return join(outputRoot, locale === "en" ? relative : locale + "/" + relative);
}

function decode(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)));
}

function tokensAreAllowed(value) {
  const cleaned = value.replace(/[.,:;!?()[\]{}<>/|+\-–—%$€£¥0-9↗→✓·]/g, " ").trim();
  if (!cleaned) return true;
  return cleaned.split(/\s+/).every((token) => allowlist.has(token) || allowlist.has(value));
}

function visibleStrings(html) {
  const withoutCode = html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "");
  const text = [...withoutCode.matchAll(/>([^<>]+)</g)].map((match) => decode(match[1]).replace(/\s+/g, " ").trim()).filter(Boolean);
  const attributes = [...withoutCode.matchAll(/\b(?:alt|aria-label|placeholder|title)="([^"]*)"/gi)].map((match) => decode(match[1]).replace(/\s+/g, " ").trim()).filter(Boolean);
  return new Set([...text, ...attributes]);
}

function metadataStrings(html) {
  const values = [];
  const title = html.match(/<title>([^<]*)<\/title>/i);
  if (title) values.push(decode(title[1]).trim());
  for (const match of html.matchAll(/<meta[^>]+(?:name|property)="(?:description|og:title|og:description|twitter:title|twitter:description)"[^>]+content="([^"]*)"/gi)) {
    values.push(decode(match[1]).trim());
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try {
      const walk = (value, key = "") => {
        if (typeof value === "string" && ["name", "description", "text", "question", "acceptedAnswer"].includes(key)) values.push(value.trim());
        else if (Array.isArray(value)) value.forEach(walk);
        else if (value && typeof value === "object") Object.entries(value).forEach(([childKey, childValue]) => walk(childValue, childKey));
      };
      walk(JSON.parse(match[1]));
    } catch {
      values.push("INVALID_JSON_LD");
    }
  }
  return new Set(values.filter(Boolean));
}

const failures = [];
const english404 = readFileSync(join(outputRoot, "404.html"), "utf8");
for (const route of routes) {
  const english = readFileSync(fileFor("en", route), "utf8");
  const englishVisible = visibleStrings(english);
  const englishMetadata = metadataStrings(english);
  for (const locale of ["ar", "fr"]) {
    const localized = readFileSync(fileFor(locale, route), "utf8");
    const root = localized.match(/<html\b[^>]*\blang="([^"]+)"[^>]*>/i);
    const direction = localized.match(/<html\b[^>]*\bdir="([^"]+)"[^>]*>/i);
    const expectedDirection = locale === "ar" ? "rtl" : "ltr";
    if (!root || root[1] !== locale) failures.push(`${locale}${route} document lang: ${root?.[1] || "missing"}`);
    if (!direction || direction[1] !== expectedDirection) failures.push(`${locale}${route} document dir: ${direction?.[1] || "missing"}`);
    const localizedVisible = visibleStrings(localized);
    const localizedMetadata = metadataStrings(localized);
    for (const value of englishVisible) {
      if (value.length > 2 && localizedVisible.has(value) && !tokensAreAllowed(value)) failures.push(`${locale}${route} visible: ${value}`);
    }
    for (const value of englishMetadata) {
      if (value.length > 2 && localizedMetadata.has(value) && !tokensAreAllowed(value)) failures.push(`${locale}${route} metadata: ${value}`);
    }
  }
}

for (const locale of ["ar", "fr"]) {
  const localized404Path = join(outputRoot, locale, "404.html");
  try {
    const localized404 = readFileSync(localized404Path, "utf8");
    const root = localized404.match(/<html\b[^>]*\blang="([^"]+)"[^>]*>/i);
    const direction = localized404.match(/<html\b[^>]*\bdir="([^"]+)"[^>]*>/i);
    if (!root || root[1] !== locale) failures.push(`${locale}/404.html document lang: ${root?.[1] || "missing"}`);
    if (!direction || direction[1] !== (locale === "ar" ? "rtl" : "ltr")) failures.push(`${locale}/404.html document dir: ${direction?.[1] || "missing"}`);
    const localizedVisible = visibleStrings(localized404);
    for (const value of visibleStrings(english404)) {
      if (value.length > 2 && localizedVisible.has(value) && !tokensAreAllowed(value)) failures.push(`${locale}/404.html visible: ${value}`);
    }
  } catch {
    failures.push(`${locale}/404.html missing`);
  }
}

if (failures.length) {
  console.error(`Translation check failed: ${failures.length} identical English strings`);
  failures.slice(0, 80).forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Translation check passed for ${routes.length} routes in Arabic and French.`);
