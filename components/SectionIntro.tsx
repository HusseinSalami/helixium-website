type SectionIntroProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  level?: "h1" | "h2";
  centered?: boolean;
  className?: string;
  id?: string;
};

export function SectionIntro({ eyebrow, title, lede, level = "h2", centered = false, className = "", id }: SectionIntroProps) {
  const Heading = level;
  return <div id={id} className={`section-intro ${centered ? "centered section-intro-centered" : ""} ${className}`.trim()}>
    <span className="eyebrow">{eyebrow}</span>
    <Heading>{title}</Heading>
    {lede && <p>{lede}</p>}
  </div>;
}
