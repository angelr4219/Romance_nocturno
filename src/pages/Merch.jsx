import { Link } from "react-router-dom";
import { products } from "../data/merch";
import merch1Img from "../assets/26.04.19 Romance Nocturno-merch1.jpg";

export default function Merch() {
  return (
    <div className="merch-page">

      {/* ─── HERO ─── */}
      <section className="merch-page-hero full-bleed">
        <div className="merch-page-hero-text">
          <p className="hero-eyebrow">Edición Limitada · Los Angeles</p>
          <h1 className="about-headline">Roses for<br />the Night</h1>
          <p className="about-intro-text">
            Wear the night. Everything here is designed to carry the spirit of
            Romance Nocturno with you — wherever the evening takes you.
          </p>
          <p className="merch-coming-note">
            ✦ &nbsp; Store coming soon — reach out to reserve items early.
          </p>
          <Link className="poster-btn primary" to="/contact" style={{ marginTop: 28, alignSelf: "flex-start" }}>
            Contact Us to Reserve
          </Link>
        </div>
        <div className="merch-page-hero-photo">
          <img src={merch1Img} alt="Romance Nocturno merch" />
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section className="merch-products full-bleed">
        <div className="merch-products-inner">
          <p className="section-stamp red">EL GUARDARROPA</p>
          <h2 className="about-section-heading">The Collection</h2>
          <div className="merch-products-grid">
            {products.map((p) => (
              <div key={p.id} className="merch-product-card">
                <div className="merch-product-image">
                  <span className="merch-product-icon">{p.icon}</span>
                </div>
                <div className="merch-product-body">
                  <h3 className="merch-product-name">{p.name}</h3>
                  <p className="merch-product-desc">{p.desc}</p>
                  <div className="merch-product-footer">
                    <span className="merch-product-price">{p.price}</span>
                    <span className="merch-product-soon">Coming Soon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="merch-cta full-bleed">
        <div className="merch-cta-inner">
          <p className="section-stamp cream">RESERVA TU PIEZA</p>
          <h2 className="merch-cta-title">Want to be first?</h2>
          <p className="merch-cta-sub">
            Send us a message and we'll notify you the moment the store goes live.
            Limited runs — no restocks.
          </p>
          <Link className="poster-btn primary" to="/contact">Get in Touch →</Link>
        </div>
      </section>

    </div>
  );
}
