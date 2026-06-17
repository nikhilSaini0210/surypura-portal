import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";
import type { FC } from "react";

const ACHIEVEMENTS = [
  { icon: "🏆", text: "National Panchayat Award 2024" },
  { icon: "🌱", text: "Best Green Village — Maharashtra" },
  { icon: "📱", text: "Digital India Champion Award" },
  { icon: "🤝", text: "Featured in India Today Rural Special" },
];

const PROGRESS_ITEMS = [
  { label: "Digital Identity Coverage", value: 98 },
  { label: "Road Connectivity", value: 92 },
  { label: "School Enrollment Rate", value: 97 },
  { label: "Farmer Subsidy Reach", value: 100 },
];

const AboutLeader: FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-green-950/20 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Our Visionary Leader"
          title="Meet Rameshwar Patel"
          titleHindi="रमेश्वर पटेल — सूर्यपुरा के सरपंच"
          subtitle="A grassroots leader who turned a struggling village into a model of rural development."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
          <ScrollReveal direction="left">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto max-w-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/15 to-yellow-500/10 rounded-3xl blur-2xl" />
              <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-600 to-green-900 rounded-full flex items-center justify-center text-6xl mb-4 shadow-2xl border-4 border-green-500/30">
                  👨‍🌾
                </div>
                <h3 className="text-white text-xl font-bold">
                  Rameshwar Patel
                </h3>
                <p className="text-green-400 font-hindi text-sm mb-1">
                  रमेश्वर पटेल
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  Sarpanch, Surypura Gram Panchayat
                </p>

                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-left mb-4">
                  <p className="text-gray-300 text-sm italic leading-relaxed">
                    "Every citizen of Surypura deserves dignity, opportunity,
                    and a future. My mission is to ensure no family is left
                    behind in India's development story."
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {ACHIEVEMENTS.map((a, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.04 }}
                      className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-2 text-center"
                    >
                      <div className="text-lg mb-1">{a.icon}</div>
                      <p className="text-gray-400 text-[10px] leading-tight">
                        {a.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-serif">
                From Farmer's Son to{" "}
                <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Change Maker
                </span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Born in Surypura itself, Rameshwar Patel grew up watching his
                father struggle with poor roads, no electricity, and no access
                to government schemes. At 32, he contested the Gram Panchayat
                election on a single promise:{" "}
                <em className="text-green-400">
                  transform Surypura in 5 years.
                </em>
              </p>
              <p className="text-gray-400 leading-relaxed">
                He delivered — and more. Today, Surypura is a national model
                with 100% digital identity coverage, solar-powered streets,
                upgraded schools, and a farmer welfare program that has tripled
                agricultural income.
              </p>

              <div className="space-y-4">
                {PROGRESS_ITEMS.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{item.label}</span>
                      <span className="text-green-400 font-bold">
                        {item.value}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          ease: "easeOut",
                          delay: 0.3,
                        }}
                        className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutLeader;
