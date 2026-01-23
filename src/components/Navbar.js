import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  /* CLOSE MENU ON ROUTE CHANGE */
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  /* LOCK SCROLL WHEN MENU OPEN */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        {/* LOGO */}
        <Link to="/" className="logo-link">
          <h2 className="logo">Prasannakumar</h2>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="nav-links desktop">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/certifications">Certifications</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* ACTIONS */}
        <div className="nav-actions">
          {/* SOCIALS + THEME TOGGLE (DESKTOP) */}
          <div className="socials desktop">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            {/* THEME TOGGLE */}
            <button
              className="theme-btn inline-toggle"
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>

          {/* HAMBURGER */}
          <button className="hamburger" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE SLIDE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* SLIDE PANEL */}
            <motion.aside
              className="mobile-slide"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* CLOSE */}
              <button
                className="close-btn"
                onClick={() => setMenuOpen(false)}
              >
                <FaTimes />
              </button>

              {/* LINKS */}
              <nav className="mobile-links">
                {[
                  { name: "Home", path: "/" },
                  { name: "Projects", path: "/projects" },
                  { name: "Skills", path: "/skills" },
                  { name: "Certifications", path: "/certifications" },
                  { name: "Contact", path: "/contact" },
                ].map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </motion.div>
                ))}

                {/* MOBILE SOCIAL ICONS */}
                <motion.div
                  className="mobile-socials"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </motion.div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
