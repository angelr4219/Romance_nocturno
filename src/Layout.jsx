import { NavLink, Outlet } from "react-router-dom";
import "./styles.css";
import logo from "./assets/romance.jpeg";
import { theme } from "./theme";

const navLinks = [
  { to: "/",        label: "Home",    end: true },
  { to: "/about",   label: "About"              },
  { to: "/music",   label: "Music"              },
  { to: "/merch",   label: "Merch"              },
  { to: "/contact", label: "Contact"            },
];

export default function Layout() {
  return (
    <div className="app" style={theme}>
      <header className="header">
        <div className="brand">
          <img className="logo" src={logo} alt="Romance Nocturno logo" />
          <div className="brand-text">
            <div className="brand-name">Romance Nocturno</div>
            <div className="brand-tag">Boleros · Los Angeles · Est. 2025</div>
          </div>
        </div>

        <nav className="nav">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="stack gap-sm">
            <span className="footer-copy">
              © {new Date().getFullYear()} Romance Nocturno · Los Angeles
            </span>
            <span className="footer-tagline">Amor recordado en la noche</span>
            <span className="footer-credit">Created by Angel Ramirez</span>
          </div>

          <div className="socials">
            <a className="social" href="#instagram" target="_blank" rel="noreferrer">Instagram</a>
            <a className="social" href="#facebook"  target="_blank" rel="noreferrer">Facebook</a>
            <a className="social" href="#youtube"   target="_blank" rel="noreferrer">YouTube</a>
            <a className="social" href="#spotify"   target="_blank" rel="noreferrer">Spotify</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
