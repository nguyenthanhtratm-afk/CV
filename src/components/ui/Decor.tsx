import { cn } from "@/lib/utils";

export function Cloud({ className, scale = 1 }: { className?: string; scale?: number }) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={cn("text-white/80 dark:text-white/10", className)}
      style={{ width: 120 * scale, height: 60 * scale }}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M30 45c-11 0-20-7-20-16s9-16 20-16c3 0 6 .6 9 1.7C42 8 50 3 60 3c13 0 24 9 26 21 8 1 14 7 14 15 0 9-8 16-18 16H30z"
      />
    </svg>
  );
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("w-6 h-6", className)} aria-hidden>
      <path
        fill="currentColor"
        d="M12 0l2.4 8.6L23 11l-8.6 2.4L12 22l-2.4-8.6L1 11l8.6-2.4L12 0z"
      />
    </svg>
  );
}

export function GrowthChart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={cn("w-full h-auto", className)} aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M10 100 L40 80 L70 88 L100 55 L130 60 L160 28 L190 20 L190 110 L10 110 Z" fill="url(#g1)" />
      <path
        d="M10 100 L40 80 L70 88 L100 55 L130 60 L160 28 L190 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="190" cy="20" r="5" fill="currentColor" />
    </svg>
  );
}

export function Rocket({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" className={cn("w-full h-auto", className)} aria-hidden>
      <ellipse cx="50" cy="125" rx="20" ry="5" fill="currentColor" opacity="0.15" />
      <path
        d="M50 10 C70 30 75 60 70 85 L30 85 C25 60 30 30 50 10 Z"
        fill="currentColor"
        opacity="0.95"
      />
      <circle cx="50" cy="45" r="9" fill="white" />
      <circle cx="50" cy="45" r="5" fill="currentColor" opacity="0.4" />
      <path d="M30 85 L20 110 L35 100 Z" fill="currentColor" opacity="0.7" />
      <path d="M70 85 L80 110 L65 100 Z" fill="currentColor" opacity="0.7" />
      <path d="M45 100 L50 120 L55 100 Z" fill="#FF8A65" />
    </svg>
  );
}

export function Megaphone({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={cn("w-full h-auto", className)} aria-hidden>
      <path d="M15 40 L60 25 L60 75 L15 60 Z" fill="currentColor" />
      <rect x="60" y="35" width="20" height="30" rx="4" fill="currentColor" opacity="0.7" />
      <circle cx="20" cy="50" r="4" fill="white" />
      <path d="M82 40 Q92 50 82 60" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M85 30 Q100 50 85 70" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function Phone({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" className={cn("w-full h-auto", className)} aria-hidden>
      <rect x="10" y="10" width="100" height="180" rx="20" fill="#0E1F3D" />
      <rect x="18" y="22" width="84" height="156" rx="12" fill="#E6F2FB" />
      <circle cx="60" cy="184" r="3" fill="white" />
      <text x="60" y="50" textAnchor="middle" fontSize="9" fontWeight="700" fill="#0E1F3D">+212%</text>
      <text x="60" y="62" textAnchor="middle" fontSize="6" fill="#4B5C7C">Traffic growth</text>
      <rect x="28" y="80" width="64" height="40" rx="8" fill="#2E6CF6" />
      <path d="M34 110 L46 96 L58 102 L72 84 L86 88" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="86" cy="88" r="2.5" fill="white" />
      <rect x="28" y="130" width="64" height="14" rx="7" fill="#FFFFFF" stroke="#DCE6F0" />
      <text x="60" y="140" textAnchor="middle" fontSize="6" fontWeight="600" fill="#0E1F3D">See report</text>
    </svg>
  );
}
