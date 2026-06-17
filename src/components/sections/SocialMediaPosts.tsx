import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { SOCIAL_POSTS } from '../../data/content';
import { FaHeart, FaShare, FaComment, FaInstagram, FaTwitter } from 'react-icons/fa';

function formatNumber(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n.toString();
}

export default function SocialMediaPosts() {
  return (
    <section id="social" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/5 via-transparent to-blue-900/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionTitle
          badge="📣 Social Media"
          title="Spreading the Word"
          titleHindi="सूर्यपुरा की आवाज़ — सोशल मीडिया पर"
          subtitle="Our development journey goes viral — follow us and share the Surypura story with the world."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SOCIAL_POSTS.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.15} direction={i % 2 === 0 ? 'left' : 'right'}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col hover:border-green-500/30 transition-colors duration-300"
              >
                {/* Platform header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center text-xl ${
                        post.platform === 'instagram'
                          ? 'bg-gradient-to-br from-pink-500 to-purple-600'
                          : 'bg-sky-500'
                      }`}
                    >
                      {post.avatar}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{post.author}</p>
                      <p className="text-gray-500 text-xs">{post.handle}</p>
                    </div>
                  </div>
                  <div className={`text-2xl ${post.platform === 'instagram' ? 'text-pink-400' : 'text-sky-400'}`}>
                    {post.platform === 'instagram' ? <FaInstagram /> : <FaTwitter />}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-300 text-sm leading-relaxed mb-3 flex-grow">{post.content}</p>

                {post.contentHindi && (
                  <p className="text-green-400/60 text-xs font-hindi mb-3 italic">{post.contentHindi}</p>
                )}

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.hashtags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-blue-400 hover:text-blue-300 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-xs mb-4">{post.date}</p>

                {/* Engagement */}
                <div className="flex items-center gap-5 pt-4 border-t border-white/5">
                  <button className="flex items-center gap-2 text-gray-500 hover:text-red-400 transition-colors group">
                    <motion.span whileHover={{ scale: 1.3 }}><FaHeart /></motion.span>
                    <span className="text-xs font-semibold">{formatNumber(post.likes)}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-green-400 transition-colors">
                    <motion.span whileHover={{ scale: 1.3 }}><FaShare /></motion.span>
                    <span className="text-xs font-semibold">{formatNumber(post.shares)}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors">
                    <motion.span whileHover={{ scale: 1.3 }}><FaComment /></motion.span>
                    <span className="text-xs font-semibold">{formatNumber(post.comments)}</span>
                  </button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
