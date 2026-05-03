import { Sparkles } from "lucide-react";
import { waLink } from "@/lib/site";

export default function OffersBanner() {
  return (
    <section data-testid="offers-banner" className="relative z-10 -mt-1">
      <a
        href={waLink(
          "Hi Krishna Gents Parlour, I'd like to claim the ₹20 OFF first-visit offer."
        )}
        target="_blank"
        rel="noreferrer"
        className="group block bg-[#D4AF37] text-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5 flex flex-col md:flex-row items-center justify-center md:justify-between gap-3">
          <div className="flex items-center gap-3">
            <Sparkles size={18} />
            <span className="font-serif-display text-base md:text-lg">
              ₹20 OFF your first visit
            </span>
            <span className="hidden md:inline text-sm/6 opacity-80">
              · Mention this offer at the counter
            </span>
          </div>
          <span className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold underline-offset-4 group-hover:underline">
            Claim on WhatsApp →
          </span>
        </div>
      </a>
    </section>
  );
}
