import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      data-testid="whatsapp-floating-button"
      aria-label="Book appointment on WhatsApp"
      className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 group-hover:opacity-70 animate-ping" />
      <span className="relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full pl-4 pr-5 py-3 shadow-2xl shadow-black/40 transition-all">
        <MessageCircle size={20} fill="white" stroke="none" />
        <span className="hidden sm:inline text-sm font-semibold uppercase tracking-wider">
          Book on WhatsApp
        </span>
      </span>
    </a>
  );
}
