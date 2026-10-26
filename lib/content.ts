export const showMatchPulseStrip = true;
export const showCustomerStories = false;

export const team = [
  { name: "Bassam Salame", role: "CEO", image: "/media/optimized/team-bassam.webp", alt: "Bassam Salame, CEO of Helixium Solutions", width: 367, height: 369 },
  { name: "Fatme Assi", role: "Digital Product Designer", image: "/media/optimized/team-fatme.webp", alt: "Fatme Assi, Digital Product Designer at Helixium Solutions", width: 1080, height: 1080 },
  { name: "Sahar Baaklini", role: "Marketing Coordinator", image: "/media/optimized/team-sahar.webp", alt: "Sahar Baaklini, Marketing Coordinator at Helixium Solutions", width: 800, height: 800 },
  { name: "Jad Salame", role: "Architect", image: "/media/optimized/team-jad.webp", alt: "Jad Salame, Architect at Helixium Solutions", width: 164, height: 213 }
];

export const teamByLocale = {
  en: team,
  ar: [
    { ...team[0], role: "الرئيس التنفيذي", alt: "بسام سلامة، الرئيس التنفيذي في Helixium Solutions" },
    { ...team[1], role: "مصممة منتجات رقمية", alt: "فاطمة عاصي، مصممة منتجات رقمية في Helixium Solutions" },
    { ...team[2], role: "منسقة التسويق", alt: "سحر بعقليني، منسقة التسويق في Helixium Solutions" },
    { ...team[3], role: "مهندس معماري", alt: "جاد سلامة، مهندس معماري في Helixium Solutions" }
  ],
  fr: [
    { ...team[0], role: "Directeur général", alt: "Bassam Salame, directeur général de Helixium Solutions" },
    { ...team[1], role: "Designer produit numérique", alt: "Fatme Assi, designer produit numérique chez Helixium Solutions" },
    { ...team[2], role: "Coordinatrice marketing", alt: "Sahar Baaklini, coordinatrice marketing chez Helixium Solutions" },
    { ...team[3], role: "Architecte", alt: "Jad Salame, architecte chez Helixium Solutions" }
  ]
} as const;

export const partners = [
  { name: "Medco", image: "/media/optimized/medco.webp", alt: "Medco logo" },
  { name: "Endomedix", image: "/media/optimized/endomedix.webp", alt: "Endomedix logo" },
  { name: "Gandour", image: "/media/optimized/gandour.webp", alt: "Gandour logo" },
  { name: "MOM", image: "/media/optimized/mom.webp", alt: "Master of Maintenance logo" }
];

export const portfolio = [
  { title: "Feel Nature e-commerce", client: "Gandour", built: "A product-led e-commerce storefront for the Feel Nature range.", stack: "Web storefront, product catalog, responsive commerce UI", image: "/media/optimized/portfolio-01.webp", alt: "Feel Nature e-commerce storefront" },
  { title: "Skincare e-commerce", client: "Portfolio project", built: "A visual skincare shop with product discovery and purchase flows.", stack: "Responsive e-commerce, product pages, content management", image: "/media/optimized/portfolio-02.webp", alt: "Skincare e-commerce website" },
  { title: "Construction and renovation website", client: "Portfolio project", built: "A project-led website for a construction and renovation company.", stack: "Marketing site, project gallery, lead capture", image: "/media/optimized/portfolio-03.webp", alt: "Construction and renovation company website" },
  { title: "Fitness studio and reservations", client: "Portfolio project", built: "A fitness studio site with a reservation system.", stack: "Marketing site, class discovery, reservation workflow", image: "/media/optimized/portfolio-05.webp", alt: "Fitness studio website and reservation system" },
  { title: "Retail POS", client: "Portfolio project", built: "A retail point-of-sale interface connected to operational records.", stack: "POS interface, inventory workflow, sales records", image: "/media/optimized/portfolio-06.webp", alt: "Retail point of sale interface" },
  { title: "Restaurant POS", client: "Portfolio project", built: "A restaurant point-of-sale experience for front-line teams.", stack: "POS interface, order workflow, service operations", image: "/media/optimized/portfolio-07.webp", alt: "Restaurant point of sale interface" },
  { title: "Ball game", client: "Portfolio project", built: "A ball game experience built around a focused interactive flow.", stack: "Interactive web experience, responsive UI", image: "/media/optimized/portfolio-03.webp", alt: "Interactive ball game web experience" }
];

export const activityItems = [
  { icon: "↔", title: "Bank transactions matched", detail: "Reconciliation queue prepared for review", time: "just now" },
  { icon: "→", title: "Payment reminders prepared", detail: "Drafts ready to send from receivables", time: "2 min" },
  { icon: "＋", title: "Reorder PO drafted", detail: "Low-stock signal routed for approval", time: "6 min" },
  { icon: "⌁", title: "Work order dispatched", detail: "Technician assignment proposed from the board", time: "9 min" },
  { icon: "!", title: "Lot expiry flagged", detail: "Inventory exception added to your queue", time: "12 min" }
];

export const erpModules = [
  { slug: "accounting", title: "Accounting", copy: "Payments, receipts, journal vouchers, trial balance, P&L, balance sheet, cash flow, budgets, expenses, and bank reconciliation." },
  { slug: "inventory", title: "Inventory", copy: "Items, warehouses, categories, lots, stock adjustments, deliveries, receipts, and low-stock reporting." },
  { slug: "sales-purchases", title: "Sales and purchases", copy: "Invoices, orders, quotations, returns, recurring transactions, deposits, reminders, RFQs, receptions, and purchase returns." },
  { slug: "pos", title: "Point of sale", copy: "Point-of-sale sessions connected to the wider operating records." },
  { slug: "manufacturing", title: "Manufacturing", copy: "Production orders, recipes, production transfers, and unbuild orders." },
  { slug: "payroll", title: "Payroll", copy: "Employees, contracts, and pay slips." },
  { slug: "field-service", title: "Field service and repair", copy: "Work orders, repair orders, dispatch, checklists, service contracts, requests, warranty-aware workflows, and technician jobs." }
];

export const translations = {
  en: {
    nav: { erp: "ERP", field: "Field service", crypto: "CryptoSettle - Early access", match: "MatchPulse", solutions: "Solutions", plans: "Pricing", customers: "Customers", about: "About", contact: "Contact" },
    ctaTrial: "Start your 14-day ERP trial", ctaErp: "Try the ERP free", ctaContact: "Talk to us", ctaDemo: "Book a demo",
    toggleNavigation: "Toggle navigation", mainNavigation: "Main navigation", languageSwitcher: "Language switcher", mobileNavigation: "Mobile navigation", languageNames: ["English", "Arabic", "French"],
    homeTitle: "The ERP that does the work, so your team doesn't have to.",
    homeLead: "Accounting, inventory, POS, field service and payroll in one friendly system, in English, Arabic and French. Agents prepare the busywork and you approve with one click.",
    agentChip: "AI agents that ask before they act",
    partners: "Selected relationships",
    threeWays: "Three ways to work with us",
    homeThreeLead: "Start with the platform you need today, then extend it around the way your team actually operates.",
    securityTitle: "A little automation, with you in control.",
    securityLead: "Agents prepare routine work, show you the context, and wait for your approval before anything consequential happens.",
    teamTitle: "The people behind the work",
    finalTitle: "Bring the busywork. We will make it lighter."
  },
  ar: {
    nav: { erp: "نظام ERP", field: "الخدمة الميدانية", crypto: "CryptoSettle - وصول مبكر", match: "MatchPulse", solutions: "الحلول", plans: "الأسعار", customers: "العملاء", about: "من نحن", contact: "تواصل معنا" },
    ctaTrial: "ابدأ تجربة ERP لمدة 14 يوماً", ctaErp: "جرّب ERP مجاناً", ctaContact: "تواصل معنا", ctaDemo: "احجز عرضاً",
    toggleNavigation: "فتح قائمة التنقل", mainNavigation: "التنقل الرئيسي", languageSwitcher: "مبدّل اللغة", mobileNavigation: "التنقل على الهاتف", languageNames: ["الإنجليزية", "العربية", "الفرنسية"],
    homeTitle: "نظام ERP ينجز العمل، حتى لا يضطر فريقك إلى ذلك.",
    homeLead: "المحاسبة والمخزون ونقاط البيع والخدمة الميدانية والرواتب في نظام واحد ودود بالعربية والإنجليزية والفرنسية. يجهّز الوكلاء العمل المتكرر وتوافق أنت بنقرة واحدة.",
    agentChip: "وكلاء ذكاء اصطناعي يسألون قبل التنفيذ",
    partners: "علاقات مختارة",
    threeWays: "ثلاث طرق للعمل معنا",
    homeThreeLead: "ابدأ بالمنصة التي تحتاجها اليوم، ثم وسّعها بما يناسب طريقة عمل فريقك.",
    securityTitle: "أتمتة بسيطة، وأنت دائماً في السيطرة.",
    securityLead: "يجهّز الوكلاء العمل المتكرر ويعرض السياق وينتظر موافقتك قبل تنفيذ أي خطوة مهمة.",
    teamTitle: "الأشخاص وراء العمل",
    finalTitle: "أحضر العمل المتكرر، وسنجعله أخف."
  },
  fr: {
    nav: { erp: "ERP", field: "Service terrain", crypto: "CryptoSettle - accès anticipé", match: "MatchPulse", solutions: "Nos solutions", plans: "Tarifs", customers: "Clients", about: "À propos", contact: "Nous contacter" },
    ctaTrial: "Démarrer l'essai ERP de 14 jours", ctaErp: "Essayer l'ERP gratuitement", ctaContact: "Nous contacter", ctaDemo: "Réserver une démo",
    toggleNavigation: "Ouvrir la navigation", mainNavigation: "Navigation principale", languageSwitcher: "Sélecteur de langue", mobileNavigation: "Navigation mobile", languageNames: ["Anglais", "Arabe", "Français"],
    homeTitle: "L'ERP qui fait le travail, pour que votre équipe n'ait pas à le faire.",
    homeLead: "Comptabilité, stocks, caisse, service terrain et paie dans un système convivial en français, anglais et arabe. Les agents préparent le travail répétitif et vous validez en un clic.",
    agentChip: "Des agents IA qui demandent avant d'agir",
    partners: "Relations sélectionnées",
    threeWays: "Trois façons de travailler avec nous",
    homeThreeLead: "Commencez par la plateforme dont vous avez besoin, puis adaptez-la au fonctionnement réel de votre équipe.",
    securityTitle: "Une automatisation simple, sous votre contrôle.",
    securityLead: "Les agents préparent les tâches répétitives, montrent le contexte et attendent votre validation avant toute action importante.",
    teamTitle: "Les personnes derrière le travail",
    finalTitle: "Apportez le travail répétitif. Nous l'allégerons."
  }
} as const;

export type Locale = keyof typeof translations;
