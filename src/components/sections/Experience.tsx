"use client";

import { MapPin, Building2, Briefcase } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/components/providers/LangProvider";
import { Section, SectionHeading } from "@/components/ui/Section";

function CompanyLogo({ src, name }: { src?: string; name: string }) {
  const [error, setError] = useState(!src);
  if (!error && src) {
    return (
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-white border border-line dark:bg-surface dark:border-border flex items-center justify-center shrink-0 shadow-sm">
        <img
          src={src}
          alt={`${name} logo`}
          className="w-full h-full object-contain p-2"
          onError={() => setError(true)}
        />
      </div>
    );
  }
  return (
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-hover text-white flex items-center justify-center shrink-0 shadow-sm">
      <Building2 className="w-7 h-7" />
    </div>
  );
}

export function Experience() {
  const { t } = useLang();
  return (
    <Section id="experience">
      <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.headline} />

      <div className="space-y-6 md:space-y-8">
        {t.experience.items.map((item, idx) => {
          const isCurrent = idx === 0;
          return (
            <article
              key={idx}
              className="group relative rounded-3xl bg-white dark:bg-surface border border-line dark:border-border overflow-hidden hover:border-accent/40 hover:shadow-[0_12px_40px_-12px_rgba(46,108,246,0.18)] transition-all"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent-hover" />

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-6">
                  <CompanyLogo src={item.logo} name={item.company} />

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground">
                            {item.role}
                          </h3>
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 text-[11px] font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Hiện tại
                            </span>
                          )}
                        </div>
                        <div className="mt-1 text-base font-semibold text-navy dark:text-foreground">
                          {item.company}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft text-accent px-3 py-1 text-sm font-semibold">
                          <Briefcase className="w-3.5 h-3.5" />
                          {item.period}
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                      {item.location && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      )}
                      {item.industry && (
                        <>
                          <span className="text-line">·</span>
                          <span>{item.industry}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {item.keyMetrics && item.keyMetrics.length > 0 && (
                  <div className="mt-6 grid grid-cols-3 gap-2 md:gap-3">
                    {item.keyMetrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-2xl bg-gradient-to-br from-accent-soft to-background dark:from-accent-soft dark:to-surface px-3 md:px-4 py-3 md:py-4 border border-accent/15"
                      >
                        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-accent leading-none">
                          {m.value}
                        </div>
                        <div className="mt-1.5 text-[11px] md:text-xs text-muted leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {item.scope && item.scope.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.scope.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center rounded-full bg-cream dark:bg-surface-alt text-navy dark:text-foreground px-2.5 py-1 text-xs font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                <p className="mt-5 text-sm md:text-base text-muted leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-accent mb-3">
                    Thành tựu chính
                  </div>
                  <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-foreground">
                    {item.achievements.map((a, i) => (
                      <li key={i} className="flex gap-2.5 leading-relaxed">
                        <span className="inline-flex w-5 h-5 rounded-full bg-accent-soft text-accent items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {item.stack && (
                  <div className="mt-6 pt-5 border-t border-line dark:border-border">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-muted mb-2">
                      Tech stack & Tools
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.stack.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center rounded-full bg-background dark:bg-surface-alt px-2.5 py-1 text-xs font-medium text-muted border border-line dark:border-border"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
