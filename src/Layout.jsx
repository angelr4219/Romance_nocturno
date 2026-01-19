import { NavLink, Outlet } from "react-router-dom";
import "./styles.css";
import logo from "./assets/romance.jpeg";

export default function Layout() {
  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <img className="logo" src={logo} alt="Romance Nocturno logo" />
          <div className="brand-text">
            <div className="brand-name">Romance Nocturno</div>
            <div className="brand-tag">Boleros • Los Angeles • Est. 2025</div>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
          <NavLink to="/music" className={({ isActive }) => (isActive ? "active" : "")}>
             Music
          </NavLink>

        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Romance Nocturno</small>
      </footer>
    </div>
  );
}
