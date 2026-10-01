import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/brand/go-massive-source.png"));
  return new ImageResponse(
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
      {/* ImageResponse requires a native image element. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`data:image/png;base64,${logo.toString("base64")}`} alt="Go Massive" width={430} height={104} style={{ objectFit: "contain", marginLeft: -18 }} />
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
          Ecommerce growth. Soft fees. Shared upside.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#E91A24",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 3,
          }}
        >
          go-massive.com
        </div>
      </div>
    </div>,
    { ...size },
  );
}
