import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import ridingoLogo from "@/assets/ridingo-logo.png";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Ridingo" },
      {
        name: "description",
        content:
          "Official Terms and Conditions, Policies, and Guidelines for Ridingo - A peer-to-peer driver-providing platform.",
      },
      { property: "og:title", content: "Terms & Conditions — Ridingo" },
      {
        property: "og:description",
        content: "Official Terms and Conditions and User Policies for Ridingo.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: TermsPage,
});

type Language = "en" | "ml";

interface TermItem {
  id: number;
  num: string;
  tagEn: string;
  tagMl: string;
  titleEn: string;
  titleMl: string;
  summaryEn: string;
  summaryMl: string;
  detailsEn: string[];
  detailsMl: string[];
  icon: string;
}

const termsData: TermItem[] = [
  {
    id: 1,
    num: "01",
    icon: "🚗",
    tagEn: "Service Nature",
    tagMl: "സേവന സ്വഭാവം",
    titleEn: "1. Service Description",
    titleMl: "1. സേവന വിവരണം",
    summaryEn:
      "Ridingo is a peer-to-peer ride-sharing platform that connects users with professional drivers who drive the customer's own vehicle.",
    summaryMl:
      "റൈഡിംഗോ (Ridingo) ഒരു പിയർ-ടു-പിയർ ഡ്രൈവർ സേവന പ്ലാറ്റ്‌ഫോമാണ്. ഉപഭോക്താക്കൾക്ക് അവരുടെ സ്വന്തം വാഹനങ്ങളിൽ യാത്ര ചെയ്യുന്നതിനായി പ്രൊഫഷണൽ ഡ്രൈവർമാരെ ലഭ്യമാക്കുന്നു.",
    detailsEn: [
      "Ridingo functions strictly as a driver-dispatch agency and technology platform under the 'Your car. Our driver.' model.",
      "The platform connects registered vehicle owners with vetted, licensed chauffeurs.",
      "Ridingo does not supply, rent, or own the motor vehicles utilized during bookings.",
      "The customer retains complete possession and ownership of their vehicle at all times.",
    ],
    detailsMl: [
      "'നിങ്ങളുടെ വാഹനം, ഞങ്ങളുടെ ഡ്രൈവർ' എന്ന മാതൃകയിലാണ് റൈഡിംഗോ പ്രവർത്തിക്കുന്നത്.",
      "രജിസ്റ്റർ ചെയ്ത വാഹന ഉടമകൾക്ക് വിശ്വസ്തരായ, ലൈസൻസുള്ള ഡ്രൈവർമാരെ നൽകുന്ന സാങ്കേതിക പ്ലാറ്റ്‌ഫോമാണിത്.",
      "റൈഡിംഗോ വാഹനങ്ങൾ വാടകയ്‌ക്കോ സ്വന്തമായോ നൽകുന്നില്ല.",
      "വാഹനത്തിന്റെ പൂർണ്ണ ഉടമസ്ഥതയും നിയന്ത്രണവും എപ്പോഴും ഉപഭോക്താവിനായിരിക്കും.",
    ],
  },
  {
    id: 2,
    num: "02",
    icon: "💳",
    tagEn: "Booking & Rates",
    tagMl: "ബുക്കിംഗും പേയ്‌മെന്റും",
    titleEn: "2. Payment Policy",
    titleMl: "2. പേയ്‌മെന്റ് പോളിസി",
    summaryEn:
      "A 50% advance payment is strictly required to confirm and lock any driver dispatch booking on the platform.",
    summaryMl:
      "ഏതൊരു ബുക്കിംഗും സ്ഥിരീകരിക്കുന്നതിനായി മൊത്തം തുകയുടെ 50% അഡ്വാൻസ് പേയ്‌മെന്റ് നിർബന്ധമായും നൽകേണ്ടതാണ്.",
    detailsEn: [
      "A mandatory 50% advance deposit is processed via secure in-app digital payment upon scheduling.",
      "Driver dispatch and reservation are only locked once the 50% confirmation payment is received.",
      "The remaining 50% balance plus any approved overtime hours must be settled immediately upon trip conclusion.",
      "All invoices and receipts are generated automatically inside the Ridingo application.",
    ],
    detailsMl: [
      "ബുക്കിംഗ് നടത്തുമ്പോൾ സുരക്ഷിതമായ ആപ്പ് പേയ്‌മെന്റ് വഴി 50% അഡ്വാൻസ് തുക അടയ്‌ക്കേണ്ടതാണ്.",
      "50% അഡ്വാൻസ് തുക ലഭിച്ചതിനു ശേഷം മാത്രമേ ഡ്രൈവർ അലോക്കേഷൻ ഉറപ്പാക്കുകയുള്ളൂ.",
      "ബാക്കി 50% തുകയും അധിക സമയ ചാർജുകളും യാത്ര അവസാനിച്ച ഉടൻ നൽകേണ്ടതാണ്.",
      "എല്ലാ ബില്ലുകളും രസീതുകളും റൈഡിംഗോ ആപ്പിലൂടെ ലഭ്യമാകുന്നതാണ്.",
    ],
  },
  {
    id: 3,
    num: "03",
    icon: "⚠️",
    tagEn: "Cancellations",
    tagMl: "റദ്ദാക്കൽ നിയമങ്ങൾ",
    titleEn: "3. Cancellation Policy",
    titleMl: "3. കാൻസലേഷൻ പോളിസി",
    summaryEn:
      "Cancellations are not permitted after a driver has accepted the ride. If cancelled, a 5% cancellation charge will be deducted from the full amount.",
    summaryMl:
      "ഡ്രൈവർ റൈഡ് സ്വീകരിച്ച ശേഷം ബുക്കിംഗ് റദ്ദാക്കാൻ അനുവദിക്കുന്നതല്ല. ഏതെങ്കിലും കാരണവശാൽ റദ്ദാക്കുകയാണെങ്കിൽ, മൊത്തം തുകയിൽ നിന്ന് 5% ക്യാൻസലേഷൻ ചാർജ് ഈടാക്കുന്നതാണ്.",
    detailsEn: [
      "Once an assigned chauffeur has accepted the ride request, the booking is legally locked and cancellations are not permitted.",
      "If a cancellation request is approved under exceptional circumstances, a mandatory 5% fee calculated on the total booking value will be deducted.",
      "The remaining balance of the advance payment will be credited back to the original payment source within 3-5 business days.",
    ],
    detailsMl: [
      "ഡ്രൈവർ റൈഡ് സ്വീകരിച്ച് കഴിഞ്ഞാൽ ബുക്കിംഗ് റദ്ദാക്കുവാൻ അനുവദിക്കുന്നതല്ല.",
      "പ്രത്യേക സാഹചര്യങ്ങളിൽ കാൻസലേഷൻ അനുവദിക്കുകയാണെങ്കിൽ, മൊത്തം ബുക്കിംഗ് തുകയുടെ 5% ക്യാൻസലേഷൻ ചാർജ് ഈടാക്കുന്നതാണ്.",
      "ബാക്കി തുക 3-5 പ്രവൃത്തിദിവസങ്ങൾക്കുള്ളിൽ നിങ്ങളുടെ ബാങ്ക് അക്കൗണ്ടിലേക്ക് തിരികെ ലഭിക്കുന്നതാണ്.",
    ],
  },
  {
    id: 4,
    num: "04",
    icon: "🛡️",
    tagEn: "Vehicle Insurance",
    tagMl: "ഇൻഷുറൻസ് വിവരങ്ങൾ",
    titleEn: "4. Insurance Information",
    titleMl: "4. ഇൻഷുറൻസ് വിവരങ്ങൾ",
    summaryEn:
      "This platform does not provide vehicle insurance. Users must rely on their own valid motor vehicle insurance policy for all claims.",
    summaryMl:
      "റൈഡിംഗോ പ്ലാറ്റ്‌ഫോം വാഹന ഇൻഷുറൻസ് നൽകുന്നില്ല. വാഹനാപകടങ്ങൾ, കേടുപാടുകൾ അല്ലെങ്കിൽ മറ്റ് ക്ലെയിമുകൾ എന്നിവക്കായി ഉപഭോക്താക്കൾ തങ്ങളുടെ വാഹനത്തിന്റെ സാധുവായ ഇൻഷുറൻസ് പോളിസിയെ ആശ്രയിക്കേണ്ടതാണ്.",
    detailsEn: [
      "Ridingo provides professional driver assistance only and does not issue or include automobile insurance policies.",
      "The vehicle owner guarantees that the vehicle has active, valid comprehensive motor insurance coverage under Indian Motor Tariff regulations.",
      "Any vehicle damage, third-party liability, or road collision claims must be filed through the vehicle's primary insurance policy.",
      "The customer is responsible for maintaining all statutory vehicle documents (RC, Insurance, PUC, Fitness).",
    ],
    detailsMl: [
      "റൈഡിംഗോ ഡ്രൈവർ സേവനം മാത്രമാണ് നൽകുന്നത്, വാഹന ഇൻഷുറൻസ് പരിരക്ഷ നൽകുന്നില്ല.",
      "ഉപയോഗിക്കുന്ന വാഹനത്തിന് സാധുവായ കോംപ്രിഹെൻസീവ് ഇൻഷുറൻസ് ഉണ്ടെന്ന് വാഹന ഉടമ ഉറപ്പുവരുത്തേണ്ടതാണ്.",
      "യാത്രക്കിടയിൽ വാഹനത്തിന് ഉണ്ടാകുന്ന കേടുപാടുകൾ അല്ലെങ്കിൽ മറ്റ് ക്ലെയിമുകൾ വാഹനത്തിന്റെ സ്വന്തം ഇൻഷുറൻസ് വഴിയാണ് പരിഹരിക്കേണ്ടത്.",
      "വാഹനത്തിന്റെ ആർ.സി, ഇൻഷുറൻസ്, പൊല്യൂഷൻ സർട്ടിഫിക്കറ്റ് തുടങ്ങിയ രേഖകൾ കൃത്യമായി സൂക്ഷിക്കേണ്ടത് ഉടമയുടെ ഉത്തരവാദിത്തമാണ്.",
    ],
  },
  {
    id: 5,
    num: "05",
    icon: "⛽",
    tagEn: "Trip Expenses",
    tagMl: "അധിക ചെലവുകൾ",
    titleEn: "5. Additional Costs",
    titleMl: "5. അധിക ചെലവുകൾ",
    summaryEn:
      "Fuel, Fastag tolls, parking fees, and interstate permits are the direct responsibility of the vehicle owner.",
    summaryMl:
      "ഇന്ധനം (Fuel), ഫാസ്‌ടാഗ് ടോൾ ചാർജുകൾ (Fastag), പാർക്കിംഗ് ഫീസ്, പെർമിറ്റുകൾ തുടങ്ങിയ എല്ലാ യാത്രാ ചെലവുകളും വാഹന ഉടമയുടെ മാത്രം ഉത്തരവാദിത്തമായിരിക്കും.",
    detailsEn: [
      "Fuel charges (Petrol/Diesel/EV charging) are not included in driver rates and must be supplied by the vehicle owner.",
      "All electronic toll charges (Fastag) and manual toll booths are payable by the vehicle owner.",
      "Parking charges, airport entry charges, valet fees, and city entry fees are the customer's responsibility.",
      "Interstate border entry taxes and special tourist permits required for outstation trips must be borne directly by the customer.",
    ],
    detailsMl: [
      "ഇന്ധന ചെലവുകൾ (പെട്രോൾ / ഡീസൽ / ഇവി ചാർജിംഗ്) ഡ്രൈവർ ഫീസിൽ ഉൾപ്പെടുന്നതല്ല, ഇത് വാഹന ഉടമ നൽകേണ്ടതാണ്.",
      "എല്ലാ ഫാസ്‌ടാഗ് ടോൾ ചാർജുകളും പാർക്കിംഗ് ഫീസുകളും ഉപഭോക്താവ് വഹിക്കേണ്ടതാണ്.",
      "എയർപോർട്ട് എൻട്രി, മാൾ പാർക്കിംഗ്, മറ്റ് അനുബന്ധ ഫീസുകൾ എന്നിവ ഉപഭോക്താവിന്റെ ഉത്തരവാദിത്തമാണ്.",
      "മറ്റ് സംസ്ഥാനങ്ങളിലേക്കുള്ള യാത്രകളിൽ വരുന്ന അതിർത്തി നികുതികളും പെർമിറ്റ് ഫീസുകളും ഉടമ നേരിട്ട് നൽകേണ്ടതാണ്.",
    ],
  },
  {
    id: 6,
    num: "06",
    icon: "📱",
    tagEn: "App Support",
    tagMl: "ആപ്പ് ഉത്തരവാദിത്തം",
    titleEn: "6. Platform Liability",
    titleMl: "6. പ്ലാറ്റ്‌ഫോം ബാധ്യത",
    summaryEn:
      "The platform is fully responsible for any technical issues, booking glitches, or payment errors that occur within the app.",
    summaryMl:
      "റൈഡിംഗോ മൊബൈൽ ആപ്പിലോ സിസ്റ്റത്തിലോ നേരിട്ടുണ്ടാകുന്ന സാങ്കേതിക തകരാറുകൾ, ബുക്കിംഗ് തടസ്സങ്ങൾ, പേയ്‌മെന്റ് പ്രശ്നങ്ങൾ എന്നിവയുടെ പൂർണ്ണ ഉത്തരവാദിത്തം പ്ലാറ്റ്‌ഫോം വഹിക്കുന്നതാണ്.",
    detailsEn: [
      "Ridingo takes full accountability for technical performance, server uptime, and software stability within the Ridingo app.",
      "In the event of an app error, double-deduction, or technical dispatch failure, Ridingo will rectify and process refunds immediately.",
      "Our 24/7 technical helpdesk actively monitors all booking pipelines and telematics for continuous uptime.",
      "Platform liability is strictly limited to technology services and does not extend to external road conditions or traffic delays.",
    ],
    detailsMl: [
      "റൈഡിംഗോ മൊബൈൽ ആപ്ലിക്കേഷന്റെ പ്രവർത്തനക്ഷമതയും സാങ്കേതിക സുരക്ഷിതത്വവും പ്ലാറ്റ്‌ഫോം പൂർണ്ണമായി ഉറപ്പുനൽകുന്നു.",
      "ആപ്പിൽ ഉണ്ടാകുന്ന പേയ്‌മെന്റ് തകരാറുകൾ, സെർവർ പ്രശ്നങ്ങൾ അല്ലെങ്കിൽ ബുക്കിംഗ് പിശകുകൾ ഉടനടി പരിഹരിക്കുകയും ആവശ്യമെങ്കിൽ തുക റീഫണ്ട് ചെയ്യുകയും ചെയ്യും.",
      "24 മണിക്കൂറും പ്രവർത്തിക്കുന്ന ഞങ്ങളുടെ ടെക്നിക്കൽ സപ്പോർട്ട് ടീം എല്ലാ സാങ്കേതിക സഹായങ്ങൾക്കും ലഭ്യമാണ്.",
    ],
  },
  {
    id: 7,
    num: "07",
    icon: "⚖️",
    tagEn: "Fair Resolution",
    tagMl: "തർക്ക പരിഹാരം",
    titleEn: "7. Dispute Resolution",
    titleMl: "7. തർക്ക പരിഹാരം",
    summaryEn:
      "Any disputes between the vehicle owner and driver will be resolved fairly following an investigation into the root causes.",
    summaryMl:
      "വാഹന ഉടമയും ഡ്രൈവറും തമ്മിൽ ഉണ്ടാകുന്ന ഏതൊരു തർക്കങ്ങളും കൃത്യമായ അന്വേഷണത്തിലൂടെയും റൈഡ് ലോഗുകൾ പരിശോധിച്ചും നിഷ്പക്ഷമായി പരിഹരിക്കുന്നതാണ്.",
    detailsEn: [
      "In the event of any disagreement regarding routes, behavior, duration, or expenses, both parties may submit a dispute ticket through the app.",
      "Ridingo's dedicated Compliance & Safety Board conducts a thorough root-cause inquiry using GPS data, chat logs, and telemetry.",
      "Disputes are resolved objectively and binding decisions are communicated within 48 to 72 hours.",
      "Ridingo upholds strict ethical conduct and zero-tolerance policies for harassment, misconduct, or unsafe driving.",
    ],
    detailsMl: [
      "യാത്രക്കിടയിലോ ശേഷമോ ഡ്രൈവറും ഉപഭോക്താവും തമ്മിൽ തർക്കങ്ങൾ ഉണ്ടായാൽ ആപ്പ് വഴി പരാതി സമർപ്പിക്കാവുന്നതാണ്.",
      "റൈഡിംഗോയുടെ പ്രത്യേക സുരക്ഷാ സമിതി ജി.പി.എസ് ഡാറ്റയും യാത്രാ വിവരങ്ങളും പരിശോധിച്ച് കൃത്യമായ അന്വേഷണം നടത്തും.",
      "48 മുതൽ 72 മണിക്കൂറിനുള്ളിൽ നിഷ്പക്ഷമായ തീരുമാനം കൈക്കൊള്ളുന്നതാണ്.",
      "യാത്രക്കാരുടെ സുരക്ഷയ്ക്കും ഡ്രൈവർമാരുടെ മാന്യമായ പെരുമാറ്റത്തിനും റൈഡിംഗോ മുൻഗണന നൽകുന്നു.",
    ],
  },
];

export function TermsPage() {
  const [lang, setLang] = useState<Language>("en");
  const [openIds, setOpenIds] = useState<number[]>([1]); // First item open by default
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const toggleAccordion = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(termsData.map((t) => t.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  const isAllExpanded = openIds.length === termsData.length;

  const filteredTerms = termsData.filter((t) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      t.titleEn.toLowerCase().includes(q) ||
      t.titleMl.toLowerCase().includes(q) ||
      t.summaryEn.toLowerCase().includes(q) ||
      t.summaryMl.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-taxi selection:text-ink">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1300px] items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 group transition-transform hover:scale-[1.02]"
          >
            <img
              src={ridingoLogo}
              alt="Ridingo"
              className="h-10 sm:h-12 w-auto object-contain object-left transition-all"
            />
          </Link>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Switcher Pill */}
            <div className="flex items-center p-1 rounded-full bg-secondary border border-border text-xs font-semibold shadow-inner">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  lang === "en"
                    ? "bg-ink text-taxi shadow-md font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Switch to English"
              >
                🇬🇧 English
              </button>
              <button
                onClick={() => setLang("ml")}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  lang === "ml"
                    ? "bg-ink text-taxi shadow-md font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="മലയാളത്തിലേക്ക് മാറ്റുക"
              >
                🇮🇳 മലയാളം
              </button>
            </div>

            {/* Back to Home Button */}
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-xs font-bold uppercase tracking-wider text-foreground hover:bg-secondary transition-colors"
            >
              <span>←</span>
              <span>{lang === "en" ? "Home" : "ഹോം"}</span>
            </Link>

            {/* App CTA */}
            <a
              href="#/terms"
              onClick={(e) => {
                e.preventDefault();
                alert(
                  lang === "en"
                    ? "Ridingo mobile app is available on iOS & Android."
                    : "റൈഡിംഗോ ആപ്പ് ഐ.ഒ.എസ്സിലും ആൻഡ്രോയിഡിലും ലഭ്യമാണ്."
                );
              }}
              className="inline-flex items-center justify-center rounded-full bg-taxi px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink hover:bg-ink hover:text-taxi transition-all shadow-sm cursor-pointer"
            >
              {lang === "en" ? "App" : "ആപ്പ്"}
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 mx-auto w-full max-w-[1100px] px-6 py-12 lg:px-10 lg:py-16">
        {/* Breadcrumb & Section Header */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-taxi/15 text-taxi-deep border border-taxi/30 text-xs font-extrabold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-taxi-deep animate-pulse" />
            {lang === "en" ? "Legal Documentation" : "നിയമപരമായ വിവരങ്ങൾ"}
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-none">
                {lang === "en" ? "Terms & Conditions" : "നിയമങ്ങളും നിബന്ധനകളും"}
              </h1>
              <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
                {lang === "en"
                  ? "Please review the official operational rules, financial policies, liability limits, and dispute guidelines governing the Ridingo peer-to-peer driver platform."
                  : "റൈഡിംഗോ പ്ലാറ്റ്‌ഫോം ഉപയോഗിക്കുമ്പോൾ പാലിക്കേണ്ട ഔദ്യോഗിക നിയമങ്ങളും, പേയ്‌മെന്റ് പോളിസിയും, ഇൻഷുറൻസ് വിവരങ്ങളും താഴെ നൽകിയിരിക്കുന്നു."}
              </p>
            </div>

            {/* Document Meta Pill */}
            <div className="shrink-0 text-left md:text-right text-xs text-muted-foreground space-y-1">
              <div>
                <span className="font-semibold text-foreground">
                  {lang === "en" ? "Version: " : "പതിപ്പ്: "}
                </span>
                2026.1
              </div>
              <div>
                <span className="font-semibold text-foreground">
                  {lang === "en" ? "Effective: " : "പ്രാബല്യത്തിൽ: "}
                </span>
                {new Date().toLocaleDateString("en-IN", {
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar: Search & Expand/Collapse Toggle */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3.5 rounded-2xl bg-secondary/50 border border-border">
          {/* Search Box */}
          <div className="relative flex-1">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
              🔍
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === "en"
                  ? "Search clauses (e.g. payment, cancellation, insurance)..."
                  : "വിഷയങ്ങൾ തിരയുക (ഉദാ: പേയ്‌മെന്റ്, ഇൻഷുറൻസ്)..."
              }
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-background border border-border/80 focus:border-taxi focus:outline-none text-foreground placeholder:text-muted-foreground"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            )}
          </div>

          {/* Expand/Collapse All Button */}
          <div className="flex items-center justify-between sm:justify-end gap-2">
            <button
              onClick={isAllExpanded ? collapseAll : expandAll}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-card hover:bg-secondary text-foreground text-xs font-bold border border-border shadow-sm transition-all cursor-pointer"
            >
              <span>{isAllExpanded ? "−" : "+"}</span>
              <span>
                {isAllExpanded
                  ? lang === "en"
                    ? "Collapse All"
                    : "എല്ലാം ചുരുക്കുക"
                  : lang === "en"
                    ? "Expand All"
                    : "എല്ലാം കാണുക"}
              </span>
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="mt-6 space-y-4 text-left">
          {filteredTerms.length === 0 ? (
            <div className="p-12 text-center rounded-3xl border border-dashed border-border bg-card/40">
              <p className="text-muted-foreground text-sm">
                {lang === "en"
                  ? "No matching terms found. Try clearing your search query."
                  : "നിങ്ങൾ തിരഞ്ഞ വിവരങ്ങൾ കണ്ടെത്താനായില്ല."}
              </p>
            </div>
          ) : (
            filteredTerms.map((item) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-taxi bg-card shadow-lg shadow-taxi/5"
                      : "border-border/80 bg-card/70 hover:border-border hover:bg-card"
                  }`}
                >
                  {/* Accordion Header (Always Visible) */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer focus:outline-none transition-colors select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start sm:items-center gap-4 sm:gap-5 flex-1 pr-4">
                      {/* Number Badge */}
                      <span
                        className={`grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-2xl font-display text-sm font-black transition-all ${
                          isOpen
                            ? "bg-taxi text-ink shadow-md"
                            : "bg-secondary text-muted-foreground border border-border"
                        }`}
                      >
                        {item.num}
                      </span>

                      {/* Title & Tag */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-foreground">
                            {lang === "en" ? item.titleEn : item.titleMl}
                          </h2>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-1 font-medium">
                          {lang === "en" ? item.summaryEn : item.summaryMl}
                        </p>
                      </div>
                    </div>

                    {/* Toggle Indicator Button */}
                    <div
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-ink text-taxi rotate-180"
                          : "bg-secondary text-foreground hover:bg-border"
                      }`}
                    >
                      <svg
                        className="w-4 h-4 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Accordion Drop-down Content */}
                  {isOpen && (
                    <div className="px-6 pb-7 sm:px-7 pt-1 border-t border-border/60 animate-in fade-in slide-in-from-top-2 duration-200">
                      {/* Highlighted Lead Summary */}
                      <div className="p-4 rounded-2xl bg-secondary/50 border border-border/80 text-foreground font-medium text-sm sm:text-base leading-relaxed mb-5">
                        <span className="font-bold text-taxi-deep mr-2">📌</span>
                        {lang === "en" ? item.summaryEn : item.summaryMl}
                      </div>

                      {/* Detailed Bullet Clauses */}
                      <div className="space-y-2.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                          {lang === "en"
                            ? "Detailed Specifications & Terms:"
                            : "വിശദമായ വ്യവസ്ഥകൾ:"}
                        </span>
                        <ul className="space-y-2.5 pt-1">
                          {(lang === "en" ? item.detailsEn : item.detailsMl).map(
                            (point, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90 leading-relaxed bg-background/60 p-3 rounded-xl border border-border/40"
                              >
                                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-taxi text-ink font-bold text-[10px] mt-0.5 shadow-sm">
                                  ✓
                                </span>
                                <span>{point}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Platform Assurance Notice Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-ink text-bone text-left shadow-xl border border-ink space-y-4">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-taxi text-ink text-base font-black">
              ⚖️
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                {lang === "en"
                  ? "User Agreement & Acceptance"
                  : "ഉപയോക്തൃ ഉടമ്പടി"}
              </h3>
              <p className="text-xs text-bone/70">
                {lang === "en"
                  ? "By booking or offering driver services via Ridingo, you agree to comply with all stated terms."
                  : "റൈഡിംഗോ ആപ്പ് വഴി ഡ്രൈവർ സേവനം ബുക്ക് ചെയ്യുന്നതിലൂടെ മുകളിൽ പറഞ്ഞ എല്ലാ വ്യവസ്ഥകളും നിങ്ങൾ അംഗീകരിക്കുന്നു."}
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 text-xs text-bone/80">
            <span>
              {lang === "en"
                ? "Need support or clarification on any clause?"
                : "കൂടുതൽ വിവരങ്ങൾക്കായി ഞങ്ങളെ ബന്ധപ്പെടുക:"}
            </span>
            <div className="flex items-center gap-3 font-semibold">
              <a
                href="mailto:teme.ridingo@gmail.com"
                className="text-taxi hover:underline"
              >
                teme.ridingo@gmail.com
              </a>
              <span>•</span>
              <a href="tel:+918156938843" className="text-taxi hover:underline">
                +91 8156938843
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Page Footer */}
      <footer className="border-t border-border bg-card/60 py-8 px-6 lg:px-10 text-xs text-muted-foreground">
        <div className="mx-auto max-w-[1100px] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Ridingo Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-foreground transition-colors">
              {lang === "en" ? "Back to Homepage" : "ഹോം പേജിലേക്ക് മടങ്ങുക"}
            </Link>
            <span>•</span>
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              {lang === "en" ? "Top ↑" : "മുകളിലേക്ക് ↑"}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
