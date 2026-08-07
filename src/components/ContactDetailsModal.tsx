import React, { useState } from "react";
import ridingoLogo from "@/assets/ridingo-logo.png";

interface ContactDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactDetailsModal({ isOpen, onClose }: ContactDetailsModalProps) {
  const [copiedType, setCopiedType] = useState<"phone" | "email" | null>(null);

  if (!isOpen) return null;

  const phone = "+91 8156938843";
  const rawPhone = "+918156938843";
  const email = "teme.ridingo@gmail.com";
  const whatsappUrl = "https://wa.me/918156938843?text=Hi%20Ridingo%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20driver.";

  const handleCopy = (text: string, type: "phone" | "email") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl max-h-[90vh] flex flex-col rounded-3xl bg-background border border-border text-foreground shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-5 sm:px-8 bg-card sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <img
              src={ridingoLogo}
              alt="Ridingo Logo"
              className="h-10 w-10 object-contain rounded-xl"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                  Contact Ridingo
                </h3>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-500 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live 24/7
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">
                Driver Dispatch & Customer Support
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-foreground hover:bg-taxi hover:text-ink transition-colors font-bold text-base cursor-pointer"
            aria-label="Close contact modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 space-y-5 text-left text-sm leading-relaxed">
          {/* Phone Contact Card */}
          <div className="rounded-2xl border border-border/80 p-5 bg-card/60 space-y-3 hover:border-taxi/50 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Direct Phone & Booking Helpline
                </span>
                <div className="font-display text-2xl font-black text-foreground mt-1 tracking-tight">
                  {phone}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Instant driver dispatch across all active operating zones.
                </p>
              </div>
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-taxi text-ink font-bold text-lg shadow-sm">
                📞
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={`tel:${rawPhone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-ink text-taxi font-bold text-xs uppercase tracking-wider hover:bg-taxi hover:text-ink transition-all shadow-sm cursor-pointer"
              >
                <span>Call Now</span>
                <span>→</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-500 transition-all shadow-sm cursor-pointer"
              >
                <span>💬 WhatsApp</span>
              </a>
              <button
                onClick={() => handleCopy(rawPhone, "phone")}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-border text-xs font-semibold text-foreground hover:bg-secondary transition-colors cursor-pointer"
              >
                {copiedType === "phone" ? (
                  <span className="text-emerald-500 font-bold">✓ Copied!</span>
                ) : (
                  <span>📋 Copy Number</span>
                )}
              </button>
            </div>
          </div>

          {/* Email Contact Card */}
          <div className="rounded-2xl border border-border/80 p-5 bg-card/60 space-y-3 hover:border-taxi/50 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Official Inquiries & Support Email
                </span>
                <div className="font-display text-xl sm:text-2xl font-black text-foreground mt-1 tracking-tight break-all">
                  {email}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Corporate inquiries, driver onboarding & customer feedback.
                </p>
              </div>
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-taxi text-ink font-bold text-lg shadow-sm">
                ✉️
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-ink text-taxi font-bold text-xs uppercase tracking-wider hover:bg-taxi hover:text-ink transition-all shadow-sm cursor-pointer"
              >
                <span>Send Email</span>
                <span>→</span>
              </a>
              <button
                onClick={() => handleCopy(email, "email")}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-border text-xs font-semibold text-foreground hover:bg-secondary transition-colors cursor-pointer"
              >
                {copiedType === "email" ? (
                  <span className="text-emerald-500 font-bold">✓ Copied!</span>
                ) : (
                  <span>📋 Copy Email</span>
                )}
              </button>
            </div>
          </div>

          {/* Key Assurance Info */}
          <div className="rounded-2xl border border-border/60 p-4 bg-secondary/30 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2.5">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-taxi text-ink text-[11px] font-black">
                ✓
              </span>
              <span>Available 24/7 on Call & WhatsApp</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-taxi text-ink text-[11px] font-black">
                ✓
              </span>
              <span>Fast Chauffeur Dispatch</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-border px-6 py-4 sm:px-8 bg-card">
          <span className="text-xs text-muted-foreground">
            Ridingo Inc. — Your Car. Our Driver.
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-ink text-taxi font-bold text-xs uppercase tracking-wider hover:bg-taxi hover:text-ink transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
