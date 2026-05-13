import { SectionHeader } from "@/components/sections/Services";
import { waLink } from "@/lib/site";

const MENU = [
  {
    category: "Shaving",
    items: [
      { name: "Gillette Foam", price: "₹99" },
      { name: "Shahnaz Cream", price: "₹99" },
      { name: "Trimming & Setting", price: "₹99" },
    ],
  },
  {
    category: "Hair Cut",
    items: [
      { name: "Normal Cut", price: "₹99" },
      { name: "Low Fade", price: "₹99" },
      { name: "High Fade", price: "₹199" },
      { name: "Taper Fade", price: "₹199" },
    ],
  },
  {
    category: "Face Massage",
    items: [
      { name: "Shahnaz", price: "₹399" },
      { name: "Nature's", price: "₹399" },
      { name: "Shahnaz Gold", price: "₹499" },
      { name: "Lotus", price: "₹499" },
    ],
  },
  {
    category: "Scrub",
    items: [
      { name: "Shahnaz", price: "₹399" },
      { name: "Nature's", price: "₹399" },
      { name: "Lotus", price: "₹399" },
      { name: "Everyuth", price: "₹199" },
      { name: "Gold", price: "₹499" },
      { name: "Diamond", price: "₹699" },
    ],
  },
  {
    category: "Hair Treatment",
    items: [
      { name: "Loreal Wash Shampoo", price: "₹199" },
      { name: "Tresemme Wash Shampoo", price: "₹99" },
      { name: "Hair Spa Loreal", price: "₹599" },
      { name: "Hair Serum", price: "₹99" },
      { name: "Hair Spray", price: "₹99" },
    ],
  },
  {
    category: "Facial",
    items: [
      { name: "Shahnaz", price: "₹1349" },
      { name: "Shahnaz Gold", price: "₹1449" },
      { name: "Shahnaz Diamond", price: "₹1699" },
      { name: "O3+ Brighte Skin", price: "₹1399" },
      { name: "O3+", price: "₹2499" },
      { name: "Olivia Diamond", price: "₹1999" },
    ],
  },
  {
    category: "Piercing",
    items: [
      { name: "One Ear", price: "₹199" },
      { name: "Two Ear", price: "₹299" },
      { name: "Nose", price: "₹199" },
      { name: "One Middle Ear", price: "₹199" },
      { name: "Two Middle Ear", price: "₹299" },
      { name: "One Down & Middle", price: "₹299" },
      { name: "Two Down & Middle", price: "₹399" },
    ],
  },
  {
    category: "Face Bleach",
    items: [
      { name: "OXY Men", price: "₹499" },
      { name: "OXY Life", price: "₹399" },
      { name: "D tan O3+", price: "₹499" },
      { name: "D tan Raga", price: "₹399" },
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
