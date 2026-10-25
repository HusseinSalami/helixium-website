export const showMatchPulseStrip = true;
export const showCustomerStories = false;

export const team = [
  { name: "Bassam Salame", role: "CEO", image: "/media/optimized/team-bassam.webp", alt: "Bassam Salame, CEO of Helixium Solutions", width: 367, height: 369 },
  { name: "Fatme Assi", role: "Digital Product Designer", image: "/media/optimized/team-fatme.webp", alt: "Fatme Assi, Digital Product Designer at Helixium Solutions", width: 1080, height: 1080 },
  { name: "Sahar Baaklini", role: "Marketing Coordinator", image: "/media/optimized/team-sahar.webp", alt: "Sahar Baaklini, Marketing Coordinator at Helixium Solutions", width: 800, height: 800 },
  { name: "Jad Salame", role: "Architect", image: "/media/optimized/team-jad.webp", alt: "Jad Salame, Architect at Helixium Solutions", width: 164, height: 213 }
];

export const partners = [
  { name: "Medco", image: "/media/optimized/medco.webp", alt: "Medco partner logo" },
  { name: "Endomedix", image: "/media/optimized/endomedix.webp", alt: "Endomedix partner logo" },
  { name: "Gandour", image: "/media/optimized/gandour.webp", alt: "Gandour partner logo" },
  { name: "MOM", image: "/media/optimized/mom.webp", alt: "Master of Maintenance logo" }
];

export const portfolio = [
  { title: "Feel Nature e-commerce", client: "Gandour", built: "A product-led e-commerce storefront for the Feel Nature range.", stack: "Web storefront, product catalog, responsive commerce UI", result: "Result placeholder: add approved conversion or delivery outcome.", image: "/media/optimized/portfolio-01.webp", alt: "Feel Nature e-commerce storefront" },
  { title: "Skincare e-commerce", client: "Client name to confirm", built: "A visual skincare shop with product discovery and purchase flows.", stack: "Responsive e-commerce, product pages, content management", result: "Result placeholder: add approved outcome.", image: "/media/optimized/portfolio-02.webp", alt: "Skincare e-commerce website" },
  { title: "Construction and renovation website", client: "Client name to confirm", built: "A project-led website for a construction and renovation company.", stack: "Marketing site, project gallery, lead capture", result: "Result placeholder: add approved lead or launch outcome.", image: "/media/optimized/portfolio-03.webp", alt: "Construction and renovation company website" },
  { title: "Fitness studio and reservations", client: "Client name to confirm", built: "A fitness studio site with a reservation system.", stack: "Marketing site, class discovery, reservation workflow", result: "Result placeholder: add approved booking outcome.", image: "/media/optimized/portfolio-05.webp", alt: "Fitness studio website and reservation system" },
  { title: "Retail POS", client: "Client name to confirm", built: "A retail point-of-sale interface connected to operational records.", stack: "POS interface, inventory workflow, sales records", result: "Result placeholder: add approved operational outcome.", image: "/media/optimized/portfolio-06.webp", alt: "Retail point of sale interface" },
  { title: "Restaurant POS", client: "Client name to confirm", built: "A restaurant point-of-sale experience for front-line teams.", stack: "POS interface, order workflow, service operations", result: "Result placeholder: add approved operational outcome.", image: "/media/optimized/portfolio-07.webp", alt: "Restaurant point of sale interface" },
  { title: "Ball game", client: "Client name to confirm", built: "A ball game experience built around a focused interactive flow.", stack: "Interactive web experience, responsive UI", result: "Result placeholder: add approved engagement outcome.", image: "/media/optimized/portfolio-03.webp", alt: "Interactive ball game web experience" }
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
    nav: { erp: "ERP", field: "Field service", crypto: "CryptoSettle", match: "MatchPulse", solutions: "Solutions", plans: "Plans", customers: "Customers", about: "About", contact: "Contact" },
    ctaTrial: "Start free trial", ctaDemo: "Book a demo",
    homeTitle: "The ERP that does the work, so your team doesn't have to.",
    homeLead: "Accounting, inventory, POS, field service and payroll in one friendly system, in English, Arabic and French. Agents prepare the busywork and you approve with one click.",
    agentChip: "AI agents that ask before they act",
    partners: "Partners and product teams",
    threeWays: "Three ways to work with us",
    homeThreeLead: "Start with the platform you need today, then extend it around the way your team actually operates.",
    securityTitle: "A little automation, with you in control.",
    securityLead: "Agents prepare routine work, show you the context, and wait for your approval before anything consequential happens.",
    caseTitle: "Operational software should leave a better handoff.",
    caseLead: "MOM and Endomedix use the ERP's work-order and repair-order foundation. Approved outcomes and customer quotes are intentionally left for the team to add.",
    teamTitle: "The people behind the work",
    finalTitle: "Bring the busywork. We will make it lighter.",
    formPending: "Machine-drafted, pending native review."
  },
  ar: {
    nav: { erp: "نظام ERP", field: "الخدمة الميدانية", crypto: "CryptoSettle", match: "MatchPulse", solutions: "الحلول", plans: "الخطط", customers: "العملاء", about: "من نحن", contact: "تواصل معنا" },
    ctaTrial: "ابدأ التجربة المجانية", ctaDemo: "احجز عرضاً",
    homeTitle: "نظام ERP ينجز العمل، حتى لا يضطر فريقك إلى ذلك.",
    homeLead: "المحاسبة والمخزون ونقاط البيع والخدمة الميدانية والرواتب في نظام واحد ودود بالعربية والإنجليزية والفرنسية. يجهّز الوكلاء العمل المتكرر وتوافق أنت بنقرة واحدة.",
    agentChip: "وكلاء ذكاء اصطناعي يسألون قبل التنفيذ",
    partners: "شركاء وفرق المنتجات",
    threeWays: "ثلاث طرق للعمل معنا",
    homeThreeLead: "ابدأ بالمنصة التي تحتاجها اليوم، ثم وسّعها بما يناسب طريقة عمل فريقك.",
    securityTitle: "أتمتة بسيطة، وأنت دائماً في السيطرة.",
    securityLead: "يجهّز الوكلاء العمل المتكرر ويعرض السياق وينتظر موافقتك قبل تنفيذ أي خطوة مهمة.",
    caseTitle: "يجب أن يترك البرنامج التشغيلي تسليماً أفضل.",
    caseLead: "تستخدم MOM وEndomedix أساس أوامر العمل وأوامر الإصلاح في ERP. تُترك النتائج والاقتباسات المعتمدة للفريق لإضافتها.",
    teamTitle: "الأشخاص وراء العمل",
    finalTitle: "أحضر العمل المتكرر، وسنجعله أخف.",
    formPending: "مسودة آلية بانتظار المراجعة من متحدث أصلي."
  },
  fr: {
    nav: { erp: "ERP", field: "Service terrain", crypto: "CryptoSettle", match: "MatchPulse", solutions: "Solutions", plans: "Offres", customers: "Clients", about: "À propos", contact: "Contact" },
    ctaTrial: "Démarrer l'essai gratuit", ctaDemo: "Réserver une démo",
    homeTitle: "L'ERP qui fait le travail, pour que votre équipe n'ait pas à le faire.",
    homeLead: "Comptabilité, stocks, caisse, service terrain et paie dans un système convivial en français, anglais et arabe. Les agents préparent le travail répétitif et vous validez en un clic.",
    agentChip: "Des agents IA qui demandent avant d'agir",
    partners: "Partenaires et équipes produit",
    threeWays: "Trois façons de travailler avec nous",
    homeThreeLead: "Commencez par la plateforme dont vous avez besoin, puis adaptez-la au fonctionnement réel de votre équipe.",
    securityTitle: "Une automatisation simple, sous votre contrôle.",
    securityLead: "Les agents préparent les tâches répétitives, montrent le contexte et attendent votre validation avant toute action importante.",
    caseTitle: "Un logiciel opérationnel doit améliorer le passage de relais.",
    caseLead: "MOM et Endomedix utilisent la base ERP des ordres de travail et de réparation. Les résultats approuvés et les citations restent à compléter par l'équipe.",
    teamTitle: "Les personnes derrière le travail",
    finalTitle: "Apportez le travail répétitif. Nous l'allégerons.",
    formPending: "Brouillon automatique, en attente d'une relecture native."
  }
} as const;

export type Locale = keyof typeof translations;
