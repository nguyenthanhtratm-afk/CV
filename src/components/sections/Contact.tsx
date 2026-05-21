"use client";

import { Mail, Phone, Globe, MapPin, Download } from "lucide-react";
import { useLang } from "@/components/providers/LangProvider";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Cloud } from "@/components/ui/Decor";

export function Contact() {
  const { t } = useLang();

  const items = [
    {
      icon: Mail,
      label: "Email",
      value: t.contact.email,
      href: `mailto:${t.contact.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: t.contact.phone,
      href: `tel:+84${t.contact.phone.replace(/\s|^0/g, "")}`,
    },
    {
      icon: Globe,
      label: "Website",
      value: t.contact.website,
      href: `https://${t.contact.website}`,
    },
    {
      icon: MapPin,
      label: "Address",
      value: t.contact.address,
      href: undefined,
    },
  ];

  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="relative rounded-3xl bg-sky-bg dark:bg-surface-alt p-8 md:p-14 overflow-hidden">
        <Cloud className="absolute top-6 left-8 opacity-60" scale={0.7} />
        <Cloud className="absolute bottom-8 right-12 opacity-60" scale={0.9} />

        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>{t.contact.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              {t.contact.headline}
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted max-w-md">
              {t.contact.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button size="lg" asLink href={`mailto:${t.contact.email}`}>
                <Mail className="w-4 h-4" />
                {t.contact.cta}
              </Button>
              <Button size="lg" variant="secondary" asLink href="/files/cv.pdf">
                <Download className="w-4 h-4" />
                {t.contact.downloadCv}
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {items.map((item) => {
              const Icon = item.icon;
              const inner = (
                <>
                  <div className="inline-flex w-10 h-10 rounded-2xl bg-accent-soft text-accent items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-foreground break-all">
                    {item.value}
                  </div>
                </>
              );
              const baseClass =
                "rounded-2xl bg-white dark:bg-surface border border-line dark:border-border p-5 transition-all";
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`${baseClass} hover:border-accent hover:-translate-y-0.5`}
                >
                  {inner}
                </a>
              ) : (
                <div key={item.label} className={baseClass}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
