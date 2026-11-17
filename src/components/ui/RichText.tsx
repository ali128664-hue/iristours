/**
 * RichText.tsx — renders the light markdown used in fleet.json / serviceAreas.json
 * descriptions (**bold**, blank-line paragraphs and "- " bullet lists) as real HTML,
 * so visitors never see raw ** symbols. No external dependency, safe (no raw HTML).
 */

import React from "react";

/** Plain-text version for meta tags / JSON-LD schema */
export function stripMarkdown(text: string): string {
  return (text || "")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/^\s*[-•]\s+/gm, "")
    .replace(/\s*\n+\s*/g, " ")
    .trim();
}

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  return text.split(/(\*\*.+?\*\*)/g).filter(Boolean).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") && part.length > 4 ? (
      <strong key={`${keyPrefix}-${i}`} className="font-bold text-text-primary">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <React.Fragment key={`${keyPrefix}-${i}`}>{part}</React.Fragment>
    )
  );
}

export default function RichText({ text, className = "" }: { text: string; className?: string }) {
  const blocks = (text || "").split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);

  return (
    <div className={`space-y-4 ${className}`}>
      {blocks.map((block, bi) => {
        const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
        const out: React.ReactNode[] = [];
        let bullets: string[] = [];

        const flushBullets = (key: string) => {
          if (bullets.length === 0) return;
          out.push(
            <ul key={key} className="space-y-2 list-none pl-0">
              {bullets.map((b, i) => (
                <li key={i} className="leading-relaxed">
                  {renderInline(b, `${key}-${i}`)}
                </li>
              ))}
            </ul>
          );
          bullets = [];
        };

        lines.forEach((line, li) => {
          const bullet = line.match(/^[-•]\s+(.*)$/);
          if (bullet) {
            bullets.push(bullet[1]);
          } else {
            flushBullets(`ul-${bi}-${li}`);
            out.push(
              <p key={`p-${bi}-${li}`} className="leading-relaxed">
                {renderInline(line, `p-${bi}-${li}`)}
              </p>
            );
          }
        });
        flushBullets(`ul-${bi}-end`);

        return <React.Fragment key={bi}>{out}</React.Fragment>;
      })}
    </div>
  );
}
