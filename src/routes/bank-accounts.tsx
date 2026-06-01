import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "./index";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import bankAlahli from "@/assets/bank-alahli.png";

export const Route = createFileRoute("/bank-accounts")({
  component: BankAccountsPage,
  head: () => ({
    meta: [
      { title: "الحسابات البنكية — لمحة ديف" },
      { name: "description", content: "الحسابات البنكية الرسمية لشركة لمحة ديف للحلول التقنية." },
      { property: "og:title", content: "الحسابات البنكية — لمحة ديف" },
    ],
  }),
});

const accounts = [
  {
    bank: "البنك الأهلي السعودي",
    logo: bankAlahli,
    name: "لمحة ديف للحلول التقنية",
    account: "13600001227602",
    iban: "SA4310000013600001227602",
  },
];

function copy(text: string, label: string) {
  navigator.clipboard.writeText(text);
  toast.success(`تم نسخ ${label}`);
}

function BankAccountsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeader
        badge="معلومات الدفع"
        title="الحسابات البنكية"
        sub="يمكنك التحويل على أحد الحسابات التالية وإرسال إيصال التحويل عبر الواتساب."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {accounts.map((a) => (
          <div
            key={a.bank}
            className="rounded-3xl bg-gradient-card border border-border/50 p-7 shadow-card"
          >
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-2xl bg-white p-2 flex items-center justify-center overflow-hidden">
                <img src={a.logo} alt={a.bank} className="h-full w-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{a.bank}</h3>
                <p className="text-sm text-muted-foreground mt-1">{a.name}</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Row label="رقم الحساب" value={a.account} onCopy={() => copy(a.account, "رقم الحساب")} />
              <Row label="IBAN" value={a.iban} onCopy={() => copy(a.iban, "الآيبان")} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Row({ label, value, onCopy }: { label: string; value: string; onCopy: () => void }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-secondary/50 border border-border/50 px-4 py-3">
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-mono text-sm font-bold truncate" dir="ltr">{value}</div>
      </div>
      <button
        onClick={onCopy}
        className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-primary/15 text-primary px-3 py-1.5 text-xs hover:bg-primary/25 transition"
      >
        <Copy className="h-3.5 w-3.5" />
        نسخ
      </button>
    </div>
  );
}
