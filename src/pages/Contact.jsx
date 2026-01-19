export default function Contact() {
    return (
      <div className="stack gap-lg">
        <section className="card">
          <h1 className="page-title">Contact / Booking</h1>
          <p className="muted">
            Send us the date, location, and vibe you’re going for — we’ll reply with
            availability and options.
          </p>
  
          <div className="grid-2 gap-lg">
            <div className="card inset">
              <h3 className="section-title">Booking info</h3>
              <ul className="list">
                <li><strong>City:</strong> Los Angeles (SoCal available)</li>
                <li><strong>Events:</strong> private events, restaurants, serenatas</li>
                <li><strong>Set length:</strong> flexible</li>
              </ul>
            </div>
  
            <div className="card inset">
              <h3 className="section-title">Email</h3>
              <p className="muted">
                Add your email here when you’re ready:
              </p>
              <p className="mono">romancenocturno@example.com</p>
              <p className="muted small">
                (We can swap this for your real booking email later.)
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  