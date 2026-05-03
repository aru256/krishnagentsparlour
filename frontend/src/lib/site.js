// Shared site constants
export const PHONE_DISPLAY = "+91 92798 57592";
export const PHONE_TEL = "+919279857592";
export const WHATSAPP_NUMBER = "919279857592";

export const WHATSAPP_DEFAULT_MSG =
  "Hi Krishna Gents Parlour, I would like to book an appointment.";

export const waLink = (msg = WHATSAPP_DEFAULT_MSG) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const ADDRESS =
  "Ram Chand Kurjisar Road, Jasidih, Deoghar, Jharkhand 814142";

export const MAPS_LINK =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Krishna Gents Parlour, Jasidih, Deoghar, Jharkhand");

// Embed for Google Maps (no API key required)
export const MAPS_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Krishna Gents Parlour, Jasidih, Deoghar, Jharkhand 814142") +
  "&output=embed";

export const HERO_IMG =
  "https://images.pexels.com/photos/18702143/pexels-photo-18702143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400";

export const GALLERY = [
  "https://images.unsplash.com/photo-1520338661084-680395057c93?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  "https://images.unsplash.com/photo-1672761431773-ae6e2d054493?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  "https://images.unsplash.com/photo-1651923099196-50b2b4d3c20e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  "https://images.unsplash.com/photo-1768938896401-fe52fd18d3af?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=85&w=1200",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=85&w=1200",
];

export const TESTIMONIAL_FACES = [
  "https://images.unsplash.com/photo-1596633816484-10da10b748e4?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
  "https://images.unsplash.com/photo-1628264045147-122484104d48?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
  "https://images.unsplash.com/photo-1624979215572-1230abc53d7c?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
];
