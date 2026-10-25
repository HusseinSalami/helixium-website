export type PlanKey = "pantheon" | "olympus" | "elysium";
export type PlanAvailability = boolean | "contact";

export const plans = [
  {
    key: "pantheon" as const,
    name: "Pantheon",
    audience: "Small teams",
    copy: "Start with the records and routines your team needs every day.",
    cta: "Start the 14-day trial",
    features: ["Invoicing", "Stock", "Accounting", "Standard reporting", "Basic AI prompting"]
  },
  {
    key: "olympus" as const,
    name: "Olympus",
    audience: "Growing and multi-company teams",
    copy: "Add front-line workflows and automation as operations grow.",
    cta: "Start a trial or book a demo",
    features: ["Everything in Pantheon", "POS", "Manufacturing", "Advanced reporting", "Workflow automation"]
  },
  {
    key: "elysium" as const,
    name: "Elysium",
    audience: "Enterprise",
    copy: "Shape the platform around complex operating models and integrations.",
    cta: "Talk to us",
    features: ["Everything in Olympus", "Full customization", "External integrations and APIs", "Advanced configuration and business rules", "Advanced AI"]
  }
];

export const modulePlanMatrix: Record<string, Record<PlanKey, PlanAvailability>> = {
  accounting: { pantheon: true, olympus: true, elysium: true },
  inventory: { pantheon: true, olympus: true, elysium: true },
  salesPurchases: { pantheon: true, olympus: true, elysium: true },
  reporting: { pantheon: true, olympus: true, elysium: true },
  pos: { pantheon: false, olympus: true, elysium: true },
  manufacturing: { pantheon: false, olympus: true, elysium: true },
  payroll: { pantheon: "contact", olympus: "contact", elysium: "contact" },
  fieldService: { pantheon: "contact", olympus: "contact", elysium: "contact" },
  workflowAutomation: { pantheon: false, olympus: true, elysium: true },
  customization: { pantheon: false, olympus: false, elysium: true },
  externalIntegrations: { pantheon: false, olympus: false, elysium: true },
  basicAi: { pantheon: true, olympus: true, elysium: true },
  advancedAi: { pantheon: false, olympus: false, elysium: true }
};

export const moduleLabels = [
  ["accounting", "Accounting"],
  ["inventory", "Inventory"],
  ["salesPurchases", "Sales and purchases"],
  ["reporting", "Reporting"],
  ["pos", "Point of sale"],
  ["manufacturing", "Manufacturing"],
  ["payroll", "Payroll"],
  ["fieldService", "Field service"],
  ["workflowAutomation", "Workflow automation"],
  ["customization", "Customization"],
  ["externalIntegrations", "External integrations"],
  ["basicAi", "Basic AI prompting"],
  ["advancedAi", "Advanced AI"]
] as const;
