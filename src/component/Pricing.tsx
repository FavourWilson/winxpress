import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

export default function Pricing() {
  const rows = [
    { p: "3-in-1 Smart ID Card", price: "₦6,000", unit: "per student", note: "Replacement: ₦5,000" },
    { p: "Micro-GPS Tracking Device", price: "₦30,000", unit: "per device", note: "One-time" },
    { p: "Access / Attendance Machine", price: "Free", unit: "", note: "2 provided per school", featured: true },
    { p: "Attendance Software", price: "₦700", unit: "per child/term", note: "—" },
    { p: "School Management System", price: "Free Yr 1", unit: "then ₦500/term", note: "Optional" },
  ];

  return (
    <section id="pricing" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Pricing</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-secondary sm:text-5xl">
            Clear pricing. No surprises.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            School pays for cards and GPS. The system — including the access
            machines — comes free.
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
          {rows.map((r, i) => (
            <div
              key={r.p}
              className={`grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1.2fr)] items-center gap-4 px-6 py-5 sm:px-10 ${
                i !== rows.length - 1 ? "border-b border-border" : ""
              } ${r.featured ? "bg-[var(--gold-soft)]/40" : ""}`}
            >
              <div className="min-w-0">
                <p className="truncate text-base font-bold text-secondary sm:text-lg">{r.p}</p>
              </div>
              <div className="text-right sm:text-left">
                <p className="text-xl font-black text-primary sm:text-2xl">{r.price}</p>
                {r.unit && <p className="text-xs text-muted-foreground">{r.unit}</p>}
              </div>
              <div className="hidden text-sm text-muted-foreground sm:block">{r.note}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button size="lg" className="h-12 rounded-full px-8 font-bold" asChild>
            <a href="#demo">
              Get a Custom Quote for Your School <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}