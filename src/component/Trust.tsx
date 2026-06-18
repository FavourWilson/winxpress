export default function Trust() {
  return (
    <section className="bg-[oklch(0.98_0.005_60)] py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-black tracking-tight text-secondary sm:text-4xl">
          Backed by Nigeria's trusted financial institutions
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          The WinExpress cashless payment system runs on real bank
          infrastructure. Every wallet is regulated, every transaction is secure.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {["Providus Bank", "Wema Bank"].map((b) => (
            <div
              key={b}
              className="rounded-xl border border-border bg-card px-10 py-6 text-xl font-black tracking-tight text-secondary shadow-sm"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}