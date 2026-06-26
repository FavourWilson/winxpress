import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "../component/PageHero";
import { ContactForm } from "../component/ContactForm";
import SiteShell from "../component/SIteShell";

// ─── PageHero ─────────────────────────────────────────────────────────────────



// ─── Contact info ─────────────────────────────────────────────────────────────

const contactItems = [
  { Icon: Phone, label: "Phone", value: "+234 800 000 0000" },
  { Icon: Mail, label: "Email", value: "hello@winexpress.ng" },
  { Icon: MapPin, label: "Office", value: "Lagos, Nigeria" },
  { Icon: Clock, label: "Hours", value: "Mon – Fri · 9:00 – 18:00 WAT" },
] as const;

// ─── ContactForm ──────────────────────────────────────────────────────────────



// ─── Contact ──────────────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <SiteShell>
    <div className="min-h-screen bg-white text-slate-800">
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Talk to <span className="text-amber-400">our team</span>
          </>
        }
        subtitle="We respond within one business day. Tell us about your school and we'll tailor the right demo."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Contact details */}
          <div className="space-y-5">
            {contactItems.map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-600">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {label}
                  </p>
                  <p className="font-semibold text-slate-900">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </section>
    </div>
    </SiteShell>
  );
}