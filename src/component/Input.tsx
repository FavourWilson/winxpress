import * as React from "react";

// ─── cn utility ───────────────────────────────────────────────────────────────

function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

// ─── Input ────────────────────────────────────────────────────────────────────

export type InputProps = React.ComponentProps<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // layout
          "flex h-9 w-full",
          // shape
          "rounded-md border border-slate-300 bg-transparent",
          // spacing & text
          "px-3 py-1 text-base md:text-sm text-slate-900",
          // shadow & transition
          "shadow-sm transition-colors",
          // file input reset
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-700",
          // placeholder
          "placeholder:text-slate-400",
          // focus
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:border-amber-400",
          // disabled
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };