export default function Music() {
  return (
    <div className="music-page">

      {/* ─── HERO ─── */}
      <section className="music-hero full-bleed">
        <p className="hero-eyebrow">Boleros · Serenatas · En Vivo</p>
        <h1 className="poster-title">Music</h1>
      </section>

      {/* ─── LIVE VIDEO ─── */}
      <section className="music-section music-section--cream full-bleed">
        <div className="music-section-inner">
          <p className="section-stamp red">EN VIVO</p>
          <h2 className="music-section-title">Watch Us Live</h2>
          <div className="yt-wrap">
            <iframe
              title="Romance Nocturno Live"
              src="https://www.youtube.com/embed/0Ejp011UZ1s"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ─── SPOTIFY ─── */}
      <section className="music-section music-section--paper full-bleed">
        <div className="music-section-inner">
          <p className="section-stamp red">PLAYLIST</p>
          <h2 className="music-section-title">Featured Playlist</h2>
          <iframe
            title="Romance Nocturno Playlist"
            className="spotify-embed"
            src="https://open.spotify.com/embed/playlist/3ZhIvYV0imMe1QBqZEz0kk?utm_source=generator"
            width="100%"
            height="700"
            style={{ border: 0 }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>

      {/* ─── REPERTOIRE ─── */}
      <section className="music-section music-section--navy full-bleed">
        <div className="music-section-inner">
          <p className="section-stamp cream">EL REPERTORIO</p>
          <h2 className="music-section-title music-section-title--light">What We Play</h2>
          <ul className="music-list">
            <li>Classic bolero standards — Agustín Lara, Armando Manzanero</li>
            <li>Romantic Latin ballads and golden era favorites</li>
            <li>Serenata sets — traditional and modern arrangements</li>
            <li>Custom setlists shaped around your evening</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
