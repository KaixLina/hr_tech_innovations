import { ArrowRight } from "lucide-react";
import DeviceMockup from "./DeviceMockup";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-gradient-to-b from-[var(--background)] to-[var(--foreground)]" data-testid="cta-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative p-12 lg:p-16 rounded-3xl bg-[var(--text-primary)] overflow-hidden"
          style={{ boxShadow: "16px 16px 32px rgba(0,0,0,0.2), -8px -8px 24px rgba(255,255,255,0.05)", opacity }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Carbon fiber texture */}
          <div className="absolute inset-0 carbon-fiber opacity-5" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8 text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)" }}
              >
                <div className="h-2 w-2 rounded-full bg-[var(--accent)] led-indicator" style={{ boxShadow: "0 0 8px var(--accent)" }} />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Limited Time Offer</span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-shadow-dark" data-testid="cta-heading">
                Start Hiring Smarter Today
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Join 5,000+ companies using HR Tech Innovations to build exceptional teams. 14-day free trial, no credit card required.
              </p>

              {/* Benefits List */}
              <ul className="space-y-3">
                {["Full platform access during trial", "Dedicated onboarding specialist", "Cancel anytime, no questions asked"].map(
                  (benefit, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-[var(--accent)]" style={{ boxShadow: "0 0 8px var(--accent)" }} />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.li>
                  ),
                )}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  data-testid="cta-primary-button"
                  className="group px-8 py-4 rounded-xl bg-[var(--accent)] text-white font-bold text-sm uppercase tracking-wider neumorphic-button-accent transition-all duration-200 flex items-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button
                  data-testid="cta-secondary-button"
                  className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:bg-white/20"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)" }}
                >
                  Schedule Demo
                </button>
              </div>
            </motion.div>

            {/* Right - Device with parallax */}
            <motion.div
              className="hidden lg:block"
              style={{ y }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <DeviceMockup />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
