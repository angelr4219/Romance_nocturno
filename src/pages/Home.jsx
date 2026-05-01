import { Link } from "react-router-dom";
import groupPhoto from "../assets/group-photo.png";

export default function Home() {
  return (
    <div className="stack gap-xl">

      {/* HERO */}
      <section className="hero-split card">
        <div className="stack gap-md">
          <p className="badge">Los Angeles · Bolero · Est. 2025</p>
          <h1 className="hero-title">Romance Nocturno</h1>
          <p className="hero-subtitle">
            A bolero music group born in the streets of Los Angeles — playing the songs
            that live between heartbreak and hope, between a goodbye and a memory
            of someone you still love.
          </p>
          <div className="row gap-md wrap">
            <Link className="btn primary" to="/contact">Book a serenata</Link>
            <Link className="btn" to="/about">Meet the group</Link>
          </div>
        </div>

        <div className="photo-slot" style={{ minHeight: 300 }}>
          {groupPhoto ? (
            <img className="photo" src={groupPhoto} alt="Romance Nocturno" />
          ) : (
            <div className="photo-slot-inner">
              <span className="photo-slot-icon">📷</span>
              <div className="photo-slot-title">Group Photo</div>
              <div className="photo-slot-subtitle">Add your photo here — landscape works best</div>
            </div>
          )}
        </div>
      </section>

      {/* MOOD QUOTE */}
      <div className="quote-block">
        <p className="quote-text">
          "Music was my refuge. I could crawl into the space between the notes
          and curl my back to loneliness."
        </p>
        <p className="quote-attr">— Maya Angelou · the feeling we play for</p>
      </div>

      {/* FEATURES */}
      <div className="grid-3">
        <Link className="feature-card" to="/about">
          <div className="feature-card-icon">🎸</div>
          <div className="feature-card-title">Who We Are</div>
          <p className="feature-card-desc">
            Six musicians, one sound. Born out of a love for boleros and the
            romance of live music under the night sky.
          </p>
        </Link>

        <Link className="feature-card" to="/music">
          <div className="feature-card-icon">🎵</div>
          <div className="feature-card-title">Our Music</div>
          <p className="feature-card-desc">
            Classic and modern boleros, romantic Latin standards, and intimate
            arrangements crafted for the feeling.
          </p>
        </Link>

        <Link className="feature-card" to="/contact">
          <div className="feature-card-icon">🌙</div>
          <div className="feature-card-title">Book a Night</div>
          <p className="feature-card-desc">
            Serenatas, private events, restaurants, and special occasions.
            We bring the night to you.
          </p>
        </Link>
      </div>

      {/* WHAT WE PLAY + WHERE WE ARE */}
      <div className="grid-2">
        <div className="card">
          <h2 className="section-title">What we play</h2>
          <ul className="list">
            <li>Classic boleros and golden era standards</li>
            <li>Modern bolero-pop and romantic Latin ballads</li>
            <li>Serenata sets — the full experience</li>
            <li>Custom setlists tailored to your event or evening</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="section-title">Based in Los Angeles</h2>
          <p className="muted" style={{ lineHeight: 1.68, marginBottom: 16 }}>
            We perform across SoCal — from backyard serenatas to rooftop dinners
            and private celebrations. Small setup, big atmosphere.
          </p>
          <div className="note">
            <strong>Tip:</strong> Reach out early for weekends and holidays — we fill up fast.
          </div>
        </div>
      </div>

      {/* MERCH TEASER */}
      <div className="card gold-border" style={{ textAlign: "center", padding: "36px 24px" }}>
        <div style={{ fontSize: "2.2rem", marginBottom: 12 }}>🛍️</div>
        <h2 className="section-title" style={{ marginBottom: 10 }}>Merch is coming</h2>
        <p className="muted" style={{ maxWidth: "44ch", margin: "0 auto 22px", lineHeight: 1.65 }}>
          Shirts, hats, prints, and more. Wear the night.
        </p>
        <Link className="btn gold" to="/merch">View the merch →</Link>
      </div>

    </div>
  );
}
