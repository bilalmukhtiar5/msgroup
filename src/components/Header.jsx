import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";

function Header() {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">

      {/* Main Navbar */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => goTo("home")}
          className="flex items-center"
        >
          <img
            src="/ms-group-logo.png"
            alt="MS Group"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 text-sm font-semibold lg:flex">

          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/services" className="nav-link">
            Services
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <button className="nav-link flex items-center gap-1">
              About
              <FaChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  aboutDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {aboutDropdown && (
              <div className="absolute left-0 top-full w-56 rounded-2xl border border-black/10 bg-white p-2 shadow-xl">
                <Link
                  to="/about"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-black/70 transition hover:bg-black/[.04] hover:text-msred"
                >
                  About Us
                </Link>
                <Link
                  to="/founder"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-black/70 transition hover:bg-black/[.04] hover:text-msred"
                >
                  Our Founder
                </Link>
                <Link
                  to="/team"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-black/70 transition hover:bg-black/[.04] hover:text-msred"
                >
                  Our Team
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>

          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>

          <Link
            to="/careers"
            className="rounded-full bg-msred px-5 py-2.5 text-white transition hover:bg-msredDark"
          >
            Careers
          </Link>

        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-black/10 px-3 py-2 text-xl lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-black/10 bg-white px-5 py-5 lg:hidden">

          <div className="flex flex-col gap-4 text-sm font-semibold">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-left"
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="text-left"
            >
              Services
            </Link>

            {/* Mobile About Dropdown */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="flex w-full items-center justify-between text-left"
              >
                About
                <FaChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    mobileAboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileAboutOpen && (
                <div className="mt-3 flex flex-col gap-3 border-l border-black/10 pl-4">
                  <Link
                    to="/about"
                    onClick={() => setMenuOpen(false)}
                    className="text-black/60"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/founder"
                    onClick={() => setMenuOpen(false)}
                    className="text-black/60"
                  >
                    Our Founder
                  </Link>
                  <Link
                    to="/team"
                    onClick={() => setMenuOpen(false)}
                    className="text-black/60"
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-left"
            >
              Contact Us
            </Link>

            <Link
              to="/portfolio"
              onClick={() => setMenuOpen(false)}
              className="text-left"
            >
              Portfolio
            </Link>

            <Link
              to="/careers"
              onClick={() => setMenuOpen(false)}
              className="w-fit rounded-full bg-msred px-5 py-2.5 text-white"
            >
              Careers
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}

export default Header;