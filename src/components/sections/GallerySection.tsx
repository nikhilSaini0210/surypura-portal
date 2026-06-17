import { useState, type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";

const GALLERY_ITEMS = [
  { id: 1, emoji: "🌅", label: "Sunrise over Surypura", category: "Village" },
  { id: 2, emoji: "🛣️", label: "New Highway Road", category: "Roads" },
  { id: 3, emoji: "📚", label: "Smart Classroom", category: "Education" },
  { id: 4, emoji: "🌾", label: "Harvest Festival", category: "Farmers" },
  { id: 5, emoji: "☀️", label: "Solar Street Lights", category: "Energy" },
  { id: 6, emoji: "🏛️", label: "Gram Sabha Meeting", category: "Governance" },
  { id: 7, emoji: "💧", label: "Drip Irrigation Fields", category: "Farmers" },
  { id: 8, emoji: "📱", label: "Jan Seva Kendra", category: "Digital" },
  { id: 9, emoji: "🎓", label: "Scholarship Ceremony", category: "Education" },
];

const CATS = [
  "All",
  "Village",
  "Roads",
  "Education",
  "Farmers",
  "Energy",
  "Governance",
  "Digital",
];

const GallerySection: FC = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.category === active);

  return (
    <section
      id="gallery"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="📸 Photo Gallery"
          title="Life in Surypura"
          titleHindi="सूर्यपुरा की झलकियां"
          subtitle="Moments that capture the transformation of a village and the spirit of its people."
        />

        <ScrollReveal>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATS.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                    : "backdrop-blur-md bg-white/5 border border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl aspect-video flex flex-col items-center justify-center gap-2 cursor-pointer group overflow-hidden relative hover:border-green-500/20 transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {item.emoji}
                </span>
                <p className="text-gray-400 text-xs text-center px-2 group-hover:text-white transition-colors duration-300 relative z-10">
                  {item.label}
                </p>
                <span className="absolute top-2 right-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
