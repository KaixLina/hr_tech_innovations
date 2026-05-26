import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-[var(--background)] border-b-2 border-[var(--border-dark)]"
      style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3" data-testid="navigation-logo">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] neumorphic-button-accent">
              <Zap className="h-6 w-6 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-[var(--text-primary)] text-embossed">HR Tech Innovations</div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 led-indicator" style={{ boxShadow: "0 0 10px rgba(34,197,94,0.8)" }} />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">System Operational</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink href="#features" data-testid="nav-link-features">
              Features
            </NavLink>
            <NavLink href="#how-it-works" data-testid="nav-link-how-it-works">
              How It Works
            </NavLink>
            <NavLink href="#pricing" data-testid="nav-link-pricing">
              Pricing
            </NavLink>
            <NavLink href="#testimonials" data-testid="nav-link-testimonials">
              Testimonials
            </NavLink>
            <button
              data-testid="nav-cta-button"
              className="ml-4 px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-bold text-sm uppercase tracking-wider neumorphic-button-accent transition-all duration-200"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-lg bg-[var(--background)]"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden pb-6 space-y-2"
              data-testid="mobile-menu"
            >
              <MobileNavLink href="#features" onClick={() => setIsOpen(false)}>
                Features
              </MobileNavLink>
              <MobileNavLink href="#how-it-works" onClick={() => setIsOpen(false)}>
                How It Works
              </MobileNavLink>
              <MobileNavLink href="#pricing" onClick={() => setIsOpen(false)}>
                Pricing
              </MobileNavLink>
              <MobileNavLink href="#testimonials" onClick={() => setIsOpen(false)}>
                Testimonials
              </MobileNavLink>
              <button
                className="w-full mt-4 px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-bold text-sm uppercase tracking-wider neumorphic-button-accent"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function NavLink({ href, children, ...props }) {
  return (
    <a
      href={href}
      className="px-4 py-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200"
      {...props}
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-4 py-3 rounded-lg text-[var(--text-primary)] hover:bg-[var(--muted)] transition-all duration-200"
    >
      {children}
    </a>
  );
}
