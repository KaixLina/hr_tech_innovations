import { Zap, Twitter, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const links = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#" },
      { label: "API", href: "#" },
    ],
    company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
      { label: "Status", href: "#" },
    ],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  };

  const social = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-[var(--text-primary)] text-white py-16 px-6 lg:px-12" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)]"
                style={{ boxShadow: "0 0 12px rgba(255,71,87,0.6)" }}
              >
                <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold">HR Tech</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">Engineering better teams through intelligent recruiting technology.</p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {social.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  aria-label={item.label}
                  data-testid={`social-link-${idx}`}
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all duration-200 hover:text-[var(--accent)]"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)" }}
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <FooterColumn title="Product" links={links.product} />
          <FooterColumn title="Company" links={links.company} />
          <FooterColumn title="Resources" links={links.resources} />
          <FooterColumn title="Legal" links={links.legal} />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 led-indicator" style={{ boxShadow: "0 0 8px rgba(34,197,94,1)" }} />
            <span className="text-xs font-mono uppercase tracking-wider text-gray-400">All Systems Operational</span>
          </div>
          <div className="text-sm text-gray-400">© 2026 HR Tech Innovations. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.href} className="text-sm text-gray-400 hover:text-[var(--accent)] transition-colors duration-200">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
