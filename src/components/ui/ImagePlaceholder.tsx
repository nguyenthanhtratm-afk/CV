"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  src?: string;
  alt?: string;
  brief: string;
  size: string;
  path: string;
  className?: string;
  aspectClassName?: string;
  rounded?: string;
};

export function ImagePlaceholder({
  src,
  alt,
  brief,
  size,
  path,
  className,
  aspectClassName = "aspect-[4/5]",
  rounded = "rounded-3xl",
}: Props) {
  const [error, setError] = useState(!src);

  if (!error && src) {
    return (
      <div className={cn(aspectClassName, rounded, "overflow-hidden bg-surface-alt", className)}>
        <img
          src={src}
          alt={alt ?? brief}
          className="w-full h-full object-cover"
          onError={() => setError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        aspectClassName,
        rounded,
        "relative flex flex-col items-center justify-center text-center p-6",
        "bg-surface-alt border-2 border-dashed border-accent/30",
        className,
      )}
    >
      <div className="inline-flex w-12 h-12 rounded-2xl bg-accent/15 text-accent items-center justify-center mb-3">
        <ImageIcon className="w-5 h-5" />
      </div>
      <p className="text-sm font-bold text-navy dark:text-foreground">{brief}</p>
      <p className="text-xs text-muted mt-1">{size}</p>
      <code className="mt-2 text-[10px] md:text-xs bg-white/60 dark:bg-surface/80 text-muted px-2 py-1 rounded font-mono">
        {path}
      </code>
    </div>
  );
}
