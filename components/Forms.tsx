"use client";

import { FormEvent, useEffect, useState } from "react";

function submitOrMailto(event: FormEvent<HTMLFormElement>, endpoint: string, subject: string) {
  if (endpoint) return;
  event.preventDefault();
  const form = event.currentTarget;
  const values = new URLSearchParams();
  new FormData(form).forEach((value, key) => values.set(key, String(value)));
  window.location.href = `mailto:info@helixiumsolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(values.toString())}`;
}

export function ContactForm({ endpoint, interest = "ERP", locale = "en" }: { endpoint: string; interest?: string; locale?: string }) {
  const [selectedInterest, setSelectedInterest] = useState(interest);
  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("interest");
    if (value && ["ERP", "MatchPulse", "Agentic AI", "Custom software"].includes(value)) setSelectedInterest(value);
  }, []);
  const copy = locale === "ar" ? { name: "الاسم", company: "الشركة", email: "البريد الإلكتروني", phone: "الهاتف", country: "البلد", interest: "الاهتمام", message: "الرسالة", submit: "إرسال الطلب", options: [["ERP", "ERP"], ["MatchPulse", "MatchPulse"], ["Agentic AI", "الذكاء الاصطناعي الوكيلي"], ["Custom software", "البرمجيات المخصصة"]] } : locale === "fr" ? { name: "Nom", company: "Entreprise", email: "E-mail", phone: "Téléphone", country: "Pays", interest: "Sujet", message: "Votre message", submit: "Envoyer la demande", options: [["ERP", "ERP"], ["MatchPulse", "MatchPulse"], ["Agentic AI", "IA agentique"], ["Custom software", "Logiciel sur mesure"]] } : { name: "Name", company: "Company", email: "Email", phone: "Phone", country: "Country", interest: "Interest", message: "Message", submit: "Send enquiry", options: [["ERP", "ERP"], ["MatchPulse", "MatchPulse"], ["Agentic AI", "Agentic AI"], ["Custom software", "Custom software"]] };
  return <form action={endpoint || "mailto:info@helixiumsolutions.com?subject=Helixium%20website%20enquiry"} method="post" encType={endpoint ? undefined : "text/plain"} onSubmit={(event) => submitOrMailto(event, endpoint, "Helixium website enquiry")}><div className="form-grid">
    <div className="field"><label htmlFor="name">{copy.name}</label><input id="name" name="name" autoComplete="name" required /></div>
    <div className="field"><label htmlFor="company">{copy.company}</label><input id="company" name="company" autoComplete="organization" required /></div>
    <div className="field"><label htmlFor="email">{copy.email}</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
    <div className="field"><label htmlFor="phone">{copy.phone}</label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
    <div className="field"><label htmlFor="country">{copy.country}</label><input id="country" name="country" autoComplete="country-name" /></div>
    <div className="field"><label htmlFor="interest">{copy.interest}</label><select id="interest" name="interest" value={selectedInterest} onChange={(event) => setSelectedInterest(event.target.value)}>{copy.options.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></div>
    <div className="field full"><label htmlFor="message">{copy.message}</label><textarea id="message" name="message" required /></div>
    <div className="field full"><button className="button button-primary" type="submit">{copy.submit} <span aria-hidden="true">↗</span></button></div>
  </div></form>;
}

