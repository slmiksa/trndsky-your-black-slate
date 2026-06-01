import { Link } from "@tanstack/react-router";
import logo from "@/assets/trndsky-logo.png";
import { waLink, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/50 glass">
      <div className="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="TRNDSKY" className="h-12 w-12 rounded-lg" />
            <div>
              <div className="font-bold text-lg tracking-wider">TRNDSKY</div>
              <div className="text-xs text-muted-foreground">{SITE.tagline}</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            شركة سعودية متخصصة في تطوير التطبيقات ومنصات الويب وحلول الذكاء الاصطناعي.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">روابط سريعة</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-primary">خدماتنا</Link></li>
            <li><Link to="/software" className="hover:text-primary">البرمجيات الجاهزة</Link></li>
            <li><Link to="/partners" className="hover:text-primary">شركاء النجاح</Link></li>
            <li><Link to="/bank-accounts" className="hover:text-primary">الحسابات البنكية</Link></li>
            <li><Link to="/about" className="hover:text-primary">من نحن</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">تواصل عبر واتساب</h4>
          <p className="text-sm text-muted-foreground mb-4">
            جميع الطلبات والاستفسارات تتم مباشرة عبر الواتساب لسرعة الرد.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--whatsapp)] text-background font-medium hover:opacity-90 transition"
          >
            ابدأ المحادثة الآن
          </a>
        </div>
      </div>
      <div className="border-t border-border/50 py-5 text-center text-xs text-muted-foreground space-y-1">
        <div>رقم السجل التجاري: {SITE.cr}</div>
        <div>© {new Date().getFullYear()} لمحة ديف — جميع الحقوق محفوظة</div>
      </div>
    </footer>
  );
}
