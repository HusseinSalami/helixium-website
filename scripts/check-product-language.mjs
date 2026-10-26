import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const outputRoot = join(process.cwd(), "out");
const forbidden = [
  /\bfounding\b/i,
  /\bfounders?\b/i,
  /\bpilot\b/i,
  /\bwaitlist\b/i,
  /\bfirst\s+(?:10|ten)\b/i,
  /\bno\s+customers?\b/i,
  /\bopening\b/i,
  /\blaunch(?:ing|ed|es)?\b/i,
  /الأماكن المؤسسة|قائمة الانتظار|أول 10|أول عشرة|يفتح MatchPulse|الإطلاق/i,
  /programme des lieux fondateurs|premiers lieux|liste d'attente|lancement/i
];

function htmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(path);
    return entry.name.endsWith(".html") ? [path] : [];
  });
}

const failures = [];
for (const file of htmlFiles(outputRoot)) {
  const route = relative(outputRoot, file);
  if (route.startsWith("cryptosettle/")) continue;
  const html = readFileSync(file, "utf8");
  for (const pattern of forbidden) {
    const match = html.match(pattern);
    if (match) failures.push(`${route}: ${match[0]}`);
  }
}

for (const file of ["public/llms.txt", "SEO-PLAN.md"]) {
  const content = readFileSync(join(process.cwd(), file), "utf8");
  for (const pattern of forbidden) {
    const match = content.match(pattern);
    if (match) failures.push(`${file}: ${match[0]}`);
  }
}

if (failures.length) {
  console.error(`Product language sweep failed: ${failures.length} forbidden MatchPulse or launch strings`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Product language sweep passed: no forbidden MatchPulse or launch strings in ${htmlFiles(outputRoot).length - htmlFiles(outputRoot).filter((file) => relative(outputRoot, file).startsWith("cryptosettle/")).length} rendered routes, llms.txt, or SEO-PLAN.md.`);
