import { Star, Quote } from "lucide-react";
import { TESTIMONIAL_FACES } from "@/lib/site";
import { SectionHeader } from "@/components/sections/Services";

const REVIEWS = [
  {
    name: "Rohit Kumar",
    role: "Local Guide · Deoghar",
    text: "Best salon in Jasidih, hands down. Very professional, clean and the haircut was exactly what I asked for. Pricing is super reasonable.",
    rating: 5,
  },
  {
    name: "Ankit Sharma",
    role: "Regular client · 3 years",
    text: "I've been going to Krishna Gents Parlour for years. Always consistent. Beard trim is on point and the head massage at the end is the best part.",
    rating: 5,
  },
  {
    name: "Vikash Yadav",
    role: "Wedding client",
    text: "Got my full wedding grooming done here — haircut, beard, facial. Felt looked-after the entire time. Hygienic, friendly, no rush. Highly recommend.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      data-testid="testimonials-section"
      className="relative py-24 md:py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Client Stories"
              title="Loved by the men of Jasidih"
              sub="Real words from regulars who trust us with their look — visit after visit."
            />
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="flex items-center gap-4 border border-white/10 px-6 py-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-[#D4AF37] fill-[#D4AF37]"
                  />
                ))}
              </div>
              <div>
                <div className="font-serif-display text-xl text-white leading-none">
                  4.5 / 5
                </div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-zinc-500 mt-1">
                  60+ Google Reviews
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              data-testid={`testimonial-${i}`}
              className="bg-[#0d0d0d] border border-white/5 p-8 md:p-10 hover:border-[#D4AF37]/30 transition-colors flex flex-col"
            >
              <Quote size={22} className="text-[#D4AF37] mb-6" />
              <p className="text-zinc-200 text-[16px] md:text-[17px] leading-relaxed flex-1">
                "{r.text}"
              </p>
              <div className="flex mt-6">
                {[...Array(r.rating)].map((_, k) => (
                  <Star
                    key={k}
                    size={14}
                    className="text-[#D4AF37] fill-[#D4AF37]"
                  />
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4 pt-6 border-t border-white/5">
                <img
                  src={TESTIMONIAL_FACES[i % TESTIMONIAL_FACES.length]}
                  alt={r.name}
                  className="w-12 h-12 rounded-full object-cover grayscale"
                />
                <div>
                  <div className="font-serif-display text-lg text-white leading-none">
                    {r.name}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 mt-1">
                    {r.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
