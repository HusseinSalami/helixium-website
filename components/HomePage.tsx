import Link from "next/link";
import Image from "next/image";
import { partners, showCustomerStories, showMatchPulseStrip, teamByLocale, translations, type Locale } from "../lib/content";
import { erpUrl, localizedPath, whatsappUrl } from "../lib/site";
import { StructuredData, organizationJsonLd } from "./StructuredData";
import { ErpProductMock } from "./ErpProductMock";

const localizedHome = {
  en: {
    eyebrow: "Helixium Solutions",
    title: "Software that runs your operations.",
    lead: "One company for the software that keeps your work moving: Helixium ERP, custom AI agents, custom software, and MatchPulse.",
    chip: "Practical tools for the work ahead",
    pathsTitle: "Choose the path that fits your next step.",
    erpPath: ["ERP", "Helixium ERP", "Accounting, inventory, sales, POS, field service, payroll, and more in one friendly workspace.", "Explore the ERP"],
    agentsPath: ["Ask first", "Custom AI agents", "Agents that prepare routine work, show the context, and wait for your approval.", "Explore agentic AI"],
    customPath: ["Build what is missing", "Custom software", "From Gandour's Feel Nature e-commerce work to focused operational tools, we build around the job.", "View the portfolio"],
    flagshipEyebrow: "ERP flagship",
    flagshipTitle: "A calmer home for the daily work.",
    flagshipLead: "Helixium ERP brings the records your team relies on into one clear workspace, with agents ready to prepare the next step when you want them to.",
    strengths: ["Accounting, inventory, sales, POS, manufacturing, payroll, and field service modules.", "Human approval for consequential agent actions.", "English, Arabic, and French experiences, with cloud or on-premise deployment."],
    seePlans: "See ERP plans",
    erpTrial: "Start your 14-day ERP trial",
    matchEyebrow: "Featured product",
    matchTitle: "MatchPulse turns a tournament into a shared game.",
    matchLead: "In a past World Cup 2026 deployment, fans predicted scores, followed results, collected points, and compared their place in global or private leaderboards.",
    matchCta: "Explore MatchPulse",
    matchProof: "See it in action: World Cup 2026 edition",
    teamLead: "A small team that cares about the details.",
    ready: "Ready when you are",
    finalTitle: "Bring the busywork. We will make it lighter.",
    finalLead: "Start with the product that fits today, or talk with us about what comes next.",
    explore: "Explore our products"
  },
  ar: {
    eyebrow: "Helixium Solutions",
    title: "برمجيات تدير عملياتك.",
    lead: "شركة واحدة للبرمجيات التي تحافظ على سير العمل: Helixium ERP ووكلاء الذكاء الاصطناعي المخصصون والبرمجيات المخصصة وMatchPulse.",
    chip: "أدوات عملية للعمل القادم",
    pathsTitle: "اختر المسار الذي يناسب خطوتك التالية.",
    erpPath: ["نظام ERP", "Helixium ERP", "المحاسبة والمخزون والمبيعات ونقاط البيع والخدمة الميدانية والرواتب وأكثر في مساحة عمل ودودة.", "اكتشف نظام ERP"],
    agentsPath: ["يسأل أولاً", "وكلاء ذكاء اصطناعي مخصصون", "وكلاء يجهزون العمل المتكرر ويعرضون السياق وينتظرون موافقتك.", "اكتشف الذكاء الوكيلي"],
    customPath: ["نبني ما ينقصك", "برمجيات مخصصة", "من متجر Feel Nature الإلكتروني لشركة Gandour إلى الأدوات التشغيلية المتخصصة، نبني حول المهمة.", "شاهد الأعمال"],
    flagshipEyebrow: "المنتج الرئيسي: ERP",
    flagshipTitle: "مساحة أهدأ للعمل اليومي.",
    flagshipLead: "يجمع Helixium ERP السجلات التي يعتمد عليها فريقك في مساحة عمل واضحة، مع وكلاء جاهزين لتجهيز الخطوة التالية عندما تريد.",
    strengths: ["وحدات للمحاسبة والمخزون والمبيعات ونقاط البيع والتصنيع والرواتب والخدمة الميدانية.", "موافقة بشرية على إجراءات الوكلاء المهمة.", "تجارب بالعربية والإنجليزية والفرنسية، مع نشر سحابي أو محلي."],
    seePlans: "شاهد خطط ERP",
    erpTrial: "ابدأ تجربة ERP لمدة 14 يوماً",
    matchEyebrow: "منتج مميز",
    matchTitle: "يحوّل MatchPulse البطولة إلى لعبة مشتركة.",
    matchLead: "في نشر سابق لنسخة كأس العالم 2026، توقع المشجعون النتائج وتابعوا المباريات وجمعوا النقاط وقارنوا مراكزهم في التصنيف العام أو التصنيفات الخاصة.",
    matchCta: "اكتشف MatchPulse",
    matchProof: "شاهد المنتج: نسخة كأس العالم 2026",
    teamLead: "فريق صغير يهتم بالتفاصيل.",
    ready: "مستعدون عندما تكون",
    finalTitle: "أحضر العمل المتكرر، وسنجعله أخف.",
    finalLead: "ابدأ بالمنتج المناسب اليوم أو تحدث معنا عما يأتي بعد ذلك.",
    explore: "استكشف منتجاتنا"
  },
  fr: {
    eyebrow: "Helixium Solutions",
    title: "Des logiciels qui font avancer vos opérations.",
    lead: "Une seule entreprise pour les logiciels qui font avancer votre activité : Helixium ERP, agents IA sur mesure, logiciel personnalisé et MatchPulse.",
    chip: "Des outils pratiques pour la suite",
    pathsTitle: "Choisissez le chemin qui correspond à votre prochaine étape.",
    erpPath: ["ERP", "Helixium ERP", "Comptabilité, stocks, ventes, caisse, service terrain, paie et plus dans un espace convivial.", "Découvrir l'ERP"],
    agentsPath: ["Demander d'abord", "Agents IA sur mesure", "Des agents qui préparent la routine, montrent le contexte et attendent votre validation.", "Découvrir l'IA agentique"],
    customPath: ["Construire ce qui manque", "Logiciel sur mesure", "Du e-commerce Feel Nature de Gandour aux outils opérationnels ciblés, nous construisons autour du besoin.", "Voir le portfolio"],
    flagshipEyebrow: "Produit phare : ERP",
    flagshipTitle: "Un espace plus serein pour le travail quotidien.",
    flagshipLead: "Helixium ERP rassemble les dossiers dont votre équipe dépend dans un espace clair, avec des agents prêts à préparer la prochaine étape lorsque vous le souhaitez.",
    strengths: ["Modules de comptabilité, stocks, ventes, caisse, production, paie et service terrain.", "Validation humaine pour les actions importantes des agents.", "Expériences en français, anglais et arabe, avec déploiement cloud ou sur site."],
    seePlans: "Voir les offres ERP",
    erpTrial: "Démarrer l'essai ERP de 14 jours",
    matchEyebrow: "Produit à découvrir",
    matchTitle: "MatchPulse transforme un tournoi en jeu partagé.",
    matchLead: "Lors d'un déploiement passé pour la Coupe du monde 2026, les fans pronostiquaient les scores, suivaient les résultats, gagnaient des points et comparaient leur place dans les classements global ou privés.",
    matchCta: "Découvrir MatchPulse",
    matchProof: "Voir le produit : édition Coupe du monde 2026",
    teamLead: "Une petite équipe attentive aux détails.",
    ready: "Prêts quand vous l'êtes",
    finalTitle: "Apportez le travail répétitif. Nous l'allégerons.",
    finalLead: "Commencez avec le produit adapté aujourd'hui ou parlons de la suite.",
    explore: "Découvrir nos produits"
  }
} as const;

export function HomePage({ locale = "en" }: { locale?: string }) {
  const currentLocale = (["en", "ar", "fr"].includes(locale) ? locale : "en") as Locale;
  const copy = translations[currentLocale];
  const home = localizedHome[currentLocale];
  const paths = [home.erpPath, home.agentsPath, home.customPath];
  const pathLinks = ["/erp/", "/solutions/agentic-ai/", "/solutions/custom-software/"];
  return <><StructuredData data={organizationJsonLd} />
    <section className="hero company-hero"><div className="shell"><div className="company-hero-copy"><span className="eyebrow">{home.eyebrow}</span><h1>{home.title}</h1><p className="hero-lede">{home.lead}</p><div className="hero-chip">✦ {home.chip}</div><div className="hero-actions"><Link className="button button-primary" href={localizedPath(locale, "/contact/")}>{copy.ctaContact} <span aria-hidden="true">→</span></Link><a className="button button-secondary" href="#products">{home.explore} <span aria-hidden="true">↓</span></a></div></div><div id="products" className="hero-paths" aria-label={home.pathsTitle}><div className="section-heading"><span className="eyebrow">{copy.threeWays}</span><h2>{home.pathsTitle}</h2></div><div className="cards three-cards">{paths.map(([kicker, title, description, link], index) => <article className="product-card" key={title}><span className={`tile-icon ${index === 0 ? "tile-teal" : index === 1 ? "tile-indigo" : "tile-amber"}`} aria-hidden="true">{index === 0 ? "▦" : index === 1 ? "✦" : "◇"}</span><span className="card-kicker">{kicker}</span><h3>{title}</h3><p>{description}</p><Link className="card-link" href={localizedPath(locale, pathLinks[index])}>{link} <span>→</span></Link></article>)}</div></div></div></section>
    <section className="logo-strip" aria-label={copy.partners}><div className="shell logo-strip-row"><span className="logo-label">{copy.partners}</span>{partners.map((partner) => <div className={`partner-logo partner-logo-${partner.name.toLowerCase()}`} key={partner.name}><Image src={partner.image} alt={currentLocale === "ar" ? `${partner.name} - شعار` : currentLocale === "fr" ? `${partner.name} - logo` : partner.alt.replace(" partner logo", " logo")} width={150} height={74} sizes="150px" /><span>{partner.name === "MOM" ? "Master of Maintenance" : partner.name}</span></div>)}</div></section>
    <section className="section"><div className="shell split flagship-section"><div><span className="eyebrow">{home.flagshipEyebrow}</span><h2>{home.flagshipTitle}</h2><p className="hero-lede">{home.flagshipLead}</p><ul className="bullet-list">{home.strengths.map((strength) => <li key={strength}><span className="check">✓</span><span>{strength}</span></li>)}</ul><div className="hero-actions"><Link className="button button-primary" href={localizedPath(locale, "/plans/")}>{home.seePlans} →</Link><a className="button button-secondary" href={erpUrl}>{home.erpTrial} ↗</a></div></div><ErpProductMock locale={locale} /></div></section>
    {showMatchPulseStrip && <section className="section-tight"><div className="shell matchpulse-strip"><div className="matchpulse-strip-copy"><span className="eyebrow">{home.matchEyebrow}</span><h2>{home.matchTitle}</h2><p>{home.matchLead}</p><div className="hero-actions"><Link className="button button-primary" href={localizedPath(locale, "/matchpulse/")}>{home.matchCta} →</Link><a className="button button-secondary" href="https://play.helixiumsolutions.com/worldcup" target="_blank" rel="noopener">{home.matchProof} ↗</a></div></div><div className="matchpulse-strip-image"><Image src="/media/optimized/matchpulse-worldcup-landing.webp" alt={currentLocale === "ar" ? "واجهة MatchPulse في نسخة كأس العالم 2026" : currentLocale === "fr" ? "Interface MatchPulse de l'édition Coupe du monde 2026" : "MatchPulse World Cup 2026 edition interface"} width={1200} height={750} sizes="(max-width: 900px) 100vw, 42vw" loading="eager" /></div></div></section>}
    {showCustomerStories && <section className="section"><div className="shell case-highlight"><div><span className="eyebrow">{currentLocale === "ar" ? "قصص العملاء" : currentLocale === "fr" ? "Histoires clients" : "Customer stories"}</span><h2>{currentLocale === "ar" ? "فرق حقيقية، وسير عمل حقيقية." : currentLocale === "fr" ? "Des équipes et des workflows réels." : "Real teams, real workflows."}</h2><p>{currentLocale === "ar" ? "شاهد كيف تستخدم MOM وEndomedix ميزات أوامر العمل والإصلاح." : currentLocale === "fr" ? "Découvrez comment MOM et Endomedix utilisent les ordres de travail et de réparation." : "See how MOM and Endomedix use work-order and repair-order features."}</p></div><Link className="button button-secondary" href={localizedPath(locale, "/customers/")}>{currentLocale === "ar" ? "اقرأ القصص" : currentLocale === "fr" ? "Lire les histoires" : "Read the stories"} →</Link></div></section>}
    <section className="section"><div className="shell"><div className="section-heading"><span className="eyebrow">{copy.teamTitle}</span><h2>{home.teamLead}</h2></div><div className="team-grid">{teamByLocale[currentLocale].map((person) => <article className="team-card" key={person.name}><Image src={person.image} alt={person.alt} width={person.width} height={person.height} loading="eager" /><div><h3>{person.name}</h3><p>{person.role}</p></div></article>)}</div></div></section>
    <section className="cta"><span className="eyebrow">{home.ready}</span><h2>{home.finalTitle}</h2><p>{home.finalLead}</p><div className="hero-actions"><Link className="button button-primary" href={localizedPath(locale, "/contact/")}>{copy.ctaContact} →</Link><a className="button button-secondary" href={whatsappUrl}>WhatsApp ↗</a></div></section>
  </>;
}
