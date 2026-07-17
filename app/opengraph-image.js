import { ImageResponse } from "next/og";

export const dynamic = "force-static";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#080c14",
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.35) 0%, rgba(8,12,20,0) 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 72,
              height: 72,
              borderRadius: 18,
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              boxShadow: "0 0 60px rgba(59,130,246,0.6)",
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                border: "6px solid #ffffff",
              }}
            />
          </div>
          <span style={{ fontSize: 54, fontWeight: 700, color: "#ffffff" }}>
            Polarisk
          </span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 600,
            color: "#ffffff",
            textAlign: "center",
            maxWidth: 880,
            lineHeight: 1.3,
          }}
        >
          AI Agents for Financial Crime Compliance
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 22,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          AML · KYC · Transaction Monitoring
        </div>
      </div>
    ),
    { ...size }
  );
}
