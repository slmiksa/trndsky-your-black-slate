import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "./index";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "من نحن — TRNDSKY" },
      { name: "description", content: "TRNDSKY شركة سعودية متخصصة في تطوير الحلول التقنية المتكاملة." },
      { property: "og:title", content: "من نحن — TRNDSKY" },
    ],
  }),
});

const values = [
  { t: "الجودة أولاً", d: "نلتزم بأعلى معايير الجودة في كل سطر برمجي." },
  { t: "السرعة في التنفيذ", d: "نسلّم المشاريع في الوقت المتفق عليه." },
  { t: "الدعم المستمر", d: "نرافقك بعد التسليم بدعم فني متواصل." },
  { t: "الشفافية", d: "تواصل واضح ومتابعة دقيقة لكل مرحلة." },
];

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeader badge="من نحن" title="قصتنا" sub="نصنع البرمجيات بشغف ونؤمن بأن التقنية يجب أن تخدم الإنسان." />
      <div className="mt-12 grid gap-10 lg:grid-cols-2 items-start">
        <div className="rounded-3xl bg-gradient-card border border-border/50 p-8 shadow-card">
          <h3 className="text-2xl font-bold text-gradient">رؤيتنا</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            أن نكون الشريك التقني الأول للأعمال الطموحة في المملكة العربية السعودية والمنطقة، عبر تقديم حلول برمجية مبتكرة ترفع كفاءة الأعمال وتفتح آفاقًا جديدة للنمو.
          </p>
          <h3 className="mt-8 text-2xl font-bold text-gradient">مهمتنا</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            تمكين العملاء من تحويل أفكارهم إلى منتجات رقمية احترافية باستخدام أحدث التقنيات وأفضل الممارسات الهندسية.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.t} className="rounded-2xl glass border border-border/50 p-6">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <h4 className="mt-3 font-bold">{v.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
