import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { SectionHeader } from "./index";
import { waLink } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "خدماتنا — TRNDSKY" },
      { name: "description", content: "خدمات برمجية متكاملة: تطوير تطبيقات، منصات ويب، أنظمة، وذكاء اصطناعي." },
      { property: "og:title", content: "خدماتنا — TRNDSKY" },
    ],
  }),
});

function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeader badge="ما نقدمه" title="خدماتنا" sub="حلول مصممة لتلبية احتياجات أعمالك بأعلى معايير الجودة." />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl bg-gradient-card border border-border/50 p-7 shadow-card"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground">
              <s.icon className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <a
              href={waLink(`أرغب بطلب خدمة: ${s.title}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <MessageCircle className="h-4 w-4" /> اطلب الخدمة
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
