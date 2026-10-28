"use client";

import { useState } from "react";
import { profile } from "../data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [err, setErr] = useState("");
  const H = headingLevel === 1 ? "h1" : "h2";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErr("");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Message not sent.");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (e) {
      setStatus("error");
      setErr(e instanceof Error ? e.message : "Message not sent.");
    }
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-h">
      <div className="contact-grid">
        <div>
          <H id="contact-h" className="contact-title">Say hello</H>
          <p className="contact-note">
            Open to backend, systems and cloud roles from 2027, and to interesting problems before then.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <ul className="contact-links">
            <li><a href={profile.phoneHref}>{profile.phone}</a></li>
            <li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={profile.cv} download>Download CV</a></li>
          </ul>
        </div>

        <form className="form" onSubmit={submit} noValidate={false}>
          <label className="field">
            <span>Name</span>
            <input
              required
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>
          <label className="field">
            <span>Message</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>
          <button className="btn btn-signal" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          <p className="form-status" role="status">
            {status === "sent" && "Message sent. I’ll reply to your email within a couple of days."}
            {status === "error" && `${err} You can also email me directly at ${profile.email}.`}
          </p>
        </form>
      </div>

      <footer className="foot">
        <span>© {new Date().getFullYear()} Lakshya Jain</span>
        <span>Manipal, India</span>
      </footer>
    </section>
  );
}
