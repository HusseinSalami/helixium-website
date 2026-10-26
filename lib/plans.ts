export type PlanKey = "pantheon" | "olympus" | "elysium";
export type PlanAvailability = boolean | "contact";
export type BundleStatus = "included" | "not-included" | "addon";

export type BundleRow = {
  key: string;
  label: string;
  plans: Record<PlanKey, BundleStatus>;
};

export const plans = [
  {
    key: "pantheon" as const,
    name: "Pantheon",
    audience: "Small teams",
    copy: "Start with the records and routines your team needs every day.",
    cta: "Start the 14-day trial",
    features: ["Accounting", "Invoicing", "Stock", "Purchases", "Sales orders", "Bank reconciliation", "Standard reports", "Basic AI"]
  },
  {
    key: "olympus" as const,
    name: "Olympus",
    audience: "Growing and multi-company teams",
    copy: "Add front-line workflows and automation as operations grow.",
    cta: "Start a trial or book a demo",
    features: ["Everything in Pantheon", "POS", "Field service and repair orders", "Payroll", "Manufacturing", "Budgets", "Advanced reports", "Recurring transactions", "Notifications", "Workflow automation"]
  },
  {
    key: "elysium" as const,
    name: "Elysium",
    audience: "Enterprise",
    copy: "Shape the platform around complex operating models and integrations.",
    cta: "Talk to us",
    features: ["Everything in Olympus", "Customization", "Importer and configuration", "External integrations and APIs", "Advanced rules", "Advanced AI"]
  }
] as const;

export const planFeatures = {
  en: {
    pantheon: plans[0].features,
    olympus: plans[1].features,
    elysium: plans[2].features
  },
  ar: {
    pantheon: ["المحاسبة", "الفوترة", "المخزون", "المشتريات", "أوامر البيع", "مطابقة الحسابات البنكية", "التقارير الأساسية", "ذكاء اصطناعي أساسي"],
    olympus: ["كل ما في Pantheon", "نقاط البيع", "الخدمة الميدانية وأوامر الإصلاح", "الرواتب", "التصنيع", "الموازنات", "التقارير المتقدمة", "المعاملات المتكررة", "الإشعارات", "أتمتة سير العمل"],
    elysium: ["كل ما في Olympus", "التخصيص", "الاستيراد والإعداد", "التكاملات الخارجية وواجهات API", "القواعد المتقدمة", "الذكاء الاصطناعي المتقدم"]
  },
  fr: {
    pantheon: ["Comptabilité", "Facturation", "Stocks", "Achats", "Commandes de vente", "Rapprochement bancaire", "Rapports standards", "IA de base"],
    olympus: ["Tout Pantheon", "Caisse", "Service terrain et ordres de réparation", "Paie", "Production", "Budgets", "Rapports avancés", "Transactions récurrentes", "Notifications", "Automatisation des workflows"],
    elysium: ["Tout Olympus", "Personnalisation", "Import et configuration", "Intégrations externes et API", "Règles avancées", "IA avancée"]
  }
} as const;

const included = { pantheon: "included", olympus: "included", elysium: "included" } as const;
const olympusPlus = { pantheon: "not-included", olympus: "included", elysium: "included" } as const;
const elysiumOnly = { pantheon: "not-included", olympus: "not-included", elysium: "included" } as const;
const addon = { pantheon: "addon", olympus: "addon", elysium: "addon" } as const;

export const bundleRows: BundleRow[] = [
  { key: "accounting", label: "Accounting", plans: included },
  { key: "invoicing", label: "Invoicing", plans: included },
  { key: "inventory", label: "Stock", plans: included },
  { key: "purchasing", label: "Purchases", plans: included },
  { key: "salesOrders", label: "Sales orders", plans: included },
  { key: "bankReconciliation", label: "Bank reconciliation", plans: included },
  { key: "standardReports", label: "Standard reports", plans: included },
  { key: "basicAi", label: "Basic AI", plans: included },
  { key: "pos", label: "Point of sale", plans: olympusPlus },
  { key: "fieldService", label: "Field service and repair orders", plans: olympusPlus },
  { key: "payroll", label: "Payroll", plans: olympusPlus },
  { key: "manufacturing", label: "Manufacturing", plans: olympusPlus },
  { key: "budgets", label: "Budgets", plans: olympusPlus },
  { key: "advancedReports", label: "Advanced reports", plans: olympusPlus },
  { key: "recurringTransactions", label: "Recurring transactions", plans: olympusPlus },
  { key: "notifications", label: "Notifications", plans: olympusPlus },
  { key: "workflowAutomation", label: "Workflow automation", plans: olympusPlus },
  { key: "customization", label: "Customization", plans: elysiumOnly },
  { key: "importerConfiguration", label: "Importer and configuration", plans: elysiumOnly },
  { key: "externalIntegrations", label: "External integrations and APIs", plans: elysiumOnly },
  { key: "advancedRules", label: "Advanced rules", plans: elysiumOnly },
  { key: "advancedAi", label: "Advanced AI", plans: elysiumOnly },
  { key: "cryptosettle", label: "CryptoSettle add-on", plans: addon }
];

export const moduleLabels = bundleRows.map((row) => [row.key, row.label] as const);

export const modulePlanMatrix = Object.fromEntries(
  bundleRows.map((row) => [row.key, row.plans])
) as Record<string, Record<PlanKey, BundleStatus>>;

export const planFaqs = [
  { question: "What does the 14-day trial include?", answer: "The trial includes the full Olympus bundle for 14 days, including POS, field service and repair orders, payroll, manufacturing, budgets, advanced reports, recurring transactions, notifications, and workflow automation." },
  { question: "What happens when the trial ends?", answer: "We will help you choose the plan that fits your team. You can continue with a paid plan or talk with us about the next step before billing begins." },
  { question: "How does annual billing work?", answer: "Annual billing is priced at 10 months, so you receive two months free compared with paying monthly. Prices are tax-exclusive." },
  { question: "How does onboarding work?", answer: "Onboarding is a one-time fee quoted with your setup. We confirm the scope, data preparation, configuration, and training needs with you." },
  { question: "Can we switch plans?", answer: "Yes. Talk with us when your team or operating model changes and we will help you move to the right bundle." },
  { question: "How is CryptoSettle billed?", answer: "CryptoSettle starts with a 30-day pilot. After that, it is $29 USD per month plus 0.15% of matched volume, capped at $299 USD, as an ERP add-on or standalone service." },
  { question: "Is on-premise deployment available?", answer: "Cloud or on-premise options can be discussed with the Helixium team. Contact us so we can understand your environment and requirements." },
  { question: "What about local tax and e-invoicing requirements?", answer: "Local e-invoicing integration is on our roadmap. Talk to us before you buy so we can discuss your market and requirements." }
] as const;
