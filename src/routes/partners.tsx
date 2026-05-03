import { createFileRoute } from "@tanstack/react-router";
import { partners } from "@/lib/data";
import { SectionHeader } from "./index";

export const Route = createFileRoute("/partners")({
  component: PartnersPage,
  head: () => ({
    meta: [
      { title: "شركاء النجاح — TRNDSKY" },
      { name: "description", content: "قائمة بشركائنا وعملائنا الذين نفخر بدعم أعمالهم." },
      { property: "og:title", content: "شركاء النجاح — TRNDSKY" },
    ],
  }),
});

function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeader badge="نفخر بشركائنا" title="شركاء النجاح" sub="قائمة كاملة بشركائنا الذين يدعمون نمو وتطور الأعمال." />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {partners.map((p) => (
          <div key={p.name} className="rounded-2xl glass border border-border/50 p-6 text-center hover:border-primary/40 transition">
            <div className="mx-auto aspect-square w-full rounded-2xl bg-white p-4 flex items-center justify-center overflow-hidden">
              <img src={p.logo} alt={p.name} loading="lazy" className="max-h-full max-w-full object-contain" />
            </div>
            <p className="mt-4 text-sm font-medium leading-relaxed">{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
