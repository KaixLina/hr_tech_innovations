import { Users, TrendingUp, CheckCircle, Clock } from "lucide-react";

export default function DeviceMockup() {
  return (
    <div className="relative mx-auto max-w-2xl" data-testid="device-mockup-container">
      {/* Device Bezel */}
      <div
        className="relative rounded-3xl bg-[var(--text-primary)] p-3 carbon-fiber"
        style={{
          boxShadow: "12px 12px 24px rgba(0,0,0,0.3), -4px -4px 12px rgba(255,255,255,0.05), inset 0 0 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* Power LED */}
        <div className="absolute top-6 right-6 flex items-center gap-2" data-testid="device-power-led">
          <div className="h-2 w-2 rounded-full bg-green-500 led-indicator" style={{ boxShadow: "0 0 12px rgba(34,197,94,1)" }} />
          <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-green-400">PWR</span>
        </div>

        {/* Screen */}
        <div className="relative aspect-video rounded-2xl bg-[#1a1d23] overflow-hidden" style={{ boxShadow: "inset 0 4px 12px rgba(0,0,0,0.8)" }}>
          {/* Scanlines overlay */}
          <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

          {/* Screen Content - Dashboard */}
          <div className="relative h-full p-6 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between" data-testid="device-screen-header">
              <div>
                <div className="text-white text-lg font-bold">Recruitment Dashboard</div>
                <div className="text-gray-400 text-xs font-mono">LIVE MONITORING</div>
              </div>
              <div className="h-8 w-8 rounded-full bg-[var(--accent)] led-indicator" style={{ boxShadow: "0 0 15px var(--accent)" }} />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3" data-testid="device-screen-stats">
              <StatCard icon={Users} label="Active" value="1,247" color="blue" />
              <StatCard icon={TrendingUp} label="Hired" value="89" color="green" />
              <StatCard icon={Clock} label="Pending" value="342" color="yellow" />
              <StatCard icon={CheckCircle} label="Matched" value="523" color="purple" />
            </div>

            {/* Progress Bar */}
            <div className="space-y-2" data-testid="device-screen-progress">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400 font-mono">Processing Pipeline</span>
                <span className="text-[var(--accent)] font-mono font-bold">78%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                <div
                  className="h-full w-[78%] rounded-full bg-gradient-to-r from-[var(--accent)] to-pink-500"
                  style={{ boxShadow: "0 0 10px var(--accent)" }}
                />
              </div>
            </div>

            {/* Status Indicators */}
            <div className="flex gap-2 pt-2" data-testid="device-screen-indicators">
              <StatusDot color="green" />
              <StatusDot color="green" />
              <StatusDot color="yellow" />
              <StatusDot color="green" />
            </div>
          </div>
        </div>

        {/* Physical Buttons on Side */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-1 space-y-2" data-testid="device-buttons">
          <div className="w-1 h-12 rounded-l-full bg-[#1a1d23]" style={{ boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.5)" }} />
          <div className="w-1 h-8 rounded-l-full bg-[#1a1d23]" style={{ boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.5)" }} />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-[var(--background)] opacity-50 blur-xl" />
      <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-[var(--accent)] opacity-10 blur-2xl" />
    </div>
  );
}

function StatCard({ icon: Icon, label, value, color }) {
  const colors = {
    blue: "#3b82f6",
    green: "#22c55e",
    yellow: "#eab308",
    purple: "#a855f7",
  };

  return (
    <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800">
      <div className="flex items-center gap-2 mb-1">
        <Icon className="h-3 w-3" style={{ color: colors[color] }} strokeWidth={2} />
        <span className="text-[10px] text-gray-500 font-mono uppercase">{label}</span>
      </div>
      <div className="text-xl font-mono font-bold text-white">{value}</div>
    </div>
  );
}

function StatusDot({ color }) {
  const colors = {
    green: "#22c55e",
    yellow: "#eab308",
    red: "#ef4444",
  };

  return (
    <div
      className="h-2 w-2 rounded-full led-indicator"
      style={{
        backgroundColor: colors[color],
        boxShadow: `0 0 8px ${colors[color]}`,
      }}
    />
  );
}
