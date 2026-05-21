"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Languages } from "lucide-react";
import { useEffect, useState } from "react";
import { useLang } from "@/components/providers/LangProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-navy hover:bg-sky-bg border border-line dark:bg-surface dark:text-foreground dark:border-border transition-colors"
    >
      {mounted && (isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
    </button>
  );
}

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      aria-label="Toggle language"
      onClick={() => setLang(lang === "vi" ? "en" : "vi")}
      className="inline-flex items-center justify-center gap-1.5 h-10 px-3 rounded-full bg-white text-navy hover:bg-sky-bg border border-line dark:bg-surface dark:text-foreground dark:border-border transition-colors text-sm font-semibold"
    >
      <Languages className="w-4 h-4" />
      <span>{lang === "vi" ? "VI" : "EN"}</span>
    </button>
  );
}
