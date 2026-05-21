"use client";

import { Download, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { useLang } from "@/components/providers/LangProvider";
import { Button } from "@/components/ui/Button";
import { Cloud } from "@/components/ui/Decor";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <Cloud className="absolute left-[-30px] top-24 float-slow" scale={1.2} />
      <Cloud className="absolute right-[5%] top-32 float-med opacity-80" scale={0.8} />
      <Cloud className="absolute left-[20%] bottom-12 float-slow opacity-60" scale={0.9} />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-line dark:bg-surface dark:border-border px-3 py-1.5 text-xs font-semibold text-navy dark:text-foreground">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                <span className="relative rounded-full bg-emerald-500 w-2 h-2" />
              </span>
              {t.hero.eyebrow}
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
              {t.hero.name}
            </h1>
            <p className="mt-3 text-xl md:text-2xl font-semibold text-accent">{t.hero.title}</p>

            <div className="mt-3 flex items-center gap-2 text-sm text-muted">
              <MapPin className="w-4 h-4" />
              <span>{t.hero.location}</span>
            </div>

            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-xl">
              {t.hero.intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href={`mailto:${t.contact.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-surface border border-line dark:border-border px-3.5 py-2 hover:border-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-foreground">{t.contact.email}</span>
              </a>
              <a
                href={`tel:+84${t.contact.phone.replace(/\s|^0/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-surface border border-line dark:border-border px-3.5 py-2 hover:border-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-foreground">{t.contact.phone}</span>
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button size="lg" asLink href="/files/cv.pdf">
                <Download className="w-4 h-4" />
                {t.hero.primaryCta}
              </Button>
              <Button size="lg" variant="secondary" asLink href="#projects">
                {t.hero.secondaryCta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
              {t.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white dark:bg-surface border border-line dark:border-border p-3"
                >
                  <div className="text-xl md:text-2xl font-bold text-navy dark:text-foreground">
                    {s.value}
                  </div>
                  <div className="text-[11px] md:text-xs text-muted mt-0.5 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              <Cloud className="absolute -top-4 -right-4 z-10 opacity-80" scale={0.6} />
              <ImagePlaceholder
                src={t.hero.portrait}
                alt={t.hero.name}
                brief="Ảnh chân dung"
                size="Tỉ lệ 4:5 · 800×1000px · nền sáng"
                path="public/images/avatar.jpg"
                aspectClassName="aspect-[4/5]"
                className="max-w-[420px] mx-auto shadow-[0_20px_60px_-15px_rgba(16,36,71,0.25)]"
              />
              <div className="absolute -bottom-4 -left-4 bg-navy text-white rounded-2xl px-4 py-3 shadow-[0_10px_30px_rgba(16,36,71,0.3)] hidden md:block">
                <div className="text-[11px] uppercase tracking-wider text-white/60">Hiện tại</div>
                <div className="text-sm font-semibold">Digital Marketing</div>
                <div className="text-xs text-white/70">@ GTG CRM · SaaS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
