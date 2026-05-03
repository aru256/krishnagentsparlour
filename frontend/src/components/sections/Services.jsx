import { Scissors, Sparkles, Droplet, Leaf, Brush, Hand } from "lucide-react";

const SERVICES = [
  {
    icon: Scissors,
    title: "Signature Haircut",
    desc: "Modern fades, classic crops, scissor work and consultation tailored to your face shape.",
  },
  {
    icon: Brush,
    title: "Beard Sculpting",
    desc: "Precision trim, edge-up, hot-towel finish and beard oil for a sharp, polished line.",
  },
  {
    icon: Droplet,
    title: "Colour & Highlights",
    desc: "Greys covered. Subtle tones, fashion shades or full transformations using trusted brands.",
  },
  {
    icon: Leaf,
    title: "Facial & Cleanup",
    desc: "Deep cleansing, exfoliation and rejuvenating treatments for clear, refreshed skin.",
  },
  {
    icon: Sparkles,
    title: "Head & Shoulder Massage",
    desc: "Tension-melting champi to close the session — herbal oils, full pressure-point routine.",
  },
  {
    icon: Hand,
    title: "Manicure & Pedicure",
    desc: "Hand and foot care: trim, file, scrub, and a smooth, clean finish that lasts.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 md:py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Every detail, considered"
          sub="A complete grooming experience designed around the modern man — from a five-minute beard line to a wedding-ready package."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, sub, align = "left" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <div
        className={`flex items-center gap-3 mb-5 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-10 bg-[#D4AF37]" />
        <span className="text-[10px] md:text-xs uppercase tracking-[0.32em] text-[#D4AF37]">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-serif-display text-4xl md:text-5xl text-white tracking-tight leading-[1.05]">
        {title}
      </h2>
      {sub && (
        <p className="mt-5 text-zinc-400 text-base md:text-lg leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}

function ServiceCard({ icon: Icon, title, desc, index }) {
  return (
    <div
      data-testid={`service-card-${index}`}
      className="group bg-[#0d0d0d] p-8 md:p-10 transition-all duration-300 hover:bg-[#141414] relative"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="w-14 h-14 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37] transition-colors">
          <Icon size={22} strokeWidth={1.4} />
        </div>
        <span className="text-zinc-700 font-serif-display text-3xl">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="font-serif-display text-2xl text-white">{title}</h3>
      <p className="mt-3 text-zinc-400 text-[15px] leading-relaxed">{desc}</p>
    </div>
  );
}
