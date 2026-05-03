import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import OffersBanner from "@/components/sections/OffersBanner";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Visit from "@/components/sections/Visit";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/sections/FloatingWhatsApp";

export default function Landing() {
  return (
    <main
      data-testid="landing-page"
      className="bg-[#0a0a0a] text-zinc-100 relative"
    >
      <Navbar />
      <Hero />
      <OffersBanner />
      <Services />
      <Pricing />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Visit />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
