import { useState } from "react";
import { Palette, Brush, Image, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface CommissionsProps {
  scrollToContact: () => void;
}

function Commissions({ scrollToContact }: CommissionsProps) {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      icon: <Palette size={28} className="text-amber-400" />,
      title: "Custom Portraits",
      description:
        "Personalized oil, pencil, or digital portraits that capture emotion and detail.",
    },
    {
      icon: <Brush size={28} className="text-rose-400" />,
      title: "Caricatures",
      description:
        "Playful and expressive caricature art — great for gifts and celebrations.",
    },
    {
      icon: <Image size={28} className="text-blue-400" />,
      title: "Digital Illustrations",
      description:
        "Modern digital artwork crafted for personal, commercial, or social media use.",
    },
    {
      icon: <MessageCircle size={28} className="text-green-400" />,
      title: "Collaborations",
      description:
        "Magazine designs, posters, branding, and creative partnerships.",
    },
  ];

  const orderWorks = [
    "/Assets/s1.png",

    "/Assets/clients/13.jpeg",
    "/Assets/s2.png",
    "/Assets/clients/12.jpeg",
    "/Assets/clients/3.png",
    "/Assets/clients/8.png",
    "/Assets/clients/9.png",
    "/Assets/clients/10.png",
    "/Assets/clients/11.png",

    "/Assets/clients/2.png",
    "/Assets/clients/5.png",
    "/Assets/clients/6.png",
    "/Assets/clients/7.png",
    "/Assets/clients/4.png",

    // add as many images as you have
  ];

  // Show only first 3 images initially
  const displayedWorks = showAll ? orderWorks : orderWorks.slice(0, 3);

  return (
    <section
      id="commissions"
      className="py-24 bg-neutral-950 relative overflow-hidden"
    >
      {/* Soft background orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            Commission Work
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto mt-4">
            Want a personalized artwork or digital design? Let's collaborate and
            bring your vision to life.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="bg-neutral-900/60 p-6 rounded-xl border border-neutral-800 hover:border-neutral-600 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-neutral-800/70">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order Works / Customer Pics */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Happy Customers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedWorks.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-xl border border-neutral-800"
              >
                <img
                  src={img}
                  alt={`Order ${idx + 1}`}
                  className="w-full h-64 object-contain bg-neutral-900"
                />
              </motion.div>
            ))}
          </div>

          {!showAll && orderWorks.length > 3 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 rounded-full font-medium bg-white text-neutral-950 hover:bg-neutral-200 transition-all duration-300"
              >
                See More
              </button>
            </div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={scrollToContact}
            className="px-8 py-3 rounded-full font-medium bg-white text-neutral-950 hover:bg-neutral-200 transition-all duration-300"
          >
            Request a Commission
          </button>
          <p className="text-neutral-500 mt-6 text-sm">
            Turnaround time varies by project. Reach out to discuss your ideas!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Commissions;
