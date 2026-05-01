import { Link } from "react-router-dom";
import { members } from "../data/members";
import silhouettesImg from "../assets/RN silhouettes.png";

const pastShows = [
  { venue: "Eastside Luv",     date: "Sept 7, 2025",  note: "A full house. A perfect night." },
  { venue: "Plaza de la Raza", date: "Aug 14, 2025",  note: "Under the summer sky." },
  { venue: "Casa Cultura",     date: "Jul 4, 2025",   note: "Independence and boleros." },
];

export default function Home() {
  return (
    <div className="home">

      {/* ─── HERO POSTER ─── */}
      <section className="hero-poster full-bleed">
        <p className="hero-eyebrow">Serenatas · Boleros · Noches de Amor</p>
        <h1 className="poster-title">Romance<br />Nocturno</h1>
        <p className="hero-tagline">
          A warm night of roses, rhythm, and songs that feel like<br />
          love remembered after midnight.
        </p>
        <div className="hero-ctas">
          <a className="poster-btn primary" href="#shows">Próxima Función</a>
          <a className="poster-btn secondary" href="#cartas">Cartas de Romance</a>
        </div>
        <div className="hero-ornament">❧</div>
        <img className="hero-silhouette" src={silhouettesImg} alt="" aria-hidden="true" />
      </section>

      {/* ─── UPCOMING SHOWS ─── */}
      <section id="shows" className="shows-section full-bleed">
        <div className="shows-inner">
          <p className="section-stamp cream">PRÓXIMA FUNCIÓN</p>
          <div className="show-flyer">
            <div className="show-flyer-left">
              <div className="show-block-date">
                <span className="show-weekday">FRIDAY</span>
                <span className="show-number">31</span>
                <span className="show-month">OCTOBER</span>
              </div>
            </div>
            <div className="show-flyer-center">
              <h2 className="show-venue-name">Eastside Luv Bar</h2>
              <p className="show-address">1835 E 1st St · Los Angeles, CA</p>
              <div className="show-details-row">
                <span className="show-tag">DOORS 8PM</span>
                <span className="show-tag">SHOW 9PM</span>
                <span className="show-tag">21+</span>
              </div>
            </div>
            <div className="show-flyer-right">
              <Link className="poster-btn primary" to="/contact">More Info</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CARTAS DE ROMANCE ─── */}
      <section id="cartas" className="cartas-section full-bleed">
        <div className="cartas-inner">
          <p className="section-stamp red">LA BARAJA NOCTURNA</p>
          <h2 className="cartas-section-title">Cartas de Romance</h2>
          <p className="cartas-subtitle">
            <em>Cada músico, una carta. Cada carta, una noche.</em>
          </p>
          <div className="cartas-grid">
            {members.map((m) => (
              <article className="carta-card" key={m.name}>
                <div className="carta-header">
                  <span className="carta-number">{m.number}</span>
                  <span className="carta-star">✦</span>
                </div>
                <div className="carta-image-frame">
                  <span className="carta-icon-large">{m.icon}</span>
                </div>
                <div className="carta-footer">
                  <h3 className="carta-card-title">{m.cardTitle}</h3>
                  <p className="carta-name">{m.name}</p>
                  <p className="carta-role">{m.role}</p>
                  <p className="carta-phrase">{m.phrase}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POSTER ARCHIVE ─── */}
      <section className="archive-section full-bleed">
        <div className="archive-inner">
          <p className="section-stamp cream">ARCHIVO DE NOCHES</p>
          <h2 className="archive-title">Poster Archive</h2>
          <p className="archive-sub">Past shows. Past nights. Forever in the song.</p>
          <div className="archive-grid">
            {pastShows.map((show) => (
              <div className="archive-card" key={show.venue}>
                <div className="archive-card-image">
                  <span>✦</span>
                </div>
                <p className="archive-card-venue">{show.venue}</p>
                <p className="archive-card-date">{show.date}</p>
                <p className="archive-card-note">{show.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MERCH TEASER ─── */}
      <div className="merch-teaser full-bleed">
        <p className="section-stamp">EDICIÓN LIMITADA</p>
        <h2 className="merch-teaser-title">Roses for the Night</h2>
        <p className="merch-teaser-sub">
          Shirts, totes, and small-batch pieces for those who stay past midnight.
        </p>
        <Link className="poster-btn gold" to="/merch">Ver Merch →</Link>
      </div>

    </div>
  );
}
