export default function Music() {
    return (
      <div className="stack gap-lg">
        <section className="card">
          <h1 className="page-title">Music</h1>
          <p className="muted">
            For those who are reading this — here’s our setlist. See you tonight!
          </p>
        </section>
  
        <section className="card">
          <h2 className="section-title">Featured Playlist</h2>
  
          <div className="spotify-embed">
            <iframe
              title="Romance Nocturno Playlist"
              style={{ borderRadius: 12 }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1E36834nJ1IfMq?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </section>
      </div>
    );
  }
  