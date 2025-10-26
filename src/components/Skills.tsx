import { Palette, PenTool, Brush, Image, Sparkles } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      icon: <Brush size={28} />,
      category: "Artistic Skills",
      items: [
        "Pencil Sketching",
        "Digital Illustration",
        "Stencil Art & Oil Painting",
        "Character Design",
        "Logo Design",
      ],
    },
    {
      icon: <Image size={28} />,
      category: "Software Proficiency",
      items: [
        "Adobe Photoshop",

        "Canva",
        "Auto Desk Sketchbook",
        "Procreate",
        "Adobe Illustrator (Basic)",
        "Figma (Basic)",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-neutral-950 to-neutral-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">
          Skills & Expertise
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-pink-500 hover:shadow-pink-500/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 justify-center">
                <span className="text-pink-400">{skill.icon}</span>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>

              <ul className="flex flex-wrap justify-center gap-3">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="bg-neutral-800 text-sm px-4 py-2 rounded-full border border-neutral-700 hover:border-pink-400 hover:scale-105 transition-all"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-neutral-400 flex flex-col items-center">
          <Sparkles className="text-pink-400 mb-2" size={28} />
          <p className="max-w-md">
            “Every line, every color, every design tells a story — and mine is
            built through creativity and emotion.”
          </p>
        </div>
      </div>
    </section>
  );
}
