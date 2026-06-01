export const SITE = {
  name: "Lamha Dev",
  tagline: "تكنولوجيا المستقبل",
  whatsapp: "966590844649",
  whatsappMessage: "مرحبًا لمحة ديف، أرغب في الاستفسار عن خدماتكم",
  cr: "7054222174",
};

export const waLink = (msg?: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg ?? SITE.whatsappMessage)}`;
