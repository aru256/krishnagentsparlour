import { ArrowRight, Phone } from "lucide-react";
import { waLink, PHONE_TEL, HERO_IMG } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100svh] flex items-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Premium men's grooming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(212,175,55,0.18),_transparent_55%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28 pt-32">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-[#D4AF37]" />
            <span className="text-xs md:text-sm uppercase tracking-[0.32em] text-[#D4AF37]">
              Est. Jasidih · Deoghar
            </span>
          </div>

          <h1
            data-testid="hero-heading"
            className="font-serif-display text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight"
          >
            The art of <em className="text-[#D4AF37] not-italic italic-soft">grooming</em>,
            <br />
            crafted for the
            <br />
            modern gentleman.
          </h1>

          <p className="mt-8 max-w-xl text-zinc-300/90 text-base md:text-lg leading-relaxed">
            Sharp haircuts. Precision beard work. Calm, hygienic rooms.
            Krishna Gents Parlour has shaped Jasidih's most discerning clients
            for years — and now we're ready for you.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-whatsapp-btn"
              className="group inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-black uppercase text-xs md:text-sm tracking-[0.22em] font-semibold px-8 py-5 hover:bg-[#C5A028] transition-all hover:-translate-y-0.5"
            >
              Book via WhatsApp
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              data-testid="hero-call-btn"
              className="inline-flex items-center justify-center gap-3 border border-[#D4AF37]/70 text-[#D4AF37] uppercase text-xs md:text-sm tracking-[0.22em] font-semibold px-8 py-5 hover:bg-[#D4AF37]/10 transition-all"
            >
              <Phone size={16} />
              +91 92798 57592
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-white/10 pt-6">
            <Stat label="Years Serving" value="15+" />
            <Stat label="Happy Clients" value="80+" />
            <Stat label="Google Rating" value="4.7★" />
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-zinc-500 z-10">
        <span>Scroll</span>
        <span className="block w-12 h-px bg-zinc-600" />
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="font-serif-display text-2xl md:text-3xl text-white">
        {value}
      </div>
      <div className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.22em] text-zinc-500">
        {label}
      </div>
    </div>
  );
}
