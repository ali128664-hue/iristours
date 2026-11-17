import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="bg-bg-primary">
      <div className="container mx-auto flex min-h-[70vh] flex-col items-start justify-center px-5 py-16 md:px-12">
        <p className="font-semibold text-accent-primary">Error 404</p>
        <h1 className="mt-3 max-w-2xl text-4xl md:text-6xl">This page took a wrong turn.</h1>
        <p className="mt-4 max-w-xl text-lg text-text-secondary">
          The page you are looking for has moved or no longer exists. Try the fleet or the homepage, or message us and we will help.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/fleet" className="inline-flex items-center justify-center rounded-full bg-brand-orange px-7 py-3.5 font-semibold text-brand-ink hover:bg-brand-ink hover:text-white transition-colors">
            See cars and rates
          </Link>
          <Link href="/" className="inline-flex items-center justify-center rounded-full border border-border-primary px-7 py-3.5 font-semibold text-text-primary hover:border-slate-400 transition-colors">
            Go to homepage
          </Link>
          <a href={whatsappLink("Hi Iris Tours! I could not find a page on your website.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 font-semibold text-text-primary hover:text-accent-primary">
            <FaWhatsapp size={18} className="text-[#25D366]" />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
