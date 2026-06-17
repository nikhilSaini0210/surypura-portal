import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";
import type { FC } from "react";

const INITIATIVES = [
  {
    icon: "💻",
    title: "Smart Classrooms",
    desc: "6 schools equipped with digital projectors, e-content, and Wi-Fi.",
  },
  {
    icon: "📱",
    title: "Free Tablets",
    desc: "400 tablets distributed to students of Class 6–12.",
  },
  {
    icon: "👩‍🏫",
    title: "Teacher Training",
    desc: "Monthly workshops on digital pedagogy and STEM methods.",
  },
  {
    icon: "🎒",
    title: "Mid-Day Meal Plus",
    desc: "Nutrition-enhanced meals with eggs, milk, and seasonal fruit daily.",
  },
  {
    icon: "🏫",
    title: "School Rebuilding",
    desc: "3 schools rebuilt with modern classrooms, labs, and libraries.",
  },
  {
    icon: "🎓",
    title: "Scholarship Portal",
    desc: "200+ scholarships managed digitally — zero leakage.",
  },
];

const EducationSection: FC = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 relative overflow-hidden"
    >
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="📚 Smart Education"
          title="Lighting Up Young Minds"
          titleHindi="शिक्षा की रोशनी — हर बच्चे का अधिकार"
          subtitle="Modern education infrastructure bringing world-class learning to Surypura's 1,200+ students."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIATIVES.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -6 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 border-t-2 border-t-blue-500/30 group h-full hover:border-blue-500/20 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mt-12 backdrop-blur-md bg-blue-900/20 border border-blue-500/20 rounded-2xl p-8 text-center"
          >
            <div className="text-4xl mb-3">🎓</div>
            <p className="text-gray-300 text-lg mb-2">
              School dropout rate dropped from{" "}
              <span className="text-red-400 font-bold">34%</span> to{" "}
              <span className="text-green-400 font-bold text-2xl">3%</span> in 3
              years.
            </p>
            <p className="text-gray-500 text-sm font-hindi">
              तीन वर्षों में स्कूल छोड़ने की दर ३४% से घटकर ३% हो गई।
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EducationSection;
