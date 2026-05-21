import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "light" | "dark" | "cream" | "soft";

const variants: Record<Variant, string> = {
  light: "bg-white text-foreground border border-line dark:bg-surface dark:border-border",
  dark: "bg-surface-dark text-surface-dark-foreground",
  cream: "bg-cream text-navy dark:bg-surface-alt dark:text-foreground",
  soft: "bg-accent-soft text-foreground",
};

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: Variant;
};

export function Card({ variant = "light", className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl p-6 md:p-8 transition-all duration-300",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Pill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-white/10 text-current border border-current/15",
        className,
      )}
    >
      {children}
    </span>
  );
}
