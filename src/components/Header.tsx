import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/trndsky-logo.png";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/services", label: "خدماتنا" },
  { to: "/software", label: "البرمجيات الجاهزة" },
  { to: "/partners", label: "شركاء النجاح" },
  { to: "/about", label: "من نحن" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 glass border-b border-border/50">
      <div className="container mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="TRNDSKY" className="h-10 w-10 rounded-lg" />
          <div className="leading-tight">
            <div className="font-display font-bold text-lg tracking-wider">TRNDSKY</div>
            <div className="text-[10px] text-muted-foreground">تكنولوجيا المستقبل</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center justify-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
              activeProps={{ className: "px-4 py-2 rounded-lg text-sm text-foreground bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="القائمة"
          className="lg:hidden p-2 rounded-lg hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border/50 px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              activeProps={{ className: "px-4 py-3 rounded-lg text-sm text-foreground bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
