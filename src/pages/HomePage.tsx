import { Link } from "react-router";
import {
  ArrowRight,
  IdCard,
  DoorOpen,
  MapPin,
  Wallet,
  LayoutDashboard,
  ShieldCheck,
  Users,
  TrendingUp,
  Sparkles,
  ClipboardCheck,
  Bell,
  Eye,
  SlidersHorizontal,
  Check,
} from "lucide-react";
import SiteShell from "../component/SIteShell";
import { SchoolImg } from "../assets";




// ─── Data ─────────────────────────────────────────────────────────────────────

const highlights = [
  "Smart Student ID Cards",
  "Attendance Monitoring",
  "GPS Student Tracking",
  "Cashless Student Wallets",
  "School Management Software",
  "Parent Mobile App",
];

const solutions = [
  {
    Icon: IdCard,
    title: "Smart Student ID Cards",
    body: "Every student gets a secure digital identity with photo, class, ID number and NFC chip.",
    to: "/solutions/smart-id",
  },
  {
    Icon: DoorOpen,
    title: "Access Control & Attendance",
    body: "NFC-powered gate monitoring with real-time clock-in/out and offline support.",
    to: "/solutions/access-control",
  },
  {
    Icon: MapPin,
    title: "GPS Student Tracking",
    body: "Live location, geofencing alerts and school commute monitoring for parents.",
    to: "/solutions/gps",
  },
  {
    Icon: Wallet,
    title: "Cashless School Payments",
    body: "Secure student wallet, parent funding, spending controls and full transaction history.",
    to: "/solutions/payments",
  },
  {
    Icon: LayoutDashboard,
    title: "School Management Software",
    body: "Students, results, CBT, HR and reporting from one centralised dashboard.",
    to: "/solutions/school-software",
  },
];

const benefits = [
  {
    Icon: ShieldCheck,
    title: "Improve Student Safety",
    body: "Track attendance, movement and facility access through one secure ecosystem.",
  },
  {
    Icon: Users,
    title: "Build Parent Confidence",
    body: "Real-time notifications, location, spending and attendance updates.",
  },
  {
    Icon: ClipboardCheck,
    title: "Reduce Administrative Work",
    body: "Automate attendance, reporting and student record keeping.",
  },
  {
    Icon: Sparkles,
    title: "Modernise School Operations",
    body: "Become a technology-enabled school equipped for the future.",
  },
  {
    Icon: TrendingUp,
    title: "Generate Additional Revenue",
    body: "Earn through card issuance, replacements and digital payment services.",
  },
];

const parentBenefits = [
  { Icon: ClipboardCheck, label: "Monitor student attendance" },
  { Icon: MapPin, label: "Track student locations in real time" },
  { Icon: Bell, label: "Entry & exit notifications" },
  { Icon: Wallet, label: "Fund student wallets remotely" },
  { Icon: Eye, label: "View transaction history" },
  { Icon: SlidersHorizontal, label: "Set spending limits & controls" },
  { Icon: ShieldCheck, label: "Instant security alerts" },
];

const steps = [
  "School registers with WinExpress.",
  "Student information is collected and verified.",
  "Parents activate their accounts and wallets.",
  "Smart cards and tracking devices are produced.",
  "Attendance systems and software are deployed.",
  "The school goes live on the WinExpress ecosystem.",
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <SiteShell>
    <div className="min-h-screen bg-white text-slate-800">

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${SchoolImg})` }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-slate-900/80" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="max-w-3xl">
            {/* eyebrow */}
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
              Nigeria's complete school platform
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl leading-[1.1]">
              Secure Every Student.{" "}
              <span className="text-amber-400">Simplify Every School Operation.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/85">
              WinExpress combines Student Identification, Access Control, GPS Tracking,
              Cashless Payments, and School Management into one powerful ecosystem — built
              for African schools and powered by banking-grade infrastructure.
            </p>
            <p className="mt-4 max-w-2xl text-base text-white/70">
              Give parents peace of mind, improve student security, automate attendance,
              and create a cashless school environment with a single integrated platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 h-12 rounded-full px-7 text-base font-bold bg-amber-500 text-slate-900 hover:bg-amber-400 transition-colors"
              >
                Request a Demo <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-12 rounded-full border border-white/40 bg-white/5 px-7 text-base font-bold text-white hover:bg-white/15 transition-colors"
              >
                Talk to Sales
              </Link>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-white/85 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <Check size={16} className="text-amber-400 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Trusted by ── */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Powered by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-bold text-slate-800">
            <span>Providus Bank</span>
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <span>Wema Bank</span>
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <span className="text-slate-400">+ Schools across Nigeria</span>
          </div>
        </div>
      </section>

      {/* ── Solutions ── */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            The WinExpress Ecosystem
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            One Platform. Five Powerful Solutions.
          </h2>
          <p className="mt-4 text-slate-500">
            Modernise operations while improving student security and parent engagement —
            all from a single ecosystem.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ Icon, title, body, to }) => (
            <Link
              key={title}
              to={to}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-50 text-amber-600">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-500">{body}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
                Learn more{" "}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Why Schools Choose WinExpress
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-100 text-slate-800">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Parent Benefits ── */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* image */}
          <div className="order-2 overflow-hidden rounded-3xl border border-slate-200 shadow-md lg:order-1">
            <img
              src="/assets/parent-app.jpg"
              alt="WinExpress parent mobile app"
              className="h-full w-full object-cover"
            />
          </div>

          {/* copy */}
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
              For Parents
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Complete Peace of Mind
            </h2>
            <p className="mt-4 text-slate-500">
              A dedicated parent mobile experience that keeps you connected to your child
              throughout the school day.
            </p>

            <ul className="mt-7 space-y-3">
              {parentBenefits.map(({ Icon, label }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-amber-50 text-amber-600">
                    <Icon size={16} />
                  </span>
                  <span className="text-slate-800">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              From registration to go-live in six steps
            </h2>
          </div>

          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={s}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-amber-400 font-black text-slate-900">
                  {i + 1}
                </div>
                <p className="mt-4 text-white/90">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Ready to Build a Safer and Smarter School?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-500">
          Join forward-thinking schools across Nigeria using WinExpress to improve
          student security, parent engagement and operational efficiency.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 h-12 rounded-full px-7 text-base font-bold bg-amber-500 text-slate-900 hover:bg-amber-400 transition-colors"
          >
            Schedule a Demo Today <ArrowRight size={18} />
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 h-12 rounded-full border border-slate-300 text-slate-800 px-7 text-base font-bold hover:bg-slate-100 transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </div>
    </SiteShell>
  );
}