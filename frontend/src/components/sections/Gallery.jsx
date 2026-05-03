import { GALLERY } from "@/lib/site";
import { SectionHeader } from "@/components/sections/Services";

export default function Gallery() {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="relative py-24 md:py-32 bg-[#0d0d0d] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Atmosphere"
          title="Inside the chair"
          sub="A look at the rooms, the work, and the small rituals that define a visit to Krishna Gents Parlour."
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {GALLERY.map((src, i) => {
            const span =
              i === 0
                ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:h-[520px]"
                : i === 3
                  ? "col-span-2 md:col-span-2 aspect-[2/1]"
                  : "aspect-square md:aspect-[4/5]";
            return (
              <div
                key={i}
                data-testid={`gallery-img-${i}`}
                className={`relative overflow-hidden bg-[#141414] ${span}`}
              >
                <img
                  src={src}
                  alt={`Krishna Gents Parlour gallery ${i + 1}`}
                  loading="lazy"
                  className="gallery-img w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
