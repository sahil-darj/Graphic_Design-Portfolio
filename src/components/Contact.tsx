import { useRef, useState } from "react";
import { Mail, Instagram, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);

    emailjs
      .sendForm(
        "service_is4t7ho", // ✅ Your EmailJS Service ID
        "template_g9u7nr3", // ✅ Your Template ID
        form.current,
        "kK9XlVwZzwONRwPoX" // ✅ Your Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="py-20 bg-neutral-900/50 relative">
      {/* Toast container */}
      <ToastContainer />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-neutral-400 text-lg">
            Have a project in mind? Let's create something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Section: Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Contact Information
            </h3>

            <div className="space-y-5">
              <a
                href="mailto:shaan7art@example.com"
                className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
              >
                <div className="bg-neutral-800 p-3 rounded-lg group-hover:bg-neutral-700 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Email</p>
                  <p className="font-medium">shaan7art@example.com</p>
                </div>
              </a>

              <a
                href="https://instagram.com/shaan_7art"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
              >
                <div className="bg-neutral-800 p-3 rounded-lg group-hover:bg-neutral-700 transition-colors">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Instagram</p>
                  <p className="font-medium">@shaan_7art</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sahil-darji-30a609313/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
              >
                <div className="bg-neutral-800 p-3 rounded-lg group-hover:bg-neutral-700 transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">LinkedIn</p>
                  <p className="font-medium">Sahil Darji</p>
                </div>
              </a>
            </div>

            <div className="mt-8 p-6 bg-neutral-800/50 rounded-xl border border-neutral-700">
              <p className="text-neutral-300 leading-relaxed">
                Whether you're interested in a custom artwork, digital design,
                or collaboration, I'd love to hear from you. Let's discuss how
                we can bring your creative vision to life!
              </p>
            </div>
          </div>

          {/* Right Section: Email Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4"
            aria-label="Contact Form"
          >
            <div>
              <label
                htmlFor="user_name"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                aria-label="Your Name"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="user_email"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                aria-label="Your Email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="user_subject"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="user_subject"
                name="user_subject"
                required
                aria-label="Subject"
                placeholder="Project Subject"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                aria-label="Your Message"
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              aria-label="Send Contact Message"
              className={`group w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                isSending
                  ? "bg-neutral-700 text-neutral-400 cursor-not-allowed"
                  : "bg-white text-neutral-950 hover:bg-neutral-200"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
              <Send
                size={18}
                className={`transition-transform ${
                  !isSending ? "group-hover:translate-x-1" : ""
                }`}
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
