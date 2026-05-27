import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { site } from "@/lib/content";

export const alt = "SKYE LASH | Professional Lash Studio in San Jose";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const photo = readFileSync(
    join(process.cwd(), "public/images/hero-lash.jpg")
  );
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          fontFamily: "serif",
        }}
      >
        <img
          src={photoSrc}
          width={size.width}
          height={size.height}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
            objectPosition: "center 28%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: size.width,
            height: size.height,
            display: "flex",
            backgroundImage:
              "linear-gradient(0deg, rgba(43,42,43,0.94) 0%, rgba(43,42,43,0.45) 38%, rgba(43,42,43,0) 66%), linear-gradient(90deg, rgba(43,42,43,0.7) 0%, rgba(43,42,43,0.15) 45%, rgba(43,42,43,0) 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 70,
            bottom: 64,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: 7,
              textTransform: "uppercase",
              color: "#f6dde2",
            }}
          >
            San Jose, CA
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 118,
              fontWeight: 700,
              lineHeight: 1,
              marginTop: 14,
              letterSpacing: -2,
            }}
          >
            <span style={{ color: "#e0769b" }}>SKYE</span>
            <span style={{ color: "#ffffff", marginLeft: 22 }}>LASH</span>
          </div>
          <div style={{ fontSize: 40, marginTop: 14, color: "#fbeef0" }}>
            {site.tagline}
          </div>
          <div
            style={{
              marginTop: 34,
              fontSize: 27,
              color: "#ffffff",
              backgroundColor: "#e0769b",
              padding: "14px 34px",
              borderRadius: 999,
            }}
          >
            Lashes · Korean glass-skin facials
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
