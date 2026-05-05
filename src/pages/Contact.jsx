import { useState } from "react";

const FORMSPREE_ID = "2991717370340310722";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [fields, setFields] = useState({ name: "", email: "", eventType: "", date: "", message: "" });

  function onChange(e) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...fields, _replyto: fields.email, subject: `Romance Nocturno Booking Request from ${fields.name}` }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="contact-page">

      {/* ─── HERO ─── */}
      <section className="contact-hero full-bleed">
        <p className="hero-eyebrow">Serenatas · Private Events · Booking</p>
        <h1 className="poster-title">Contact</h1>
      </section>

      {/* ─── INFO ROW ─── */}
      <section className="contact-info full-bleed">
        <div className="contact-info-inner">

          <div className="contact-info-block">
            <p className="section-stamp red">BOOKING</p>
            <h2 className="about-section-heading">Details</h2>
            <ul className="about-sound-ul" style={{ marginTop: 16 }}>
              <li><strong>Location:</strong> Los Angeles &amp; SoCal</li>
              <li><strong>Events:</strong> serenatas, private dinners, restaurants, weddings, celebrations</li>
              <li><strong>Set length:</strong> 1–3 hours, flexible to your needs</li>
              <li><strong>Setup:</strong> acoustic, minimal gear — we fit anywhere</li>
            </ul>
            <p className="contact-book-note">
              Book early for weekends, holidays, and Valentine's season — we fill quickly.
            </p>
          </div>

          <div className="contact-info-block">
            <p className="section-stamp red">ENCUÉNTRANOS</p>
            <h2 className="about-section-heading">Find Us</h2>
            <div className="contact-socials">
              <a className="contact-social" href="#instagram" target="_blank" rel="noreferrer">Instagram</a>
              <a className="contact-social" href="#facebook"  target="_blank" rel="noreferrer">Facebook</a>
              <a className="contact-social" href="#youtube"   target="_blank" rel="noreferrer">YouTube</a>
              <a className="contact-social" href="#spotify"   target="_blank" rel="noreferrer">Spotify</a>
            </div>
            <p className="contact-email">angelrocks0319@gmail.com</p>
          </div>

        </div>
      </section>

      {/* ─── FORM ─── */}
      <section className="contact-form-section full-bleed">
        <div className="contact-form-inner">
          <p className="section-stamp cream">ESCRÍBENOS</p>
          <h2 className="contact-form-title">Send a Message</h2>

          {status === "success" ? (
            <div className="contact-success">
              <span className="contact-success-moon">🌙</span>
              <p>
                Thank you — we received your message and will be in touch soon.
                We look forward to making your night special.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input className="form-input" type="text" name="name" placeholder="Full name" value={fields.name} onChange={onChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input className="form-input" type="email" name="email" placeholder="your@email.com" value={fields.email} onChange={onChange} required />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="form-group">
                  <label className="form-label">Event Type</label>
                  <select className="form-select" name="eventType" value={fields.eventType} onChange={onChange}>
                    <option value="">Select an event type...</option>
                    <option>Serenata</option>
                    <option>Private Dinner</option>
                    <option>Restaurant / Venue</option>
                    <option>Wedding</option>
                    <option>Quinceañera</option>
                    <option>Birthday Celebration</option>
                    <option>Corporate Event</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Event Date</label>
                  <input className="form-input" type="date" name="date" value={fields.date} onChange={onChange} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Your Message</label>
                <textarea className="form-textarea" name="message" placeholder="Tell us about your event — location, vibe, number of guests, and anything else we should know..." value={fields.message} onChange={onChange} required />
              </div>

              {status === "error" && (
                <p className="contact-form-error">
                  Something went wrong. Please try again or email us at angelrocks0319@gmail.com.
                </p>
              )}

              <button type="submit" className="poster-btn primary" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
