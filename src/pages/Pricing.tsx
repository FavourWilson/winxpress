import { Link } from "react-router";
import { Check } from "lucide-react";
import { PageHero } from "../component/PageHero";
import SiteShell from "../component/SIteShell";

// ─── PageHero ─────────────────────────────────────────────────────────────────



// ─── Data ─────────────────────────────────────────────────────────────────────

const rows = [
  { item: "School Management Software", cost: "Free Year 1",    note: "Subscription pricing from Year 2" },
  { item: "Attendance Software",         cost: "₦500 / term",   note: "Per student, from Year 2" },
  { item: "Smart ID Card",               cost: "₦700 / term",   note: "Per child" },
  { item: "GPS Tracking Device",         cost: "₦6,000",        note: "Per device, one-time" },
  { item: "Access Attendance Machine",   cost: "₦30,000",       note: "Per terminal" },
  { item: "POS Terminal",                cost: "Free",          note: "2 per school included" },
] as const;

const callouts = [
  {
    title: "Everything Included",
    body: "Smart card design & printing, parent app, school dashboard, training and onboarding.",
  },
  {
    title: "Banking-Grade Infrastructure",
    body: "Wallets and payments powered by Providus Bank and Wema Bank.",
  },
] as const;

// ─── Pricing ──────────────────────────────────────────────────────────────────

export default function Pricing() {
  return (
    <SiteShell>
    <div className="min-h-screen bg-white text-slate-800">
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Transparent Pricing{" "}
            <span className="text-amber-400">Built for Schools</span>
          </>
        }
        subtitle="Simple, predictable costs. No hidden fees. Volume discounts for large institutions."
      >
        <Link
          to="/demo"
          className="inline-flex items-center justify-center h-12 rounded-full px-7 text-base font-bold bg-amber-500 text-slate-900 hover:bg-amber-400 transition-colors"
        >
          Request Custom Pricing
        </Link>
      </PageHero>

      {/* Pricing table + callouts */}
      <section className="mx-auto max-w-5xl px-6 py-20">

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Service</th>
                <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Cost</th>
                <th className="hidden px-6 py-4 text-sm font-bold uppercase tracking-wider md:table-cell">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.item} className="border-t border-slate-100">
                  <td className="px-6 py-5 font-semibold text-slate-900">{r.item}</td>
                  <td className="px-6 py-5 font-bold text-amber-600">{r.cost}</td>
                  <td className="hidden px-6 py-5 text-sm text-slate-400 md:table-cell">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Callout cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {callouts.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-amber-50 text-amber-600">
                  <Check size={18} />
                </span>
                <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-500">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Need pricing for a large school or group?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            We tailor pricing for institutions with large student populations, multi-campus
            operations and educational groups.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center h-12 rounded-full px-7 text-base font-bold bg-amber-500 text-slate-900 hover:bg-amber-400 transition-colors"
            >
              Request Custom Pricing
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 rounded-full border border-white/40 bg-white/5 px-7 text-base font-bold text-white hover:bg-white/15 transition-colors"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
    </SiteShell>
  );
}