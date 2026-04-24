import { MessageCircle, Phone } from "lucide-react";
import { telLink, whatsappLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-elegant transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-16 hidden whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs text-background group-hover:block">
          Chat on WhatsApp
        </span>
      </a>
      <a
        href={telLink}
        aria-label="Call"
        className="group grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-accent-foreground shadow-gold transition hover:scale-110"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute right-16 hidden whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs text-background group-hover:block">
          Call Now
        </span>
      </a>
    </div>
  );
}
