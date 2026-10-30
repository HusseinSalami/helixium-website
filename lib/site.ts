import type { Locale } from "./content";

export const erpUrl = process.env.NEXT_PUBLIC_ERP_APP_URL || "https://erp.helixiumsolutions.com/signup";
export const erpSignInUrl = (process.env.NEXT_PUBLIC_ERP_APP_URL || "https://erp.helixiumsolutions.com/signup").replace(/\/signup\/?$/, "/login");
export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "";
export const whatsappUrl = "https://wa.me/96171495273";

export function localizedPath(locale: string | undefined, path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return locale && locale !== "en" ? `/${locale}${cleanPath}` : cleanPath;
}

type SeoCopy = { title: string; description: string };
const seo: Record<string, Record<Locale, SeoCopy>> = {
  home: {
    en: { title: "Helixium Solutions: ERP, AI agents, custom software and MatchPulse", description: "Helixium Solutions brings together ERP, custom AI agents, custom software, and MatchPulse for teams building clearer operations." },
    ar: { title: "Helixium Solutions: نظام ERP ووكلاء ذكاء اصطناعي وبرمجيات مخصصة وMatchPulse", description: "تجمع Helixium Solutions بين نظام ERP ووكلاء الذكاء الاصطناعي المخصصين والبرمجيات المخصصة وMatchPulse لفرق تريد عمليات أوضح." },
    fr: { title: "Helixium Solutions : ERP, agents IA, logiciels sur mesure et MatchPulse", description: "Helixium Solutions réunit ERP, agents IA sur mesure, logiciels personnalisés et MatchPulse pour des équipes qui veulent des opérations plus claires." }
  },
  erp: {
    en: { title: "Helixium ERP software", description: "ERP software for accounting, inventory, sales, purchases, POS, manufacturing, payroll, and connected operations." },
    ar: { title: "برنامج Helixium ERP", description: "برنامج ERP للمحاسبة والمخزون والمبيعات والمشتريات ونقاط البيع والتصنيع والرواتب والعمليات المتصلة." },
    fr: { title: "Logiciel Helixium ERP", description: "Un ERP pour la comptabilité, les stocks, les ventes, les achats, la caisse, la production, la paie et les opérations connectées." }
  },
  accounting: {
    en: { title: "Accounting ERP software", description: "Connect payments, receipts, journal vouchers, reporting, budgets, expenses, and bank reconciliation." },
    ar: { title: "برنامج ERP للمحاسبة", description: "اربط المدفوعات والإيصالات والقيود والتقارير والميزانيات والمصروفات وتسوية الحسابات البنكية." },
    fr: { title: "Logiciel ERP de comptabilité", description: "Reliez paiements, reçus, écritures, rapports, budgets, dépenses et rapprochement bancaire." }
  },
  inventory: {
    en: { title: "Inventory management ERP software", description: "Manage items, warehouses, lots, stock movements, deliveries, receipts, and low-stock reporting." },
    ar: { title: "برنامج ERP لإدارة المخزون", description: "أدر الأصناف والمستودعات والدفعات وحركات المخزون والتسليمات والاستلامات وتقارير النقص." },
    fr: { title: "ERP de gestion des stocks", description: "Gérez articles, entrepôts, lots, mouvements, livraisons, réceptions et alertes de stock bas." }
  },
  "sales-purchases": {
    en: { title: "Sales and purchasing ERP software", description: "Manage invoices, quotations, orders, returns, deposits, RFQs, purchase orders, and payment history." },
    ar: { title: "برنامج ERP للمبيعات والمشتريات", description: "أدر الفواتير وعروض الأسعار والطلبات والمرتجعات والدفعات وطلبات الشراء وسجل المدفوعات." },
    fr: { title: "ERP de gestion des ventes et achats", description: "Gérez factures, devis, commandes, retours, acomptes, demandes de prix, achats et paiements." }
  },
  pos: {
    en: { title: "Point-of-sale ERP software", description: "Connect point-of-sale sessions and front-line sales records to the wider ERP." },
    ar: { title: "برنامج نقاط بيع متصل بـ ERP", description: "اربط جلسات نقاط البيع وسجلات المبيعات اليومية بنظام ERP الأوسع." },
    fr: { title: "Logiciel de caisse connecté à un ERP", description: "Reliez les sessions de caisse et les ventes de terrain au reste de votre ERP." }
  },
  manufacturing: {
    en: { title: "Manufacturing ERP software", description: "Track production orders, recipes, production transfers, and unbuild orders." },
    ar: { title: "برنامج ERP للتصنيع", description: "تابع أوامر الإنتاج والوصفات وتحويلات الإنتاج وأوامر التفكيك." },
    fr: { title: "ERP de production", description: "Suivez ordres de production, recettes, transferts de production et ordres de déconstruction." }
  },
  payroll: {
    en: { title: "Payroll ERP software", description: "Keep employees, contracts, and pay slips connected to the operating record." },
    ar: { title: "برنامج ERP للرواتب", description: "احتفظ ببيانات الموظفين والعقود وكشوف الرواتب ضمن السجل التشغيلي." },
    fr: { title: "Logiciel ERP de paie", description: "Gardez employés, contrats et bulletins de paie dans le même système opérationnel." }
  },
  "field-service": {
    en: { title: "Field service management and repair order software", description: "Manage work orders, repair orders, dispatch, checklists, contracts, warranty workflows, and technician jobs inside your ERP." },
    ar: { title: "برنامج إدارة الخدمة الميدانية وأوامر الإصلاح", description: "أدر أوامر العمل والإصلاح والتوزيع وقوائم التحقق والعقود وسير عمل الضمان ومهام الفنيين." },
    fr: { title: "Logiciel de service terrain et ordres de réparation", description: "Gérez ordres de travail et de réparation, dispatch, checklists, contrats, garanties et interventions." }
  },
  match: {
    en: { title: "MatchPulse match prediction and leaderboard software", description: "MatchPulse lets fans predict match scores, follow results, collect points, and compete in global or private leaderboards." },
    ar: { title: "MatchPulse لتوقع نتائج المباريات والتصنيفات", description: "يتيح MatchPulse للمشجعين توقع نتائج المباريات ومتابعة النتائج وجمع النقاط والتنافس في تصنيفات عامة أو خاصة." },
    fr: { title: "MatchPulse pour pronostics et classements", description: "MatchPulse permet aux fans de pronostiquer les scores, suivre les résultats, gagner des points et participer à des classements globaux ou privés." }
  },
  plans: {
    en: { title: "Pricing: Helixium ERP, MatchPulse and custom software | Helixium Solutions", description: "See published Helixium ERP plans, then explore MatchPulse and custom AI agents and software quoted for your team." },
    ar: { title: "الأسعار: Helixium ERP وMatchPulse والبرمجيات المخصصة | Helixium Solutions", description: "اطلع على خطط Helixium ERP المنشورة، ثم استكشف MatchPulse ووكلاء الذكاء الاصطناعي والبرمجيات المخصصة المسعّرة لفريقك." },
    fr: { title: "Tarifs : Helixium ERP, MatchPulse et logiciel sur mesure | Helixium Solutions", description: "Découvrez les offres publiées de Helixium ERP, puis MatchPulse et les agents IA et logiciels sur mesure chiffrés pour votre équipe." }
  },
  compare: {
    en: { title: "Odoo alternative for Lebanon and the Gulf", description: "Compare Helixium ERP with Odoo, QuickBooks Online, and Zoho Books on pricing model, languages, field service, POS, deployment, and approval steps." },
    ar: { title: "بديل Odoo في لبنان والخليج", description: "قارن Helixium ERP مع Odoo وQuickBooks Online وZoho Books في نموذج التسعير واللغات والخدمة الميدانية ونقاط البيع." },
    fr: { title: "Alternative à Odoo au Liban et dans le Golfe", description: "Comparez Helixium ERP à Odoo, QuickBooks Online et Zoho Books sur le modèle tarifaire, les langues, le service terrain et la caisse." }
  },
  solutions: {
    en: { title: "Agentic AI and custom software solutions", description: "Explore Helixium agentic AI workflows and custom software portfolio work for operational teams." },
    ar: { title: "حلول الذكاء الاصطناعي الوكيلي والبرمجيات المخصصة", description: "اكتشف سير عمل الذكاء الاصطناعي الوكيلي وأعمال البرمجيات المخصصة للفرق التشغيلية." },
    fr: { title: "Solutions d'IA agentique et de logiciels sur mesure", description: "Découvrez les workflows d'IA agentique et les réalisations logicielles pour les équipes opérationnelles." }
  },
  agentic: {
    en: { title: "Custom AI agents with human approval", description: "Design AI workflows that observe records, propose actions, act in context, and preserve an audit trail." },
    ar: { title: "وكلاء ذكاء اصطناعي مخصصون مع موافقة بشرية", description: "صمّم سير عمل يراقب السجلات ويقترح الإجراءات وينفذها ضمن السياق ويحفظ أثراً قابلاً للمراجعة." },
    fr: { title: "Agents IA sur mesure avec validation humaine", description: "Concevez des workflows qui observent les données, proposent des actions, agissent avec contexte et conservent une trace." }
  },
  custom: {
    en: { title: "Custom software development portfolio", description: "Explore Helixium portfolio work across e-commerce, reservations, construction, POS, restaurants, and interactive products." },
    ar: { title: "أعمال تطوير البرمجيات المخصصة", description: "استكشف أعمال Helixium في التجارة الإلكترونية والحجوزات والإنشاءات ونقاط البيع والمنتجات التفاعلية." },
    fr: { title: "Portfolio de développement logiciel sur mesure", description: "Découvrez des projets e-commerce, réservation, construction, caisse, restauration et produits interactifs." }
  },
  about: {
    en: { title: "About Helixium Solutions", description: "Helixium Solutions builds practical software for connected operations." },
    ar: { title: "عن Helixium Solutions", description: "تبني Helixium Solutions برمجيات عملية للعمليات المتصلة." },
    fr: { title: "À propos de Helixium Solutions", description: "Helixium Solutions crée des logiciels pratiques pour des opérations connectées." }
  },
  contact: {
    en: { title: "Contact Helixium Solutions", description: "Talk with Helixium about ERP, MatchPulse, agentic AI, or custom software." },
    ar: { title: "تواصل مع Helixium Solutions", description: "تحدث مع Helixium عن ERP أو MatchPulse أو الذكاء الاصطناعي الوكيلي أو البرمجيات المخصصة." },
    fr: { title: "Contacter Helixium Solutions", description: "Parlez à Helixium d'ERP, de MatchPulse, d'IA agentique ou de logiciels sur mesure." }
  }
};

export function localizedMetadata(locale: string, path: string, key: keyof typeof seo) {
  const safeLocale = (["en", "ar", "fr"].includes(locale) ? locale : "en") as Locale;
  const current = seo[key][safeLocale];
  const ogKey = ["accounting", "inventory", "sales-purchases", "pos", "manufacturing", "payroll", "field-service"].includes(key) ? `erp-${key}` : key;
  const canonical = safeLocale === "en" ? path : `/${safeLocale}${path}`;
  const ogImage = safeLocale === "en" ? `/og/${ogKey}.svg` : "/og/localized.svg";
  return {
    metadataBase: new URL("https://www.helixiumsolutions.com"),
    title: current.title,
    description: current.description,
    alternates: {
      canonical,
      languages: { en: path, ar: `/ar${path}`, fr: `/fr${path}`, "x-default": path }
    },
    openGraph: { title: current.title, description: current.description, url: `https://www.helixiumsolutions.com${canonical}`, type: "website" as const, siteName: "Helixium Solutions", images: [{ url: ogImage, width: 1200, height: 630, alt: current.title }] },
    twitter: { card: "summary_large_image" as const, title: current.title, description: current.description, images: [ogImage] },
    icons: { icon: [{ url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" }, { url: "/favicon.svg", type: "image/svg+xml" }, { url: "/media/brand/favicon.png", sizes: "32x32", type: "image/png" }], apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] }
  };
}

