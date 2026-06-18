import { Download, Phone } from "lucide-react";
import { Button } from "./Button";

export default function FinalCTA() {
  return (
    <section
      id="demo"
      className="relative overflow-hidden py-24 text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
          Ready to become a{" "}
          <span className="text-[var(--gold)]">tech-forward school?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
          Join the WinExpress network. Your students get safer. Your parents get
          happier. Your admin gets easier.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="h-12 rounded-full px-8 text-base font-bold shadow-[var(--shadow-warm)]"
            asChild
          >
            <a href="mailto:hello@winexpress.ng">Request a Demo</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-white/30 bg-transparent px-8 text-base font-semibold text-white hover:bg-white hover:text-secondary"
            asChild
          >
            <a href="#proposal">
              <Download /> Download Full Proposal
            </a>
          </Button>
        </div>
        <a
          href="tel:+2349023532321"
          id="contact"
          className="mt-10 inline-flex items-center gap-3 text-[var(--gold-soft)] transition hover:text-[var(--gold)]"
        >
          <Phone className="h-5 w-5" />
          <span className="text-lg font-bold tracking-wide">+234 902 353 2321</span>
        </a>
      </div>
    </section>
  );
}