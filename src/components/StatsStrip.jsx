import { Users, Clock, TrendingUp, Building2 } from "lucide-react";

export default function StatsStrip() {
  const stats = [
    { icon: Users, label: "Candidates Processed", value: "2M+", color: "#3b82f6" },
    { icon: Clock, label: "Avg. Time Saved", value: "65%", color: "#22c55e" },
    { icon: TrendingUp, label: "Hiring Success Rate", value: "98%", color: "#a855f7" },
    { icon: Building2, label: "Enterprise Clients", value: "5K+", color: "#f59e0b" },
  ];

  return (
    <section className="relative py-16 px-6 lg:px-12 bg-[var(--text-primary)] text-white overflow-hidden" data-testid="stats-section">
      {/* Carbon fiber texture */}
      <div className="absolute inset-0 carbon-fiber opacity-10" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3" data-testid={`stat-item-${index}`}>
              {/* Icon Housing */}
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)" }}
              >
                <stat.icon className="h-8 w-8" style={{ color: stat.color }} strokeWidth={1.5} />
              </div>

              {/* Value */}
              <div className="text-4xl lg:text-5xl font-mono font-bold text-white" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-xs font-mono uppercase tracking-wider text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
