import { Download } from "lucide-react";
import { Button } from "./Button";
import { SchoolImg } from "../assets";


export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-soft)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            For Nigerian Schools
          </span>
          <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Every Child.{" "}
            <span className="text-[var(--gold)]">Tracked.</span>{" "}
            <span className="block">Safe. Cashless.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            WinExpress gives your school one smart card that handles student ID,
            gate access, cashless payments, and real-time GPS — so parents trust
            you more, and you run better.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="h-12 rounded-full px-8 text-base font-bold shadow-[var(--shadow-warm)]"
              asChild
            >
              <a href="#demo">Request a Demo</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/30 bg-transparent px-8 text-base font-semibold text-white hover:bg-white hover:text-secondary"
              asChild
            >
              <a href="#proposal">
                <Download /> Download Proposal
              </a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-white/55">
            <span>Powered by</span>
            <span className="font-bold text-white/90">Providus Bank</span>
            <span className="text-white/30">•</span>
            <span className="font-bold text-white/90">Wema Bank</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[var(--gold)]/15 blur-3xl" />
          <img
            src={SchoolImg}
            alt="WinExpress smart student card next to the parent app showing live GPS"
            width={1536}
            height={1152}
            className="relative rounded-2xl shadow-2xl ring-1 ring-white/10"
          />
        </div>
      </div>
    </section>
  );
}