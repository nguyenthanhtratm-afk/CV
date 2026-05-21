"use client";

import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/components/providers/LangProvider";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Cloud } from "@/components/ui/Decor";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function Projects() {
  const { t } = useLang();
  return (
    <Section id="projects" className="relative overflow-hidden">
      <Cloud className="absolute top-10 right-4 opacity-50" scale={0.7} />
      <SectionHeading
        eyebrow={t.projects.eyebrow}
        title={t.projects.headline}
        description={t.projects.description}
      />

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {t.projects.items.map((p, i) => {
          const variant = i % 2 === 0 ? "dark" : "light";
          return (
            <Card
              key={p.slug}
              variant={variant}
              className="group hover:-translate-y-1 overflow-hidden !p-0"
            >
              <div className="relative">
                <ImagePlaceholder
                  src={p.cover}
                  alt={p.title}
                  brief="Ảnh dự án / screenshot"
                  size="Tỉ lệ 16:9 · 1200×675px"
                  path={`public/images/projects/${p.slug}.jpg`}
                  aspectClassName="aspect-[16/9]"
                  rounded="rounded-none"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-white/95 text-navy px-2.5 py-1 text-xs font-semibold backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-bold leading-tight">{p.title}</h3>
                    <p
                      className={`text-sm mt-1 ${
                        variant === "dark" ? "text-white/60" : "text-muted"
                      }`}
                    >
                      {p.tagline}
                    </p>
                  </div>
                  <ArrowUpRight
                    className={`w-5 h-5 mt-1 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      variant === "dark" ? "text-white/70" : "text-muted"
                    }`}
                  />
                </div>

                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    variant === "dark" ? "text-white/80" : "text-foreground"
                  }`}
                >
                  {p.description}
                </p>

                <div className="grid grid-cols-3 gap-2">
                  {p.metrics.map((m) => (
                    <div
                      key={m.label}
                      className={`rounded-xl p-2.5 ${
                        variant === "dark" ? "bg-white/5" : "bg-background"
                      }`}
                    >
                      <div className="text-base md:text-lg font-bold leading-tight">{m.value}</div>
                      <div
                        className={`text-[11px] mt-0.5 leading-tight ${
                          variant === "dark" ? "text-white/60" : "text-muted"
                        }`}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
