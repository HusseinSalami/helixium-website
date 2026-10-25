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

export function ContactForm({ endpoint, interest = "ERP" }: { endpoint: string; interest?: string }) {
  const [selectedInterest, setSelectedInterest] = useState(interest);
  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("interest");
    if (value && ["ERP", "CryptoSettle", "MatchPulse", "Agentic AI", "Custom software"].includes(value)) setSelectedInterest(value);
  }, []);
  return <form action={endpoint || undefined} method="post" onSubmit={(event) => submitOrMailto(event, endpoint, "Helixium website enquiry")}><div className="form-grid">
    <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required /></div>
    <div className="field"><label htmlFor="company">Company</label><input id="company" name="company" autoComplete="organization" required /></div>
    <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
    <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
    <div className="field"><label htmlFor="country">Country</label><input id="country" name="country" autoComplete="country-name" /></div>
    <div className="field"><label htmlFor="interest">Interest</label><select id="interest" name="interest" value={selectedInterest} onChange={(event) => setSelectedInterest(event.target.value)}><option>ERP</option><option>CryptoSettle</option><option>MatchPulse</option><option>Agentic AI</option><option>Custom software</option></select></div>
    <div className="field full"><label htmlFor="message">Message</label><textarea id="message" name="message" required /></div>
    <div className="field full"><button className="button button-primary" type="submit">Send enquiry ↗</button></div>
  </div></form>;
}

export function WaitlistForm({ endpoint }: { endpoint: string }) {
  return <form action={endpoint || undefined} method="post" onSubmit={(event) => submitOrMailto(event, endpoint, "MatchPulse founding venue")}><div className="form-grid">
    <div className="field"><label htmlFor="venue-name">Name</label><input id="venue-name" name="name" required /></div>
    <div className="field"><label htmlFor="venue-email">Email</label><input id="venue-email" name="email" type="email" required /></div>
    <div className="field full"><label htmlFor="venue-company">Venue or company</label><input id="venue-company" name="company" required /></div>
    <div className="field full"><label htmlFor="venue-message">Tell us about your venue</label><textarea id="venue-message" name="message" /></div>
    <div className="field full"><button className="button button-primary" type="submit">Become a founding venue →</button></div>
  </div></form>;
}
