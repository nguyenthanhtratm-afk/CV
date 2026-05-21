"use client";

import { GraduationCap } from "lucide-react";
import { useLang } from "@/components/providers/LangProvider";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Education() {
  const { t } = useLang();
  return (
    <Section id="education">
      <SectionHeading eyebrow={t.education.eyebrow} title={t.education.headline} />
      <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
        {t.education.items.map((e) => (
          <div
            key={e.degree}
            className="flex gap-4 items-start rounded-2xl bg-white dark:bg-surface border border-line dark:border-border p-5"
          >
            <div className="inline-flex w-11 h-11 rounded-2xl items-center justify-center bg-accent-soft text-accent shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{e.degree}</h3>
              <p className="text-sm text-muted">{e.school}</p>
              <p className="text-xs text-muted mt-1">{e.period}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
