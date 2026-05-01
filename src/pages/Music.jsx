export default function Music() {
  return (
    <div className="stack gap-xl">

      <section className="card">
        <h1 className="page-title">Music</h1>
        <p className="muted" style={{ lineHeight: 1.70, maxWidth: "60ch" }}>
          Below is a selection of the boleros and romantic Latin standards we love
          and perform. Think of this as a window into our sound — every set is
          shaped around the mood of the night.
        </p>
      </section>

      <section className="card">
        <h2 className="section-title">Featured Playlist</h2>
        <div className="spotify-embed">
          <iframe
            title="Romance Nocturno Playlist"
            style={{ borderRadius: 12, display: "block" }}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1E36834nJ1IfMq?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>

      <div className="grid-2">
        <div className="card">
          <h2 className="section-title">What We Play</h2>
          <ul className="list">
            <li>Classic bolero standards — Agustín Lara, Armando Manzanero</li>
            <li>Romantic Latin ballads and golden era favorites</li>
            <li>Serenata sets — traditional and modern arrangements</li>
            <li>Custom setlists shaped around your evening</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="section-title">Coming Soon</h2>
          <p className="muted" style={{ lineHeight: 1.70, marginBottom: 20 }}>
            Original recordings and live videos are on the way. Follow us on
            social media to be the first to hear them.
          </p>
          <div className="ornament" style={{ fontSize: "1.6rem", letterSpacing: "0.4em" }}>
            ♩ ♪ ♫ ♬
          </div>
        </div>
      </div>

      {/* VIDEO PLACEHOLDER */}
      <section className="card">
        <h2 className="section-title">Live Video</h2>
        <div
          className="photo-slot"
          style={{ minHeight: 280, borderRadius: 14 }}
          role="img"
          aria-label="Video placeholder"
        >
          <div className="photo-slot-inner">
            <span className="photo-slot-icon">🎬</span>
            <div className="photo-slot-title">Live Performance Video</div>
            <div className="photo-slot-subtitle">
              Add a YouTube or Vimeo embed here when you have footage
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
