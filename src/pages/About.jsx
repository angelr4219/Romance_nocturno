const members = [
    { name: "Richie", role: "Member" },
    { name: "Paulina", role: "Member" },
    { name: "Angel", role: "Member" },
    { name: "Enrique", role: "Member" },
    { name: "Bryan", role: "Member" },
    { name: "Aida", role: "Member" },
  ];
  
  export default function About() {
    return (
      <div className="stack gap-lg">
        <section className="card">
          <h1 className="page-title">About Romance Nocturno</h1>
          <p className="muted">
            Romance Nocturno is a bolero music group founded in 2025 in Los Angeles.
            Our sound is built around the warmth and elegance of Hispanic boleros —
            music that’s meant to be felt.
          </p>
        </section>
  
        <section className="card">
          <h2 className="section-title">Members</h2>
          <div className="member-grid">
          {members.map((m) => (
  <div key={m.name} className="member">
    <div className="member-name">{m.name}</div>
    <div className="muted small">{m.role}</div>
  </div>
))}

          </div>
        </section>
  
        <section className="card">
          <h2 className="section-title">What we’re about</h2>
          <ul className="list">
            <li>Romance-forward setlists with classic bolero storytelling</li>
            <li>Elegant, intimate live performance energy</li>
            <li>Respect for tradition with room for fresh arrangements</li>
          </ul>
        </section>
      </div>
    );
  }
  