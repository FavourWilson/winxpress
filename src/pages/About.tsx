import * as React from "react";
import { Link } from "react-router";
import { ShieldCheck, Compass, Heart, Target } from "lucide-react";
import SiteShell from "../component/SIteShell";

// ─── PageHero ─────────────────────────────────────────────────────────────────

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
}

function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
          {eyebrow}
        </span>
        <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/75">{subtitle}</p>
      </div>
    </section>
  );
}

// ─── Values data ──────────────────────────────────────────────────────────────

const values = [
  {
    Icon: ShieldCheck,
    title: "Security First",
    body: "Every product decision starts with student safety and data protection.",
  },
  {
    Icon: Heart,
    title: "Built for African Schools",
    body: "Designed to work with the realities of African connectivity, payments and operations.",
  },
] as const;

// ─── About ────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <SiteShell>
    <div className="min-h-screen bg-white text-slate-800">
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Building Safer and{" "}
            <span className="text-amber-400">Smarter Schools</span>
          </>
        }
        subtitle="WinExpress Technologies is transforming educational institutions through innovative technology that improves security, operational efficiency and parent engagement."
      />

      {/* Mission & Vision + Values */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        {/* Mission / Vision */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-amber-600">
              <Target size={20} />
            </div>
            <h2 className="mt-5 text-2xl font-black text-slate-900">Our Mission</h2>
            <p className="mt-3 text-slate-500">
              To create safer, smarter, and more connected educational environments across Africa.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-100 text-slate-800">
              <Compass size={20} />
            </div>
            <h2 className="mt-5 text-2xl font-black text-slate-900">Our Vision</h2>
            <p className="mt-3 text-slate-500">
              To become Africa's leading school security and management technology provider.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {values.map(({ Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-amber-600">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-500">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner CTA */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Partner with us</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Schools, banks and institutional partners — let's build the future of African
            education together.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 rounded-full px-7 text-base font-bold bg-amber-500 text-slate-900 hover:bg-amber-400 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
    </SiteShell>
  );
}