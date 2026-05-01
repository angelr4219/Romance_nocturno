import { members } from "../data/members";

export default function About() {
  return (
    <div className="stack gap-xl">

      {/* PAGE HEADER */}
      <section className="card">
        <h1 className="page-title">About Us</h1>
        <p className="muted" style={{ lineHeight: 1.72, maxWidth: "64ch" }}>
          Romance Nocturno is a bolero music group founded in 2025 in Los Angeles.
          We are six musicians united by a love for the sounds that tell the truth
          about love — the version people feel at night, when the world is quiet
          and the heart is loud.
        </p>
      </section>

      {/* STORY */}
      <section className="card">
        <h2 className="section-title">Our Story</h2>
        <div className="stack gap-md">
          <p className="muted" style={{ lineHeight: 1.72 }}>
            We came together the way most meaningful things do — quietly, without a
            plan. A shared love of boleros, a few late-night sessions, and the
            feeling that this music deserved to be heard live, up close, the way
            it was always meant to be played.
          </p>
          <p className="muted" style={{ lineHeight: 1.72 }}>
            Romance Nocturno was founded in Los Angeles in 2025. We play the classic
            bolero repertoire alongside modern interpretations, always with the goal
            of making whoever is listening feel something — even if it's just a
            memory they hadn't thought of in years.
          </p>
        </div>
      </section>

      {/* MEMBERS */}
      <section className="card">
        <h2 className="section-title">The Group</h2>
        <div className="member-grid">
          {members.map((m) => (
            <div key={m.name} className="member">
              {/* Replace ♪ with <img src="..." alt={m.name} /> when photos are ready */}
              <div className="member-photo">♪</div>
              <div>
                <div className="member-name">{m.name}</div>
                <div className="member-role">{m.role}</div>
              </div>
              <p className="member-bio">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY PLACEHOLDERS */}
      <section className="card">
        <h2 className="section-title">Gallery</h2>
        <div className="grid-2">
          <div className="photo-slot" style={{ minHeight: 230 }}>
            <div className="photo-slot-inner">
              <span className="photo-slot-icon">📷</span>
              <div className="photo-slot-title">Live Performance</div>
              <div className="photo-slot-subtitle">Add a performance photo here</div>
            </div>
          </div>
          <div className="photo-slot" style={{ minHeight: 230 }}>
            <div className="photo-slot-inner">
              <span className="photo-slot-icon">📷</span>
              <div className="photo-slot-title">Behind the Scenes</div>
              <div className="photo-slot-subtitle">Add a candid or backstage photo here</div>
            </div>
          </div>
          <div className="photo-slot" style={{ minHeight: 230 }}>
            <div className="photo-slot-inner">
              <span className="photo-slot-icon">📷</span>
              <div className="photo-slot-title">Serenata Night</div>
              <div className="photo-slot-subtitle">Add an outdoor or evening performance photo</div>
            </div>
          </div>
          <div className="photo-slot" style={{ minHeight: 230 }}>
            <div className="photo-slot-inner">
              <span className="photo-slot-icon">📷</span>
              <div className="photo-slot-title">The Group</div>
              <div className="photo-slot-subtitle">Add a full group or portrait photo here</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOUND & STYLE */}
      <section className="card">
        <h2 className="section-title">Our Sound & Style</h2>
        <div className="grid-2">
          <ul className="list">
            <li>Classic bolero storytelling — love, longing, and late nights</li>
            <li>Vocal harmony at the center of everything we do</li>
            <li>Guitars, guitarrón, and close arrangements</li>
            <li>Intimate enough for a balcony, powerful enough for a room</li>
            <li>Setlists shaped around the mood of the evening</li>
          </ul>
          <div className="quote-block">
            <p className="quote-text">
              "We play the songs that people already know in their hearts —
              they just haven't heard them yet."
            </p>
            <p className="quote-attr">— Romance Nocturno</p>
          </div>
        </div>
      </section>

    </div>
  );
}
