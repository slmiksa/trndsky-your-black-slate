export const SITE = {
  name: "TRNDSKY",
  tagline: "تكنولوجيا المستقبل",
  whatsapp: "966575594911",
  whatsappMessage: "مرحبًا TRNDSKY، أرغب في الاستفسار عن خدماتكم",
};

export const waLink = (msg?: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg ?? SITE.whatsappMessage)}`;
