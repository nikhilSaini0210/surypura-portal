import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import Badge from '../ui/Badge';
import SectionTitle from '../ui/SectionTitle';
import { PROGRAMS } from '../../data/content';

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <SectionTitle
          badge="Our Programs"
          title="Transforming Surypura"
          titleHindi="सूर्यपुरा को बदलने की पहल"
          subtitle="Six pillars of development working together to create India's most advanced rural community."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, i) => (
            <ScrollReveal key={program.id} delay={i * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 group cursor-pointer h-full flex flex-col hover:border-green-500/20 transition-colors duration-300"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {program.icon}
                </div>

                <Badge label={program.tag} color="green" />
                <h3 className="text-white font-bold text-xl mt-3 mb-1">{program.title}</h3>
                <p className="text-green-400/70 text-sm font-hindi mb-3">{program.titleHindi}</p>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">{program.description}</p>

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-green-400 font-semibold text-sm">{program.stats}</span>
                  <motion.span
                    whileHover={{ x: 4 }}
                    className="text-gray-500 group-hover:text-green-400 transition-colors text-sm"
                  >
                    Learn more →
                  </motion.span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
