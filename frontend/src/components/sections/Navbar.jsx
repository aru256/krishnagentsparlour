import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { waLink, PHONE_TEL } from "@/lib/site";

const NAV = [
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "gallery", label: "Gallery" },
  { id: "reviews", label: "Reviews" },
  { id: "visit", label: "Visit Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/75 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="navbar-brand"
          className="flex items-center gap-3"
        >
          <span className="w-9 h-9 rounded-full border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] font-serif-display text-lg">
            K
          </span>
          <span className="font-serif-display text-lg md:text-xl tracking-wide">
            Krishna <span className="text-[#D4AF37]">Gents</span> Parlour
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              data-testid={`nav-${item.id}`}
              className="text-sm uppercase tracking-[0.18em] text-zinc-300 hover:text-[#D4AF37] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            data-testid="navbar-call-btn"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-200 hover:text-[#D4AF37] transition-colors"
          >
            <Phone size={16} />
            Call
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            data-testid="navbar-book-btn"
            className="bg-[#D4AF37] text-black uppercase text-xs tracking-[0.2em] font-semibold px-5 py-3 rounded-none hover:bg-[#C5A028] transition-colors"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          data-testid="navbar-menu-toggle"
          className="lg:hidden text-zinc-100 p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="navbar-mobile-menu"
          className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={close}
                className="text-sm uppercase tracking-[0.18em] text-zinc-200 hover:text-[#D4AF37]"
                data-testid={`mobile-nav-${item.id}`}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-3">
              <a
                href={`tel:${PHONE_TEL}`}
                onClick={close}
                className="flex-1 border border-[#D4AF37] text-[#D4AF37] text-center text-xs uppercase tracking-widest font-semibold px-5 py-3"
                data-testid="mobile-call-btn"
              >
                Call
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                onClick={close}
                className="flex-1 bg-[#D4AF37] text-black text-center text-xs uppercase tracking-widest font-semibold px-5 py-3"
                data-testid="mobile-book-btn"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
