import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  containerClassName?: string;
};

export function Section({ className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <div className={cn("max-w-6xl mx-auto px-5 md:px-8", containerClassName)}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-white text-navy text-xs font-semibold px-3 py-1 border border-line dark:bg-surface dark:text-foreground dark:border-border",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={cn("mb-10 md:mb-14", align === "center" ? "text-center" : "text-left")}>
      {eyebrow && (
        <div className={cn("mb-4", align === "center" && "flex justify-center")}>
          <Eyebrow className={invert ? "bg-white/10 text-white border-white/10" : ""}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl md:text-5xl font-bold tracking-tight",
          invert ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg max-w-2xl",
            align === "center" && "mx-auto",
            invert ? "text-white/70" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
