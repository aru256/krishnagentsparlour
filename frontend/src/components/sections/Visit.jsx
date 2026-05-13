import { MapPin, Phone, Clock, Navigation, Star, Info as InfoIcon, ExternalLink, CornerUpRight } from "lucide-react";
import {
  ADDRESS,
  PHONE_DISPLAY,
  PHONE_TEL,
  MAPS_LINK,
  MAPS_EMBED,
  waLink,
} from "@/lib/site";

const HOURS = [
  ["Monday", "9:00 AM – 9:00 PM"],
  ["Tuesday", "9:00 AM – 9:00 PM"],
  ["Wednesday", "9:00 AM – 9:00 PM"],
  ["Thursday", "Closed"],
  ["Friday", "9:00 AM – 9:00 PM"],
  ["Saturday", "9:00 AM – 9:00 PM"],
  ["Sunday", "9:00 AM – 9:00 PM"],
];

export default function Visit() {
  return (
    <section
      id="visit"
      data-testid="visit-section"
      className="relative py-24 md:py-32 bg-[#0d0d0d] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.32em] text-[#D4AF37]">
              Visit Us
            </span>
          </div>
          <h2 className="font-serif-display text-4xl md:text-5xl text-white leading-[1.05]">
            Find your seat,
            <br />
            we'll handle the rest.
          </h2>

          <div className="mt-10 space-y-7">
            <Info
              icon={MapPin}
              label="Address"
              value={ADDRESS}
              cta={{
                href: MAPS_LINK,
                text: "Get Directions",
                testid: "directions-btn",
                external: true,
              }}
            />
            <Info
              icon={Phone}
              label="Phone"
              value={PHONE_DISPLAY}
              cta={{
                href: `tel:${PHONE_TEL}`,
                text: "Call now",
                testid: "visit-call-btn",
              }}
            />
            <Info
              icon={Clock}
              label="Hours"
              value="Mon–Wed, Fri–Sun · 9:00 AM – 9:00 PM"
              extra="Thursday Closed"
            />
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <h3 className="font-serif-display text-xl text-white mb-4">
              Weekly schedule
            </h3>
            <ul className="space-y-3">
              {HOURS.map(([day, time]) => {
                const closed = time === "Closed";
                return (
                  <li
                    key={day}
                    className="flex items-center justify-between text-sm md:text-base"
                  >
                    <span
                      className={
                        closed ? "text-[#D4AF37] font-semibold" : "text-zinc-300"
                      }
                    >
                      {day}
                    </span>
                    <span
                      className={
                        closed
                          ? "text-[#D4AF37] uppercase tracking-widest text-xs"
                          : "text-zinc-500"
                      }
                    >
                      {time}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            data-testid="visit-book-btn"
            className="mt-10 inline-flex items-center gap-3 bg-[#D4AF37] text-black uppercase text-xs tracking-[0.22em] font-semibold px-8 py-4 hover:bg-[#C5A028] transition-colors"
          >
            Book on WhatsApp
            <Navigation size={14} />
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="relative h-[420px] md:h-full min-h-[420px] border border-white/10 overflow-hidden bg-[#0a0a0a]">
            <iframe
              data-testid="visit-map"
              title="Krishna Gents Parlour location"
              src={MAPS_EMBED}
              className="w-full h-full map-darken"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="absolute top-4 left-4 bg-black/90 backdrop-blur border border-white/10 px-5 py-4 min-w-[280px]">
              <div className="flex justify-between items-start mb-2">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">
                  Plus Code
                </div>
                <div className="flex gap-2">
                  <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-zinc-400 hover:text-white">
                    <ExternalLink size={14} />
                  </a>
                  <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-zinc-400 hover:text-white">
                    <CornerUpRight size={14} />
                  </a>
                </div>
              </div>
              <div className="font-serif-display text-white text-lg mb-3">
                GM62+RMW · Jasidih
              </div>
              <div className="flex items-center gap-1.5 text-sm text-zinc-400 border-t border-white/10 pt-3">
                <span>4.7</span>
                <Star size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
                <span className="underline underline-offset-2 hover:text-white cursor-pointer transition-colors">(84)</span>
                <InfoIcon size={14} className="ml-1 opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, label, value, cta, extra }) {
  return (
    <div className="flex gap-5">
      <div className="w-11 h-11 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-1">
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <div className="flex-1">
        <div className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
          {label}
        </div>
        <div className="text-zinc-100 text-base md:text-lg mt-1">{value}</div>
        {extra && (
          <div className="text-[#D4AF37] text-sm mt-1 uppercase tracking-widest">
            {extra}
          </div>
        )}
        {cta && (
          <a
            href={cta.href}
            target={cta.external ? "_blank" : undefined}
            rel={cta.external ? "noreferrer" : undefined}
            data-testid={cta.testid}
            className="inline-block mt-3 text-[#D4AF37] text-xs uppercase tracking-[0.22em] border-b border-[#D4AF37]/40 hover:border-[#D4AF37] pb-1"
          >
            {cta.text} →
          </a>
        )}
      </div>
    </div>
  );
}
