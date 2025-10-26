import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

interface Artwork {
  id: number;
  title: string;
  category: string;
  medium: string;
  description: string;
  image: string;
}

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<Artwork | null>(null);

  const categories = [
    { id: "all", label: "All Works" },
    { id: "handmade", label: "Handmade Art" },
    { id: "digital", label: "Order Works" },
    { id: "celebrity", label: "Celebrity Portraits" },
    { id: "caricature", label: "Caricatures" },
    { id: "group", label: "LFA Club Projects" },
    { id: "socialmedia", label: " Social Post" },
    { id: "stencil", label: " Stencil" },
    { id: "oilpainting", label: " Digital Oil Painting" },
    { id: "Logo", label: " Logo" },
  ];

  const artworks: Artwork[] = [
    {
      id: 1,
      title: "Traditional Portrait",
      category: "all",
      medium: "Charcoal & Pencil",
      description: "Detailed traditional drawing technique",
      image: "/Assets/joker1.png",
    },
    {
      id: 7,
      title: "Oil Painting",
      category: "all",
      medium: "Digital Oil Painting",
      description:
        "Traditional oil painting showcasing realistic portrait techniques",
      image: "/Assets/BEST/b5.png",
    },

    {
      id: 3,
      title: "Stencil Art",
      category: "all",
      medium: "Digital Stencil",
      description: "Bold stencil artwork with intricate layering",
      image: "/Assets/BEST/b4.png",
    },
    {
      id: 4,
      title: "Character Illustration",
      category: "digital",
      medium: "Digital Illustration",
      description: "Original character design with vibrant colors",
      image: "/Assets/BEST/b3.png",
    },
    {
      id: 5,
      title: "Caricature Portrait",
      category: "caricature",
      medium: "Digital Caricature",
      description: "Playful exaggerated portrait capturing personality",
      image: "/Assets/BEST/b7.png",
    },
    {
      id: 6,
      title: "College Magazine Cover",
      category: "group",
      medium: "Digital Design",
      description: "LFA Club magazine design and layout",
      image: "/Assets/BEST/b2.png",
    },
    {
      id: 2,
      title: "Celebrity Portrait",
      category: "celebrity",
      medium: "Digital Art",
      description: "Digital illustration of renowned personality",
      image: "/Assets/BEST/b16.png",
    },

    {
      id: 9,
      title: "Event Poster",
      category: "group",
      medium: "Graphic Design",
      description: "College event poster for LFA initiatives",
      image: "/Assets/BEST/b1.png",
    },
    {
      id: 0,
      title: "LFA logo",
      category: "all",
      medium: "Digital Art",
      description: "",
      image: "/Assets/LFA/l14.png",
    },
    {
      id: 10,
      title: "University Poster",
      category: "group",
      medium: "Graphic Design",
      description: "Poster for college event",
      image: "/Assets/LFA/l10.png",
    },

    {
      id: 56,
      title: "Fakt Mahilao Maate",
      category: "celebrity",
      medium: "Digital Art",
      description: "Digital illustration of renowned personality",
      image: "/Assets/BEST/b8.png",
    },
    {
      id: 16,
      title: "The Kapil Sharma Show",
      category: "celebrity",
      medium: "Digital Caricature Art",
      description: "Digital illustration of renowned personality",
      image: "/Assets/Team/t5.webp",
    },
    {
      id: 2000,
      title: "Malhar Thakar",
      category: "celebrity",
      medium: "Digital Oil Painting",
      description: "Digital illustration of renowned personality",
      image: "/Assets/2.webp",
    },
    {
      id: 17,
      title: "Gujarati Serial ",
      category: "celebrity",
      medium: "Digital Art",
      description: "Digital illustration of renowned personality",
      image: "/Assets/Team/t3.png",
    },
    {
      id: 18,
      title: "Laughter Chefs",
      category: "celebrity",
      medium: "Digital Caricature Art",
      description: "Digital illustration of renowned personality",
      image: "/Assets/aly.png",
    },
    {
      id: 19,
      title: "SRK",
      category: "celebrity",
      medium: "Digital Art",
      description: "Digital illustration of renowned personality",
      image: "/Assets/BEST/b6.png",
    },
    {
      id: 20,
      title: "Laughter Chefs",
      category: "celebrity",
      medium: "Digital Caricature Art",
      description: "Digital illustration of renowned personality",
      image: "/Assets/sudesh.png",
    },
    {
      id: 21,
      title: "Indian Idol",
      category: "celebrity",
      medium: "Digital Caricature Art",
      description: "Digital illustration of renowned personality",
      image: "/Assets/Team/t2.jpg",
    },

    {
      id: 1000,
      title: "Emraasn Hashmi ",
      category: "celebrity",
      medium: "Digital Art",
      description: "Digital illustration of renowned personality",
      image: "/Assets/celeb/c1.png",
    },

    {
      id: 28,
      title: "The Family Man",
      category: "caricature",
      medium: "Digital Caricature",
      description: "Playful exaggerated portrait capturing personality",
      image: "/Assets/BEST/b11.png",
    },

    {
      id: 22,
      title: "Order Work",
      category: "caricature",
      medium: "Digital Caricature",
      description: "Playful exaggerated portrait capturing personality",
      image: "/Assets/BEST/b9.png",
    },

    {
      id: 23,
      title: "Brijendra Kala",
      category: "caricature",
      medium: "Digital Caricature",
      description: "Playful exaggerated portrait capturing personality",
      image: "/Assets/caricature/c12.png",
    },
    {
      id: 26,
      title: "Order Work",
      category: "caricature",
      medium: "Digital Caricature",
      description: "Playful exaggerated portrait capturing personality",
      image: "/Assets/caricature/x7.png",
    },
    {
      id: 24,
      title: "Order Work",
      category: "caricature",
      medium: "Digital Caricature",
      description: "Playful exaggerated portrait capturing personality",
      image: "/Assets/caricature/c1.png",
    },

    {
      id: 25,
      title: "Order Work",
      category: "caricature",
      medium: "Digital Caricature",
      description: "Playful exaggerated portrait capturing personality",
      image: "/Assets/caricature/x8.png",
    },

    {
      id: 27,
      title: "Pawan Deep Indian Idol",
      category: "caricature",
      medium: "Digital Caricature",
      description: "Playful exaggerated portrait capturing personality",
      image: "/Assets/caricature/c13.png",
    },

    {
      id: 29,
      title: "College Magazine Cover",
      category: "group",
      medium: "Digital Design",
      description: "LFA Club magazine design and layout",
      image: "/Assets/LFA/l4.png",
    },

    {
      id: 30,
      title: "College Magazine Cover",
      category: "group",
      medium: "Digital Design",
      description: "LFA Club magazine design and layout",
      image: "/Assets/LFA/l4.png",
    },

    {
      id: 31,
      title: "College Magazine Cover",
      category: "group",
      medium: "Digital Design",
      description: "LFA Club magazine design and layout",
      image: "/Assets/LFA/l5.png",
    },

    {
      id: 32,
      title: "Team LFA Magazine Cover",
      category: "group",
      medium: "Digital Design",
      description: "LFA Club magazine design and layout",
      image: "/Assets/LFA/l2.png",
    },

    {
      id: 33,
      title: "Event Poster",
      category: "socialmedia",
      medium: "Post",
      description: "",
      image: "/Assets/LFA/l8.png",
    },

    {
      id: 34,
      title: "Event Poster",
      category: "socialmedia",
      medium: "Post",
      description: "",
      image: "/Assets/LFA/l9.png",
    },
    {
      id: 35,
      title: "Event Poster",
      category: "socialmedia",
      medium: "Post",
      description: "",
      image: "/Assets//f1.png",
    },

    {
      id: 36,
      title: "Stencil Art",
      category: "stencil",
      medium: "Stencil",
      description: "Bold stencil artwork with intricate layering",
      image: "/Assets/stencil/s1.png",
    },

    {
      id: 37,
      title: "Sonu Nigam ",
      category: "stencil",
      medium: "Stencil",
      description: "Bold stencil artwork with intricate layering",
      image: "/Assets/stencil/s7.png",
    },

    {
      id: 38,
      title: "The Great Khali ",
      category: "stencil",
      medium: "Stencil",
      description: "Bold stencil artwork with intricate layering",
      image: "/Assets/stencil/s4.png",
    },

    {
      id: 39,
      title: "Hrithik Roshan ",
      category: "stencil",
      medium: "Stencil",
      description: "Bold stencil artwork with intricate layering",
      image: "/Assets/stencil/s5.png",
    },
    {
      id: 40,
      title: "Neil Nitin Mukesh ",
      category: "stencil",
      medium: "Stencil",
      description: "Bold stencil artwork with intricate layering",
      image: "/Assets/stencil/s3.png",
    },
    {
      id: 41,
      title: "Bobby Deol ",
      category: "stencil",
      medium: "Stencil",
      description: "Bold stencil artwork with intricate layering",
      image: "/Assets/stencil/s10.jpg",
    },

    {
      id: 42,
      title: "Hrithik Roshan",
      category: "stencil",
      medium: "Stencil",
      description: "Bold stencil artwork with intricate layering",
      image: "/Assets/stencil/s9.png",
    },

    {
      id: 43,
      title: "Vidyut",
      category: "stencil",
      medium: "Stencil",
      description: "Bold stencil artwork with intricate layering",
      image: "/Assets/stencil/s2.png",
    },

    {
      id: 44,
      title: "Jimmy Shergill",
      category: "stencil",
      medium: "Stencil",
      description: "Bold stencil artwork with intricate layering",
      image: "/Assets/stencil/s6.png",
    },

    {
      id: 45,
      title: "Oil Painting",
      category: "oilpainting",
      medium: "Digital Oil Painting",
      description:
        "Traditional oil painting showcasing realistic portrait techniques",
      image: "/Assets/BEST/b5.png",
    },

    {
      id: 48,
      title: "Order Work ",
      category: "oilpainting",
      medium: "Digital Oil Painting",
      description:
        "Traditional oil painting showcasing realistic portrait techniques",
      image: "/Assets/order/o6.png",
    },

    {
      id: 49,
      title: "Order Work",
      category: "oilpainting",
      medium: "Digital Oil Painting",
      description:
        "Traditional oil painting showcasing realistic portrait techniques",
      image: "/Assets/order/o4.jpg",
    },
    {
      id: 46,
      title: "Kanwaljit Singh",
      category: "oilpainting",
      medium: "Digital Oil Painting",
      description:
        "Traditional oil painting showcasing realistic portrait techniques",
      image: "/Assets/oil/op3.jpg",
    },

    {
      id: 50,
      title: "Hrithik Roshan",
      category: "oilpainting",
      medium: "Digital Oil Painting",
      description:
        "Traditional oil painting showcasing realistic portrait techniques",
      image: "/Assets/hr.png",
    },
    {
      id: 55,
      title: "Farzi Star-Cast",
      category: "oilpainting",
      medium: "Digital Oil Painting",
      description:
        "Traditional oil painting showcasing realistic portrait techniques",
      image: "/Assets/celeb/c2.png",
    },
    {
      id: 47,
      title: "Order Work",
      category: "oilpainting",
      medium: "Digital Oil Painting",
      description:
        "Traditional oil painting showcasing realistic portrait techniques",
      image: "/Assets/oil/op1.png",
    },

    {
      id: 51,
      title: "LFA logo",
      category: "Logo",
      medium: "Logo",
      description: "",
      image: "/Assets/LFA/l14.png",
    },

    {
      id: 52,
      title: "Order work logo",
      category: "Logo",
      medium: "Logo",
      description: "",
      image: "/Assets/l1.png",
    },

    {
      id: 61,
      title: "Order work from Pune",
      category: "digital",
      medium: "Caricature art ",
      description: "Extra artwork to test All Works",
      image: "/Assets/order/o7.png",
    },

    {
      id: 8000,
      title: "Order work from Ahmedabad",
      category: "digital",
      medium: "Caricature art ",
      description: "Extra artwork to test All Works",
      image: "/Assets/order/or4.png",
    },

    {
      id: 8003,
      title: "Order work from UP",
      category: "digital",
      medium: "Caricature art ",
      description: "Extra artwork to test All Works",
      image: "/Assets/order/or1.png",
    },

    {
      id: 8001,
      title: "Order work from Mumbai",
      category: "digital",
      medium: "Caricature art ",
      description: "Extra artwork to test All Works",
      image: "/Assets/order/or2.png",
    },

    {
      id: 8002,
      title: "Order work from Ahmedabad",
      category: "digital",
      medium: "Caricature art ",
      description: "Extra artwork to test All Works",
      image: "/Assets/order/or3.png",
    },
    {
      id: 62,
      title: "Order work from Mumbai",
      category: "digital",
      medium: "Digital Painting",
      description: "Extra artwork to test All Works",
      image: "/Assets/order/o9.png",
    },

    {
      id: 63,
      title: "Order work from Spain",
      category: "digital",
      medium: "Caricature art",
      description: "Extra artwork to test All Works",
      image: "/Assets/order/o2.png",
    },
    {
      id: 66,
      title: "Order work from UK",
      category: "digital",
      medium: "Digital Painting",
      description: "Extra artwork to test All Works",
      image: "/Assets/order/o13.jpg",
    },
    {
      id: 64,
      title: "Order work from Spain",
      category: "digital",
      medium: "Caricature art",
      description: "Extra artwork to test All Works",
      image: "/Assets/order/o10.png",
    },
    {
      id: 65,
      title: "Order work from Ahmedabad",
      category: "digital",
      medium: "Collage maker",
      description: "Extra artwork to test All Works",
      image: "/Assets/order/o11.png",
    },

    {
      id: 67,
      title: "Order work from Pune",
      category: "digital",
      medium: "Caricature art",
      description: "Extra artwork to test All Works",
      image: "/Assets/order/o12.png",
    },

    {
      id: 68,
      title: "Order work from Spain",
      category: "digital",
      medium: "Digital Painting",
      description: "Extra artwork to test All Works",
      image: "/Assets/order/o1.png",
    },

    {
      id: 69,
      title: "Order work from Spain",
      category: "digital",
      medium: "Caricature art",
      description: "Extra artwork to test All Works",
      image: "/Assets/caricature/x8.png",
    },

    {
      id: 70,
      title: "Order work from Ahmedabad",
      category: "digital",
      medium: "Caricature art",
      description: "Extra artwork to test All Works",
      image: "/Assets/caricature/c1.png",
    },

    {
      id: 71,
      title: "Order work from Ahmedabad",
      category: "digital",
      medium: "Caricature art",
      description: "Extra artwork to test All Works",
      image: "/Assets/caricature/x7.png",
    },

    {
      id: 72,
      title: "Order work from Pune",
      category: "digital",
      medium: "DIgital Stencil art",
      description: "Extra artwork to test All Works",
      image: "/Assets/stencil/s8.png",
    },

    {
      id: 80,
      title: "Handmade Portrait",
      category: "handmade",
      medium: "Charcoal & Graphite ",
      description: " artwork to test All Works",
      image: "/Assets/3.webp",
    },

    {
      id: 5254,
      title: "Handmade Portrait",
      category: "handmade",
      medium: "Charcoal & Graphite ",
      description: " artwork to test All Works",
      image: "/Assets/1.jpeg",
    },

    {
      id: 82,
      title: "Handmade Portrait",
      category: "handmade",
      medium: "Charcoal & Graphite ",
      description: " artwork to test All Works",
      image: "/Assets/joker1.png",
    },

    {
      id: 83,
      title: "Handmade Portrait",
      category: "handmade",
      medium: "Charcoal & Graphite ",
      description: " artwork to test All Works",
      image: "/Assets/4.jpg",
    },

    {
      id: 84,
      title: "Handmade Portrait",
      category: "handmade",
      medium: "Wpap art ",
      description: " artwork to test All Works",
      image: "/Assets/5.jpg",
    },

    {
      id: 85,
      title: "Handmade Portrait",
      category: "handmade",
      medium: "Graphite & Color ",
      description: " artwork to test All Works",
      image: "/Assets/8.jpg",
    },

    {
      id: 86,
      title: "Handmade Portrait",
      category: "handmade",
      medium: "Wpap art ",
      description: " artwork to test All Works",
      image: "/Assets/6.jpg",
    },

    {
      id: 87,
      title: "Handmade Portrait",
      category: "handmade",
      medium: "Charcoal & Graphite ",
      description: " artwork to test All Works",
      image: "/Assets/4.jpeg",
    },

    {
      id: 88,
      title: "Handmade Portrait",
      category: "handmade",
      medium: "Charcoal & Graphite ",
      description: " artwork to test All Works",
      image: "/Assets/5.jpeg",
    },
    {
      id: 89,
      title: "Handmade Portrait",
      category: "handmade",
      medium: "Wpap art ",
      description: " artwork to test All Works",
      image: "/Assets/7.jpg",
    },
    {
      id: 90,
      title: "Handmade Portrait",
      category: "handmade",
      medium: "Charcoal & Graphite ",
      description: " artwork to test All Works",
      image: "/Assets/6.jpeg",
    },
    {
      id: 93,
      title: "Handmade Portrait",
      category: "handmade",
      medium: "Color Pencil ",
      description: " artwork to test All Works",
      image: "/Assets/7.jpeg",
    },
    {
      id: 91,
      title: "Handmade Portrait",
      category: "handmade",
      medium: "Stencil Handmade ",
      description: " artwork to test All Works",
      image: "/Assets/9.jpg",
    },

    {
      id: 92,
      title: "Handmade Portrait",
      category: "handmade",
      medium: "Charcoal & Graphite ",
      description: " artwork to test All Works",
      image: "/Assets/12.png",
    },
    // Add more artworks as needed
  ];

  // Filter artworks based on category
  const filteredArtworks =
    activeCategory === "all"
      ? artworks.slice(0, 9) // show only first 10 in All Works
      : artworks.filter((art) => art.category === activeCategory); // show all in selected category

  return (
    <section id="gallery" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-neutral-400 text-lg">
            A collection of handmade and digital artworks
          </p>
        </div>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-white text-neutral-950"
                  : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group relative rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-all duration-300 cursor-pointer"
              onClick={() => setLightboxImage(artwork)}
            >
              {/* Artwork Image */}
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform group-hover:scale-105"
              />

              {/* Title overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-center">
                <h3 className="text-white font-semibold text-lg truncate">
                  {artwork.title}
                </h3>
                <p className="text-neutral-300 text-sm truncate">
                  {artwork.medium}
                </p>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="text-white" size={48} />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X size={32} />
            </button>

            <div className="max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-700">
              <div className="aspect-video flex items-center justify-center bg-black/20">
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {lightboxImage.title}
                </h3>
                <p className="text-amber-400 mb-4">{lightboxImage.medium}</p>
                <p className="text-neutral-300">{lightboxImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
