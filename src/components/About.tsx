import { Palette, Brush, Briefcase, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-center px-6 md:px-20 py-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT SECTION */}
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            About <span className="text-yellow-400">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            I’m <span className="text-white font-semibold">Sahil Darji</span>,
            an illustrator & graphic designer who loves turning imagination into
            reality — from hand-drawn portraits to polished digital art. I
            combine{" "}
            <span className="text-yellow-400">creativity and technology</span>
            to craft visual stories that inspire.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Over the years, I’ve completed{" "}
            <span className="text-yellow-400 font-semibold">
              100+ commissioned artworks
            </span>
            for clients across India, London, and Spain — including custom
            caricatures, portraits, and brand designs.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Currently, I serve as the{" "}
            <span className="text-pink-400 font-semibold">
              Design Head of LFA (LJ University)
            </span>
            , leading design for college magazines, events & creative campaigns.
          </p>

          {/* SKILL BOXES */}
          <div className="grid grid-cols-2 gap-5 pt-6">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700 rounded-xl p-5 hover:border-yellow-400 transition">
              <Palette className="text-yellow-400 mb-3" size={26} />
              <h4 className="font-semibold text-lg">Traditional Art</h4>
              <p className="text-sm text-gray-400">
                Oil, Stencil & Pencil Sketching
              </p>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700 rounded-xl p-5 hover:border-pink-400 transition">
              <Brush className="text-pink-400 mb-3" size={26} />
              <h4 className="font-semibold text-lg">Digital Design</h4>
              <p className="text-sm text-gray-400">
                Illustrator, Photoshop & Procreate
              </p>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700 rounded-xl p-5 hover:border-blue-400 transition">
              <Briefcase className="text-blue-400 mb-3" size={26} />
              <h4 className="font-semibold text-lg">LFA Club</h4>
              <p className="text-sm text-gray-400">
                Design Head – Magazines & Events
              </p>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700 rounded-xl p-5 hover:border-green-400 transition">
              <Sparkles className="text-green-400 mb-3" size={26} />
              <h4 className="font-semibold text-lg">Freelance Work</h4>
              <p className="text-sm text-gray-400">
                100+ Commissions & Caricatures
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center md:justify-end">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-500/20 via-pink-500/10 to-transparent blur-3xl rounded-full"></div>

          {/* Main Image */}
          <div className="relative w-[380px] h-[480px] md:w-[450px] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900">
            <img
              src="public/Assets/em.jpg"
              alt="Sahil Darji Portrait"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating small thumbnails */}
          <div className="absolute bottom-[-40px] left-[10%] flex gap-4">
            <img
              src="public/Assets/profile.jpeg"
              alt="Artwork sample 1"
              className="w-36 h-36 rounded-2xl border border-neutral-700 object-cover shadow-lg hover:scale-105 transition-transform duration-500"
            />
            <img
              src="public/Assets/121.jpg"
              alt="Artwork sample 2"
              className="w-36 h-36 rounded-2xl border border-neutral-700 object-cover shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
