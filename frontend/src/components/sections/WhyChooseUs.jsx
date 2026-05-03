import { Award, ShieldCheck, Sparkles, MapPin } from "lucide-react";

const ITEMS = [
  {
    icon: Award,
    title: "Experienced barbers",
    desc: "Years of hands-on craft, trained in modern fades, classic shapes and signature beard work.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene first",
    desc: "Sterilised tools, single-use blades, fresh capes and towels for every single client.",
  },
  {
    icon: Sparkles,
    title: "Premium products",
    desc: "Only trusted brands for hair colour, skincare and grooming — no shortcuts on quality.",
  },
  {
    icon: MapPin,
    title: "Easy to find",
    desc: "Right on Ram Chand Kurjisar Road, Jasidih — convenient main-road access with parking.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      data-testid="why-section"
      className="relative py-24 md:py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.32em] text-[#D4AF37]">
              Why Krishna
            </span>
          </div>
          <h2 className="font-serif-display text-4xl md:text-5xl text-white leading-[1.05]">
            A salon that earns
            <br />
            its <span className="text-[#D4AF37]">regulars.</span>
          </h2>
          <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed">
            Most of our clients have been coming back for years. The reason
            isn't a flashy interior — it's the small things, done right, every
            single visit.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {ITEMS.map((it, i) => (
            <div
              key={i}
              data-testid={`why-item-${i}`}
              className="bg-[#0d0d0d] p-8 hover:bg-[#141414] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-5">
                <it.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif-display text-xl text-white">
                {it.title}
              </h3>
              <p className="mt-2 text-zinc-400 text-[15px] leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
