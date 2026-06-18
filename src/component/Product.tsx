import { CreditCard, DoorOpen, IdCard, MapPin } from "lucide-react";

export default function Product() {
  const features = [
    {
      icon: IdCard,
      n: "01",
      title: "Student ID",
      copy: "A personalized card with photo, name, class, and unique digital identity. No more impersonation. No lost records.",
    },
    {
      icon: DoorOpen,
      n: "02",
      title: "Gate Access Control",
      copy: "NFC-enabled clock-in/out at the school gate. Entry and exit times recorded automatically — even offline.",
    },
    {
      icon: CreditCard,
      n: "03",
      title: "Cashless Payments",
      copy: "Card links to a secure digital wallet. Parents fund it from the app. Students spend on campus. No cash needed.",
    },
    {
      icon: MapPin,
      n: "04",
      title: "Live GPS Tracking",
      copy: "A discreet Micro-GPS device tracks each child's real-time location. Parents get alerts the moment a student leaves a safe zone.",
    },
  ];

  return (
    <section className="bg-secondary py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
            The Product
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            One Card. <span className="text-[var(--gold)]">Four Superpowers.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            The WinExpress Smart Student Card combines four essential functions
            into a single, professionally designed card — powered by Providus
            Bank & Wema Bank.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-[var(--gold)]/50 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-warm)]">
                  <f.icon className="h-6 w-6" />
                </div>
                <span className="font-mono text-sm text-white/30">{f.n}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-white/65">{f.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}