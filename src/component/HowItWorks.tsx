export default function HowItWorks() {
  const steps = [
    { t: "School Signs Up", c: "We gather student data and class rosters." },
    { t: "Parents Onboard", c: "Contact details and digital wallet registration." },
    { t: "Cards Manufactured", c: "Smart cards and GPS devices produced and printed." },
    { t: "Live on Campus", c: "Access machines installed, software activated, go live." },
  ];

  return (
    <section className="bg-[oklch(0.98_0.005_60)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">How It Works</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-secondary sm:text-5xl">
            From Proposal to Deployment in 4 Steps
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.t} className="relative">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-lg font-black text-white ring-4 ring-[var(--gold)]/30">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-gradient-to-r from-[var(--gold)] to-transparent md:block" />
                )}
              </div>
              <h3 className="mt-6 text-lg font-bold text-secondary">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}