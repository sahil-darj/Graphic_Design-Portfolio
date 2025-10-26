import { Instagram, Linkedin, Mail, Palette } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Palette className="text-amber-400" size={24} />
            <span className="text-xl font-bold text-white">Sahil Darji</span>
          </div>

          <div className="flex gap-6">
            <a
              href="mailto:sahil@example.com"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.instagram.com/shaan_7art/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-darji-30a609313/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-500">
          <p>Copyright © 2025 Sahil Darji | Designed in India</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
