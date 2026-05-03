import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "./index";
import { waLink, SITE } from "@/lib/site";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "تواصل معنا — TRNDSKY" },
      { name: "description", content: "تواصل مع فريق TRNDSKY مباشرة عبر الواتساب لتنفيذ مشروعك." },
      { property: "og:title", content: "تواصل معنا — TRNDSKY" },
    ],
  }),
});

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeader badge="نسعد بتواصلك" title="تواصل معنا" sub="جميع الطلبات والاستفسارات تتم مباشرة عبر الواتساب." />

      <div className="mt-14 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {[
          { icon: Phone, t: "اتصل بنا", v: `+${SITE.whatsapp}` },
          { icon: Mail, t: "البريد", v: "info@trndsky.com" },
          { icon: MapPin, t: "الموقع", v: "المملكة العربية السعودية" },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl glass border border-border/50 p-6 text-center">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <c.icon className="h-6 w-6" />
            </div>
            <h4 className="mt-4 font-bold">{c.t}</h4>
            <p className="mt-1 text-sm text-muted-foreground" dir="ltr">{c.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 mx-auto max-w-3xl rounded-3xl bg-gradient-primary p-10 text-center shadow-elegant">
        <h3 className="text-3xl font-black text-primary-foreground">ابدأ مشروعك الآن</h3>
        <p className="mt-3 text-primary-foreground/80">أرسل لنا تفاصيل فكرتك عبر الواتساب وسنرد عليك خلال دقائق.</p>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 font-bold hover:scale-105 transition-transform"
        >
          <MessageCircle className="h-5 w-5" />
          فتح محادثة الواتساب
        </a>
      </div>
    </div>
  );
}
