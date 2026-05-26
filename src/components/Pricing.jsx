import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "299",
      description: "Perfect for small teams and startups",
      features: ["Up to 10 active jobs", "500 candidate profiles/month", "Basic AI matching", "Email support", "Standard analytics"],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "799",
      description: "For growing companies scaling hiring",
      features: [
        "Unlimited active jobs",
        "5,000 candidate profiles/month",
        "Advanced AI matching",
        "Priority support",
        "Advanced analytics",
        "ATS integrations",
        "Team collaboration tools",
        "Custom workflows",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited everything",
        "Dedicated AI model training",
        "White-label options",
        "24/7 dedicated support",
        "Custom integrations",
        "SLA guarantees",
        "On-premise deployment",
        "Compliance consulting",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 px-6 lg:px-12 bg-gradient-to-b from-[var(--foreground)] to-[var(--background)]"
      data-testid="pricing-section"
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
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">Pricing Plans</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] text-embossed" data-testid="pricing-heading">
            Choose Your Configuration
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">All plans include 14-day free trial, no credit card required</p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ name, price, description, features, cta, highlighted, index }) {
  return (
    <motion.div
      data-testid={`pricing-card-${index}`}
      className={`relative p-8 rounded-3xl bg-[var(--background)] transition-all duration-300 ${highlighted ? "scale-105 md:scale-110" : "hover:scale-105"}`}
      style={{
        boxShadow: highlighted ? "16px 16px 32px #babecc, -16px -16px 32px #ffffff, 0 0 0 2px var(--accent)" : "var(--shadow-card)",
      }}
      initial={{ opacity: 0, y: 50, rotate: index === 0 ? -2 : index === 2 ? 2 : 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ rotate: 0, scale: 1.05 }}
    >
      {/* Hanging Hole */}
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--muted)]"
        style={{ boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.3)" }}
      />

      {/* Corner Screws */}
      <div className="absolute bottom-3 left-3 screw" />
      <div className="absolute bottom-3 right-3 screw" />

      {/* Badge for highlighted plan */}
      {highlighted && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--accent)] text-white text-xs font-mono font-bold uppercase tracking-wider"
          style={{ boxShadow: "0 0 12px rgba(255,71,87,0.6)" }}
        >
          Most Popular
        </div>
      )}

      <div className="space-y-6 mt-4">
        {/* Header */}
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">{name}</h3>
          <p className="text-sm text-[var(--text-muted)]">{description}</p>
        </div>

        {/* Price */}
        <div className="text-center py-6 border-y-2 border-[var(--border)]">
          {price === "Custom" ? (
            <div className="text-4xl font-mono font-bold text-[var(--text-primary)]">{price}</div>
          ) : (
            <>
              <div className="text-5xl font-mono font-bold text-[var(--text-primary)]">${price}</div>
              <div className="text-sm font-mono text-[var(--text-muted)] mt-2">/month</div>
            </>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div
                className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[var(--accent)] flex items-center justify-center"
                style={{ boxShadow: "0 0 8px rgba(255,71,87,0.4)" }}
              >
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-sm text-[var(--text-muted)]">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          data-testid={`pricing-cta-${index}`}
          className={`w-full py-4 px-6 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 ${
            highlighted
              ? "bg-[var(--accent)] text-white neumorphic-button-accent"
              : "bg-[var(--background)] text-[var(--text-primary)] hover:-translate-y-1"
          }`}
          style={{ boxShadow: highlighted ? undefined : "var(--shadow-card)" }}
        >
          {cta}
        </button>
      </div>
    </motion.div>
  );
}
