import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="stack gap-lg"
      style={{ alignItems: "center", textAlign: "center", paddingTop: 64 }}
    >
      <div style={{ fontSize: "3.2rem" }}>🌙</div>
      <h1 className="hero-title" style={{ fontSize: "3.8rem" }}>404</h1>
      <p className="muted" style={{ maxWidth: "36ch", lineHeight: 1.70 }}>
        The page you're looking for has disappeared into the night.
        Maybe it was never here — or maybe you just took a wrong turn
        on the way home.
      </p>
      <Link className="btn primary" to="/">Go back home</Link>
    </div>
  );
}
