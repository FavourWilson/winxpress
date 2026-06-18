import { ClipboardList, ShieldAlert, Wallet } from "lucide-react";

export default function Problem() {
  const pains = [
    {
      icon: ShieldAlert,
      title: "Security Gaps",
      copy: "Parents have no idea when their child leaves school — or if they did.",
    },
    {
      icon: Wallet,
      title: "Cash Theft",
      copy: "Students carrying cash are targets. It gets stolen, bullied out of them, or lost.",
    },
    {
      icon: ClipboardList,
      title: "Manual Attendance",
      copy: "Admin staff still shout names and mark registers. It wastes hours every week.",
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">The Problem</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-secondary sm:text-5xl">
            Nigerian schools are dealing with problems that a card can solve.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pains.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-secondary">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.copy}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}