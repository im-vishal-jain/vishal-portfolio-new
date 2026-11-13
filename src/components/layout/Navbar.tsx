
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  House,
  BookOpen,
  FolderOpen,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  Moon,
  Sun,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import "../../styles/Navbar.css";

const navLinks = [
  { name: "Home", path: "/", icon: House },
  { name: "Skills", path: "/skills", icon: BookOpen },
  { name: "Projects", path: "/projects", icon: FolderOpen },
  { name: "Certifications", path: "/certifications", icon: BriefcaseBusiness },
  { name: "Education", path: "/education", icon: GraduationCap },
  { name: "Contact", path: "/contact", icon: Mail },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const light = savedTheme === "light";

    setIsLight(light);
    document.documentElement.dataset.theme = light ? "light" : "dark";
  }, []);

  const toggleTheme = () => {
    const nextLight = !isLight;

    setIsLight(nextLight);

    document.documentElement.dataset.theme = nextLight
      ? "light"
      : "dark";

    localStorage.setItem(
      "portfolio-theme",
      nextLight ? "light" : "dark"
    );
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="portfolio-navbar">
      <div className="navbar-container">

        {/* BRAND */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Vishal Kumar Home"
        >
          VK<span>.</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-links" aria-label="Main navigation">
          {navLinks.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={16} strokeWidth={1.7} />
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="navbar-actions">

          <button
            type="button"
            className="navbar-theme-button"
            onClick={toggleTheme}
            aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
            title="Toggle theme"
          >
            {isLight ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            to="/contact"
            className="navbar-cta"
            aria-label="Contact me"
            title="Contact me"
          >
            <ArrowUpRight size={20} strokeWidth={1.8} />
          </Link>

          <button
            type="button"
            className="navbar-menu-button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <nav
        className={`navbar-mobile ${menuOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            onClick={closeMenu}
            className={({ isActive }) =>
              `navbar-mobile-link ${isActive ? "active" : ""}`
            }
          >
            <Icon size={18} strokeWidth={1.8} />
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
