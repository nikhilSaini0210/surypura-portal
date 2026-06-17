import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import AnimatedCounter from '../ui/AnimatedCounter';

const SCHEMES = [
  { icon: '🌱', title: 'Soil Health Card',    desc: 'Free soil testing and custom fertiliser recommendations for every farm.' },
  { icon: '💧', title: 'Drip Irrigation',     desc: '500 acres covered with drip irrigation, saving 60% water usage.' },
  { icon: '💰', title: 'MSP Guarantee',       desc: 'Direct market linkage ensuring minimum support price for all crops.' },
  { icon: '📲', title: 'e-Kisan Portal',      desc: 'Digital mandi, weather alerts, and agri-expert consultations on mobile.' },
  { icon: '🏦', title: 'Kisan Credit Card',   desc: 'Zero-interest crop loans for all registered farmers via SHG model.' },
  { icon: '🚜', title: 'Farm Mechanisation',  desc: 'Shared tractor, harvester, and thresher pool managed by Panchayat.' },
];

const MINI_STATS = [
  { label: 'Avg Income Increase', value: 180, suffix: '%' },
  { label: 'Hectares Irrigated',  value: 500, suffix: ''  },
  { label: 'Crop Loans Issued',   value: 420, suffix: '+' },
  { label: 'Mandis Connected',    value: 8,   suffix: ''  },
];

export default function FarmersSection() {
  return (
    <section id="farmers" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-green-950/10 to-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="🌾 Farmer Welfare"
          title="Feeding India, Starting Here"
          titleHindi="अन्नदाता किसान — हमारी शान"
          subtitle="Comprehensive support programs ensuring every farmer in Surypura prospers with dignity and technology."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left — overview card */}
          <ScrollReveal direction="left">
            <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 text-9xl opacity-5 select-none">🌾</div>
              <div className="relative">
                <div className="text-6xl mb-4">🧑‍🌾</div>
                <h3 className="text-2xl font-bold text-white font-serif mb-1">850+ Registered Farmers</h3>
                <p className="font-hindi text-green-400/70 mb-4">८५०+ पंजीकृत किसान</p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  From small-holding farmers to progressive agri-entrepreneurs, Surypura's farmer welfare program has transformed lives. Average farm income increased by 180% in 3 years.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {MINI_STATS.map((s) => (
                    <div key={s.label} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                      <div className="text-2xl font-bold text-green-400">
                        <AnimatedCounter target={s.value} suffix={s.suffix} />
                      </div>
                      <div className="text-gray-500 text-xs mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — scheme cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SCHEMES.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08} direction="right">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 h-full hover:border-green-500/20 transition-colors duration-300"
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <h4 className="text-white font-semibold text-sm mb-1">{s.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
