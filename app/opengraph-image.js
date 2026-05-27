import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = "SKYE LASH | Professional Lash Studio in San Jose";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fdf7f5",
          backgroundImage:
            "radial-gradient(circle at 50% 20%, #fbeef0 0%, #fdf7f5 55%)",
          color: "#2b2a2b",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 34,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#c2557a",
          }}
        >
          San Jose, CA
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 150,
            fontWeight: 700,
            marginTop: 12,
            letterSpacing: -2,
          }}
        >
          <span style={{ color: "#e0769b" }}>SKYE</span>
          <span style={{ color: "#2b2a2b", marginLeft: 24 }}>LASH</span>
        </div>
        <div style={{ fontSize: 44, marginTop: 8, color: "#5a5658" }}>
          {site.tagline}
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 30,
            color: "#fdf7f5",
            backgroundColor: "#e0769b",
            padding: "16px 40px",
            borderRadius: 999,
          }}
        >
          Lashes · Korean glass-skin facials
        </div>
      </div>
    ),
    { ...size }
  );
}
