import { Gauge, Shield, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Benefits() {
  const benefits = [
    {
      icon: Gauge,
      title: "Hire 3x Faster",
      description: "Reduce time-to-hire from 45 days to 15. Automation and AI eliminate bottlenecks while maintaining quality.",
      stat: "65%",
      statLabel: "Time Saved",
    },
    {
      icon: Shield,
      title: "Reduce Mis-Hires",
      description: "Data-driven matching and structured evaluation cut bad hires by 80%. Protect your team culture and budget.",
      stat: "98%",
      statLabel: "Success Rate",
    },
    {
      icon: Sparkles,
      title: "Scale Effortlessly",
      description: "Handle 10 roles or 1,000 with the same system. Enterprise-grade infrastructure built for hypergrowth.",
      stat: "5K+",
      statLabel: "Companies Trust Us",
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-[var(--background)]" data-testid="benefits-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[var(--background)]" style={{ boxShadow: "var(--shadow-recessed)" }}>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] text-embossed" data-testid="benefits-heading">
            Built for Results, Not Just Features
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitPanel key={index} {...benefit} index={index} scrollProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitPanel({ icon: Icon, title, description, stat, statLabel, index, scrollProgress }) {
  // Staggered parallax effect
  const y = useTransform(scrollProgress, [0, 1], [50 * (index + 1), -50 * (index + 1)]);

  return (
    <motion.div
      data-testid={`benefit-card-${index}`}
      className="relative p-8 rounded-3xl bg-[var(--text-primary)] text-white overflow-hidden group hover:-translate-y-1 transition-all duration-300"
      style={{ boxShadow: "12px 12px 24px rgba(0,0,0,0.2), -4px -4px 12px rgba(255,255,255,0.05)", y }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Carbon fiber texture */}
      <div className="absolute inset-0 carbon-fiber opacity-5" />

      {/* Radar sweep effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div
          className="absolute inset-0 bg-gradient-conic from-[var(--accent)] via-transparent to-transparent animate-spin"
          style={{ animationDuration: "4s" }}
        />
      </div>

      <div className="relative space-y-6">
        {/* Icon */}
        <div
          className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
          style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)" }}
        >
          <Icon className="h-8 w-8 text-[var(--accent)]" strokeWidth={2} />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-2xl font-bold mb-3 text-shadow-dark">{title}</h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>

        {/* Stat Display */}
        <div className="pt-4 border-t border-white/10">
          <div className="text-4xl font-mono font-bold text-shadow-dark">{stat}</div>
          <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mt-1">{statLabel}</div>
        </div>

        {/* LED Indicator */}
        <div className="absolute top-6 right-6 h-3 w-3 rounded-full bg-green-500 led-indicator" style={{ boxShadow: "0 0 12px rgba(34,197,94,1)" }} />
      </div>
    </motion.div>
  );
}
