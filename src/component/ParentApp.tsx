import { ArrowRight, Check } from "lucide-react";
import { Button } from "./Button";
import { ParentImg } from "../assets";

export default function ParentApp() {
  const benefits = [
    "See your child's live location during school hours and commute",
    "Get instant alerts if they leave a designated safe zone",
    "Fund their card wallet and set spending limits from your phone",
    "View entry/exit timestamps every school day",
    "School fee loans — coming soon",
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-primary/15 via-[var(--gold)]/20 to-transparent blur-3xl" />
          <img
            src={ParentImg}
            alt="WinexParent app showing live GPS, wallet balance and gate log"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative mx-auto w-full max-w-md rounded-3xl shadow-2xl"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Parent App</p>
          <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-secondary sm:text-5xl">
            Every parent's worst fear —{" "}
            <span className="text-primary">solved by an app.</span>
          </h2>
          <ul className="mt-8 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-base leading-relaxed text-[var(--ink-soft)]">{b}</span>
              </li>
            ))}
          </ul>
          <Button
            variant="link"
            className="mt-6 h-auto p-0 text-base font-bold text-primary"
            asChild
          >
            <a href="#parent">
              See Parent App Features <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}