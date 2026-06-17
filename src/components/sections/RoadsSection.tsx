import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';

const ROAD_PHASES = [
  { phase: 'Phase 1', desc: '4 km main village road to highway',    status: 'Completed',   done: true  },
  { phase: 'Phase 2', desc: '5 km inter-hamlet connectivity',        status: 'Completed',   done: true  },
  { phase: 'Phase 3', desc: '3 km school & hospital access road',    status: 'Completed',   done: true  },
  { phase: 'Phase 4', desc: '2 km agricultural market linkage road', status: 'In Progress', done: false },
];

const FEATURES = [
  { icon: '☀️', text: '85 Solar street lights installed along all roads' },
  { icon: '🌧️', text: 'All-weather CC roads — no disruption during monsoon' },
  { icon: '🚨', text: 'Emergency signage and speed bumps near schools' },
  { icon: '🌳', text: '400 trees planted along road corridors' },
  { icon: '📡', text: 'Fibre optic cable laid alongside road network' },
  { icon: '♿', text: 'Disabled-accessible ramps at major junctions' },
];

export default function RoadsSection() {
  return (
    <section id="roads" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-orange-950/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="🛣️ Road Infrastructure"
          title="Every Road Tells a Story"
          titleHindi="हर सड़क — एक नई उम्मीद"
          subtitle="12 km of all-weather, solar-lit roads connecting every corner of Surypura to opportunity."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Phase timeline */}
          <ScrollReveal direction="left">
            <div className="space-y-2">
              {ROAD_PHASES.map((p, i) => (
                <motion.div
                  key={p.phase}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full border-2 mt-3 flex-shrink-0 ${p.done ? 'bg-green-500 border-green-400 shadow-green-500/50 shadow-lg' : 'bg-yellow-500 border-yellow-400'}`} />
                    {i < ROAD_PHASES.length - 1 && (
                      <div className="w-0.5 h-8 bg-white/10 mt-1" />
                    )}
                  </div>
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 flex-1 mb-2 hover:border-orange-500/20 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-white font-bold text-sm">{p.phase}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${p.done ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                        {p.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Smart features card */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-5xl mb-4">🛣️</div>
              <h3 className="text-2xl font-bold text-white mb-6">Smart Road Features</h3>
              <div className="space-y-4">
                {FEATURES.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-xl mt-0.5 flex-shrink-0">{f.icon}</span>
                    <span className="text-gray-300 text-sm">{f.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
