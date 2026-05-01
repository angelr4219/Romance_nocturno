import './App.css';

const members = [
  {
    number: '25',
    title: 'El Guitarrón',
    name: 'Angel',
    role: 'Guitarrón',
    phrase: 'The heartbeat beneath the serenata.'
  },
  {
    number: '14',
    title: 'La Voz',
    name: 'Member Name',
    role: 'Vocals',
    phrase: 'A rose-colored melody for the night.'
  },
  {
    number: '07',
    title: 'La Guitarra',
    name: 'Member Name',
    role: 'Guitar',
    phrase: 'Six strings and a little heartbreak.'
  }
];

export default function App() {
  return (
    <main className="site-shell">
      <nav className="nav">
        <div className="brand">Romance Nocturno</div>
        <div className="nav-links">
          <a href="#shows">Shows</a>
          <a href="#members">Members</a>
          <a href="#merch">Merch</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">Boleros · Serenatas · Noches de Amor</p>
        <h1>Romance Nocturno</h1>
        <p className="hero-copy">
          A warm night of roses, rhythm, and songs that feel like love remembered after midnight.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#shows">Upcoming Shows</a>
          <a className="button secondary" href="#members">Meet the Band</a>
        </div>
      </section>

      <section id="shows" className="poster-section">
        <p className="eyebrow">Próxima Función</p>
        <h2>Live from the heart of Los Angeles</h2>
        <div className="show-card">
          <div>
            <span className="show-date">Friday · Oct 31</span>
            <h3>Eastside Luv Bar</h3>
            <p>Doors 8PM · 1835 1st St, Los Angeles, CA</p>
          </div>
          <a className="button primary" href="#contact">More Info</a>
        </div>
      </section>

      <section id="members" className="members-section">
        <p className="eyebrow">La Baraja Nocturna</p>
        <h2>Meet the members</h2>

        <div className="loteria-grid">
          {members.map((member) => (
            <article className="loteria-card" key={member.title}>
              <div className="card-number">{member.number}</div>
              <div className="card-image-placeholder">✦</div>
              <h3>{member.title}</h3>
              <p className="member-name">{member.name}</p>
              <p className="member-role">{member.role}</p>
              <p className="member-phrase">{member.phrase}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="merch" className="merch-section">
        <p className="eyebrow">Limited Supply</p>
        <h2>Roses for the night</h2>
        <p>
          Shirts, totes, and small-batch pieces inspired by moonlight, roses, and old love songs.
        </p>
      </section>

      <footer id="contact" className="footer">
        <p>Book Romance Nocturno</p>
        <a href="mailto:booking@example.com">booking@example.com</a>
      </footer>
    </main>
  );
}