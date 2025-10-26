import { Quote } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Praksh Ratan",
      role: "Client from Spain",
      text: "Sahil delivered 7–8 custom caricatures for our travel group, and every piece was full of life and creativity. His designs traveled with us across Europe — truly memorable work from a talented artist!",
    },
    {
      id: 2,
      name: "LFA Club Team",
      role: "Design & Media Department",
      text: "Collaborating with Sahil on LFA’s event posters, magazine layouts, and art campaigns has been inspiring. His innovative designs and strong sense of teamwork uplift the entire club’s creative output.",
    },
    {
      id: 3,
      name: "Ashish Agrawal",
      role: "First Client – Nagpur",
      text: "Sahil made my first handmade color pencil portrait so special! His precision, color sense, and quick delivery truly impressed me. I still have the artwork framed — a wonderful experience working with him.",
    },
  ];

  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-neutral-400 text-lg">
            Feedback from clients and collaborators
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors"
            >
              <Quote className="text-amber-400 mb-4" size={32} />

              <p className="text-neutral-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-neutral-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
