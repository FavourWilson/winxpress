import { Check } from "lucide-react";
import { ContactForm } from "../component/ContactForm";
import { PageHero } from "../component/PageHero";
import SiteShell from "../component/SIteShell";

const points = [
    "Walkthrough of the full WinExpress ecosystem",
    "Live look at the parent mobile app",
    "Pricing tailored to your student population",
    "Implementation plan for your school",
];


export default function Demo() {
    return (
        <SiteShell>
            <PageHero
                eyebrow="Request a Demo"
                title={<>See WinExpress <span className="text-[var(--gold)]">live for your school</span></>}
                subtitle="Tell us about your institution and we'll book a 30-minute personalised demo."
            />
            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
                    <div className="rounded-2xl border border-border bg-card p-7">
                        <h2 className="text-xl font-black text-secondary">What to expect</h2>
                        <ul className="mt-5 space-y-3">
                            {points.map((p) => (
                                <li key={p} className="flex items-start gap-3 text-secondary">
                                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check size={12} /></span>
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </SiteShell>
    )
}