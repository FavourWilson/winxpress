import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "../component/Button";

// If you have a router setup file (e.g. main.tsx), add this route:
// { path: "/", element: <Index /> }

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary font-black text-primary-foreground">
              W
            </span>
            <span className="text-lg font-black tracking-tight text-secondary">
              WinExpress
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-secondary md:flex">
            <Link to="/" className="text-primary">
              Home
            </Link>
            <Link to="/for-school" className="hover:text-primary">
              For School
            </Link>
          </nav>
          <Button size="sm" className="rounded-full px-5 font-semibold" asChild>
            <Link to="/for-school">For School</Link>
          </Button>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-32 text-center">
        <span className="inline-flex rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Now serving Nigerian schools
        </span>
        <h1 className="mt-6 text-5xl font-black tracking-tight text-secondary sm:text-7xl">
          Smart cards for a{" "}
          <span className="text-primary">safer school day.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Track attendance, verify identity and enable secure payments — one
          card, one app, peace of mind for every parent.
        </p>
        <div className="mt-10 flex justify-center">
          <Button size="lg" className="h-12 rounded-full px-8 text-base font-bold" asChild>
            <Link to="/for-school">
              Explore the School Product <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}