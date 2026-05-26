import { Target, Zap, BarChart3, RefreshCw, Users2, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Features() {
  const features = [
    {
      icon: Target,
      title: "AI-Powered Matching",
      description: "Advanced algorithms analyze skills, experience, and culture fit to surface the perfect candidates instantly.",
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Eliminate repetitive tasks with intelligent automation. Focus on human decisions, let the system handle the rest.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track every metric that matters. Pipeline health, time-to-hire, source effectiveness—all in one dashboard.",
    },
    {
      icon: RefreshCw,
      title: "ATS Integration",
      description: "Seamlessly connects with your existing tools. Greenhouse, Lever, Workday—we sync with them all.",
    },
    {
      icon: Users2,
      title: "Team Collaboration",
      description: "Structured feedback loops, shared scorecards, and centralized communication keep everyone aligned.",
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Built-in GDPR, EEOC, and SOC 2 compliance. Audit trails and data protection standards baked into every feature.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-24 px-6 lg:px-12" data-testid="features-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[var(--background)]" style={{ boxShadow: "var(--shadow-recessed)" }}>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">Core Capabilities</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] text-embossed" data-testid="features-heading">
            Everything You Need to Hire Smarter
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">Enterprise-grade tools designed for modern recruiting teams</p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description, index, isInView }) {
  return (
    <motion.div
      data-testid={`feature-card-${index}`}
      className="group relative p-8 rounded-2xl bg-[var(--background)] transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: "var(--shadow-card)" }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Corner Screws */}
      <div className="absolute top-3 left-3 screw" />
      <div className="absolute top-3 right-3 screw" />
      <div className="absolute bottom-3 left-3 screw" />
      <div className="absolute bottom-3 right-3 screw" />

      {/* Vent Slots */}
      <div className="absolute top-6 right-12 flex gap-1">
        <div className="vent-slot" />
        <div className="vent-slot" />
        <div className="vent-slot" />
      </div>

      {/* Icon Housing */}
      <div
        className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--background)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
        style={{ boxShadow: "var(--shadow-floating)" }}
      >
        <Icon className="h-7 w-7 text-[var(--accent)]" strokeWidth={2} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">{title}</h3>
      <p className="text-[var(--text-muted)] leading-relaxed">{description}</p>

      {/* Status LED */}
      <div
        className="absolute bottom-4 right-4 h-2 w-2 rounded-full bg-green-500 led-indicator"
        style={{ boxShadow: "0 0 8px rgba(34,197,94,0.8)" }}
      />
    </motion.div>
  );
}
