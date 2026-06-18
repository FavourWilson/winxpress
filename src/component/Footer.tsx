export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded bg-primary text-xs font-black text-primary-foreground">
            W
          </span>
          <span className="font-bold text-secondary">WinExpress</span>
        </div>
        <p>© {new Date().getFullYear()} WinExpress. All rights reserved.</p>
      </div>
    </footer>
  );
}