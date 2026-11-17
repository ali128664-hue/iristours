/**
 * Section.tsx — shared building blocks so every page has the same spacing,
 * heading style and alignment.
 *
 *  <Section>               consistent vertical spacing + container
 *  <SectionHeading>        left-aligned title, optional intro and a link on the right
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

export function Section({
  children,
  className,
  tone = "plain",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "plain" | "white" | "ink";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={clsx(
        "py-14 md:py-20 scroll-mt-24",
        tone === "white" && "bg-white border-y border-border-primary",
        tone === "ink" && "bg-brand-ink text-white",
        tone === "plain" && "bg-bg-primary",
        className
      )}
    >
      <div className="container mx-auto px-5 md:px-12">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  intro,
  action,
  tone = "light",
  as: Tag = "h2",
}: {
  title: string;
  intro?: React.ReactNode;
  action?: { href: string; label: string };
  tone?: "light" | "dark";
  as?: "h1" | "h2";
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8 md:mb-10">
      <div className="max-w-2xl">
        <Tag className={clsx("text-3xl md:text-[2.6rem]", tone === "dark" ? "text-white" : "text-text-primary")}>{title}</Tag>
        {intro && (
          <p className={clsx("mt-3 text-base md:text-lg leading-relaxed", tone === "dark" ? "text-white/70" : "text-text-secondary")}>
            {intro}
          </p>
        )}
      </div>
      {action && (
        <Link
          href={action.href}
          className={clsx(
            "group inline-flex items-center gap-2 self-start md:self-auto whitespace-nowrap font-semibold",
            tone === "dark" ? "text-brand-orange hover:text-white" : "text-text-primary hover:text-accent-primary"
          )}
        >
          {action.label}
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
