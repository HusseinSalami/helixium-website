import Link from "next/link";
import Image from "next/image";
import { partners, showCustomerStories, showMatchPulseStrip, teamByLocale, translations, type Locale } from "../lib/content";
import { erpUrl, localizedPath, whatsappUrl } from "../lib/site";
import { StructuredData, organizationJsonLd } from "./StructuredData";
import { ErpProductMock } from "./ErpProductMock";
import { MarketPricing } from "./MarketPricing";
import { SavingsCalculator } from "./SavingsCalculator";

const localizedHome = {
  en: {
    trusted: "Trusted relationships", waysTitle: "One friendly partner for the work ahead.", flagship: "Flagship", flagshipTitle: "Helixium ERP", flagshipCopy: "Accounting, inventory, sales, POS, manufacturing, payroll and field service in one clear workspace.", flagshipLink: "Explore the ERP",
    askFirst: "Ask first", agentsTitle: "Custom AI agents", agentsCopy: "Agents prepare the busywork, ask before they act, and give your team a simple approval step.", agentsLink: "Explore agentic AI",
    custom: "Custom software", customTitle: "Software for your edge", customCopy: "From Gandour's Feel Nature e-commerce work to focused operational tools, we build what the standard module cannot.", customLink: "View portfolio",
    pricingEyebrow: "Simple plans", pricingTitle: "Pick a plan and get moving.", pricingLead: "Tax-exclusive pricing. Onboarding is one-time.",
    agentsEyebrow: "How agents work", processTitle: "A little automation, with you in control.", processLead: "Agents prepare routine work, show you the context, and wait for your approval before anything consequential happens.",
    process: [["See the record", "Read the context already in your modules."], ["Prepare the next step", "Turn routine work into a clear suggestion."], ["You approve", "Keep people in charge of consequential actions."], ["The system acts", "Use the approved workflow and permissions."], ["Everything stays traceable", "Keep the decision easy to review later."]],
    founding: "Founding venues", matchTitle: "Give your venue a better match day.", matchLead: "MatchPulse is opening its first 10 venues at $99/month per venue.", matchCta: "Become a founding venue",
    teamLead: "A small team that cares about the details.", ready: "Ready when you are", finalTitle: "Bring your busywork. We will make it lighter.", finalLead: "Start with the ERP, book a demo, or message us on WhatsApp.", proof: ["Set up in minutes", "Flat price per company", "Cloud or on-premise"]
  },
  ar: {
    trusted: "علاقات موثوقة", waysTitle: "شريك واحد ودود للعمل القادم.", flagship: "المنتج الرئيسي", flagshipTitle: "Helixium ERP", flagshipCopy: "المحاسبة والمخزون والمبيعات ونقاط البيع والتصنيع والرواتب والخدمة الميدانية في مساحة عمل واضحة.", flagshipLink: "اكتشف نظام ERP",
    askFirst: "يسأل أولاً", agentsTitle: "وكلاء ذكاء اصطناعي مخصصون", agentsCopy: "يجهّز الوكلاء العمل المتكرر ويسألون قبل التنفيذ ويمنحون فريقك خطوة موافقة بسيطة.", agentsLink: "اكتشف الذكاء الوكيلي",
    custom: "برمجيات مخصصة", customTitle: "برمجيات تناسب عملك", customCopy: "من متجر Feel Nature الإلكتروني لشركة Gandour إلى الأدوات التشغيلية المتخصصة، نبني ما لا تغطيه الوحدة القياسية.", customLink: "شاهد الأعمال",
    pricingEyebrow: "خطط بسيطة", pricingTitle: "اختر خطتك وابدأ.", pricingLead: "الأسعار لا تشمل الضرائب. رسوم الإعداد لمرة واحدة.",
    agentsEyebrow: "كيف يعمل الوكلاء", processTitle: "أتمتة بسيطة، وأنت في السيطرة.", processLead: "يجهّز الوكلاء العمل المتكرر ويعرضون السياق وينتظرون موافقتك قبل أي خطوة مهمة.",
    process: [["شاهد السجل", "اقرأ السياق الموجود في وحداتك."], ["جهّز الخطوة التالية", "حوّل العمل المتكرر إلى اقتراح واضح."], ["أنت توافق", "حافظ على دور الأشخاص في القرارات المهمة."], ["ينفذ النظام", "استخدم سير العمل والصلاحيات المعتمدة."], ["كل شيء قابل للتتبع", "اجعل القرار سهلاً للمراجعة لاحقاً."]],
    founding: "الأماكن المؤسسة", matchTitle: "امنح مكانك يوم مباراة أفضل.", matchLead: "يفتح MatchPulse التسجيل لأول 10 أماكن بسعر 99 دولاراً شهرياً لكل مكان.", matchCta: "كن من الأماكن المؤسسة",
    teamLead: "فريق صغير يهتم بالتفاصيل.", ready: "مستعدون عندما تكون", finalTitle: "أحضر العمل المتكرر وسنجعله أخف.", finalLead: "ابدأ بنظام ERP أو احجز عرضاً أو راسلنا عبر WhatsApp.", proof: ["إعداد خلال دقائق", "سعر ثابت لكل شركة", "سحابي أو محلي"]
  },
  fr: {
    trusted: "Relations de confiance", waysTitle: "Un partenaire convivial pour la suite.", flagship: "Produit phare", flagshipTitle: "Helixium ERP", flagshipCopy: "Comptabilité, stocks, ventes, caisse, production, paie et service terrain dans un espace clair.", flagshipLink: "Découvrir l'ERP",
    askFirst: "Demander d'abord", agentsTitle: "Agents IA sur mesure", agentsCopy: "Les agents préparent le travail répétitif, demandent avant d'agir et offrent une validation simple.", agentsLink: "Découvrir l'IA agentique",
    custom: "Logiciel sur mesure", customTitle: "Un logiciel adapté à votre métier", customCopy: "Du e-commerce Feel Nature de Gandour aux outils opérationnels ciblés, nous construisons ce que le module standard ne couvre pas.", customLink: "Voir le portfolio",
    pricingEyebrow: "Offres simples", pricingTitle: "Choisissez une offre et avancez.", pricingLead: "Tarifs hors taxes. Mise en route facturée une fois.",
    agentsEyebrow: "Comment travaillent les agents", processTitle: "Une automatisation simple, sous votre contrôle.", processLead: "Les agents préparent les tâches répétitives, montrent le contexte et attendent votre validation.",
    process: [["Voir le dossier", "Lire le contexte déjà présent dans vos modules."], ["Préparer la suite", "Transformer la routine en suggestion claire."], ["Vous validez", "Garder les décisions importantes entre des mains humaines."], ["Le système agit", "Utiliser le workflow et les permissions validés."], ["Tout reste traçable", "Rendre chaque décision facile à revoir."]],
    founding: "Lieux fondateurs", matchTitle: "Offrez une meilleure journée de match à votre lieu.", matchLead: "MatchPulse ouvre ses 10 premiers lieux à 99 $ par mois et par lieu.", matchCta: "Devenir un lieu fondateur",
    teamLead: "Une petite équipe attentive aux détails.", ready: "Prêts quand vous l'êtes", finalTitle: "Apportez le travail répétitif. Nous l'allégerons.", finalLead: "Commencez avec l'ERP, réservez une démo ou écrivez-nous sur WhatsApp.", proof: ["Mise en route en quelques minutes", "Prix fixe par entreprise", "Cloud ou sur site"]
  }
} as const;

export function HomePage({ locale = "en" }: { locale?: string }) {
  const currentLocale = (["en", "ar", "fr"].includes(locale) ? locale : "en") as Locale;
  const copy = translations[currentLocale];
  const home = localizedHome[currentLocale];
  return <><StructuredData data={organizationJsonLd} />
    <section className="hero"><div className="shell hero-grid"><div className="hero-copy"><span className="eyebrow">Helixium ERP</span><h1>{currentLocale === "en" ? <>The ERP that does the work, so your team <span>doesn&apos;t have to.</span></> : copy.homeTitle}</h1><p className="hero-lede">{copy.homeLead}</p><div className="hero-chip">✦ {copy.agentChip}</div><div className="hero-actions"><a className="button button-primary" href={erpUrl}>{copy.ctaTrial} <span aria-hidden="true">↗</span></a><Link className="button button-secondary" href={localizedPath(locale, "/contact/")}>{copy.ctaDemo} <span aria-hidden="true">→</span></Link></div><div className="proof-row">{home.proof.map((item) => <span key={item}>{item}</span>)}</div></div><ErpProductMock locale={locale} /></div></section>
    <section className="logo-strip" aria-label={copy.partners}><div className="shell logo-strip-row"><span className="logo-label">{home.trusted}</span>{partners.map((partner) => <div className={`partner-logo partner-logo-${partner.name.toLowerCase()}`} key={partner.name}><Image src={partner.image} alt={currentLocale === "ar" ? `${partner.name} - شعار شريك` : currentLocale === "fr" ? `${partner.name} - logo partenaire` : partner.alt} width={150} height={74} sizes="150px" /><span>{partner.name === "MOM" ? currentLocale === "ar" ? "Master of Maintenance" : currentLocale === "fr" ? "Master of Maintenance" : "Master of Maintenance" : partner.name}</span></div>)}</div></section>
    <section className="section"><div className="shell"><div className="section-heading"><span className="eyebrow">{copy.threeWays}</span><h2>{home.waysTitle}</h2><p>{copy.homeThreeLead}</p></div><div className="cards three-cards">
      <article className="product-card"><span className="tile-icon tile-teal" aria-hidden="true">▦</span><span className="card-kicker">{home.flagship}</span><h3>{home.flagshipTitle}</h3><p>{home.flagshipCopy}</p><Link className="card-link" href={localizedPath(locale, "/erp/")}>{home.flagshipLink} <span>→</span></Link></article>
      <article className="product-card"><span className="tile-icon tile-indigo" aria-hidden="true">✦</span><span className="card-kicker">{home.askFirst}</span><h3>{home.agentsTitle}</h3><p>{home.agentsCopy}</p><Link className="card-link" href={localizedPath(locale, "/solutions/agentic-ai/")}>{home.agentsLink} <span>→</span></Link></article>
      <article className="product-card"><span className="tile-icon tile-amber" aria-hidden="true">◇</span><span className="card-kicker">{home.custom}</span><h3>{home.customTitle}</h3><p>{home.customCopy}</p><Link className="card-link" href={localizedPath(locale, "/solutions/custom-software/")}>{home.customLink} <span>→</span></Link></article>
    </div></div></section>
    <MarketPricing compact locale={locale} />
    <SavingsCalculator locale={locale} />
    <section className="section"><div className="shell"><div className="section-heading"><span className="eyebrow">{home.agentsEyebrow}</span><h2>{home.processTitle}</h2><p>{home.processLead}</p></div><div className="process">{home.process.map(([step, detail], index) => <div className="process-step" key={step}><span className="step-number">0{index + 1}</span><h3>{step}</h3><p>{detail}</p></div>)}</div></div></section>
    {showCustomerStories && <section className="section"><div className="shell case-highlight"><div><span className="eyebrow">Customer stories</span><h2>Real teams, real workflows.</h2><p>See how MOM and Endomedix use work-order and repair-order features.</p></div><Link className="button button-secondary" href={localizedPath(locale, "/customers/")}>Read the stories →</Link></div></section>}
    {showMatchPulseStrip && <section className="section-tight"><div className="shell matchpulse-strip"><div><span className="eyebrow">{home.founding}</span><h2>{home.matchTitle}</h2><p>{home.matchLead}</p></div><Link className="button button-primary" href={localizedPath(locale, "/matchpulse/")}>{home.matchCta} →</Link></div></section>}
    <section className="section"><div className="shell"><div className="section-heading"><span className="eyebrow">{copy.teamTitle}</span><h2>{home.teamLead}</h2></div><div className="team-grid">{teamByLocale[currentLocale].map((person) => <article className="team-card" key={person.name}><Image src={person.image} alt={person.alt} width={person.width} height={person.height} loading="eager" /><div><h3>{person.name}</h3><p>{person.role}</p></div></article>)}</div></div></section>
    <section className="cta"><span className="eyebrow">{home.ready}</span><h2>{home.finalTitle}</h2><p>{home.finalLead}</p><div className="hero-actions"><a className="button button-primary" href={erpUrl}>{copy.ctaTrial} ↗</a><Link className="button button-secondary" href={localizedPath(locale, "/contact/")}>{copy.ctaDemo} →</Link><a className="button button-secondary" href={whatsappUrl}>WhatsApp ↗</a></div></section>
  </>;
}
