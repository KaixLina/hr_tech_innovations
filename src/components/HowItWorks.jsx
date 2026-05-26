import { FileText, Cpu, MessageSquare, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Post & Configure",
      description: "Create job listings with AI-suggested requirements. Define your ideal candidate profile in minutes.",
    },
    {
      icon: Cpu,
      number: "02",
      title: "AI Matches",
      description: "Our engine scans millions of profiles, ranking candidates by fit score. Top matches surface automatically.",
    },
    {
      icon: MessageSquare,
      number: "03",
      title: "Interview & Evaluate",
      description: "Coordinated scheduling, structured scorecards, and team feedback—all in one centralized workflow.",
    },
    {
      icon: CheckCircle2,
      number: "04",
      title: "Hire with Confidence",
      description: "Make data-backed decisions. Generate offer letters, track onboarding, and measure quality of hire.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 px-6 lg:px-12 bg-gradient-to-b from-[var(--background)] to-[var(--foreground)]"
      data-testid="how-it-works-section"
    >
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
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">Process Flow</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] text-embossed" data-testid="how-it-works-heading">
            Four Steps to Better Hires
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">From job post to signed offer—streamlined and systematic</p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index}>
              <StepCard {...step} index={index} isLast={index === steps.length - 1} />
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:flex justify-center my-6"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="connector-pipe w-1 h-12" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ icon: Icon, number, title, description, index, isLast }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      data-testid={`step-card-${index}`}
      className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? "" : "md:flex-row-reverse"}`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Icon Circle */}
      <motion.div className="relative flex-shrink-0" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
        <div
          className="relative w-24 h-24 rounded-full bg-[var(--background)] flex items-center justify-center"
          style={{ boxShadow: "var(--shadow-floating)" }}
        >
          <Icon className="h-10 w-10 text-[var(--accent)]" strokeWidth={2} />

          {/* Number Badge */}
          <div
            className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[var(--accent)] text-white font-mono font-bold text-sm flex items-center justify-center"
            style={{ boxShadow: "0 0 12px rgba(255,71,87,0.6)" }}
          >
            {number}
          </div>
        </div>
      </motion.div>

      {/* Content Card */}
      <motion.div
        className="flex-1 p-8 rounded-2xl bg-[var(--background)] text-center md:text-left relative"
        style={{ boxShadow: "var(--shadow-card)" }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Corner Screws */}
        <div className="absolute top-3 left-3 screw" />
        <div className="absolute top-3 right-3 screw" />

        <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)]">{title}</h3>
        <p className="text-[var(--text-muted)] leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
}
