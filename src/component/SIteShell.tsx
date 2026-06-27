import { useState, type ReactNode } from "react";
import { Link, NavLink } from "react-router";
import {
  Menu, X, Phone, Mail, MapPin,
} from "lucide-react";
import { Logopng } from "../assets";

// ─── Data ─────────────────────────────────────────────────────────────────────

const solutionsLinks = [
  { to: "/solutions/smart-id",        label: "Smart Student ID Card" },
  { to: "/solutions/access-control",  label: "Access Control System" },
  { to: "/solutions/gps",             label: "GPS Student Tracking" },
  { to: "/solutions/payments",        label: "Cashless Payment System" },
  { to: "/solutions/school-software", label: "School Management Software" },
] as const;

// ─── Logo ─────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={Logopng} className="w-12 h-12" />
    </Link>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

const activeCls = "text-amber-600";
const linkCls   = "text-white";

function IconFacebook({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
 
function IconLinkedin({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
 
function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
 
function IconX({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
 
function Nav() {
  const [open,    setOpen]    = useState(false);
  const [solOpen, setSolOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-800 lg:flex">
          <NavLink to="/" end className={({ isActive }) => isActive ? activeCls : linkCls}>
            Home
          </NavLink>

          {/* Solutions dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolOpen(true)}
            onMouseLeave={() => setSolOpen(false)}
          >
            <button className={`${linkCls} cursor-pointer`}>Solutions</button>
            {solOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <div className="w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                  {solutionsLinks.map((l) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      className={({ isActive }) =>
                        `block rounded-md px-3 py-2 text-sm transition-colors ${
                          isActive
                            ? "bg-amber-50 text-amber-600"
                            : "hover:bg-slate-100 hover:text-amber-600"
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/pricing" className={({ isActive }) => isActive ? activeCls : linkCls}>Pricing</NavLink>
          <NavLink to="/about"   className={({ isActive }) => isActive ? activeCls : linkCls}>About</NavLink>
          <NavLink to="/blog"    className={({ isActive }) => isActive ? activeCls : linkCls}>Blog</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeCls : linkCls}>Contact</NavLink>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            to="/demo"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-400 transition-colors"
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-slate-800"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X color="red" size={22} /> : <Menu color="white" size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 text-sm font-medium text-slate-800">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 hover:text-amber-600">Home</Link>

            <div className="py-1">
              <div className="py-1 text-xs uppercase tracking-wider text-slate-400">Solutions</div>
              {solutionsLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 pl-3 hover:text-amber-600"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <Link to="/pricing" onClick={() => setOpen(false)} className="py-2 hover:text-amber-600">Pricing</Link>
            <Link to="/about"   onClick={() => setOpen(false)} className="py-2 hover:text-amber-600">About</Link>
            <Link to="/blog"    onClick={() => setOpen(false)} className="py-2 hover:text-amber-600">Blog</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2 hover:text-amber-600">Contact</Link>

            <Link
              to="/demo"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-amber-400 transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-amber-500 font-black text-slate-900">W</span>
            <span className="text-lg font-black tracking-tight">WinExpress</span>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Nigeria's complete school security, identity & management platform. Powered by
            Providus Bank and Wema Bank.
          </p>
          <div className="mt-5 flex gap-3 text-white/70">
            <a href="#" aria-label="Facebook"  className="hover:text-amber-400 transition-colors"><IconFacebook  size={18} /></a>
            <a href="#" aria-label="LinkedIn"  className="hover:text-amber-400 transition-colors"><IconLinkedin  size={18} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-amber-400 transition-colors"><IconInstagram size={18} /></a>
            <a href="#" aria-label="Twitter"   className="hover:text-amber-400 transition-colors"><IconX   size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {[
              { to: "/",                    label: "Home" },
              { to: "/solutions/smart-id",  label: "Solutions" },
              { to: "/pricing",             label: "Pricing" },
              { to: "/about",               label: "About" },
              { to: "/blog",                label: "Blog" },
              { to: "/contact",             label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">Solutions</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {[
              { to: "/solutions/smart-id",        label: "Smart Cards" },
              { to: "/solutions/gps",             label: "GPS Tracking" },
              { to: "/solutions/payments",        label: "Cashless Payments" },
              { to: "/solutions/access-control",  label: "Access Control" },
              { to: "/solutions/school-software", label: "School Software" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0" /> +234 800 000 0000
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0" /> hello@winexpress.ng
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" /> Lagos, Nigeria
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} WinExpress Technologies. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── SiteShell ────────────────────────────────────────────────────────────────

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

