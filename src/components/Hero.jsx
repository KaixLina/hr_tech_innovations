import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import DeviceMockup from "./DeviceMockup";
import { useRef } from "react";

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={ref} className="relative pt-20 pb-32 px-6 lg:px-12 overflow-hidden" data-testid="hero-section">
      {/* Background accent with parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-[rgba(255,71,87,0.05)] to-transparent blur-3xl"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div className="grid lg:grid-cols-2 gap-12 items-center" variants={stagger} initial="hidden" animate="visible">
          {/* Left Content */}
          <motion.div variants={slideUp} style={{ scale }} className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={slideUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)]"
              style={{ boxShadow: "var(--shadow-card)" }}
              data-testid="hero-badge"
            >
              <div className="h-2 w-2 rounded-full bg-[var(--accent)] led-indicator" style={{ boxShadow: "0 0 8px var(--accent)" }} />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">Next-Gen Hiring Platform</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={slideUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1] text-embossed"
              data-testid="hero-heading"
            >
              Engineer Your Perfect Team with Precision
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={slideUp}
              className="text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed max-w-xl"
              data-testid="hero-subheading"
            >
              AI-powered recruitment platform that transforms hiring from guesswork into a systematic, data-driven process. Build better teams faster.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={slideUp} className="flex flex-wrap gap-4">
              <button
                data-testid="hero-cta-primary"
                className="group px-8 py-4 rounded-xl bg-[var(--accent)] text-white font-bold text-sm uppercase tracking-wider neumorphic-button-accent transition-all duration-200 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                data-testid="hero-cta-secondary"
                className="px-8 py-4 rounded-xl bg-[var(--background)] text-[var(--text-primary)] font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <Play className="h-5 w-5" fill="currentColor" />
                Watch Demo
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={slideUp} className="pt-8 border-t-2 border-[var(--border)]">
              <div className="flex items-center gap-6 flex-wrap">
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-[var(--text-primary)]">2M+</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">Candidates</div>
                </div>
                <div className="w-px h-10 bg-[var(--border)]"></div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-[var(--text-primary)]">5,000+</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">Companies</div>
                </div>
                <div className="w-px h-10 bg-[var(--border)]"></div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-[var(--text-primary)]">98%</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Device Mockup with parallax */}
          <motion.div
            variants={slideUp}
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
            className="relative"
            data-testid="hero-device-mockup"
          >
            <DeviceMockup />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
