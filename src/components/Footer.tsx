"use client";

import { Mail, Linkedin, Facebook, Github, Instagram, Phone, Sparkles, Globe } from "lucide-react";
import { useLang } from "@/components/providers/LangProvider";
import { Cloud } from "@/components/ui/Decor";

const iconMap = {
  mail: Mail,
  linkedin: Linkedin,
  facebook: Facebook,
  github: Github,
  instagram: Instagram,
  phone: Phone,
  x: Sparkles,
  globe: Globe,
};

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-surface-dark text-white overflow-hidden">
      <Cloud className="absolute left-6 top-10 opacity-10" scale={1.2} />
      <Cloud className="absolute right-12 bottom-16 opacity-10" scale={0.9} />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 font-bold text-lg">
              <span className="inline-flex w-9 h-9 rounded-full bg-accent items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </span>
              Nguyễn Thanh Trà
            </div>
            <p className="mt-4 text-white/70 max-w-sm">{t.footer.tagline}</p>
            <div className="mt-6 flex items-center gap-3">
              {t.footer.social.map((s) => {
                const Icon = iconMap[s.icon] ?? Mail;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {t.footer.sections.map((sec) => (
              <div key={sec.title}>
                <h4 className="text-sm font-semibold mb-3">{sec.title}</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  {sec.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="hover:text-white transition-colors">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-sm text-white/60">
          <span>{t.footer.copyright.replace("2026", String(year))}</span>
          <span>Made with care · Next.js + Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
