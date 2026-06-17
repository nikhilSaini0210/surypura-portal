import type { FC } from "react";
import ScrollReveal from "./ScrollReveal";

interface SectionTitleProps {
  badge?: string;
  title: string;
  titleHindi?: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: FC<SectionTitleProps> = ({
  badge,
  title,
  titleHindi,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <ScrollReveal delay={0}>
          <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            {badge}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-2">
          {title}
        </h2>
        {titleHindi && (
          <p className="font-hindi text-lg text-green-400/70 mb-3">
            {titleHindi}
          </p>
        )}
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p
            className={`text-base sm:text-lg max-w-2xl ${centered ? "mx-auto" : ""} leading-relaxed text-gray-400`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.3}>
        <div className={`mt-6 flex gap-2 ${centered ? "justify-center" : ""}`}>
          <span className="h-1 w-12 rounded-full bg-green-500" />
          <span className="h-1 w-6 rounded-full bg-yellow-400" />
          <span className="h-1 w-3 rounded-full bg-orange-500" />
        </div>
      </ScrollReveal>
    </div>
  );
};

export default SectionTitle;
