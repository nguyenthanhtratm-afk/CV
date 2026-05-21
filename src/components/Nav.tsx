"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { useLang } from "@/components/providers/LangProvider";
import { Button } from "@/components/ui/Button";
import { ThemeToggle, LangToggle } from "@/components/ui/Toggles";
import { cn } from "@/lib/utils";

export function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.education, href: "#education" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur border-b border-line/60 dark:border-border/60"
          : "bg-transparent",
      )}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold text-foreground">
          <span className="inline-flex w-8 h-8 rounded-full bg-accent text-white items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="hidden sm:inline">Thanh Trà</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <Button asLink href="/files/cv.pdf">
            {t.nav.cta}
          </Button>
        </div>

        <button
          aria-label="Open menu"
          className="md:hidden inline-flex w-10 h-10 items-center justify-center rounded-full bg-white text-navy border border-line dark:bg-surface dark:text-foreground dark:border-border"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-line dark:border-border">
          <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground font-medium py-1"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <LangToggle />
              <ThemeToggle />
              <Button asLink href="/files/cv.pdf" className="ml-auto">
                {t.nav.cta}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
