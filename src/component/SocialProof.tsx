import { MapPin } from "lucide-react";
import { Button } from "./Button";

export default function SocialProof() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 rounded-3xl border border-border bg-gradient-to-br from-[var(--gold-soft)]/40 to-background p-10 sm:p-16 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Early Adopters
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-secondary sm:text-5xl">
              Be the first school in your area.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Lead the safety conversation in your community. We're onboarding a
              limited number of schools in Lagos this term.
            </p>
            <Button size="lg" className="mt-8 h-12 rounded-full px-8 font-bold" asChild>
              <a href="#demo">Reserve Your Spot</a>
            </Button>
          </div>
          <div className="relative grid place-items-center">
            <div className="absolute h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative grid h-44 w-44 place-items-center rounded-full border-2 border-dashed border-primary/40">
              <MapPin className="h-16 w-16 text-primary" strokeWidth={1.5} />
            </div>
            <p className="relative mt-4 text-sm font-bold uppercase tracking-widest text-secondary">
              Lagos · Nigeria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}