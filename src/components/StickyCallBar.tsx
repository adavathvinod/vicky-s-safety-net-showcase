import { MessageCircleMore, PhoneCall } from "lucide-react";
import { BUSINESS_PHONE, WHATSAPP_URL, trackLeadClick } from "@/lib/leadTracking";

const StickyCallBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 shadow-2xl backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Free Site Visit In Bangalore
          </p>
          <p className="truncate text-sm font-semibold text-foreground">
            Same-day call support available
          </p>
        </div>
        <a
          href={`tel:${BUSINESS_PHONE}`}
          onClick={() => trackLeadClick("call", "sticky_mobile")}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
        >
          <PhoneCall className="h-4 w-4" />
          Call
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackLeadClick("whatsapp", "sticky_mobile")}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#1ebe5a]"
        >
          <MessageCircleMore className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default StickyCallBar;
