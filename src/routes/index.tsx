import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { services, partners, software } from "@/lib/data";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "TRNDSKY — حلول تقنية متكاملة" },
      { name: "description", content: "نقدم خدمات برمجية شاملة من التصميم إلى التطوير والصيانة. تطبيقات، منصات ويب، وحلول ذكاء اصطناعي." },
    ],
  }),
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" className="h-full w-full object-cover opacity-40" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="container mx-auto px-4 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              TRNDSKY+ تكنولوجيا المستقبل
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              حلول تقنية <span className="text-gradient">متكاملة</span>
              <br />
              لمستقبل أعمالك
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              نقدم خدمات برمجية شاملة من التصميم إلى التطوير والصيانة، مع التركيز على الجودة والأداء وتجربة المستخدم.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-medium text-primary-foreground glow hover:scale-105 transition-transform"
              >
                <MessageCircle className="h-5 w-5" />
                ابدأ مشروعك عبر واتساب
              </a>
              <Link
                to="/software"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-7 py-3.5 font-medium hover:bg-secondary transition"
              >
                استعرض البرمجيات
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { n: "+50", l: "مشروع منجز" },
              { n: "+20", l: "شريك نجاح" },
              { n: "24/7", l: "دعم فني" },
              { n: "+5", l: "سنوات خبرة" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl glass border border-border/50 p-6 text-center">
                <div className="text-3xl font-black text-gradient">{s.n}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto px-4 py-20">
        <SectionHeader badge="خدماتنا المتميزة" title="ماذا نقدم لك؟" sub="باقة متكاملة من الخدمات التقنية المتطورة لتحقيق أهدافك." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl bg-gradient-card border-glow border border-border/50 p-7 shadow-card hover:-translate-y-1 transition-transform"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOFTWARE PREVIEW */}
      <section className="container mx-auto px-4 py-20">
        <SectionHeader badge="برمجيات جاهزة" title="حلول جاهزة للإنطلاق" sub="مجموعة متنوعة من البرمجيات الجاهزة لتلبية احتياجات أعمالك." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {software.slice(0, 3).map((s) => (
            <div key={s.title} className="rounded-2xl glass border border-border/50 p-6 hover:border-primary/40 transition">
              <span className="inline-block rounded-full bg-primary/15 text-primary text-xs px-3 py-1">{s.badge}</span>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <a href={waLink(`أرغب بمعرفة تفاصيل: ${s.title}`)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm text-primary hover:underline">
                طلب التفاصيل عبر واتساب <ArrowLeft className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/software" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 hover:bg-secondary transition">
            عرض جميع البرمجيات <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="container mx-auto px-4 py-20">
        <SectionHeader badge="نفخر بشركائنا" title="شركاء النجاح" sub="عملاء نفخر بمساعدتهم في مشاريعهم." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {partners.map((p) => (
            <div key={p.name} className="group rounded-2xl glass border border-border/50 p-6 text-center hover:border-primary/40 transition">
              <div className="mx-auto aspect-square w-full rounded-2xl bg-white overflow-hidden">
                <img src={p.logo} alt={p.name} loading="lazy" className="h-full w-full object-contain" />
              </div>
              <p className="mt-4 text-sm font-medium">{p.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-16 text-center shadow-elegant">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_60%)]" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-black text-primary-foreground">جاهز لتطوير فكرتك؟</h2>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
              تواصل معنا الآن عبر الواتساب وسنحول أفكارك إلى واقع رقمي احترافي.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 font-bold hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-5 w-5" />
              ابدأ المحادثة الآن
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export function SectionHeader({ badge, title, sub }: { badge: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs text-primary">{badge}</span>
      <h2 className="mt-4 text-3xl md:text-5xl font-black">
        <span className="text-gradient">{title}</span>
      </h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}
