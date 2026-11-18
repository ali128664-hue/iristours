"use client";

/**
 * ArticleTools.tsx — small client helpers for blog articles:
 *  - ReadingProgress: thin orange bar under the navbar showing how far you've read
 *  - ShareButtons: WhatsApp, Facebook, X and copy-link
 */

import { useEffect, useState } from "react";
import { Link2, Check } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("article");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const done = Math.min(Math.max(-rect.top / (total > 0 ? total : 1), 0), 1);
      setProgress(done);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-[72px] z-40 h-[3px] bg-transparent">
      <div className="h-full origin-left bg-brand-orange" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const enc = encodeURIComponent;
  const btn = "flex h-11 w-11 items-center justify-center rounded-full bg-white text-text-primary ring-1 ring-slate-200 transition-colors hover:ring-slate-400";
  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 text-sm font-semibold text-text-primary">Share</span>
      <a className={btn} href={`https://wa.me/?text=${enc(`${title} ${url}`)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">
        <FaWhatsapp size={19} className="text-[#25D366]" />
      </a>
      <a className={btn} href={`https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
        <FaFacebookF size={16} className="text-[#1877F2]" />
      </a>
      <a className={btn} href={`https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X">
        <FaXTwitter size={16} />
      </a>
      <button
        type="button"
        className={btn}
        aria-label={copied ? "Link copied" : "Copy link"}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          } catch {
            /* clipboard blocked: ignore */
          }
        }}
      >
        {copied ? <Check size={18} className="text-emerald-600" /> : <Link2 size={18} />}
      </button>
    </div>
  );
}
