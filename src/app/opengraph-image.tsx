import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#020D1F",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 16, height: 16, background: "#E91A24" }} />
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 6, color: "#FFFFFF", textTransform: "uppercase" }}>
            Go Massive
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
              color: "#FFFFFF",
              textTransform: "uppercase",
              maxWidth: 920,
            }}
          >
            The commercial operating layer for ambitious eCommerce brands.
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#E91A24", fontWeight: 700, textTransform: "uppercase", letterSpacing: 3 }}>
            go-massive.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
