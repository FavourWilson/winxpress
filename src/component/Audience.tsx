import { Check } from "lucide-react";
import { useState } from "react";

export default function Audience() {
  const [tab, setTab] = useState<"schools" | "parents">("schools");

  const data = {
    schools: [
      "Boosts your brand and builds massive parent confidence",
      "Automated attendance reporting — no more manual registers",
      "Revenue from card issuance and replacements",
      "Full access to Winex School: student management, CBT, and HR tools (optional)",
      "Access machines provided free (2 per school)",
    ],
    parents: [
      "Peace of mind with live GPS tracking",
      "Real-time spending alerts and withdrawal limits",
      "No cash = less bullying and theft",
      "Instant gate movement notifications",
      "Wallet funding from your phone, anytime",
    ],
  };

  return (
    <section className="bg-secondary py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Benefits</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
          Built for everyone in the school ecosystem
        </h2>
        <div className="mt-10 inline-flex rounded-full border border-white/15 bg-white/[0.04] p-1.5">
          {(["schools", "parents"] as const).map((k) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                tab === k
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-warm)]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              For {k === "schools" ? "Schools" : "Parents"}
            </button>
          ))}
        </div>
        <ul className="mx-auto mt-12 grid max-w-3xl gap-4 text-left">
          {data[tab].map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4"
            >
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--gold)] text-secondary">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-base text-white/85">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}