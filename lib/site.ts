import type { Locale } from "./content";

export const erpUrl = process.env.NEXT_PUBLIC_ERP_APP_URL || "https://erp.helixiumsolutions.com/signup";
export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "";
export const whatsappUrl = "https://wa.me/96171495273";

export function localizedPath(locale: string | undefined, path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return locale && locale !== "en" ? `/${locale}${cleanPath}` : cleanPath;
}

type SeoCopy = { title: string; description: string };
const seo: Record<string, Record<Locale, SeoCopy>> = {
  home: {
    en: { title: "ERP software for connected operations", description: "Helixium ERP connects accounting, inventory, sales, field service, POS, manufacturing, payroll, and agent-assisted workflows." },
    ar: { title: "برنامج ERP للعمليات المتصلة", description: "يربط Helixium ERP المحاسبة والمخزون والمبيعات والخدمة الميدانية ونقاط البيع والتصنيع والرواتب وسير العمل المدعوم بالوكلاء." },
    fr: { title: "Logiciel ERP pour des opérations connectées", description: "Helixium ERP relie comptabilité, stocks, ventes, service terrain, caisse, production, paie et workflows assistés par des agents." }
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
    en: { title: "Field service and repair order software", description: "Manage work orders, repair orders, dispatch, checklists, contracts, warranty workflows, and technician jobs." },
    ar: { title: "برنامج إدارة الخدمة الميدانية وأوامر الإصلاح", description: "أدر أوامر العمل والإصلاح والتوزيع وقوائم التحقق والعقود وسير عمل الضمان ومهام الفنيين." },
    fr: { title: "Logiciel de service terrain et ordres de réparation", description: "Gérez ordres de travail et de réparation, dispatch, checklists, contrats, garanties et interventions." }
  },
  field: {
    en: { title: "Field service management and repair order software", description: "Manage work orders, repair orders, dispatch, checklists, service contracts, warranty workflows, and technician jobs." },
    ar: { title: "برنامج إدارة الخدمة الميدانية وأوامر الإصلاح", description: "نسّق أوامر العمل والإصلاح والتوزيع وقوائم التحقق والعقود وسير عمل الضمان ومهام الفنيين." },
    fr: { title: "Logiciel de gestion du service terrain et des réparations", description: "Coordonnez ordres de travail et de réparation, dispatch, checklists, contrats et interventions." }
  },
  crypto: {
    en: { title: "CryptoSettle USDT payment reconciliation", description: "CryptoSettle monitors supported chains, matches stablecoin payments to invoices, exports statements, and sends webhooks." },
    ar: { title: "مطابقة مدفوعات USDT مع CryptoSettle", description: "يراقب CryptoSettle السلاسل المدعومة ويطابق المدفوعات بالفواتير ويصدر الكشوف ويرسل إشعارات الويب." },
    fr: { title: "Rapprochement des paiements USDT avec CryptoSettle", description: "CryptoSettle surveille les chaînes prises en charge, rapproche les paiements, exporte les relevés et envoie des webhooks." }
  },
  match: {
    en: { title: "MatchPulse founding venues", description: "Join the MatchPulse founding venues programme. The first 10 venues receive 50% off." },
    ar: { title: "برنامج الأماكن المؤسسة لـ MatchPulse", description: "انضم إلى برنامج الأماكن المؤسسة لـ MatchPulse. تحصل أول عشرة أماكن على خصم 50٪." },
    fr: { title: "Programme des lieux fondateurs MatchPulse", description: "Rejoignez le programme des lieux fondateurs MatchPulse. Les dix premiers lieux bénéficient de 50 % de réduction." }
  },
  plans: {
    en: { title: "Helixium ERP plans and pricing", description: "Compare Pantheon, Olympus, Elysium, and the CryptoSettle add-on with market pricing for Lebanon, the Gulf, the US, and France." },
    ar: { title: "خطط وأسعار Helixium ERP", description: "قارن بين Pantheon وOlympus وElysium وإضافة CryptoSettle مع أسعار الأسواق في لبنان والخليج والولايات المتحدة وفرنسا." },
    fr: { title: "Offres et tarifs Helixium ERP", description: "Comparez Pantheon, Olympus, Elysium et l'extension CryptoSettle avec des tarifs par marché au Liban, dans le Golfe, aux États-Unis et en France." }
  },
  compare: {
    en: { title: "Odoo alternative for Lebanon and the Gulf", description: "Compare Helixium ERP with Odoo, QuickBooks Online, and Zoho Books on pricing model, languages, field service, POS, deployment, and approval-aware automation." },
    ar: { title: "بديل Odoo في لبنان والخليج", description: "قارن Helixium ERP مع Odoo وQuickBooks Online وZoho Books في نموذج التسعير واللغات والخدمة الميدانية ونقاط البيع." },
    fr: { title: "Alternative à Odoo au Liban et dans le Golfe", description: "Comparez Helixium ERP à Odoo, QuickBooks Online et Zoho Books sur le modèle tarifaire, les langues, le service terrain et la caisse." }
  },
  solutions: {
    en: { title: "Agentic AI and custom software solutions", description: "Explore Helixium agentic AI workflows and custom software portfolio work for operational teams." },
    ar: { title: "حلول الذكاء الاصطناعي الوكيلي والبرمجيات المخصصة", description: "اكتشف سير عمل الذكاء الاصطناعي الوكيلي وأعمال البرمجيات المخصصة للفرق التشغيلية." },
    fr: { title: "Solutions d'IA agentique et de logiciels sur mesure", description: "Découvrez les workflows d'IA agentique et les réalisations logicielles pour les équipes opérationnelles." }
  },
  agentic: {
    en: { title: "Custom AI agents with human approval", description: "Design approval-aware AI workflows that observe records, propose actions, act in context, and preserve an audit trail." },
    ar: { title: "وكلاء ذكاء اصطناعي مخصصون مع موافقة بشرية", description: "صمّم سير عمل يراقب السجلات ويقترح الإجراءات وينفذها ضمن السياق ويحفظ أثراً قابلاً للمراجعة." },
    fr: { title: "Agents IA sur mesure avec validation humaine", description: "Concevez des workflows qui observent les données, proposent des actions, agissent avec contexte et conservent une trace." }
  },
  custom: {
    en: { title: "Custom software development portfolio", description: "Explore Helixium portfolio work across e-commerce, reservations, construction, POS, restaurants, and interactive products." },
    ar: { title: "أعمال تطوير البرمجيات المخصصة", description: "استكشف أعمال Helixium في التجارة الإلكترونية والحجوزات والإنشاءات ونقاط البيع والمنتجات التفاعلية." },
    fr: { title: "Portfolio de développement logiciel sur mesure", description: "Découvrez des projets e-commerce, réservation, construction, caisse, restauration et produits interactifs." }
  },
  customers: {
    en: { title: "Helixium ERP customer stories", description: "See how MOM and Endomedix use Helixium work-order and repair-order workflows." },
    ar: { title: "قصص عملاء Helixium ERP", description: "اكتشف كيف تستخدم MOM وEndomedix سير عمل أوامر العمل والإصلاح في Helixium." },
    fr: { title: "Histoires clients Helixium ERP", description: "Découvrez comment MOM et Endomedix utilisent les workflows d'ordres de travail et de réparation Helixium." }
  },
  about: {
    en: { title: "About Helixium Solutions", description: "Helixium Solutions builds practical software for connected operations." },
    ar: { title: "عن Helixium Solutions", description: "تبني Helixium Solutions برمجيات عملية للعمليات المتصلة." },
    fr: { title: "À propos de Helixium Solutions", description: "Helixium Solutions crée des logiciels pratiques pour des opérations connectées." }
  },
  contact: {
    en: { title: "Contact Helixium Solutions", description: "Talk with Helixium about ERP, CryptoSettle, MatchPulse, agentic AI, or custom software." },
    ar: { title: "تواصل مع Helixium Solutions", description: "تحدث مع Helixium عن ERP أو CryptoSettle أو MatchPulse أو الذكاء الاصطناعي الوكيلي أو البرمجيات المخصصة." },
    fr: { title: "Contacter Helixium Solutions", description: "Parlez à Helixium d'ERP, CryptoSettle, MatchPulse, d'IA agentique ou de logiciels sur mesure." }
  }
};

export function localizedMetadata(locale: string, path: string, key: keyof typeof seo) {
  const safeLocale = (["en", "ar", "fr"].includes(locale) ? locale : "en") as Locale;
  const current = seo[key][safeLocale];
  const ogKey = ["accounting", "inventory", "sales-purchases", "pos", "manufacturing", "payroll", "field-service"].includes(key) ? `erp-${key}` : key;
  const canonical = safeLocale === "en" ? path : `/${safeLocale}${path}`;
  return {
    title: current.title,
    description: current.description,
    alternates: {
      canonical,
      languages: { en: path, ar: `/ar${path}`, fr: `/fr${path}`, "x-default": path }
    },
    openGraph: { title: current.title, description: current.description, url: `https://www.helixiumsolutions.com${canonical}`, type: "website" as const, images: [{ url: `/og/${ogKey}.svg`, width: 1200, height: 630, alt: current.title }] },
    twitter: { card: "summary_large_image" as const, title: current.title, description: current.description, images: [`/og/${ogKey}.svg`] }
  };
}

export const navItems = [
  { label: "ERP", href: "/erp/" },
  { label: "Field service", href: "/field-service/" },
  { label: "CryptoSettle", href: "/cryptosettle/" },
  { label: "Solutions", href: "/solutions/" },
  { label: "Plans", href: "/plans/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" }
];
