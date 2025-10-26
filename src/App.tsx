import { useState } from "react";
import { Menu, X } from "lucide-react";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills"; // 👈 newly added
import Gallery from "./components/Gallery";
import Commissions from "./components/Commissions";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* ===== Navbar ===== */}
      <nav className="fixed top-0 w-full bg-neutral-950/90 backdrop-blur-md z-50 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo / Name */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold tracking-tight">Sahil Darji</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-neutral-300 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("commissions")}
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Commissions
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-neutral-300 hover:text-white"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-t border-neutral-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "gallery", label: "Gallery" },
                { id: "commissions", label: "Commissions" },
                { id: "contact", label: "Contact" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-3 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-md transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* ===== Sections ===== */}
      <Hero scrollToGallery={() => scrollToSection("gallery")} />
      <About />
      <Skills /> {/* 👈 added new Skills section */}
      <Gallery />
      <Commissions scrollToContact={() => scrollToSection("contact")} />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
