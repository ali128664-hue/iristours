/**
 * GuideBody.tsx — turns the light markdown used in src/data/guides into HTML.
 *
 * Supports: paragraphs, "### " sub-headings, "- " bullets, "1. " steps,
 * "> " tip boxes, "| a | b |" tables, **bold**, [text](link) and live price
 * tokens such as {{rate:toyota-yaris}} (read from src/data/fleet.json).
 *
 * Visual blocks (one per line):
 *   ![Alt text](/blog/photo.jpg "Caption")         → full-width photo
 *   ::cars toyota-fortuner, toyota-land-cruiser-prado → car cards with photo, rate and links
 *   ::route Lahore > (M-2 motorway, 4.5 h) > Islamabad > (Expressway, 2 h) > Murree
 *                                                   → route graphic; (…) = the drive between stops
 *   ::stats 375 km = Lahore to Islamabad | 4.5 h = Driving time
 *                                                   → big-number tiles
 *
 * Internal links use Next <Link>; external links open in a new tab with
 * rel="noopener" so readers don't lose the page.
 */

import React from "react";
import Link from "next/link";
import Image from "next/image";
import fleetData from "@/data/fleet.json";

const FIELD: Record<string, "local" | "interCity" | "weekly" | "monthly" | "securityDeposit"> = {
  rate: "local",
  city: "interCity",
  week: "weekly",
  month: "monthly",
  deposit: "securityDeposit",
};

/** Replace {{rate:slug}}-style tokens with "Rs. 7,000" */
export function fillPrices(text: string): string {
  return text.replace(/\{\{(rate|city|week|month|deposit):([a-z0-9-]+)\}\}/g, (_, kind: string, slug: string) => {
    const car = fleetData.find((v) => v.slug === slug);
    const value = car ? (car.rent as Record<string, number | string | undefined>)[FIELD[kind]] : undefined;
    return typeof value === "number" ? `Rs. ${value.toLocaleString("en-US")}` : "on request";
  });
}

/** Plain text (for schema / meta): strips markdown and fills prices */
export function plainText(text: string): string {
  return fillPrices(text)
    .replace(/^\s*(!\[.*|::(cars|route|stats).*)$/gm, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/^\s*(###|>|-|\d+\.)\s+/gm, "")
    .replace(/\s*\n+\s*/g, " ")
    .trim();
}

/* ─── Visual blocks ─────────────────────────────────────────────────────── */

function Figure({ alt, src, caption }: { alt: string; src: string; caption?: string }) {
  return (
    <figure className="!my-8">
      <span className="relative block aspect-[16/9] overflow-hidden rounded-[1.4rem] bg-slate-200">
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
      </span>
      {caption && <figcaption className="mt-2.5 text-sm text-slate-500">{caption}</figcaption>}
    </figure>
  );
}

function CarCards({ slugs }: { slugs: string[] }) {
  const cars = slugs.map((s) => fleetData.find((v) => v.slug === s)).filter((v): v is (typeof fleetData)[number] => Boolean(v));
  if (!cars.length) return null;
  return (
    <div className="!my-8 grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3">
      {cars.map((v) => {
        const cutout = /\.png$/i.test(v.images.thumbnail);
        return (
          <div key={v.slug} className="flex flex-col overflow-hidden rounded-[1.3rem] bg-white shadow-lift ring-1 ring-slate-200/80">
            <Link href={`/fleet/${v.slug}`} className={`plain relative block aspect-[16/10] ${cutout ? "car-stage" : "bg-slate-100"}`} aria-label={v.name}>
              <Image src={v.images.thumbnail} alt="" fill sizes="(max-width: 640px) 100vw, 300px" className={cutout ? "object-contain px-5 pb-2 pt-6" : "object-cover"} />
            </Link>
            <div className="flex flex-1 flex-col p-3 sm:p-4">
              <Link href={`/fleet/${v.slug}`} className="plain font-display text-[15px] font-bold leading-tight text-text-primary hover:text-accent-primary sm:text-lg">
                {v.name}
              </Link>
              <span className="mt-1 text-sm text-slate-500">
                {v.seats} seats · {v.category}
              </span>
              <span className="mb-3 mt-2 text-xs text-slate-500 sm:mt-3 sm:text-sm">
                From <strong className="text-base text-text-primary sm:text-lg">Rs. {v.rent.local.toLocaleString("en-US")}</strong> / day
              </span>
              <Link
                href={`/fleet/${v.slug}`}
                className="plain mt-auto translate-y-0 rounded-full bg-brand-ink py-2.5 text-center text-xs font-semibold sm:text-sm text-white hover:bg-brand-orange hover:text-brand-ink transition-colors"
              >
                Rates & booking
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Route({ spec }: { spec: string }) {
  const parts = spec.split(">").map((p) => p.trim()).filter(Boolean);
  return (
    <div className="!my-8 rounded-[1.4rem] bg-brand-ink p-5 text-white md:p-7" role="group" aria-label="Route">
      <div className="flex flex-col gap-0 md:flex-row md:items-center md:gap-2 md:overflow-x-auto">
        {parts.map((p, i) => {
          const leg = /^\(.*\)$/.test(p);
          return leg ? (
            <div key={i} className="flex items-center gap-3 py-2 pl-[11px] md:min-w-[110px] md:flex-1 md:flex-col md:gap-1 md:py-0 md:pl-0">
              <span aria-hidden="true" className="h-8 w-0.5 bg-brand-orange/60 md:h-0.5 md:w-full" />
              <span className="text-sm text-white/70 md:text-center md:text-xs">{p.slice(1, -1)}</span>
            </div>
          ) : (
            <div key={i} className="flex flex-shrink-0 items-center gap-3">
              <span aria-hidden="true" className="h-6 w-6 flex-shrink-0 rounded-full border-[3px] border-brand-orange bg-brand-ink" />
              <span className="font-display text-lg font-bold">{p}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Stats({ spec }: { spec: string }) {
  const items = spec.split("|").map((x) => x.split("=").map((y) => y.trim()));
  return (
    <div className="!my-8 grid grid-cols-2 gap-3 md:grid-cols-4">
      {items.map(([big, label], i) => (
        <div key={i} className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
          <span className="font-display block text-2xl font-bold text-text-primary md:text-3xl">{big}</span>
          <span className="mt-1 block text-sm text-slate-500">{label}</span>
        </div>
      ))}
    </div>
  );
}

function inline(text: string, key: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      out.push(<strong key={`${key}-${i++}`}>{inline(m[1], `${key}-b${i}`)}</strong>);
    } else {
      const href = m[3];
      const label = m[2];
      out.push(
        href.startsWith("/") || href.startsWith("#") ? (
          <Link key={`${key}-${i++}`} href={href}>
            {label}
          </Link>
        ) : (
          <a key={`${key}-${i++}`} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        )
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function GuideBody({ text }: { text: string }) {
  const lines = fillPrices(text).split("\n");
  const blocks: React.ReactNode[] = [];
  let para: string[] = [];
  let list: { type: "ul" | "ol"; items: string[] } | null = null;
  let table: string[][] | null = null;
  let k = 0;

  const flush = () => {
    if (para.length) {
      blocks.push(<p key={k++}>{inline(para.join(" "), `p${k}`)}</p>);
      para = [];
    }
    if (list) {
      const items = list.items.map((it, i) => <li key={i}>{inline(it, `l${k}-${i}`)}</li>);
      blocks.push(list.type === "ul" ? <ul key={k++}>{items}</ul> : <ol key={k++}>{items}</ol>);
      list = null;
    }
    if (table) {
      const [head, ...rows] = table;
      blocks.push(
        <table key={k++}>
          <thead>
            <tr>
              {head.map((c, i) => (
                <th key={i} scope="col">
                  {inline(c, `th${k}-${i}`)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri}>
                {r.map((c, ci) => (
                  <td key={ci} className={/^(Rs\.|\d[\d.,–-]*\s?(h|min|km)?$)/.test(c) ? "whitespace-nowrap" : undefined}>
                    {inline(c, `td${k}-${ri}-${ci}`)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
      table = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flush();
      continue;
    }
    if (line.startsWith("|")) {
      if (para.length || list) flush();
      const cells = line.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      if (cells.every((c) => /^:?-{2,}:?$/.test(c))) continue; // markdown separator row
      table = table || [];
      table.push(cells);
      continue;
    }
    if (table) flush();
    let m: RegExpMatchArray | null;
    if ((m = line.match(/^!\[([^\]]*)\]\((\S+?)(?:\s+"([^"]*)")?\)$/))) {
      flush();
      blocks.push(<Figure key={k++} alt={m[1]} src={m[2]} caption={m[3]} />);
    } else if ((m = line.match(/^::cars\s+(.+)$/))) {
      flush();
      blocks.push(<CarCards key={k++} slugs={m[1].split(",").map((x) => x.trim())} />);
    } else if ((m = line.match(/^::route\s+(.+)$/))) {
      flush();
      blocks.push(<Route key={k++} spec={m[1]} />);
    } else if ((m = line.match(/^::stats\s+(.+)$/))) {
      flush();
      blocks.push(<Stats key={k++} spec={m[1]} />);
    } else if ((m = line.match(/^###\s+(.*)$/))) {
      flush();
      blocks.push(<h3 key={k++}>{inline(m[1], `h${k}`)}</h3>);
    } else if ((m = line.match(/^>\s+(.*)$/))) {
      flush();
      blocks.push(
        <blockquote key={k++} className="not-italic rounded-r-xl bg-brand-orange/[0.07] py-3 pr-4">
          {inline(m[1], `q${k}`)}
        </blockquote>
      );
    } else if ((m = line.match(/^[-•]\s+(.*)$/))) {
      if (para.length || (list && list.type !== "ul")) flush();
      list = list || { type: "ul", items: [] };
      list.items.push(m[1]);
    } else if ((m = line.match(/^\d+\.\s+(.*)$/))) {
      if (para.length || (list && list.type !== "ol")) flush();
      list = list || { type: "ol", items: [] };
      list.items.push(m[1]);
    } else {
      if (list) flush();
      para.push(line);
    }
  }
  flush();
  return <>{blocks}</>;
}
