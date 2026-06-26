import * as React from "react";

// ─── cn utility (replaces clsx + tailwind-merge) ──────────────────────────────

function cn(...inputs: (string | undefined | null | false | Record<string, boolean>)[]): string {
  const classes: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === "string") {
      classes.push(input);
    } else if (typeof input === "object") {
      for (const [key, value] of Object.entries(input)) {
        if (value) classes.push(key);
      }
    }
  }

  // Basic tailwind-merge: last one wins for same-prefix classes
  const result: string[] = [];
  const seen = new Map<string, number>();

  const getPrefix = (cls: string): string => {
    // Strip variants like hover:, focus:, disabled: etc.
    const withoutVariants = cls.replace(/^([a-z-]+:)+/, "");
    // Get the utility prefix e.g. "bg", "text", "h", "px", "py", "rounded", "border", "shadow", "cursor"
    const match = withoutVariants.match(/^([a-z]+(?:-[a-z]+)?)-/);
    return match ? match[1] : withoutVariants;
  };

  for (const cls of classes.join(" ").split(/\s+/).filter(Boolean)) {
    const prefix = getPrefix(cls);
    if (seen.has(prefix)) {
      result[seen.get(prefix)!] = cls; // overwrite with later value
    } else {
      seen.set(prefix, result.length);
      result.push(cls);
    }
  }

  return result.join(" ");
}

// ─── cva (Class Variance Authority) replacement ───────────────────────────────

type ClassValue = string | undefined | null | false;

interface CVAConfig<T extends Record<string, Record<string, ClassValue>>> {
  variants: T;
  defaultVariants?: { [K in keyof T]?: keyof T[K] };
}

function cva<T extends Record<string, Record<string, ClassValue>>>(
  base: string,
  config: CVAConfig<T>
) {
  return function (
    props?: { [K in keyof T]?: keyof T[K] } & { className?: string }
  ): string {
    const { className, ...variantProps } = props ?? {};
    const variantClasses: string[] = [];

    for (const [variantKey, variantValues] of Object.entries(config.variants) as [keyof T, Record<string, ClassValue>][]) {
      const selectedKey =
        (variantProps as Record<keyof T, keyof T[keyof T]>)[variantKey] ??
        config.defaultVariants?.[variantKey];

      if (selectedKey !== undefined) {
        const cls = variantValues[selectedKey as string];
        if (cls) variantClasses.push(cls);
      }
    }

    return cn(base, ...variantClasses, className);
  };
}

// ─── Slot (replaces @radix-ui/react-slot) ────────────────────────────────────
// Merges props onto its single child element rather than rendering a wrapper.

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...slotProps }, ref) => {
    if (!React.isValidElement(children)) {
      return null;
    }

    const child = children as React.ReactElement<Record<string, unknown>>;

    return React.cloneElement(child, {
      ...slotProps,
      ...child.props,
      // Merge className
      className: cn(
        (slotProps as { className?: string }).className,
        (child.props as { className?: string }).className
      ),
      // Merge refs
      ref: ref
        ? (node: HTMLElement | null) => {
            if (typeof ref === "function") ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node;
            const childRef = (child as unknown as { ref?: React.Ref<HTMLElement> }).ref;
            if (typeof childRef === "function") childRef(node);
            else if (childRef) (childRef as React.MutableRefObject<HTMLElement | null>).current = node;
          }
        : (child as unknown as { ref?: React.Ref<HTMLElement> }).ref,
    });
  }
);
Slot.displayName = "Slot";

// ─── Button Variants ──────────────────────────────────────────────────────────

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// ─── Types ────────────────────────────────────────────────────────────────────

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

// ─── Button ───────────────────────────────────────────────────────────────────

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const resolvedClass = buttonVariants({ variant, size, className });

    if (asChild) {
      return (
        <Slot
          className={resolvedClass}
          ref={ref as React.Ref<HTMLElement>}
          {...props}
        />
      );
    }

    return (
      <button
        className={resolvedClass}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants, cn, cva, Slot };