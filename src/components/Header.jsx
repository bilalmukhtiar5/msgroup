import { useState } from "react";

function Header() {
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
        <button
          onClick={() => goTo("home")}
          className="flex items-center"
        >
          <img
            src="/ms-group-logo.png"
            alt="MS Group"
            className="h-16 w-auto object-contain"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 text-sm font-semibold lg:flex">
          
          <button
            onClick={() => goTo("home")}
            className="nav-link"
          >
            Home
          </button>

          <button
            onClick={() => goTo("services")}
            className="nav-link"
          >
            Services
          </button>

          <button
            onClick={() => goTo("about")}
            className="nav-link"
          >
            About
          </button>

          <button
            onClick={() => goTo("contact")}
            className="nav-link"
          >
            Contact
          </button>

          {/* Quote Button */}
          <button
            onClick={() => goTo("contact")}
            className="rounded-full bg-msred px-5 py-2.5 text-white transition hover:bg-msredDark"
          >
            Get a Quote
          </button>

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

            <button
              onClick={() => goTo("home")}
              className="text-left"
            >
              Home
            </button>

            <button
              onClick={() => goTo("services")}
              className="text-left"
            >
              Services
            </button>

            <button
              onClick={() => goTo("about")}
              className="text-left"
            >
              About
            </button>

            <button
              onClick={() => goTo("contact")}
              className="text-left"
            >
              Contact
            </button>

            <button
              onClick={() => goTo("contact")}
              className="w-fit rounded-full bg-msred px-5 py-2.5 text-white"
            >
              Get a Quote
            </button>

          </div>

        </div>
      )}

    </header>
  );
}

export default Header;