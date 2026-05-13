import { Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, ADDRESS, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#070707] border-t border-white/5 pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] font-serif-display text-lg">
              K
            </span>
            <span className="font-serif-display text-xl tracking-wide">
              Krishna <span className="text-[#D4AF37]">Gents</span> Parlour
            </span>
          </div>
          <p className="mt-5 text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
            Premium grooming for the modern man — based in Jasidih, Deoghar.
            Walk-ins welcome. Bookings encouraged on WhatsApp during peak hours.
          </p>
          <div className="mt-6 flex gap-3">
            <SocialLink href="#" Icon={Instagram} label="Instagram" />
            <SocialLink href="#" Icon={Facebook} label="Facebook" />
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-[10px] uppercase tracking-[0.32em] text-[#D4AF37] mb-5">
            Visit
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-start gap-3 text-zinc-300 hover:text-[#D4AF37] transition-colors"
          >
            <Phone size={16} className="mt-1 shrink-0" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <div className="mt-4 flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
            <MapPin size={16} className="mt-1 shrink-0 text-[#D4AF37]" />
            <span>{ADDRESS}</span>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="text-[10px] uppercase tracking-[0.32em] text-[#D4AF37] mb-5">
            Hours
          </div>
          <p className="text-zinc-300 text-sm">Mon–Wed, Fri–Sun</p>
          <p className="text-zinc-500 text-sm">9:00 AM – 9:00 PM</p>
          <p className="mt-3 text-[#D4AF37] uppercase text-xs tracking-widest">
            Thursday Closed
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="text-[10px] uppercase tracking-[0.32em] text-[#D4AF37] mb-5">
            Reserve
          </div>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            data-testid="footer-book-btn"
            className="inline-block bg-[#D4AF37] text-black uppercase text-xs tracking-[0.22em] font-semibold px-6 py-3 hover:bg-[#C5A028] transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-zinc-600">
        <p>© {new Date().getFullYear()} Krishna Gents Parlour. All rights reserved.</p>
        <p className="font-serif-display tracking-wider">
          Crafted with care by Devz Corner Inc. · Jasidih, Jharkhand
        </p>
      </div>
    </footer>
  );
}

function SocialLink({ href, Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors"
    >
      <Icon size={16} />
    </a>
  );
}
