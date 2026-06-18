import React from "react";

// ── Variant & size class maps ────────────────────────────────────────────────

const variantClasses: Record<string, string> = {
  default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
  destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
  outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
};

const sizeClasses: Record<string, string> = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md px-3 text-xs",
  lg: "h-10 rounded-md px-8",
  icon: "h-9 w-9",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

// ── Tiny cn() replacement ────────────────────────────────────────────────────

function cx(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

// ── Types ────────────────────────────────────────────────────────────────────

export type ButtonVariant = keyof typeof variantClasses;
export type ButtonSize = keyof typeof sizeClasses;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /**
   * When true, the Button renders its single child element directly,
   * merging all props onto it — same behaviour as Radix <Slot />.
   */
  asChild?: boolean;
}

// ── Minimal Slot implementation ──────────────────────────────────────────────
// Merges the Button's props onto its single React-element child.

function mergeRefs<T>(...refs: React.Ref<T>[]): React.RefCallback<T> {
  return (node: T) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") ref(node);
      else (ref as React.MutableRefObject<T>).current = node;
    });
  };
}

interface SlotProps {
  children?: React.ReactNode;
  [key: string]: unknown;
}

const Slot = React.forwardRef<HTMLElement, SlotProps>(({ children, ...slotProps }, slotRef) => {
  if (!React.isValidElement(children)) {
    return children as React.ReactElement ?? null;
  }

  const childProps = children.props as Record<string, unknown>;
  const childRef = (children as unknown as { ref?: React.Ref<unknown> }).ref;

  const mergedProps: Record<string, unknown> = { ...childProps };

  // Merge className
  if (slotProps.className || childProps.className) {
    mergedProps.className = cx(
      slotProps.className as string,
      childProps.className as string,
    );
  }

  // Merge style
  if (slotProps.style || childProps.style) {
    mergedProps.style = { ...(slotProps.style as object), ...(childProps.style as object) };
  }

  // Merge all remaining slot props (slot wins for everything except className/style above)
  for (const key of Object.keys(slotProps)) {
    if (key !== "className" && key !== "style") {
      mergedProps[key] = slotProps[key];
    }
  }

  // Merge refs
  const mergedRef = childRef
    ? mergeRefs(slotRef as React.Ref<unknown>, childRef as React.Ref<unknown>)
    : slotRef;

  return React.cloneElement(children, { ...mergedProps, ref: mergedRef } as React.HTMLAttributes<HTMLElement> & { ref: React.Ref<unknown> });
});
Slot.displayName = "Slot";

// ── Button ───────────────────────────────────────────────────────────────────

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const resolvedClass = cx(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className,
    );

    if (asChild) {
      return (
        <Slot
          {...props}
          ref={ref as React.Ref<HTMLElement>}
          className={resolvedClass}
        />
      );
    }

    return (
      <button
        ref={ref}
        className={resolvedClass}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };