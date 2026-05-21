"use client";

import { Sparkles, Wrench } from "lucide-react";
import { useLang } from "@/components/providers/LangProvider";
import { Section, SectionHeading } from "@/components/ui/Section";

const AI_TOOLS = new Set([
  "Claude",
  "ChatGPT",
  "Gemini",
  "Kling AI",
  "Custom AI Agents",
]);

export function Skills() {
  const { t } = useLang();
  const aiTools = t.skills.tools.filter((tool) => AI_TOOLS.has(tool));
  const otherTools = t.skills.tools.filter((tool) => !AI_TOOLS.has(tool));

  return (
    <Section id="skills" className="bg-surface-alt dark:bg-surface-alt">
      <SectionHeading
        eyebrow={t.skills.eyebrow}
        title={t.skills.headline}
        description={t.skills.description}
      />

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="space-y-5">
          {t.skills.items.map((skill) => {
            const pct = Math.min(100, (skill.rating / 10) * 100);
            const isAI = skill.name.toLowerCase().includes("ai");
            return (
              <div key={skill.name}>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-semibold text-foreground inline-flex items-center gap-1.5">
                    {isAI && <Sparkles className="w-4 h-4 text-accent" />}
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold text-accent">{skill.rating}/10</span>
                </div>
                <div className="h-2.5 rounded-full bg-white dark:bg-surface border border-line dark:border-border overflow-hidden">
                  <div
                    className="h-full rounded-full bg-accent transition-all duration-1000"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-4">
          {aiTools.length > 0 && (
            <div className="rounded-3xl bg-gradient-to-br from-accent to-accent-hover text-white p-6 md:p-7 relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="text-lg font-bold">AI Toolkit</h3>
                </div>
                <p className="text-sm text-white/80 mb-4">
                  AI tools tích hợp vào workflow hàng ngày + xây Agent tuỳ chỉnh
                </p>
                <div className="flex flex-wrap gap-2">
                  {aiTools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur px-3 py-1.5 text-sm font-semibold border border-white/20"
                    >
                      <Sparkles className="w-3 h-3" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="rounded-3xl bg-surface-dark text-white p-6 md:p-7">
            <div className="inline-flex items-center gap-2 mb-2">
              <Wrench className="w-5 h-5" />
              <h3 className="text-lg font-bold">Marketing Stack</h3>
            </div>
            <p className="text-sm text-white/60 mb-4">Nền tảng & công cụ marketing sử dụng hàng ngày</p>
            <div className="flex flex-wrap gap-2">
              {otherTools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/15 transition-colors px-3 py-1.5 text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
