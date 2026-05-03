export const SITE = {
  name: "TRNDSKY",
  tagline: "تكنولوجيا المستقبل",
  whatsapp: "966500000000", // ⚠️ غيّر الرقم برقمك الحقيقي
  whatsappMessage: "مرحبًا TRNDSKY، أرغب في الاستفسار عن خدماتكم",
};

export const waLink = (msg?: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg ?? SITE.whatsappMessage)}`;
