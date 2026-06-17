import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';

const GOVERNANCE_ITEMS = [
  { icon: '📋', title: 'Monthly Gram Sabha',     desc: 'Open public meetings every first Sunday — all decisions taken collectively.' },
  { icon: '🖥️', title: 'Online Complaint Portal', desc: 'Grievances submitted online, resolved within 15 days — tracked publicly.' },
  { icon: '📊', title: 'Budget Transparency',     desc: 'All Panchayat budgets and expenditures published on village notice board and website.' },
  { icon: '📜', title: 'RTI Compliance',          desc: '100% RTI response rate within 7 days — all documents available digitally.' },
];

const MEMBERS = [
  { name: 'Rameshwar Patel', nameHindi: 'रमेश्वर पटेल', role: 'Sarpanch',       emoji: '👨‍💼' },
  { name: 'Savita Bai',      nameHindi: 'सविता बाई',    role: 'Deputy Sarpanch', emoji: '👩‍💼' },
  { name: 'Kishan Das',      nameHindi: 'किशन दास',     role: 'Ward Member 1',   emoji: '👨‍🌾' },
  { name: 'Meena Kumari',    nameHindi: 'मीना कुमारी',  role: 'Ward Member 2',   emoji: '👩‍🌾' },
  { name: 'Arjun Singh',     nameHindi: 'अर्जुन सिंह',  role: 'Ward Member 3',   emoji: '👨‍💼' },
];

export default function PanchayatSection() {
  return (
    <section id="panchayat" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-red-950/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="🏛️ Panchayati Raj"
          title="Governance of the People"
          titleHindi="जनता की सरकार, जनता के लिए"
          subtitle="Transparent, participatory, and accountable local self-government — the backbone of Surypura's development."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Governance initiatives */}
          <ScrollReveal direction="left">
            <div className="space-y-4">
              {GOVERNANCE_ITEMS.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 flex gap-4 hover:border-red-500/20 transition-colors duration-300"
                >
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Members list */}
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Elected Representatives</h3>
              <div className="space-y-3">
                {MEMBERS.map((m, i) => (
                  <motion.div
                    key={m.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:border-green-500/20 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-700 to-green-950 flex items-center justify-center text-2xl border border-green-500/30 flex-shrink-0">
                      {m.emoji}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{m.name}</p>
                      <p className="text-gray-500 text-xs font-hindi">{m.nameHindi}</p>
                      <p className="text-green-400 text-xs">{m.role}</p>
                    </div>
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
