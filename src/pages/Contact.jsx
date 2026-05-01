import { useState } from "react";

const FORMSPREE_ID = "2991717370340310722"; // replace with your Formspree form ID

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [fields, setFields] = useState({
    name: "",
    email: "",
    eventType: "",
    date: "",
    message: "",
  });

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
        body: JSON.stringify({
          ...fields,
          _replyto: fields.email,
          subject: `Romance Nocturno Booking Request from ${fields.name}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="stack gap-xl">

      <section className="card">
        <h1 className="page-title">Contact & Booking</h1>
        <p className="muted" style={{ lineHeight: 1.70, maxWidth: "60ch" }}>
          Planning a serenata, a private dinner, or a special occasion? Tell us
          about your night and we'll get back to you with everything you need.
        </p>
      </section>

      {/* BOOKING INFO + SOCIALS */}
      <div className="grid-2">
        <div className="card">
          <h2 className="section-title">Booking Details</h2>
          <ul className="list">
            <li><strong>Location:</strong> Los Angeles & SoCal</li>
            <li><strong>Events:</strong> serenatas, private dinners, restaurants, weddings, celebrations</li>
            <li><strong>Set length:</strong> 1–3 hours, flexible to your needs</li>
            <li><strong>Setup:</strong> acoustic, minimal gear — we fit anywhere</li>
          </ul>
          <div className="note" style={{ marginTop: 18 }}>
            Book early for weekends, holidays, and Valentine's season — we fill quickly.
          </div>
        </div>

        <div className="card">
          <h2 className="section-title">Find Us Online</h2>
          <p className="muted small" style={{ marginBottom: 16, lineHeight: 1.6 }}>
            Follow us for updates, live videos, and announcements.
          </p>
          <div className="socials" style={{ flexDirection: "column" }}>
            <a className="social" href="#instagram" target="_blank" rel="noreferrer">📷  Instagram</a>
            <a className="social" href="#facebook"  target="_blank" rel="noreferrer">📘  Facebook</a>
            <a className="social" href="#youtube"   target="_blank" rel="noreferrer">▶️  YouTube</a>
            <a className="social" href="#spotify"   target="_blank" rel="noreferrer">🎵  Spotify</a>
          </div>
          <p className="mono" style={{ marginTop: 18 }}>angelrocks0319@gmail.com</p>
        </div>
      </div>

      {/* CONTACT FORM */}
      <section className="card">
        <h2 className="section-title">Send Us a Message</h2>

        {status === "success" ? (
          <div style={{ textAlign: "center", padding: "32px 16px" }}>
            <div style={{ fontSize: "2.4rem", marginBottom: 14 }}>🌙</div>
            <p className="muted" style={{ lineHeight: 1.70, maxWidth: "42ch", margin: "0 auto" }}>
              Thank you — we received your message and will be in touch soon.
              We look forward to making your night special.
            </p>
          </div>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-row cols-2">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={fields.name}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={fields.email}
                  onChange={onChange}
                  required
                />
              </div>
            </div>

            <div className="form-row cols-2">
              <div className="form-group">
                <label className="form-label">Event Type</label>
                <select
                  className="form-select"
                  name="eventType"
                  value={fields.eventType}
                  onChange={onChange}
                >
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
                <input
                  className="form-input"
                  type="date"
                  name="date"
                  value={fields.date}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Your Message</label>
              <textarea
                className="form-textarea"
                name="message"
                placeholder="Tell us about your event — location, vibe, number of guests, and anything else we should know..."
                value={fields.message}
                onChange={onChange}
                required
              />
            </div>

            {status === "error" && (
              <p style={{ color: "var(--red)", fontSize: "0.88rem" }}>
                Something went wrong. Please try again or email us directly at angelrocks0319@gmail.com.
              </p>
            )}

            <div>
              <button
                type="submit"
                className="btn primary"
                style={{ padding: "12px 30px" }}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        )}
      </section>

      {/* UPCOMING EVENTS PLACEHOLDER */}
      <section className="card" style={{ textAlign: "center", padding: "36px 24px" }}>
        <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>📅</div>
        <h3 className="section-title" style={{ marginBottom: 10 }}>Upcoming Events</h3>
        <p className="muted" style={{ maxWidth: "44ch", margin: "0 auto", lineHeight: 1.65 }}>
          No public events listed yet. Follow us on social media to stay updated
          on where we'll be playing next.
        </p>
      </section>

    </div>
  );
}
