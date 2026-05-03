import { SectionHeader } from "@/components/sections/Services";
import { waLink } from "@/lib/site";

const MENU = [
  {
    category: "Hair",
    items: [
      { name: "Classic Haircut", price: "₹80" },
      { name: "Signature Style Cut", price: "₹120" },
      { name: "Premium Stylist Cut", price: "₹150" },
      { name: "Hair Wash & Blow-Dry", price: "₹100" },
      { name: "Hair Colour (Touch-up)", price: "₹350+" },
    ],
  },
  {
    category: "Beard & Shave",
    items: [
      { name: "Clean Shave (Hot Towel)", price: "₹80" },
      { name: "Beard Trim & Shape", price: "₹60" },
      { name: "Beard Sculpting + Oil", price: "₹100" },
      { name: "Moustache Styling", price: "₹40" },
    ],
  },
  {
    category: "Face & Skin",
    items: [
      { name: "Express Cleanup", price: "₹200" },
      { name: "Signature Facial", price: "₹350" },
      { name: "Premium Glow Facial", price: "₹500" },
      { name: "De-Tan Treatment", price: "₹400" },
    ],
  },
  {
    category: "Combos",
    items: [
      { name: "Haircut + Beard", price: "₹180" },
      { name: "Haircut + Beard + Cleanup", price: "₹400" },
      { name: "Wedding / Occasion Package", price: "₹800" },
      { name: "Head Massage Add-on", price: "₹100" },
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="relative py-24 md:py-32 bg-[#0d0d0d] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Menu"
          title="Honest, transparent pricing"
          sub="No surprises at the counter. Every service below is approximate — final price depends on the time, products and stylist booked."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {MENU.map((group, gi) => (
            <div key={group.category} data-testid={`pricing-group-${gi}`}>
              <div className="flex items-baseline justify-between border-b border-[#D4AF37]/30 pb-3 mb-6">
                <h3 className="font-serif-display text-2xl md:text-3xl text-white">
                  {group.category}
                </h3>
                <span className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
                  Starting from
                </span>
              </div>
              <ul className="space-y-5">
                {group.items.map((item, ii) => (
                  <li
                    key={ii}
                    data-testid={`pricing-item-${gi}-${ii}`}
                    className="flex items-end"
                  >
                    <span className="text-zinc-200 text-base md:text-lg">
                      {item.name}
                    </span>
                    <span className="leader" />
                    <span className="font-serif-display text-[#D4AF37] text-lg md:text-xl">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10 pt-10">
          <p className="text-zinc-400 max-w-xl text-sm md:text-base">
            Want a custom package or have questions about a specific service?
            Message us — we'll quote you back within minutes during opening hours.
          </p>
          <a
            href={waLink(
              "Hi Krishna Gents Parlour, I have a question about your pricing."
            )}
            target="_blank"
            rel="noreferrer"
            data-testid="pricing-whatsapp-btn"
            className="bg-[#D4AF37] text-black uppercase text-xs tracking-[0.22em] font-semibold px-8 py-4 hover:bg-[#C5A028] transition-colors whitespace-nowrap"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
