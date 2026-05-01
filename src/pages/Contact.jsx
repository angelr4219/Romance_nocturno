import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: connect to Formspree, EmailJS, or Netlify Forms
    // Example Formspree: set form action="https://formspree.io/f/YOUR_ID" method="POST"
    setSubmitted(true);
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
            Follow us for updates, live videos, and announcements. Replace these
            links with your real profiles when you're ready.
          </p>
          <div className="socials" style={{ flexDirection: "column" }}>
            <a className="social" href="#instagram" target="_blank" rel="noreferrer">📷  Instagram</a>
            <a className="social" href="#facebook"  target="_blank" rel="noreferrer">📘  Facebook</a>
            <a className="social" href="#youtube"   target="_blank" rel="noreferrer">▶️  YouTube</a>
            <a className="social" href="#spotify"   target="_blank" rel="noreferrer">🎵  Spotify</a>
          </div>
          <p className="mono" style={{ marginTop: 18 }}>romancenocturno@email.com</p>
          <p className="muted small" style={{ marginTop: 5 }}>Replace with your real booking email.</p>
        </div>
      </div>

      {/* CONTACT FORM */}
      <section className="card">
        <h2 className="section-title">Send Us a Message</h2>

        {submitted ? (
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
                <input className="form-input" type="text" placeholder="Full name" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input className="form-input" type="email" placeholder="your@email.com" required />
              </div>
            </div>

            <div className="form-row cols-2">
              <div className="form-group">
                <label className="form-label">Event Type</label>
                <select className="form-select">
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
                <input className="form-input" type="date" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Your Message</label>
              <textarea
                className="form-textarea"
                placeholder="Tell us about your event — location, vibe, number of guests, and anything else we should know..."
                required
              />
            </div>

            <div>
              <button type="submit" className="btn primary" style={{ padding: "12px 30px" }}>
                Send Message
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
