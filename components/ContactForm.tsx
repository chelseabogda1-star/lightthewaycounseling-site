"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { team } from "@/lib/team";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const lines = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Who is this for: ${get("who")}`,
      `Preferred clinician: ${get("clinician") || "No preference"}`,
      `Format: ${get("format")}`,
      `Insurance: ${get("insurance") || "Not provided"}`,
      "",
      "Message:",
      get("message"),
    ];

    const subject = encodeURIComponent(
      `Appointment request — ${get("name") || "New inquiry"}`
    );
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field--row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className="field--row">
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="who">Who is therapy for?</label>
          <select id="who" name="who" defaultValue="Myself">
            <option>Myself</option>
            <option>My child</option>
            <option>My teen</option>
            <option>Someone else</option>
          </select>
        </div>
      </div>

      <div className="field--row">
        <div className="field">
          <label htmlFor="clinician">Preferred clinician</label>
          <select id="clinician" name="clinician" defaultValue="">
            <option value="">No preference — help me choose</option>
            {team.map((t) => (
              <option key={t.slug} value={`${t.name}, ${t.credentials}`}>
                {t.name}, {t.credentials}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="format">In person or virtual?</label>
          <select id="format" name="format" defaultValue="Either is fine">
            <option>Either is fine</option>
            <option>In person in Batavia</option>
            <option>Telehealth</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="insurance">Insurance carrier (optional)</label>
        <input
          id="insurance"
          name="insurance"
          placeholder="e.g. Blue Cross Blue Shield, Aetna, self-pay"
        />
      </div>

      <div className="field">
        <label htmlFor="message">What brings you in?</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="A sentence or two is plenty — no need to go into detail here."
        />
      </div>

      <p className="form-note">
        Please keep this message general. Information submitted through this form may
        not be fully secure, so avoid including sensitive clinical details unless you
        are comfortable doing so. This form is not monitored for emergencies &mdash;
        if you are in crisis, call or text <strong>988</strong>, or call 911.
      </p>

      <div>
        <button className="btn btn--primary" type="submit">
          Send request
        </button>
      </div>

      {sent && (
        <div className="notice">
          <strong>Almost there.</strong> Your email program should have opened with
          your message ready to send &mdash; press send there and we&rsquo;ll get it.
          If nothing opened, email us directly at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
          <a href={`tel:${site.phoneHref}`}>{site.phone}</a>.
        </div>
      )}
    </form>
  );
}
