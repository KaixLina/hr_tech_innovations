import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "We cut our time-to-hire by 60% and improved quality of hire dramatically. The AI matching is scarily accurate.",
      author: "Sarah Chen",
      role: "VP of Talent",
      company: "TechVentures Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      quote: "Scaled from 50 to 500 employees in 18 months without adding headcount to our recruiting team. Game changer.",
      author: "Michael Rodriguez",
      role: "Chief People Officer",
      company: "GrowthLabs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      quote: "The analytics alone justify the cost. We finally understand our hiring funnel and can optimize it systematically.",
      author: "Emily Thompson",
      role: "Director of HR",
      company: "Enterprise Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 lg:px-12 bg-[var(--background)]" data-testid="testimonials-section">
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
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">Customer Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] text-embossed" data-testid="testimonials-heading">
            Trusted by Leading Teams
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, author, role, company, image, index }) {
  const rotation = index === 1 ? 1 : index === 2 ? -1 : 0;

  return (
    <motion.div
      data-testid={`testimonial-card-${index}`}
      className="group relative p-8 rounded-2xl bg-[var(--background)] transition-all duration-500 hover:rotate-0 hover:-translate-y-1"
      style={{ boxShadow: "var(--shadow-card)" }}
      initial={{ opacity: 0, y: 50, rotate: rotation * 3 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Push Pin */}
      <motion.div
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--accent)]"
        style={{
          boxShadow: "0 2px 4px rgba(0,0,0,0.3), inset -2px -2px 4px rgba(0,0,0,0.2), inset 2px 2px 4px rgba(255,255,255,0.3)",
        }}
        whileHover={{ scale: 1.1, rotate: 10 }}
      />

      <div className="space-y-6">
        {/* Quote Icon */}
        <div
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--background)]"
          style={{ boxShadow: "var(--shadow-recessed)" }}
        >
          <Quote className="h-6 w-6 text-[var(--accent)]" fill="currentColor" />
        </div>

        {/* Quote Text */}
        <p className="text-[var(--text-primary)] leading-relaxed italic">"{quote}"</p>

        {/* Author */}
        <div className="flex items-center gap-4 pt-4 border-t-2 border-[var(--border)]">
          <div className="relative w-12 h-12 rounded-full overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
            <img src={image} alt={author} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>
          <div>
            <div className="font-bold text-[var(--text-primary)]">{author}</div>
            <div className="text-xs text-[var(--text-muted)]">{role}</div>
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">{company}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
