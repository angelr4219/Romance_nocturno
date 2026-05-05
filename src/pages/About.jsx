import { members } from "../data/members";
import group1Img   from "../assets/26.04.19 Romance Nocturno-group1.jpg";
import grouptopImg from "../assets/26.04.19 Romance Nocturno-grouptop.jpg";

export default function About() {
  return (
    <div className="about">

      {/* ─── HERO ─── */}
      <section className="about-hero full-bleed">
        <div className="about-hero-text">
          <p className="hero-eyebrow">Boleros · Los Angeles · Est. 2025</p>
          <h1 className="about-headline">Romance<br />Nocturno</h1>
          <p className="about-intro-text">
            Five musicians united by a love for the songs that tell the truth
            about love — the version people feel at night, when the world is quiet
            and the heart is loud.
          </p>
        </div>
        <div className="about-hero-photo">
          <img src={grouptopImg} alt="Romance Nocturno group portrait" />
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="about-story full-bleed">
        <div className="about-story-inner">
          <div className="about-story-text">
            <p className="section-stamp red">NUESTRA HISTORIA</p>
            <h2 className="about-section-heading">Our Story</h2>
            <p>
              We came together the way most meaningful things do — quietly, without
              a plan. A shared love of boleros, a few late-night sessions, and the
              feeling that this music deserved to be heard live, up close, the way
              it was always meant to be played.
            </p>
            <p>
              Romance Nocturno was founded in Los Angeles in 2025. We play the classic
              bolero repertoire alongside modern interpretations, always with the goal
              of making whoever is listening feel something — even if it's just a
              memory they hadn't thought of in years.
            </p>
          </div>
          <div className="about-story-photo">
            <img src={group1Img} alt="Romance Nocturno performing" />
          </div>
        </div>
      </section>

      {/* ─── MEMBERS ─── */}
      <section className="about-members full-bleed">
        <div className="about-members-inner">
          <p className="section-stamp cream">LA BARAJA NOCTURNA</p>
          <h2 className="about-members-heading">The Group</h2>
          <div className="about-members-grid">
            {members.map((m) => (
              <div key={m.name} className="about-member-card">
                <div className="about-member-photo">
                  <img src={m.photo} alt={m.name} />
                </div>
                <div className="about-member-info">
                  <span className="about-member-number">{m.number}</span>
                  <h3 className="about-member-name">{m.name}</h3>
                  <p className="about-member-role">{m.role}</p>
                  <p className="about-member-phrase">"{m.phrase}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOUND & STYLE ─── */}
      <section className="about-sound full-bleed">
        <div className="about-sound-inner">
          <div className="about-sound-list">
            <p className="section-stamp cream">NUESTRO SONIDO</p>
            <h2 className="about-section-heading about-section-heading--light">Our Sound</h2>
            <ul className="about-sound-ul">
              <li>Classic bolero storytelling — love, longing, and late nights</li>
              <li>Vocal harmony at the center of everything we do</li>
              <li>Guitars, guitarrón, violin, and close arrangements</li>
              <li>Intimate enough for a balcony, powerful enough for a room</li>
              <li>Setlists shaped around the mood of the evening</li>
            </ul>
          </div>
          <div className="about-sound-quote">
            <p className="about-quote-text">
              "We play the songs that people already know in their hearts —
              they just haven't heard them yet."
            </p>
            <p className="about-quote-attr">— Romance Nocturno</p>
          </div>
        </div>
      </section>

    </div>
  );
}
