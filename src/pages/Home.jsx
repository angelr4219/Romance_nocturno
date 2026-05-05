import { Link } from "react-router-dom";
import { members } from "../data/members";
import silhouettesImg from "../assets/Rn-notext-Silhouettes.png";
import tondoImg      from "../assets/Tondo 3_31.jpg";

import merch1Img     from "../assets/26.04.19 Romance Nocturno-merch1.jpg";

// ── Posters (newest → oldest) ──
import posterELuv326   from "../assets/Posters/Romance_Nocturno_EastSide_Luv_326-1.jpg";
import posterELuv1031  from "../assets/Posters/EastsideLuv-8.31.jpeg";
import posterTondo317  from "../assets/Posters/Tondo_post-3.17.jpg";
import posterElMoro    from "../assets/Posters/El Moro Grand Opening Flyer-3.4.jpg";
import posterTondo33   from "../assets/Posters/Cafe-Tondo-3.3.jpg";
import posterValentine from "../assets/Posters/valentines_flyer-2.14.jpg";
import posterFowler    from "../assets/Posters/FOL Solo-1.14.jpg";
import posterTondo113  from "../assets/Posters/Tondo_Flyer-1.13.jpg";

const pastShows = [
  { venue: "Eastside Luv",          date: "Mar 26, 2026", note: "Romance Nocturno + Rileyoniine DJ set.", photo: posterELuv326   },
  { venue: "Eastside Luv",          date: "Oct 31, 2025", note: "With Trio Los Caramelos.",               photo: posterELuv1031  },
  { venue: "Café Tondo",            date: "Mar 31, 2025", note: "A night of roses on Alameda.",           photo: tondoImg        },
  { venue: "Café Tondo",            date: "Mar 17, 2025", note: "Dos voces, una noche.",                  photo: posterTondo317  },
  { venue: "El Moro Grand Opening", date: "Mar 4, 2025",  note: "Special performance at 1524 Sunset.",    photo: posterElMoro    },
  { venue: "Café Tondo",            date: "Mar 3, 2025",  note: "Back on Alameda.",                       photo: posterTondo33   },
  { venue: "Eastside Luv",          date: "Feb 14, 2025", note: "Valentine's night with Trio Los Caramelos.", photo: posterValentine },
  { venue: "Fowler Museum",         date: "Jan 14, 2025", note: "Fowler Out Loud presents Romance Nocturno.", photo: posterFowler    },
  { venue: "Café Tondo",            date: "Jan 13, 2025", note: "Where it all began.",                    photo: posterTondo113  },
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
                  <img className="carta-photo" src={m.photo} alt={m.name} />
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
            {pastShows.map((show, i) => (
              <div className={`archive-card${show.photo ? "" : " archive-card--placeholder"}`} key={i}>
                <div className="archive-card-image">
                  {show.photo
                    ? <img src={show.photo} alt={show.venue} />
                    : <span className="archive-placeholder-icon">✦</span>
                  }
                </div>
                {show.photo && <>
                  <p className="archive-card-venue">{show.venue}</p>
                  <p className="archive-card-date">{show.date}</p>
                  <p className="archive-card-note">{show.note}</p>
                </>}
                {!show.photo && <p className="archive-placeholder-label">Poster Coming Soon</p>}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── MERCH TEASER ─── */}
      <div className="merch-teaser full-bleed">
        <div className="merch-teaser-photo">
          <img src={merch1Img} alt="Romance Nocturno merch" />
        </div>
        <div className="merch-teaser-content">
          <p className="section-stamp">EDICIÓN LIMITADA</p>
          <h2 className="merch-teaser-title">Roses for the Night</h2>
          <p className="merch-teaser-sub">
            Shirts, totes, and small-batch pieces for those who stay past midnight.
          </p>
          <Link className="poster-btn gold" to="/merch">Ver Merch →</Link>
        </div>
      </div>

    </div>
  );
}
