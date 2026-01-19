import { Link } from "react-router-dom";
import groupPhoto from "../assets/group-photo.png";

export default function Home() {
  return (
    <div className="stack gap-lg">
      {/* HERO */}
      <section className="hero hero-split card">
        <div className="hero-left">
          <p className="badge">Los Angeles • Bolero • Established 2025</p>
          <h1 className="hero-title">Romance Nocturno</h1>
          <p className="hero-subtitle">
            A bolero music group based in Los Angeles, celebrating Hispanic romance,
            nostalgia, and the timeless sound of boleros.
          </p>

          <div className="row gap-md wrap">
            <Link className="btn primary" to="/contact">
              Book us
            </Link>
            <Link className="btn" to="/about">
              Meet the group
            </Link>
          </div>
        </div>

        {/* PHOTO */}
        <div className="hero-right">
          <div className="photo-slot" aria-label="Romance Nocturno group photo">
            {groupPhoto ? (
              <img
                className="photo"
                src={groupPhoto}
                alt="Romance Nocturno group photo"
              />
            ) : (
              <div className="photo-slot-inner">
                <div className="photo-slot-title">Group Photo</div>
                <div className="photo-slot-subtitle">
                  Drop your photo here later (wide/landscape looks best)
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="grid-2 gap-lg">
        <div className="card">
          <h2 className="section-title">What we play</h2>
          <p className="muted">
            Classic boleros and Hispanic romantic standards. Intimate, heartfelt,
            and perfect for live nights, events, and serenatas.
          </p>
          <ul className="list">
            <li>Boleros (classic + modern)</li>
            <li>Romantic Latin standards</li>
            <li>Setlists tailored to your event</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="section-title">Based in LA</h2>
          <p className="muted">
            We’re Los Angeles-based and available for gigs across SoCal. Small setup,
            big atmosphere.
          </p>
          <div className="note">
            <strong>Tip:</strong> Reach out early for weekends and holidays.
          </div>
        </div>
      </section>
    </div>
  );
}
