const CENTER = { x: 380, y: 240 };
const RADIUS = 190;

const nodes = [
  { label: "MARKETPLACE", angle: -90 },
  { label: "DEMAND", angle: -30 },
  { label: "CONVERSION", angle: 30 },
  { label: "RETENTION", angle: 90 },
  { label: "CREATIVE", angle: 150 },
  { label: "STOCK", angle: 210 },
];

function pointOn(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER.x + RADIUS * Math.cos(rad), y: CENTER.y + RADIUS * Math.sin(rad) };
}

function labelAnchor(angleDeg: number): "start" | "middle" | "end" {
  const cos = Math.cos((angleDeg * Math.PI) / 180);
  if (cos > 0.35) return "start";
  if (cos < -0.35) return "end";
  return "middle";
}

export function CommerceSystemMap() {
  return (
    <div className="gm-system-map" aria-label="Marketplace, demand, conversion, retention, creative and stock operating separately, connecting through the Go Massive operating layer at the centre.">
      <div className="gm-map-label"><span className="gm-pulse" /> LIVE COMMERCIAL SYSTEM</div>
      <svg viewBox="0 0 760 480" role="img" aria-hidden="true">
        {nodes.map((node, index) => {
          const p = pointOn(node.angle);
          const anchor = labelAnchor(node.angle);
          const labelOffset = anchor === "start" ? 26 : anchor === "end" ? -26 : 0;
          const labelY = node.angle === 90 ? 32 : node.angle === -90 ? -22 : 5;
          const d = `M ${p.x} ${p.y} L ${CENTER.x} ${CENTER.y}`;
          return (
            <g key={node.label}>
              <path className="gm-map-spoke" style={{ animationDelay: `${index * 150}ms` }} d={d} />
              <circle
                className="gm-map-pulse"
                r="4"
                style={{ offsetPath: `path("${d}")`, animationDelay: `${1.1 + index * 0.55}s` }}
              />
              <g className="gm-map-node" style={{ animationDelay: `${index * 150}ms` }} transform={`translate(${p.x} ${p.y})`}>
                <circle className="gm-map-node-ring" r="18" />
                <circle className="gm-map-node-core" r="4.5" />
                <text textAnchor={anchor} x={labelOffset} y={labelY}>{node.label}</text>
              </g>
            </g>
          );
        })}
        <g className="gm-map-center" transform={`translate(${CENTER.x} ${CENTER.y})`}>
          <rect x="-70" y="-34" width="140" height="68" />
          <text textAnchor="middle" y="-3">GO MASSIVE</text>
          <text className="gm-map-center-sub" textAnchor="middle" y="16">OPERATING LAYER</text>
        </g>
      </svg>
      <p>Six functions that used to report separately, coordinated through one operating layer.</p>
    </div>
  );
}
