import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import ridingoLogo from "@/assets/ridingo-logo.png";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Ridingo" },
      {
        name: "description",
        content:
          "Official Privacy Policy, Data Protection, and User Rights for Ridingo - Your Car. Our Driver.",
      },
      { property: "og:title", content: "Privacy Policy — Ridingo" },
      {
        property: "og:description",
        content: "Official Privacy Policy and Data Protection standards for Ridingo.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PrivacyPage,
});

type Language = "en" | "ml";

interface PrivacyItem {
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

const privacyData: PrivacyItem[] = [
  {
    id: 1,
    num: "01",
    icon: "📂",
    tagEn: "Data Collection",
    tagMl: "ശേഖരിക്കുന്ന വിവരങ്ങൾ",
    titleEn: "1. Information We Collect",
    titleMl: "1. ഞങ്ങൾ ശേഖരിക്കുന്ന വിവരങ്ങൾ",
    summaryEn:
      "We collect personal identification details, vehicle specifications, and real-time telemetry strictly required to deliver chauffeur dispatch services.",
    summaryMl:
      "ഡ്രൈവർ സേവനം ലഭ്യമാക്കുന്നതിനായി വ്യക്തിഗത വിവരങ്ങൾ, വാഹനത്തിന്റെ വിശദാംശങ്ങൾ, തത്സമയ ലൊക്കേഷൻ വിവരങ്ങൾ എന്നിവ ഞങ്ങൾ ശേഖരിക്കുന്നു.",
    detailsEn: [
      "Personal Identifiers: Full name, verified mobile number, email address, and emergency contact details.",
      "Vehicle Data: Registration number, car make/model, fuel type, transmission (Manual/Automatic), and insurance validity.",
      "KYC & Verification: Basic identity records to ensure safety and security on the platform.",
      "Technical Device Data: App version, operating system, IP address, and crash diagnostics for app reliability.",
    ],
    detailsMl: [
      "വ്യക്തിഗത വിവരങ്ങൾ: പൂർണ്ണ നാമം, മൊബൈൽ നമ്പർ, ഇമെയിൽ വിലാസം, എമർജൻസി കോൺടാക്റ്റ് നമ്പർ.",
      "വാഹന വിവരങ്ങൾ: രജിസ്ട്രേഷൻ നമ്പർ, മോഡൽ, ഇന്ധന തരം, ഗിയർ ടൈപ്പ് (മാനുവൽ/ഓട്ടോമാറ്റിക്).",
      "സുരക്ഷാ പരിശോധന: സുരക്ഷിത യാത്ര ഉറപ്പാക്കാനായി അടിസ്ഥാന തിരിച്ചറിയൽ രേഖകൾ.",
      "സാങ്കേതിക വിവരങ്ങൾ: ആപ്പ് പതിപ്പ്, ഓപ്പറേറ്റിംഗ് സിസ്റ്റം, ഉപകരണ വിവരങ്ങൾ എന്നിവ.",
    ],
  },
  {
    id: 2,
    num: "02",
    icon: "⚙️",
    tagEn: "Data Usage",
    tagMl: "വിവരങ്ങളുടെ ഉപയോഗം",
    titleEn: "2. How We Use Your Data",
    titleMl: "2. വിവരങ്ങൾ എങ്ങനെ ഉപയോഗിക്കുന്നു",
    summaryEn:
      "Your data is used solely to match drivers, calculate accurate trip fares, process booking transactions, and ensure on-road passenger safety.",
    summaryMl:
      "ഡ്രൈവർമാരെ ക്രമീകരിക്കാനും, കൃത്യമായ യാത്രാനിരക്ക് കണക്കാക്കാനും, സുരക്ഷിതമായ യാത്ര ഉറപ്പുവരുത്താനുമാണ് വിവരങ്ങൾ ഉപയോഗിക്കുന്നത്.",
    detailsEn: [
      "Chauffeur Dispatch: Assigning the nearest qualified, verified driver to your pickup location and vehicle category.",
      "Trip Computation: Calculating distance, estimated duration, 50% advance deposits, and final billing amounts.",
      "Safety & Support: Providing 24/7 in-ride monitoring, customer support, and dispute investigation.",
      "Service Enhancements: Optimizing app performance, reducing wait times, and preventing fraudulent bookings.",
    ],
    detailsMl: [
      "ഡ്രൈവർ അലോക്കേഷൻ: നിങ്ങളുടെ ലൊക്കേഷനിലേക്ക് ഏറ്റവും അനുയോജ്യനായ ഡ്രൈവറെ നിയോഗിക്കാൻ.",
      "യാത്രാ നിരക്ക് കണക്കാക്കൽ: യാത്രാ ദൂരം, സമയം, 50% അഡ്വാൻസ് തുക, ഫൈനൽ ബില്ലിംഗ് എന്നിവ കൃത്യമാക്കാൻ.",
      "സുരക്ഷയും സഹായവും: 24 മണിക്കൂർ കസ്റ്റമർ സപ്പോർട്ട്, തർക്ക പരിഹാരങ്ങൾ, യാത്രാ സുരക്ഷ എന്നിവ ഉറപ്പാക്കാൻ.",
      "സേവന നിലവാരം: ആപ്പ് പ്രവർത്തനക്ഷമത മെച്ചപ്പെടുത്താനും ബുക്കിംഗ് തടസ്സങ്ങൾ ഒഴിവാക്കാനും.",
    ],
  },
  {
    id: 3,
    num: "03",
    icon: "🔒",
    tagEn: "Data Sharing",
    tagMl: "വിവരങ്ങൾ പങ്കിടൽ",
    titleEn: "3. Data Sharing & Disclosure",
    titleMl: "3. വിവരങ്ങൾ പങ്കിടലും സുരക്ഷയും",
    summaryEn:
      "We never sell your personal data. Information is shared only with your assigned driver during an active booking or when legally mandated.",
    summaryMl:
      "ഞങ്ങൾ നിങ്ങളുടെ സ്വകാര്യ വിവരങ്ങൾ പരസ്യ കമ്പനികൾക്കോ മൂന്നാം കക്ഷികൾക്കോ വിൽക്കാറില്ല. യാത്രക്കായി നിയോഗിച്ച ഡ്രൈവറുമായി മാത്രം ആവശ്യമായ വിവരങ്ങൾ പങ്കിടുന്നു.",
    detailsEn: [
      "Driver Coordination: Sharing pickup address, vehicle model, and contact details strictly for the duration of the ride.",
      "Zero Third-Party Advertising: Your personal contact details and driving logs are never sold or rented to marketing firms.",
      "Secure Infrastructure Partners: Trusted cloud hosting and SMS gateway providers under strict non-disclosure agreements.",
      "Legal Compliance: Sharing information with law enforcement agencies only upon valid, official statutory court orders.",
    ],
    detailsMl: [
      "ഡ്രൈവർ ഏകോപനം: യാത്രക്കായി പിക്കപ്പ് ലൊക്കേഷൻ, വാഹന മോഡൽ, ഫോൺ നമ്പർ എന്നിവ ഡ്രൈവർക്ക് ലഭ്യമാക്കുന്നു.",
      "പരസ്യങ്ങൾക്കായുള്ള വിൽപനയില്ല: നിങ്ങളുടെ വിവരങ്ങൾ പരസ്യങ്ങൾക്കോ മാർക്കറ്റിംഗിനോ നൽകുന്നതല്ല.",
      "വിശ്വസനീയ സെർവറുകൾ: സുരക്ഷിതമായ ക്ലൗഡ് സെർവറുകളിലാണ് വിവരങ്ങൾ സൂക്ഷിക്കുന്നത്.",
      "നിയമപരമായ ബാധ്യതകൾ: നിയമപാലകരുടെ ഔദ്യോഗിക ഉത്തരവുകൾ ഉള്ള സാഹചര്യങ്ങളിൽ മാത്രം നിയമപരമായ സഹായം നൽകുന്നു.",
    ],
  },
  {
    id: 4,
    num: "04",
    icon: "📍",
    tagEn: "Location & GPS",
    tagMl: "ലൊക്കേഷൻ ട്രാക്കിംഗ്",
    titleEn: "4. Real-Time Geolocation Tracking",
    titleMl: "4. തത്സമയ ലൊക്കേഷൻ ട്രാക്കിംഗ്",
    summaryEn:
      "Precise GPS tracking operates strictly during active driver dispatches to facilitate navigation, safety telemetry, and transparent route logs.",
    summaryMl:
      "യാത്ര ആരംഭിച്ചതു മുതൽ പൂർത്തിയാകുന്നതുവരെ സുരക്ഷിതത്വത്തിനും വഴി അറിയുന്നതിനുമായി കൃത്യമായ ജി.പി.എസ് (GPS) ട്രാക്കിംഗ് പ്രവർത്തിക്കുന്നു.",
    detailsEn: [
      "Active Dispatch Tracking: GPS tracking is enabled solely while a driver is en route or conducting an active ride.",
      "Safety Telematics: Real-time telemetry prevents route deviations and provides accurate emergency response tracking.",
      "Trip Auditing: GPS breadcrumbs allow transparent dispute resolution regarding route length and travel hours.",
      "Background Permission: Users may choose between 'While Using App' and 'Always Allow' based on their dispatch notification preferences.",
    ],
    detailsMl: [
      "യാത്രാ സമയത്തെ ട്രാക്കിംഗ്: ഡ്രൈവർ യാത്ര ആരംഭിക്കുന്നത് മുതൽ അവസാനിക്കുന്നത് വരെ മാത്രം ലൊക്കേഷൻ ട്രാക്ക് ചെയ്യുന്നു.",
      "സുരക്ഷാ സംവിധാനം: റൂട്ട് വ്യതിയാനങ്ങൾ ഒഴിവാക്കാനും അടിയന്തര സഹായങ്ങൾ ഉറപ്പാക്കാനും ജി.പി.എസ് സഹായിക്കുന്നു.",
      "യാത്രാ വിവരങ്ങളുടെ സ്ഥിരീകരണം: യാത്രാ സമയവും ദൂരവും സംബന്ധിച്ച വ്യക്തമായ തെളിവുകൾ സൂക്ഷിക്കുന്നു.",
      "ലൊക്കേഷൻ അനുമതി: ഉപയോക്താക്കൾക്ക് അവരുടെ താല്പര്യത്തിനനുസരിച്ച് ആപ്പിൽ ലൊക്കേഷൻ പെർമിഷൻ നൽകാവുന്നതാണ്.",
    ],
  },
  {
    id: 5,
    num: "05",
    icon: "💳",
    tagEn: "Payment Security",
    tagMl: "പേയ്‌മെന്റ് സുരക്ഷ",
    titleEn: "5. Financial Data & Payment Security",
    titleMl: "5. പേയ്‌മെന്റ് ഡാറ്റയും സാമ്പത്തിക സുരക്ഷയും",
    summaryEn:
      "All digital transactions are processed through RBI-authorized, PCI-DSS Level 1 compliant payment gateways. We do not store raw card numbers.",
    summaryMl:
      "എല്ലാ ഓൺലൈൻ പേയ്‌മെന്റുകളും ആർ.ബി.ഐ അംഗീകൃത, ഉയർന്ന സുരക്ഷയുള്ള പേയ്‌മെന്റ് ഗേറ്റ്‌വേകൾ വഴിയാണ് നടപ്പിലാക്കുന്നത്. കാർഡ് നമ്പറുകൾ ഞങ്ങൾ സൂക്ഷിക്കാറില്ല.",
    detailsEn: [
      "PCI-DSS Level 1 Compliance: All advance and trip balance payments use 256-bit encrypted banking channels.",
      "No Card Storage: Credit/debit card numbers, CVVs, and banking passwords are never stored on Ridingo servers.",
      "UPI & Instant Settlements: Fast, seamless UPI and digital wallet processing with instant transaction receipts.",
      "Fraud Detection: Automated algorithms actively detect and flag duplicate deductions or unauthorized attempts.",
    ],
    detailsMl: [
      "ഉയർന്ന സുരക്ഷാ മാനദണ്ഡങ്ങൾ: 256-ബിറ്റ് എൻക്രിപ്ഷൻ വഴിയാണ് പണമിടപാടുകൾ പ്രോസസ്സ് ചെയ്യുന്നത്.",
      "കാർഡ് വിവരങ്ങൾ സൂക്ഷിക്കില്ല: കാർഡ് നമ്പറുകൾ, സി.വി.വി (CVV), പാസ്‌വേഡുകൾ എന്നിവ ആപ്പിൽ സേവ് ചെയ്യില്ല.",
      "യു.പി.ഐ (UPI) പേയ്‌മെന്റുകൾ: യു.പി.ഐ, നെറ്റ് ബാങ്കിംഗ് എന്നിവ വഴി തൽക്ഷണം സുരക്ഷിതമായി പണം അടയ്ക്കാം.",
      "സുതാര്യമായ ഇടപാടുകൾ: പേയ്‌മെന്റ് വിജയകരമാകുമ്പോൾ തത്സമയം ഇൻവോയ്സും രസീതും ലഭ്യമാകുന്നു.",
    ],
  },
  {
    id: 6,
    num: "06",
    icon: "👤",
    tagEn: "User Rights",
    tagMl: "ഉപയോക്തൃ അവകാശങ്ങൾ",
    titleEn: "6. User Rights & Data Retention",
    titleMl: "6. ഉപയോക്തൃ അവകാശങ്ങളും ഡാറ്റ നിയന്ത്രണവും",
    summaryEn:
      "You hold complete ownership of your personal data under the Digital Personal Data Protection (DPDP) Act, including rights to access and delete your account.",
    summaryMl:
      "ഇന്ത്യൻ ഡിജിറ്റൽ ഡാറ്റാ സംരക്ഷണ നിയമപ്രകാരം നിങ്ങളുടെ സ്വകാര്യ വിവരങ്ങൾ തിരുത്താനും, ഡൗൺലോഡ് ചെയ്യാനും, അക്കൗണ്ട് പൂർണ്ണമായി ഡിലീറ്റ് ചെയ്യാനും നിങ്ങൾക്ക് അവകാശമുണ്ട്.",
    detailsEn: [
      "Right to Access & Portability: Request a full export of your past booking history and profile records at any time.",
      "Right to Rectification: Easily update contact numbers, email addresses, and vehicle profiles through app settings.",
      "Account Deletion: Submit a one-click account deletion request; all non-statutory records are wiped within 30 days.",
      "Retention Policy: Tax, invoice, and statutory trip audit logs are retained strictly for the duration mandated by applicable Indian law.",
    ],
    detailsMl: [
      "വിവരങ്ങൾ അറിയാനുള്ള അവകാശം: നിങ്ങളുടെ പഴയ യാത്രാ വിവരങ്ങളും പ്രൊഫൈൽ ഡാറ്റയും പരിശോധിക്കാവുന്നതാണ്.",
      "തിരുത്തലുകൾ വരുത്താം: ഫോൺ നമ്പർ, ഇമെയിൽ, വാഹന വിവരങ്ങൾ എന്നിവ എപ്പോൾ വേണമെങ്കിലും മാറ്റാം.",
      "അക്കൗണ്ട് ഡിലീറ്റ് ചെയ്യാം: ആവശ്യമെങ്കിൽ അക്കൗണ്ടും വിവരങ്ങളും പൂർണ്ണമായി നീക്കം ചെയ്യാൻ അപേക്ഷിക്കാം.",
      "നിയമാനുസൃത സൂക്ഷിപ്പ്: ടാക്സ്, ജി.എസ്.ടി രേഖകൾ നിയമപരമായ കാലയളവിൽ മാത്രം സുരക്ഷിതമായി സൂക്ഷിക്കുന്നു.",
    ],
  },
  {
    id: 7,
    num: "07",
    icon: "🛡️",
    tagEn: "Security & Contact",
    tagMl: "സുരക്ഷയും ബന്ധപ്പെടലും",
    titleEn: "7. Security Measures & Privacy Officer",
    titleMl: "7. സുരക്ഷാ ക്രമീകരണങ്ങളും പരാതി പരിഹാരവും",
    summaryEn:
      "We implement TLS 1.3 encryption, role-based access control, and dedicated Grievance Officer support for all privacy inquiries.",
    summaryMl:
      "ഡാറ്റാ ചോർച്ച തടയാനായി എൻഡ്-ടു-എൻഡ് എൻക്രിപ്ഷൻ ഏർപ്പെടുത്തിയിട്ടുണ്ട്. സംശയങ്ങൾക്കും പരാതികൾക്കും ഞങ്ങളുടെ പ്രൈവസി ഓഫീസറെ ബന്ധപ്പെടാം.",
    detailsEn: [
      "End-to-End Encryption: Sensitive network payloads and telematics are transmitted using industry-grade TLS 1.3 cryptographic protocols.",
      "Strict Access Controls: Only authorized operations staff have restricted, audited access to resolve dispatch issues.",
      "Regular Security Audits: Continuous automated vulnerability scans protect against external threats and data breaches.",
      "Privacy Officer Contact: For any privacy inquiries or grievance redressal, email us at teme.ridingo@gmail.com.",
    ],
    detailsMl: [
      "എൻഡ്-ടു-എൻഡ് എൻക്രിപ്ഷൻ: അത്യാധുനിക എൻക്രിപ്ഷൻ സാങ്കേതികവിദ്യ വഴി ഡാറ്റ സുരക്ഷിതമാക്കിയിരിക്കുന്നു.",
      "നിയന്ത്രിത പ്രവേശനം: അംഗീകൃത ഉദ്യോഗസ്ഥർക്ക് മാത്രമേ അത്യാവശ്യ ഘട്ടങ്ങളിൽ വിവരങ്ങൾ പരിശോധിക്കാൻ അനുമതിയുള്ളൂ.",
      "സുരക്ഷാ പരിശോധനകൾ: പ്ലാറ്റ്‌ഫോമിന്റെ സൈബർ സുരക്ഷ ഉറപ്പുവരുത്താൻ നിരന്തര പരിശോധനകൾ നടത്തുന്നു.",
      "പരാതി പരിഹാര ഓഫീസർ: പ്രൈവസി സംബന്ധമായ സംശയങ്ങൾക്ക് teme.ridingo@gmail.com വഴി ബന്ധപ്പെടാം.",
    ],
  },
];

export function PrivacyPage() {
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
    setOpenIds(privacyData.map((t) => t.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  const isAllExpanded = openIds.length === privacyData.length;

  const filteredData = privacyData.filter((t) => {
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
      {/* Top Navigation Bar (Fixed in English UI) */}
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
                type="button"
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
                type="button"
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
              <span>Home</span>
            </Link>

            {/* Terms Link */}
            <Link
              to="/terms"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border/80 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <span>Terms & Conditions</span>
            </Link>

            {/* App CTA */}
            <a
              href="#/privacy"
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
              App
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 mx-auto w-full max-w-[1100px] px-6 py-12 lg:px-10 lg:py-16">
        {/* Breadcrumb & Section Header */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-extrabold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Privacy & Security
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-none">
                Privacy Policy
              </h1>
              <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
                {lang === "en"
                  ? "Learn how Ridingo collects, utilizes, safeguards, and protects your personal telemetry and vehicle information under Indian data protection laws."
                  : "റൈഡിംഗോ ആപ്പ് നിങ്ങളുടെ സ്വകാര്യ വിവരങ്ങളും യാത്രാ ഡാറ്റയും എങ്ങനെ സുരക്ഷിതമായി കൈകാര്യം ചെയ്യുന്നുവെന്ന് ഇവിടെ വായിക്കാം."}
              </p>
            </div>

            {/* Document Meta Pill */}
            <div className="shrink-0 text-left md:text-right text-xs text-muted-foreground space-y-1">
              <div>
                <span className="font-semibold text-foreground">Compliance: </span>
                DPDP Act 2023
              </div>
              <div>
                <span className="font-semibold text-foreground">Last Updated: </span>
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
              placeholder="Search privacy clauses (e.g. GPS, data sharing, payments, rights)..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-background border border-border/80 focus:border-taxi focus:outline-none text-foreground placeholder:text-muted-foreground"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Expand/Collapse All Button */}
          <div className="flex items-center justify-between sm:justify-end gap-2">
            <button
              type="button"
              onClick={isAllExpanded ? collapseAll : expandAll}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-card hover:bg-secondary text-foreground text-xs font-bold border border-border shadow-sm transition-all cursor-pointer"
            >
              <span>{isAllExpanded ? "−" : "+"}</span>
              <span>{isAllExpanded ? "Collapse All" : "Expand All"}</span>
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="mt-6 space-y-4 text-left">
          {filteredData.length === 0 ? (
            <div className="p-12 text-center rounded-3xl border border-dashed border-border bg-card/40">
              <p className="text-muted-foreground text-sm">
                No matching privacy topics found. Try a different keyword.
              </p>
            </div>
          ) : (
            filteredData.map((item) => {
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
                          Detailed Standards & Protection:
                        </span>
                        <ul className="space-y-2.5 pt-1">
                          {(lang === "en" ? item.detailsEn : item.detailsMl).map(
                            (point, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90 leading-relaxed bg-background/60 p-3 rounded-xl border border-border/40"
                              >
                                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-[10px] mt-0.5 shadow-sm">
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

        {/* Security & Grievance Notice Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-ink text-bone text-left shadow-xl border border-ink space-y-4">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-taxi text-ink text-base font-black">
              🛡️
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                Grievance & Privacy Inquiries
              </h3>
              <p className="text-xs text-bone/70">
                {lang === "en"
                  ? "For data requests, corrections, or privacy officer contact, reach us directly anytime."
                  : "നിങ്ങളുടെ വിവരങ്ങൾ തിരുത്താനോ സംശയങ്ങൾ ചോദിക്കാനോ പ്രൈവസി ഓഫീസറുമായി ബന്ധപ്പെടാം."}
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 text-xs text-bone/80">
            <span>Official Data Protection Contact:</span>
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

      {/* Page Footer (Fixed in English UI) */}
      <footer className="border-t border-border bg-card/60 py-8 px-6 lg:px-10 text-xs text-muted-foreground">
        <div className="mx-auto max-w-[1100px] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Ridingo Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Top ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
