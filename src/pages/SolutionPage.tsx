import * as React from "react";
import { Link } from "react-router";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";
import { PageHero } from "../component/PageHero";

export type FeatureBlock = {
  icon: LucideIcon;
  title: string;
  body: string;
};

interface SolutionPageProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  intro?: React.ReactNode;
  features?: FeatureBlock[];
  benefits?: { heading: string; items: string[] }[];
  ctaTitle?: string;
}

export default function SolutionPage({
  eyebrow,
  title,
  subtitle,
  intro,
  features,
  benefits,
  ctaTitle = "Ready to see it in action?",
}: SolutionPageProps) {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle}>
        <Link
          to="/demo"
          className="inline-flex items-center gap-2 h-12 rounded-full px-7 text-base font-bold bg-amber-500 text-slate-900 hover:bg-amber-400 transition-colors"
        >
          Request a Demo <ArrowRight size={18} />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center h-12 rounded-full border border-white/40 bg-white/5 px-7 text-base font-bold text-white hover:bg-white/15 transition-colors"
        >
          Talk to Sales
        </Link>
      </PageHero>

      {/* Intro */}
      {intro && (
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="text-lg leading-relaxed text-slate-800">{intro}</div>
        </section>
      )}

      {/* Features */}
      {features && features.length > 0 && (
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="text-center text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Key Features
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title: featureTitle, body }) => (
                <div
                  key={featureTitle}
                  className="rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-amber-600">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{featureTitle}</h3>
                  <p className="mt-2 text-sm text-slate-500">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {benefits && benefits.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.heading} className="rounded-2xl border border-slate-200 bg-white p-8">
                <h3 className="text-2xl font-black text-slate-900">{b.heading}</h3>
                <ul className="mt-5 space-y-3">
                  {b.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-800">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber-500 text-white">
                        <Check size={12} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Book a free demonstration and see exactly how WinExpress fits your school.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center h-12 rounded-full px-7 text-base font-bold bg-amber-500 text-slate-900 hover:bg-amber-400 transition-colors"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center h-12 rounded-full border border-white/40 bg-white/5 px-7 text-base font-bold text-white hover:bg-white/15 transition-colors"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

