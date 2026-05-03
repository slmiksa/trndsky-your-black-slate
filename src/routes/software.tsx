import { createFileRoute } from "@tanstack/react-router";
import { software } from "@/lib/data";
import { SectionHeader } from "./index";
import { waLink } from "@/lib/site";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/software")({
  component: SoftwarePage,
  head: () => ({
    meta: [
      { title: "البرمجيات الجاهزة — TRNDSKY" },
      { name: "description", content: "برمجيات جاهزة وحلول تقنية متكاملة لتسريع انطلاقة أعمالك." },
      { property: "og:title", content: "البرمجيات الجاهزة — TRNDSKY" },
    ],
  }),
});

function SoftwarePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeader badge="برمجياتنا" title="حلول جاهزة" sub="منتجات برمجية مكتملة الجاهزية للنشر داخل مؤسستك." />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {software.map((s) => (
          <div key={s.title} className="rounded-2xl bg-gradient-card border border-border/50 p-7 shadow-card hover:border-primary/40 transition">
            <span className="inline-block rounded-full bg-primary/15 text-primary text-xs px-3 py-1">{s.badge}</span>
            <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <a
              href={waLink(`أرغب بالحصول على: ${s.title}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:scale-105 transition-transform"
            >
              طلب عبر الواتساب <ArrowLeft className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
