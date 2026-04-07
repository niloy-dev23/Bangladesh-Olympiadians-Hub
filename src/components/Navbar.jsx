import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.jpg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/practice", label: "Practice" },
  { to: "/contests", label: "Contests" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-70 blur-md transition-all duration-500" />
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-all duration-500 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] group-hover:scale-110">
              <img src={logo} alt="BOH Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          <span className="hidden sm:block text-sm font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
            BOH
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 group overflow-hidden ${
                location.pathname === l.to
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              <span className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
              <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">
                {l.label}
              </span>
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-500 ${
                  location.pathname === l.to
                    ? "w-8 bg-gradient-to-r from-primary to-secondary opacity-100 shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
                    : "w-0 bg-primary opacity-0 group-hover:w-6 group-hover:opacity-70"
                }`}
              />
              {location.pathname === l.to && (
                <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_6px_hsl(var(--primary)/0.8)]" />
              )}
            </Link>
          ))}

          {/* Join button */}
          <a
            href="https://chat.whatsapp.com/BQWjAm1koZABG3Amd5D4ic"
            target="_blank"
            rel="noopener noreferrer"
            className="relative ml-3 group"
          >
            <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary via-secondary to-primary opacity-60 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500 animate-pulse" />
            <span className="relative block px-5 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 active:scale-95">
              Join Community
            </span>
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-foreground transition-all duration-300 hover:text-primary"
          >
            <span className={`block transition-transform duration-300 ${menuOpen ? "rotate-90" : ""}`}>
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-card/95 backdrop-blur-xl border-b border-primary/20`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${i * 70}ms` : "0ms" }}
              className={`text-sm font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                menuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              } ${
                location.pathname === l.to
                  ? "text-primary bg-primary/10 border-l-2 border-primary"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5 hover:translate-x-1"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: menuOpen ? `${navLinks.length * 70}ms` : "0ms" }}
            className={`mt-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold text-center transition-all duration-300 ${
              menuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            Join Community
          </a>
        </div>
      </div>
    </nav>
  );
}
