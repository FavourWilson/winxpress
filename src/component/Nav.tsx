import { Link } from "react-router";
import { Button } from "./Button";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary font-black text-primary-foreground">
            W
          </span>
          <span className="text-lg font-black tracking-tight text-secondary">
            WinExpress
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-secondary md:flex">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/for-school" className="text-primary">For School</Link>
          <a href="#pricing" className="hover:text-primary">Pricing</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
        <Button size="sm" className="rounded-full px-5 font-semibold" asChild>
          <a href="#demo">Request a Demo</a>
        </Button>
      </div>
    </header>
  );
}