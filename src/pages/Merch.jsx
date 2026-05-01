import { Link } from "react-router-dom";
import { products } from "../data/merch";

export default function Merch() {
  return (
    <div className="stack gap-xl">

      <section className="card">
        <h1 className="page-title">Merch</h1>
        <p className="muted" style={{ lineHeight: 1.68, maxWidth: "58ch" }}>
          Wear the night. Everything here is designed to carry the spirit of
          Romance Nocturno with you — wherever the evening takes you.
        </p>
        <div className="note" style={{ marginTop: 16 }}>
          Merch is coming soon. Reach out through our{" "}
          <Link to="/contact" style={{ color: "var(--gold)", textDecoration: "underline" }}>
            contact page
          </Link>{" "}
          to reserve items or ask about availability.
        </div>
      </section>

      <div className="merch-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <div className="product-image-slot">
              <div className="product-image-slot-inner">
                <span className="product-image-icon">{p.icon}</span>
                <span className="product-image-label">Photo coming soon</span>
              </div>
            </div>
            <div className="product-info">
              <div className="product-name">{p.name}</div>
              <p className="product-desc">{p.desc}</p>
              <div className="product-price">{p.price}</div>
            </div>
            <div className="product-actions">
              <button className="btn" disabled style={{ width: "100%", opacity: 0.65, cursor: "default" }}>
                Coming Soon
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="card" style={{ textAlign: "center", padding: "36px 24px" }}>
        <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>✉️</div>
        <h3 className="section-title" style={{ marginBottom: 10 }}>Want to be notified when merch drops?</h3>
        <p className="muted" style={{ maxWidth: "44ch", margin: "0 auto 22px", lineHeight: 1.65 }}>
          Send us a message and we'll let you know as soon as the store is live.
        </p>
        <Link className="btn primary" to="/contact">Get in touch</Link>
      </section>

    </div>
  );
}
