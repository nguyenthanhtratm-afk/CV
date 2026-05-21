"use client";

import { Download } from "lucide-react";
import { useLang } from "@/components/providers/LangProvider";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Cloud, GrowthChart } from "@/components/ui/Decor";

export function About() {
  const { t } = useLang();
  return (
    <Section id="about" className="relative overflow-hidden bg-surface-alt dark:bg-surface-alt">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7">
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            {t.about.headline}
          </h2>
          <div className="mt-6 space-y-4 text-base md:text-lg text-muted leading-relaxed">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-7">
            <Button asLink href="/files/cv.pdf" variant="dark">
              <Download className="w-4 h-4" />
              {t.about.cta}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl bg-white dark:bg-surface border border-line dark:border-border p-6 md:p-8">
            <Cloud className="absolute top-4 right-4 opacity-40" scale={0.6} />
            <div className="text-navy dark:text-foreground">
              <GrowthChart />
            </div>
            <div className="mt-4 text-sm text-muted">
              Mình tin marketing tốt là marketing đo được — mỗi quyết định đều có dữ liệu đứng sau.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
