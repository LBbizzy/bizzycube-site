export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 64 64" aria-label="BizzyCube">
        <defs>
          <linearGradient id="bcg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#534AB7"/>
            <stop offset="100%" stopColor="#5fd3f3"/>
          </linearGradient>
        </defs>
        <polygon points="32,4 56,18 56,46 32,60 8,46 8,18" fill="url(#bcg)" stroke="#fff" strokeWidth="1.5"/>
        <polyline points="20,28 30,22 30,40 40,34 40,52" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span style={{ fontWeight: 800, fontSize: 18, color: "#fff", letterSpacing: "-0.01em" }}>BizzyCube</span>
    </div>
  );
}
