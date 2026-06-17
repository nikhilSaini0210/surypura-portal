import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";
import ScrollReveal from "../ui/ScrollReveal";
import { STATS } from "../../data/content";
import type { FC } from "react";

const StatsSection: FC = () => {
  return (
    <section className="py-16 bg-gray-950 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-green-900/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-10">
            Impact by the Numbers — सूर्यपुरा की उपलब्धियां
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08} direction="up">
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 text-center group cursor-default"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="font-bold text-2xl sm:text-3xl text-white mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-400 text-xs leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
