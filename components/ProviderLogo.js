import Image from "next/image";

export const PROVIDER_LOGOS = {
  OpenAI: "/provider-logos/openai.svg",
  Anthropic: "/provider-logos/anthropic.svg",
  Google: "/provider-logos/google.svg",
  Groq: "/provider-logos/groq.svg",
};

export default function ProviderLogo({ provider }) {
  const isGroq = provider === "Groq";
  const width = isGroq ? 24 : 14;
  const height = isGroq ? 10 : 14;
  const logoClass = isGroq ? "h-2.5 w-6 object-contain" : "h-3.5 w-3.5 object-contain";

  return (
    <Image
      src={PROVIDER_LOGOS[provider]}
      alt={`${provider} logo`}
      width={width}
      height={height}
      className={logoClass}
      loading="lazy"
    />
  );
}
