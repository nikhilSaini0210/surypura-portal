import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const FOOTER_LINKS: Record<string, string[]> = {
  Programs:   ['Smart Education', 'Farmer Welfare', 'Road Infrastructure', 'Digital Identity', 'Solar Energy'],
  Governance: ['Gram Sabha', 'Panchayat RTI', 'Complaint Portal', 'Budget Report', 'Election Results'],
  Services:   ['Digital ID', 'Jan Seva Kendra', 'Scholarship Portal', 'Soil Health Card', 'Irrigation Support'],
};

const SOCIAL = [
  { icon: FaFacebook,  href: '#', color: 'hover:text-blue-400' },
  { icon: FaTwitter,   href: '#', color: 'hover:text-sky-400' },
  { icon: FaInstagram, href: '#', color: 'hover:text-pink-400' },
  { icon: FaYoutube,   href: '#', color: 'hover:text-red-400' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center text-2xl">
                🌿
              </div>
              <div>
                <p className="text-white font-bold">Surypura</p>
                <p className="text-green-400 text-sm font-hindi">ग्राम पंचायत</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              A model village leading India's rural transformation through smart governance, sustainable development, and digital empowerment.
            </p>
            <div className="flex gap-3">
              {SOCIAL.map(({ icon: Icon, href, color }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className={`text-gray-500 ${color} transition-colors duration-200`}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold mb-4">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-green-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2025 Surypura Gram Panchayat. Made with ❤️ for rural India.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-xs">Powered by</span>
            <span className="text-green-400 text-xs font-semibold">Digital India Initiative</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
