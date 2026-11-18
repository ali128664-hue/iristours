/**
 * GuideBody.tsx — turns the light markdown used in src/data/guides into HTML.
 *
 * Supports: paragraphs, "### " sub-headings, "- " bullets, "1. " steps,
 * "> " tip boxes, "| a | b |" tables, **bold**, [text](link) and live price
 * tokens such as {{rate:toyota-yaris}} (read from src/data/fleet.json).
 *
 * Internal links use Next <Link>; external links open in a new tab with
 * rel="noopener" so readers don't lose the page.
 */

import React from "react";
import Link from "next/link";
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
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/^\s*(###|>|-|\d+\.)\s+/gm, "")
    .replace(/\s*\n+\s*/g, " ")
    .trim();
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
                  <td key={ci}>{inline(c, `td${k}-${ri}-${ci}`)}</td>
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
    if ((m = line.match(/^###\s+(.*)$/))) {
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
