import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import AnimatedCounter from '../ui/AnimatedCounter';

const SERVICES = [
  { icon: '🪪', title: 'Aadhaar Enrollment',    count: 4200, suffix: '+' },
  { icon: '🏦', title: 'Bank Account Linkage',  count: 3850, suffix: '+' },
  { icon: '💊', title: 'Health Cards Issued',   count: 3200, suffix: '+' },
  { icon: '👴', title: 'Pension Registrations', count: 420,  suffix: '+' },
  { icon: '🌾', title: 'PM-Kisan Registered',   count: 850,  suffix: '+' },
  { icon: '🏠', title: 'PM Awas (Housing)',      count: 280,  suffix: '+' },
];

export default function DigitalSection() {
  return (
    <section id="digital" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionTitle
          badge="📱 Digital India"
          title="Every Citizen, Digitally Empowered"
          titleHindi="डिजिटल पहचान — हर नागरिक का हक"
          subtitle="Surypura achieved 98% digital identity coverage — the highest in the district — through the Jan Seva Kendra model."
        />

        {/* Big stats banner */}
        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="backdrop-blur-md bg-purple-900/20 border border-purple-500/20 rounded-2xl p-8 mb-12"
          >
            <div className="flex flex-wrap justify-center gap-8 sm:gap-16 text-center">
              <div>
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent mb-1">
                  <AnimatedCounter target={98} suffix="%" />
                </div>
                <p className="text-gray-400 text-sm">Digital ID Coverage</p>
              </div>
              <div className="w-px bg-white/10 hidden sm:block" />
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-1">
                  <AnimatedCounter target={2000} suffix="+" />
                </div>
                <p className="text-gray-400 text-sm">Monthly Applications</p>
              </div>
              <div className="w-px bg-white/10 hidden sm:block" />
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-1">
                  ₹0
                </div>
                <p className="text-gray-400 text-sm">Service Fee (Free!)</p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Services grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 text-center group hover:border-purple-500/20 transition-colors duration-300"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <div className="text-green-400 font-bold text-lg mb-1">
                  <AnimatedCounter target={s.count} suffix={s.suffix} />
                </div>
                <div className="text-gray-400 text-xs">{s.title}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
