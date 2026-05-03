# Krishna Gents Parlour — Landing Page PRD

## Original Problem Statement
Build a conversion-focused single-page landing site for **Krishna Gents Parlour**, a men's grooming salon at Ram Chand Kurjisar Road, Jasidih, Deoghar, Jharkhand 814142. Phone +91 92798 57592. Hours Mon–Sat 9 AM–9 PM, Sunday closed. Services: haircuts, beard work, hair colour, facials, massage, mani/pedi. Pricing approx ₹50–₹800.

## User Choices (verbatim)
- Booking → **Simple WhatsApp click-to-chat (pre-filled message) — fastest, no backend**
- Vibe → **Modern dark luxe (charcoal + gold accents)**
- Admin dashboard → **No, just notifications via WhatsApp**
- Imagery → **Pick curated barbershop/grooming photos**
- Sections → **Pricing table + Testimonials + Offers banner**

## Architecture
- **Frontend only** — React 19 + Tailwind CSS + lucide-react icons
- **No backend logic** — template `/api/*` left untouched
- All conversion actions route to `https://wa.me/919279857592?text=...` or `tel:+919279857592`
- Google Maps embedded via iframe (no API key needed), styled with CSS dark filter
- Fonts: Playfair Display (display) + Outfit (body), loaded via Google Fonts in `public/index.html`

## Files
- `src/App.js`, `src/index.css`, `src/App.css`
- `src/pages/Landing.jsx`
- `src/lib/site.js` — phone, WhatsApp helper, address, image URLs
- `src/components/sections/{Navbar,Hero,OffersBanner,Services,Pricing,WhyChooseUs,Gallery,Testimonials,Visit,Footer,FloatingWhatsApp}.jsx`

## Implemented (Dec 2025)
- Sticky glassmorphism navbar with smooth-scroll to sections + mobile drawer
- Cinematic hero with charcoal/gold palette, two primary CTAs, stat strip
- Gold offers banner (`₹20 OFF first visit`) — clickable
- 6-card services grid with serif numbering, gold hover state
- Restaurant-menu-style pricing (4 categories, dotted leaders, gold prices)
- Why Choose Us bento (4 USPs)
- Curated 6-image gallery with grayscale → colour hover
- 3 testimonial cards with gold stars and 4.5/5 review pill
- Visit section: contact info, weekly hours table (Sunday highlighted), dark Google Maps embed, Plus Code overlay
- Footer with brand, contact, social placeholders, book CTA
- Floating WhatsApp button (bottom-left) with ping animation
- All interactive elements have unique `data-testid` attributes
- Frontend test report: **100% pass**, zero console errors

## Backlog
- **P1**: Add real Google Reviews/business photos once owner provides them
- **P1**: Lightbox / before-after pairs in gallery
- **P2**: Connect a real Instagram feed in the footer
- **P2**: Optional booking form + WhatsApp confirmation flow (deferred per user choice)
- **P2**: Add hi-IN / bn-IN translation toggle for local audiences
- **P2**: Schema.org `LocalBusiness` JSON-LD for SEO

## Next Action Items
- Replace stock photos with the salon's own interior + work shots
- Set up the real Instagram/Facebook URLs in `Footer.jsx`
- Consider enabling the form-based booking later for repeat-customer analytics
