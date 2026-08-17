const nodes = [
  { label: "DEMAND", x: 146, y: 118, tone: "red" },
  { label: "MEDIA", x: 420, y: 72, tone: "light" },
  { label: "MARKETPLACE", x: 616, y: 222, tone: "light" },
  { label: "CONVERSION", x: 390, y: 370, tone: "red" },
  { label: "REPEAT", x: 132, y: 328, tone: "light" },
];

export function CommerceSystemMap() {
  return (
    <div className="gm-system-map" aria-label="A connected commerce system spanning demand, media, marketplace, conversion and repeat purchase.">
      <div className="gm-map-label"><span className="gm-pulse" /> LIVE COMMERCIAL SYSTEM</div>
      <svg viewBox="0 0 760 460" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="gm-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff4a52" stopOpacity=".85" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity=".15" />
          </linearGradient>
          <filter id="gm-glow"><feGaussianBlur stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <g className="gm-map-lines">
          <path d="M146 118 L420 72 L616 222 L390 370 L132 328 Z" />
          <path d="M146 118 L390 370 M420 72 L132 328 M616 222 L132 328" />
        </g>
        <g className="gm-map-sweep"><circle cx="380" cy="225" r="154" /><circle cx="380" cy="225" r="96" /></g>
        <g className="gm-map-orbit"><circle cx="380" cy="225" r="5" filter="url(#gm-glow)" /></g>
        {nodes.map((node) => (
          <g className={`gm-map-node gm-map-node--${node.tone}`} key={node.label} transform={`translate(${node.x} ${node.y})`}>
            <circle r="19" /><circle className="gm-map-node-core" r="5" />
            <text x="30" y="4">{node.label}</text>
          </g>
        ))}
        <g className="gm-map-center" transform="translate(380 225)"><rect x="-68" y="-34" width="136" height="68" /><text textAnchor="middle" y="-3">GO MASSIVE</text><text className="gm-map-center-sub" textAnchor="middle" y="16">OPERATING LAYER</text></g>
      </svg>
      <p>One joined-up view of the work that moves revenue—not a stack of isolated channel reports.</p>
    </div>
  );
}
