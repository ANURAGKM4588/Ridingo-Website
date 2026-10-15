import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import ridingoLogo from "@/assets/ridingo-logo.png";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "CRM Admin Panel — Ridingo (ridingo.in/admin)" },
      {
        name: "description",
        content: "Official Ridingo Executive CRM Admin Panel for Driver KYC approvals, trip calculations, and customer telemetry."
      }
    ],
  }),
  component: AdminPage,
});

// Sleek vector SVG icon system (100% emoji-free, minimal, crisp)
const Icons = {
  Grid: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>
    </svg>
  ),
  SteeringWheel: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/><path d="M12 2v8"/><path d="m4.93 18.07 5.66-5.66"/><path d="m19.07 18.07-5.66-5.66"/>
    </svg>
  ),
  Chart: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
    </svg>
  ),
  Route: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a4.5 4.5 0 0 0 0-9H7a3 3 0 0 1 0-6h11"/><circle cx="18" cy="4" r="3"/>
    </svg>
  ),
  Users: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Search: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
    </svg>
  ),
  Phone: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Mail: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  MapPin: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  IdCard: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>
    </svg>
  ),
  Check: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Close: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/>
    </svg>
  ),
  Calendar: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
  ),
  Car: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11.1 2 11.5 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 17h10"/>
    </svg>
  )
};

interface DriverProfile {
  id: string;
  name: string;
  phone: string;
  email: string;
  homeAddress: string;
  street: string;
  city: string;
  pincode: string;
  state: string;
  nationality: string;
  dlNumber: string;
  dlPhoto?: string | null;
  aadharNumber: string;
  aadharPhoto?: string | null;
  avatar?: string | null;
  category: "new_registration" | "old_registered";
  status: "pending" | "approved" | "rejected" | "suspended";
  registeredAt: string;
  rating?: number;
  tripsCompleted?: number;
  totalEarnings?: number;
}

const DEFAULT_DRIVERS: DriverProfile[] = [
  {
    id: "DRV-8492",
    name: "Arun Madhavan",
    phone: "+91 94471 28392",
    email: "arun.madhavan@gmail.com",
    homeAddress: "TC 14/820, Silver Cascade",
    street: "Vazhuthacaud Junction",
    city: "Thiruvananthapuram",
    pincode: "695014",
    state: "Kerala",
    nationality: "India",
    dlNumber: "KL-01-20190038291",
    dlPhoto: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80",
    aadharNumber: "4829 1928 4719",
    aadharPhoto: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    category: "new_registration",
    status: "pending",
    registeredAt: "2026-10-14T10:30:00Z",
    rating: 5.0,
    tripsCompleted: 0,
    totalEarnings: 0
  },
  {
    id: "DRV-9120",
    name: "Fahad K Mohammed",
    phone: "+91 98952 48190",
    email: "fahad.k.mohammed@outlook.com",
    homeAddress: "Skyline Topaz, Flat 4B",
    street: "Infopark Expressway, Kakkanad",
    city: "Kochi",
    pincode: "682030",
    state: "Kerala",
    nationality: "India",
    dlNumber: "KL-07-20210049281",
    dlPhoto: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80",
    aadharNumber: "5938 1029 3810",
    aadharPhoto: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    category: "new_registration",
    status: "pending",
    registeredAt: "2026-10-15T08:15:00Z",
    rating: 5.0,
    tripsCompleted: 0,
    totalEarnings: 0
  },
  {
    id: "DRV-1001",
    name: "Ravi Kumar",
    phone: "+91 98401 23456",
    email: "ravi.kumar@ridingo.in",
    homeAddress: "Door 12/481, Near North Railway Station",
    street: "Ashoka Road, Kaloor",
    city: "Kochi",
    pincode: "682017",
    state: "Kerala",
    nationality: "India",
    dlNumber: "KL-07-20160049281",
    dlPhoto: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80",
    aadharNumber: "8923 1049 2841",
    aadharPhoto: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    category: "old_registered",
    status: "approved",
    registeredAt: "2025-04-10T11:00:00Z",
    rating: 4.9,
    tripsCompleted: 242,
    totalEarnings: 84600
  },
  {
    id: "DRV-2042",
    name: "Sujith V Nair",
    phone: "+91 97450 19283",
    email: "sujith.nair@gmail.com",
    homeAddress: "Souparnika, Civil Line Road",
    street: "Palarivattom Junction",
    city: "Kochi",
    pincode: "682025",
    state: "Kerala",
    nationality: "India",
    dlNumber: "KL-07-20140029103",
    dlPhoto: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80",
    aadharNumber: "6720 1938 4920",
    aadharPhoto: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    category: "old_registered",
    status: "approved",
    registeredAt: "2024-11-20T14:20:00Z",
    rating: 4.85,
    tripsCompleted: 184,
    totalEarnings: 68400
  },
  {
    id: "DRV-3108",
    name: "Manoj P V",
    phone: "+91 98470 55123",
    email: "manoj.pv@kerala.in",
    homeAddress: "Green Meadows, Flat 3C",
    street: "Near Pipeline Junction",
    city: "Kochi",
    pincode: "682024",
    state: "Kerala",
    nationality: "India",
    dlNumber: "KL-07-20150039201",
    dlPhoto: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80",
    aadharNumber: "9012 4819 2810",
    aadharPhoto: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    category: "old_registered",
    status: "approved",
    registeredAt: "2025-01-15T09:00:00Z",
    rating: 4.95,
    tripsCompleted: 310,
    totalEarnings: 112000
  }
];

function AdminPage() {
  const [activeTab, setActiveTab] = useState<"drivers" | "telemetry" | "trips" | "users">("drivers");
  const [driverCategory, setDriverCategory] = useState<"all" | "new_registration" | "old_registered">("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const [drivers, setDrivers] = useState<DriverProfile[]>(() => {
    try {
      const saved = localStorage.getItem("ridingo_registered_drivers_registry");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return DEFAULT_DRIVERS;
  });

  const [selectedDriver, setSelectedDriver] = useState<DriverProfile | null>(null);
  const [isPhotoPreviewOpen, setIsPhotoPreviewOpen] = useState<string | null>(null);
  const [isAddDriverOpen, setIsAddDriverOpen] = useState(false);
  const [rejectModalDriverId, setRejectModalDriverId] = useState<string | null>(null);
  const [rejectReasonInput, setRejectReasonInput] = useState("");

  // New Driver Form state
  const [newDriverName, setNewDriverName] = useState("");
  const [newDriverPhone, setNewDriverPhone] = useState("");
  const [newDriverEmail, setNewDriverEmail] = useState("");
  const [newDriverAddress, setNewDriverAddress] = useState("");
  const [newDriverCity, setNewDriverCity] = useState("Kochi");
  const [newDriverPin, setNewDriverPin] = useState("682030");
  const [newDriverDl, setNewDriverDl] = useState("");
  const [newDriverAadhar, setNewDriverAadhar] = useState("");

  // Revenue simulator state
  const [simFare, setSimFare] = useState<number>(850);
  const [simCommission, setSimCommission] = useState<number>(15);
  const [simTripVolume, setSimTripVolume] = useState<number>(20);

  const newCount = useMemo(() => drivers.filter(d => d.status === "pending" || d.category === "new_registration").length, [drivers]);
  const oldCount = useMemo(() => drivers.filter(d => d.status === "approved" || d.category === "old_registered").length, [drivers]);

  const totalGmv = useMemo(() => drivers.reduce((acc, d) => acc + (d.totalEarnings ? d.totalEarnings / 0.85 : 0), 142850), [drivers]);
  const netCommission = useMemo(() => Math.round(totalGmv * 0.15), [totalGmv]);
  const driverPayouts = useMemo(() => Math.round(totalGmv * 0.85), [totalGmv]);
  const totalCompletedTrips = useMemo(() => drivers.reduce((acc, d) => acc + (d.tripsCompleted || 0), 184), [drivers]);

  const filteredDrivers = useMemo(() => {
    return drivers.filter(d => {
      if (driverCategory === "new_registration" && d.category !== "new_registration" && d.status !== "pending") return false;
      if (driverCategory === "old_registered" && d.category !== "old_registered" && d.status !== "approved") return false;
      if (statusFilter !== "all" && d.status !== statusFilter) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        d.name.toLowerCase().includes(q) ||
        d.id.toLowerCase().includes(q) ||
        d.phone.includes(q) ||
        d.email.toLowerCase().includes(q) ||
        d.city.toLowerCase().includes(q) ||
        d.pincode.includes(q)
      );
    });
  }, [drivers, driverCategory, statusFilter, searchQuery]);

  const handleApprove = (id: string) => {
    const updated = drivers.map(d => {
      if (d.id === id) {
        return { ...d, category: "old_registered" as const, status: "approved" as const };
      }
      return d;
    });
    setDrivers(updated);
    try {
      localStorage.setItem("ridingo_registered_drivers_registry", JSON.stringify(updated));
    } catch (e) {}
    if (selectedDriver?.id === id) {
      setSelectedDriver(prev => prev ? { ...prev, category: "old_registered", status: "approved" } : null);
    }
  };

  const handleOpenRejectModal = (id: string) => {
    setRejectModalDriverId(id);
    setRejectReasonInput("Document photo blurry / Address mismatch");
  };

  const handleConfirmReject = () => {
    if (!rejectModalDriverId) return;
    const updated = drivers.map(d => {
      if (d.id === rejectModalDriverId) {
        return { ...d, status: "rejected" as const };
      }
      return d;
    });
    setDrivers(updated);
    try {
      localStorage.setItem("ridingo_registered_drivers_registry", JSON.stringify(updated));
    } catch (e) {}
    if (selectedDriver?.id === rejectModalDriverId) {
      setSelectedDriver(prev => prev ? { ...prev, status: "rejected" } : null);
    }
    setRejectModalDriverId(null);
  };

  const handleToggleSuspend = (id: string) => {
    const updated = drivers.map(d => {
      if (d.id === id) {
        return { ...d, status: (d.status === "suspended" ? "approved" : "suspended") as any };
      }
      return d;
    });
    setDrivers(updated);
    try {
      localStorage.setItem("ridingo_registered_drivers_registry", JSON.stringify(updated));
    } catch (e) {}
    if (selectedDriver?.id === id) {
      const found = updated.find(d => d.id === id);
      if (found) setSelectedDriver(found);
    }
  };

  const handleCreateDriver = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDriverName || !newDriverPhone || !newDriverEmail) return;

    const newDrv: DriverProfile = {
      id: `DRV-${Math.floor(1000 + Math.random() * 9000)}`,
      name: newDriverName.trim(),
      phone: newDriverPhone.trim(),
      email: newDriverEmail.trim(),
      homeAddress: newDriverAddress.trim() || "Residential Address",
      street: "Main Avenue",
      city: newDriverCity.trim() || "Kochi",
      pincode: newDriverPin.trim() || "682030",
      state: "Kerala",
      nationality: "India",
      dlNumber: newDriverDl.trim().toUpperCase() || "KL-07-20220038291",
      aadharNumber: newDriverAadhar.trim() || "XXXX XXXX 9988",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      category: "new_registration",
      status: "pending",
      registeredAt: new Date().toISOString()
    };

    const updated = [newDrv, ...drivers];
    setDrivers(updated);
    try {
      localStorage.setItem("ridingo_registered_drivers_registry", JSON.stringify(updated));
    } catch (e) {}
    setIsAddDriverOpen(false);
    setSelectedDriver(newDrv);
    setNewDriverName("");
    setNewDriverPhone("");
    setNewDriverEmail("");
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#121316] flex flex-col md:flex-row font-sans antialiased">
      {/* Sidebar - Modern Minimal Light Theme */}
      <aside className="w-full md:w-70 bg-white border-r border-black/5 p-7 flex flex-col justify-between shrink-0">
        <div>
          {/* Logo & CRM Badge */}
          <div className="flex items-center justify-between mb-8 px-1">
            <Link to="/" className="flex items-center gap-2">
              <img src={ridingoLogo} alt="Ridingo" className="h-8 object-contain" />
            </Link>
            <span className="font-display text-[10.5px] font-extrabold uppercase bg-[#FFC70A] text-black px-2.5 py-1 rounded-md tracking-wider">
              CRM
            </span>
          </div>

          {/* Quick Domain & Live Status (Inset Pill Style) */}
          <div className="bg-[#F5F6F8] border border-black/5 rounded-2xl p-4 mb-6">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10.5px] text-[#4B5563] font-bold uppercase tracking-wider">
                Production CRM
              </span>
              <span className="text-[11px] text-[#10B981] font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block animate-pulse" />
                Live
              </span>
            </div>
            <span className="text-xs text-[#121316] font-semibold block">ridingo.in/admin</span>
          </div>

          {/* Navigation Links */}
          <div className="mb-2 px-2">
            <span className="text-[10.5px] text-[#6B7280] font-bold uppercase tracking-wider">
              Operations
            </span>
          </div>

          <nav className="flex flex-col gap-1.5">
            {[
              { id: "drivers", label: "Drivers & KYC", badge: newCount > 0 ? `${newCount} New` : null },
              { id: "telemetry", label: "Trip Revenue Engine" },
              { id: "trips", label: "Live Trips & Dispatch", badge: "184" },
              { id: "users", label: "Customer Accounts", badge: "24" }
            ].map(item => {
              const active = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(item.id as any);
                    setSelectedDriver(null);
                  }}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition ${
                    active ? "bg-[#F5F6F8] text-[#121316] border border-[#E5E7EB] font-bold" : "text-[#4B5563] hover:text-[#121316] hover:bg-[#F5F6F8]/60"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${
                      active ? "bg-[#FFC70A] text-black" : "bg-[#EEEEF2] text-[#121316]"
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer */}
        <div className="border-t border-black/5 pt-5 mt-6">
          <Link
            to="/"
            className="text-xs text-[#4B5563] hover:text-[#121316] flex items-center justify-between transition py-1"
          >
            <span>&larr; Back to Website</span>
            <span className="text-[11px] font-semibold text-[#FFC70A]">ridingo.in</span>
          </Link>
        </div>
      </aside>

      {/* Main Viewport */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header Bar */}
        <header className="h-[76px] bg-white border-b border-black/5 px-9 flex items-center justify-between shrink-0">
          <div>
            <h1 className="font-display text-xl font-extrabold text-[#121316] tracking-tight">
              {activeTab === "drivers" && "Drivers & KYC Management"}
              {activeTab === "telemetry" && "Trip Revenue & Tariff Calculator"}
              {activeTab === "trips" && "Live Trips & Dispatch Telemetry"}
              {activeTab === "users" && "Customer Profiles & Lifetime Value"}
            </h1>
            <span className="text-xs text-[#4B5563] mt-0.5 block">
              Modern Minimal CRM • Ridingo Executive Operations (Kerala Network)
            </span>
          </div>

          <div className="flex items-center gap-3">
            {activeTab === "drivers" && (
              <button
                type="button"
                onClick={() => setIsAddDriverOpen(true)}
                className="bg-[#121316] text-white hover:bg-black px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-sm flex items-center gap-2"
              >
                <span className="text-sm leading-none">+</span>
                <span>Register Driver</span>
              </button>
            )}

            <div className="bg-[#F5F6F8] border border-black/5 rounded-xl px-4 py-2 text-xs text-[#4B5563] font-semibold flex items-center gap-2">
              <Icons.Calendar />
              <span>{new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="p-9 flex-1 flex flex-col gap-7">
          {/* Executive Metrics Ribbon (Spacious, High-Contrast) */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* GMV */}
            <div className="bg-white border border-black/5 rounded-3xl p-6 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.07)]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-[#4B5563] font-bold uppercase tracking-wider">
                  Gross Trip Volume (GMV)
                </span>
                <span className="text-[11px] text-[#10B981] font-extrabold bg-[#ECFDF5] px-2.5 py-0.5 rounded-md">
                  +18.4%
                </span>
              </div>
              <div className="font-display text-[26px] font-extrabold text-[#121316] tracking-tight my-1">
                ₹{totalGmv.toLocaleString("en-IN")}
              </div>
              <span className="text-xs text-[#4B5563]">
                Total verified booking value
              </span>
            </div>

            {/* Platform Revenue (15%) */}
            <div className="bg-white border border-black/5 rounded-3xl p-6 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.07)]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-[#4B5563] font-bold uppercase tracking-wider">
                  Platform Net (15%)
                </span>
                <span className="text-[11px] font-extrabold bg-[#FFF8DB] text-[#855D00] px-2.5 py-0.5 rounded-md">
                  15% Take-Rate
                </span>
              </div>
              <div className="font-display text-[26px] font-extrabold text-[#121316] tracking-tight my-1">
                ₹{netCommission.toLocaleString("en-IN")}
              </div>
              <span className="text-xs text-[#4B5563]">
                Retained platform revenue
              </span>
            </div>

            {/* Chauffeur Share (85%) */}
            <div className="bg-white border border-black/5 rounded-3xl p-6 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.07)]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-[#4B5563] font-bold uppercase tracking-wider">
                  Chauffeur Payouts (85%)
                </span>
                <span className="text-[11px] text-[#10B981] font-extrabold bg-[#ECFDF5] px-2.5 py-0.5 rounded-md">
                  Settled
                </span>
              </div>
              <div className="font-display text-[26px] font-extrabold text-[#121316] tracking-tight my-1">
                ₹{driverPayouts.toLocaleString("en-IN")}
              </div>
              <span className="text-xs text-[#4B5563]">
                Settled to verified partner chauffeurs
              </span>
            </div>

            {/* Completed Trips */}
            <div className="bg-white border border-black/5 rounded-3xl p-6 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.07)]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-[#4B5563] font-bold uppercase tracking-wider">
                  Completed Trips
                </span>
                <span className="text-[11px] text-[#3B82F6] font-extrabold bg-[#EFF6FF] px-2.5 py-0.5 rounded-md">
                  100% Fulfilled
                </span>
              </div>
              <div className="font-display text-[26px] font-extrabold text-[#121316] tracking-tight my-1">
                {totalCompletedTrips} rides
              </div>
              <span className="text-xs text-[#4B5563]">
                Zero cancellation rate across network
              </span>
            </div>
          </section>

          {/* TAB 1: DRIVERS REGISTRY */}
          {activeTab === "drivers" && (
            <div>
              {/* Category Segmented Control & Filter Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                {/* Segmented Control */}
                <div className="bg-[#F5F6F8] border border-black/5 p-1 rounded-2xl flex">
                  <button
                    type="button"
                    onClick={() => {
                      setDriverCategory("all");
                      setSelectedDriver(null);
                    }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition ${
                      driverCategory === "all" ? "bg-white text-[#121316] shadow-sm" : "text-[#4B5563]"
                    }`}
                  >
                    <span>All Chauffeurs</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#EEEEF2] text-[#121316]">
                      {drivers.length}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setDriverCategory("new_registration");
                      setSelectedDriver(null);
                    }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition ${
                      driverCategory === "new_registration" ? "bg-white text-[#121316] shadow-sm" : "text-[#4B5563]"
                    }`}
                  >
                    <span>New Registrations</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#FFFBEB] text-[#B45309]">
                      {newCount}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setDriverCategory("old_registered");
                      setSelectedDriver(null);
                    }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition ${
                      driverCategory === "old_registered" ? "bg-white text-[#121316] shadow-sm" : "text-[#4B5563]"
                    }`}
                  >
                    <span>Verified Chauffeurs</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#047857]">
                      {oldCount}
                    </span>
                  </button>
                </div>

                {/* Filter and Search */}
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Search by Name, ID, PIN, Phone..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-xs text-[#121316] outline-none w-72 shadow-2xs font-medium"
                    />
                  </div>
                  <select
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value)}
                    className="bg-white border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 text-xs text-[#121316] outline-none shadow-2xs cursor-pointer font-medium"
                  >
                    <option value="all">All Statuses</option>
                    <option value="pending">Pending Review</option>
                    <option value="approved">Approved</option>
                    <option value="suspended">Suspended</option>
                  </select>
                </div>
              </div>

              {/* Drivers Grid / Split View */}
              <div className={`grid gap-6 ${selectedDriver ? "grid-cols-1 lg:grid-cols-[1fr_420px]" : "grid-cols-1"}`}>
                <div className="flex flex-col gap-3.5">
                  {filteredDrivers.length === 0 ? (
                    <div className="bg-white border border-black/5 rounded-3xl p-14 text-center">
                      <b className="text-base text-[#121316] block mb-1">No chauffeur records found</b>
                      <p className="text-xs text-[#4B5563]">
                        Try adjusting your search criteria or switch categories.
                      </p>
                    </div>
                  ) : (
                    filteredDrivers.map(drv => {
                      const isSelected = selectedDriver?.id === drv.id;
                      return (
                        <div
                          key={drv.id}
                          onClick={() => setSelectedDriver(drv)}
                          className={`p-4.5 rounded-2xl border transition cursor-pointer flex items-center justify-between shadow-2xs ${
                            isSelected
                              ? "bg-[#FFFCF0] border-[#FFC70A] ring-1 ring-[#FFC70A]"
                              : "bg-white border-black/5 hover:border-[#DCE0E7]"
                          }`}
                        >
                          <div className="flex items-center gap-4 min-w-0">
                            <div className="w-13 h-13 rounded-2xl bg-[#F5F6F8] border border-black/5 overflow-hidden flex items-center justify-center font-bold text-sm shrink-0">
                              {drv.avatar ? (
                                <img src={drv.avatar} alt={drv.name} className="w-full h-full object-cover" />
                              ) : (
                                drv.name[0]
                              )}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <b className="text-sm text-[#121316] truncate">{drv.name}</b>
                                <span className="text-[11px] font-extrabold bg-[#F5F6F8] px-2 py-0.5 rounded text-[#121316]">
                                  {drv.id}
                                </span>
                              </div>
                              <div className="flex items-center gap-4 text-xs text-[#4B5563]">
                                <span>{drv.phone}</span>
                                <span>{drv.city} (PIN: <strong className="text-[#121316]">{drv.pincode}</strong>)</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md border ${
                              drv.status === "approved"
                                ? "bg-[#ECFDF5] text-[#047857] border-[#A7F3D0]"
                                : drv.status === "pending"
                                ? "bg-[#FFFBEB] text-[#B45309] border-[#FDE68A]"
                                : "bg-[#FEF2F2] text-[#B91C1C] border-[#FECACA]"
                            }`}>
                              {drv.status === "pending" ? "Pending Review" : drv.status}
                            </span>

                            {drv.status === "pending" && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleApprove(drv.id);
                                }}
                                className="bg-[#10B981] hover:bg-[#059669] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition shadow-xs flex items-center gap-1.5"
                              >
                                <Icons.Check />
                                <span>Approve</span>
                              </button>
                            )}

                            <span className="text-xs text-[#9CA3AF]">&rarr;</span>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Driver Detail Drawer / Card (EXACT UI STYLE FROM REFERENCE) */}
                {selectedDriver && (
                  <div className="bg-white rounded-[28px] border border-black/5 overflow-hidden shadow-[0_20px_45px_-15px_rgba(0,0,0,0.09),0_2px_6px_rgba(0,0,0,0.02)] sticky top-6 h-fit flex flex-col">
                    {/* Top Scenic Sky & Clouds Banner */}
                    <div
                      className="h-[140px] relative p-4 flex items-start justify-between"
                      style={{
                        background: "linear-gradient(180deg, #A8C7DF 0%, #C3DAED 45%, #DFEDF7 80%, #EFF6FC 100%)",
                        backgroundImage: "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 50%), radial-gradient(ellipse at 25% 60%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 45%), linear-gradient(180deg, #99C3E3 0%, #BFE0F7 60%, #E3F1FC 100%)"
                      }}
                    >
                      {/* Top Left: Driver ID Pill */}
                      <span className="text-[11px] font-extrabold bg-white/85 backdrop-blur-md text-[#121316] px-2.5 py-1 rounded-full shadow-xs tracking-wider">
                        {selectedDriver.id}
                      </span>

                      {/* Top Right: Status Badge & Close */}
                      <div className="flex items-center gap-1.5">
                        {selectedDriver.status === "pending" ? (
                          <button
                            type="button"
                            onClick={() => handleApprove(selectedDriver.id)}
                            className="text-xs font-bold bg-white text-[#121316] px-3.5 py-1.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-1"
                          >
                            <span>Approve</span>
                            <span className="font-extrabold text-sm">+</span>
                          </button>
                        ) : (
                          <span className="text-xs font-bold bg-white text-[#047857] px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                            <Icons.Check />
                            <span>Partner</span>
                          </span>
                        )}

                        <button
                          type="button"
                          onClick={() => setSelectedDriver(null)}
                          className="w-7 h-7 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center text-xs text-[#121316] shadow-xs"
                        >
                          <Icons.Close />
                        </button>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-6 pb-6 flex flex-col items-center text-center">
                      {/* Overlapping Circular Avatar with Rainbow Iridescent Ring */}
                      <div className="-mt-11 mb-2.5 relative">
                        <div
                          className="w-[88px] h-[88px] rounded-full p-[3.5px] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.12)]"
                          style={{
                            background: "conic-gradient(from 180deg at 50% 50%, #FFC70A 0deg, #10B981 72deg, #06B6D4 144deg, #3B82F6 216deg, #8B5CF6 288deg, #EC4899 330deg, #FFC70A 360deg)"
                          }}
                        >
                          <div className="w-full h-full rounded-full border-[3px] border-white overflow-hidden bg-white">
                            {selectedDriver.avatar ? (
                              <img src={selectedDriver.avatar} alt={selectedDriver.name} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full bg-[#F5F6F8] flex items-center justify-center font-extrabold text-xl text-[#121316]">
                                {selectedDriver.name[0]}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* exp. Multi-color Segmented Progress Bar */}
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="text-[11px] text-[#9CA3AF] font-semibold">exp.</span>
                        <div className="flex gap-[2.5px] items-center">
                          {["#8B5CF6", "#6366F1", "#3B82F6", "#06B6D4", "#10B981", "#F59E0B", "#EF4444", "#E5E7EB", "#E5E7EB"].map((color, idx) => (
                            <div
                              key={idx}
                              className="w-1 h-2.5 rounded-[2px]"
                              style={{
                                background: idx < (selectedDriver.status === "approved" ? 7 : 3) ? color : "#E5E7EB"
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Driver Name & Subtitle / Bio */}
                      <b className="font-display text-xl font-extrabold text-[#121316] tracking-tight mb-1">
                        {selectedDriver.name}
                      </b>
                      <p className="text-xs text-[#4B5563] mb-4 leading-relaxed max-w-[280px]">
                        {selectedDriver.category === "new_registration"
                          ? "New partner applicant • Verification in progress for Kerala chauffeur network."
                          : "Ridingo Executive Chauffeur focusing on safety, punctuality & premium rider comfort."}
                      </p>

                      {/* 3-Column Stats Container (Exact Inset Pill from Reference) */}
                      <div className="w-full bg-[#F5F6F8] rounded-[20px] p-3.5 grid grid-cols-3 text-center mb-4 border border-black/5">
                        <div>
                          <div className="font-display text-base font-extrabold text-[#121316] tracking-tight">
                            {selectedDriver.tripsCompleted || (selectedDriver.status === "approved" ? 184 : 0)}
                          </div>
                          <div className="text-[11px] text-[#4B5563] font-semibold mt-0.5">Trips</div>
                        </div>

                        <div className="border-x border-[#E5E7EB]">
                          <div className="font-display text-base font-extrabold text-[#121316] tracking-tight">
                            {selectedDriver.rating ? `${selectedDriver.rating}` : "5.0"}
                          </div>
                          <div className="text-[11px] text-[#4B5563] font-semibold mt-0.5">Rating</div>
                        </div>

                        <div>
                          <div className="font-display text-base font-extrabold text-[#121316] tracking-tight">
                            {selectedDriver.totalEarnings
                              ? `₹${(selectedDriver.totalEarnings / 1000).toFixed(0)}K`
                              : (selectedDriver.status === "approved" ? "₹68K" : "₹0")}
                          </div>
                          <div className="text-[11px] text-[#4B5563] font-semibold mt-0.5">Earnings</div>
                        </div>
                      </div>

                      {/* Bottom Quick Contact Row (Clean Outline SVG Icons) */}
                      <div className="flex items-center justify-center gap-4 mb-4 py-1">
                        <a
                          href={`tel:${selectedDriver.phone}`}
                          title={`Call ${selectedDriver.phone}`}
                          className="w-9 h-9 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center text-[#121316] shadow-xs hover:scale-105 transition"
                        >
                          <Icons.Phone />
                        </a>

                        <a
                          href={`mailto:${selectedDriver.email}`}
                          title={`Email ${selectedDriver.email}`}
                          className="w-9 h-9 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center text-[#121316] shadow-xs hover:scale-105 transition"
                        >
                          <Icons.Mail />
                        </a>

                        <button
                          type="button"
                          onClick={() => alert(`Address: ${selectedDriver.homeAddress}, ${selectedDriver.street}, ${selectedDriver.city} - PIN: ${selectedDriver.pincode}`)}
                          title={`Location: ${selectedDriver.city} (PIN: ${selectedDriver.pincode})`}
                          className="w-9 h-9 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center text-[#121316] shadow-xs hover:scale-105 transition"
                        >
                          <Icons.MapPin />
                        </button>

                        <button
                          type="button"
                          onClick={() => selectedDriver.dlPhoto && setIsPhotoPreviewOpen(selectedDriver.dlPhoto)}
                          title="View Compliance Dossier"
                          className="w-9 h-9 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center text-[#121316] shadow-xs hover:scale-105 transition"
                        >
                          <Icons.IdCard />
                        </button>
                      </div>

                      {/* Expandable KYC Dossier & Document Inspection */}
                      <div className="w-full bg-[#F9FAFB] rounded-2xl border border-black/5 p-4 text-left flex flex-col gap-2.5 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-[#4B5563] uppercase font-bold tracking-wider">
                            Full Address & PIN
                          </span>
                          <span className="text-[11px] font-extrabold bg-[#FFF8DB] text-[#855D00] px-2 py-0.5 rounded">
                            PIN: {selectedDriver.pincode || "682030"}
                          </span>
                        </div>
                        <div className="text-[#121316] leading-relaxed font-medium">
                          {selectedDriver.homeAddress ? `${selectedDriver.homeAddress}, ${selectedDriver.street}` : "TC 14/820, Silver Cascade, Vazhuthacaud"}, {selectedDriver.city}, {selectedDriver.state}
                        </div>

                        {/* Document Photo Cards */}
                        <div className="grid grid-cols-2 gap-2.5 mt-1">
                          <div
                            onClick={() => selectedDriver.dlPhoto && setIsPhotoPreviewOpen(selectedDriver.dlPhoto)}
                            className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] cursor-pointer hover:border-[#DCE0E7] transition"
                          >
                            <span className="text-[10px] text-[#4B5563] block font-semibold">Licence</span>
                            <b className="text-[11px] text-[#121316] block truncate my-0.5">{selectedDriver.dlNumber}</b>
                            {selectedDriver.dlPhoto ? (
                              <img src={selectedDriver.dlPhoto} alt="DL" className="w-full h-12 rounded-md object-cover" />
                            ) : (
                              <div className="h-12 bg-[#F5F6F8] rounded-md flex items-center justify-center text-xs text-[#4B5563]">Card</div>
                            )}
                          </div>

                          <div
                            onClick={() => selectedDriver.aadharPhoto && setIsPhotoPreviewOpen(selectedDriver.aadharPhoto)}
                            className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] cursor-pointer hover:border-[#DCE0E7] transition"
                          >
                            <span className="text-[10px] text-[#4B5563] block font-semibold">Aadhaar</span>
                            <b className="text-[11px] text-[#121316] block truncate my-0.5">{selectedDriver.aadharNumber}</b>
                            {selectedDriver.aadharPhoto ? (
                              <img src={selectedDriver.aadharPhoto} alt="Aadhaar" className="w-full h-12 rounded-md object-cover" />
                            ) : (
                              <div className="h-12 bg-[#F5F6F8] rounded-md flex items-center justify-center text-xs text-[#4B5563]">Card</div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Primary Actions */}
                      <div className="w-full flex flex-col gap-2 mt-4">
                        {selectedDriver.status !== "approved" && (
                          <button
                            type="button"
                            onClick={() => handleApprove(selectedDriver.id)}
                            className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-2.5 rounded-xl text-xs font-bold transition shadow-xs flex items-center justify-center gap-1.5"
                          >
                            <Icons.Check />
                            <span>Approve KYC & Activate Chauffeur</span>
                          </button>
                        )}

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => handleOpenRejectModal(selectedDriver.id)}
                            className="bg-[#FEF2F2] border border-[#FECACA] text-[#B91C1C] hover:bg-[#FEE2E2] py-2 rounded-xl text-xs font-bold transition"
                          >
                            Reject KYC
                          </button>
                          <button
                            type="button"
                            onClick={() => handleToggleSuspend(selectedDriver.id)}
                            className="bg-[#F5F6F8] border border-[#E5E7EB] text-[#121316] hover:bg-[#EEEEF2] py-2 rounded-xl text-xs font-semibold transition"
                          >
                            {selectedDriver.status === "suspended" ? "Re-activate" : "Suspend"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: TRIP REVENUE & CALCULATOR */}
          {activeTab === "telemetry" && (
            <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-xs">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-display text-base font-extrabold text-[#121316]">
                    Interactive Tariff & Commission Engine
                  </h2>
                  <span className="text-xs text-[#4B5563]">
                    Real-time modeling for GMV, Platform 15% Take-rate, and Driver Payouts
                  </span>
                </div>
                <span className="text-xs font-bold bg-[#FFF8DB] text-[#855D00] px-3 py-1 rounded-lg">
                  15% Standard Fee
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-5">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-[#121316] mb-2">
                      <span>Average Trip Fare</span>
                      <b>₹{simFare}</b>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="5000"
                      step="50"
                      value={simFare}
                      onChange={e => setSimFare(Number(e.target.value))}
                      className="w-full accent-[#FFC70A]"
                    />
                    <div className="flex justify-between text-[11px] text-[#6B7280] mt-1">
                      <span>₹200 (Short Ride)</span>
                      <span>₹5,000 (Airport / Outstation)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-[#121316] mb-2">
                      <span>Platform Commission Rate</span>
                      <b>{simCommission}%</b>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="30"
                      step="1"
                      value={simCommission}
                      onChange={e => setSimCommission(Number(e.target.value))}
                      className="w-full accent-[#FFC70A]"
                    />
                    <div className="flex justify-between text-[11px] text-[#6B7280] mt-1">
                      <span>5% (Promotional Tier)</span>
                      <span>30% (Surge / Premium)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-[#121316] mb-2">
                      <span>Daily Completed Trips</span>
                      <b>{simTripVolume} trips/day</b>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="5"
                      value={simTripVolume}
                      onChange={e => setSimTripVolume(Number(e.target.value))}
                      className="w-full accent-[#FFC70A]"
                    />
                  </div>
                </div>

                <div className="bg-[#F5F6F8] border border-black/5 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-[#4B5563] font-bold uppercase tracking-wider">
                      Per-Ride Revenue Breakdown
                    </span>
                    <div className="flex flex-col gap-2.5 mt-3.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-[#4B5563]">Gross Booking Fare:</span>
                        <b className="text-[#121316]">₹{simFare}</b>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-[#855D00] font-semibold">Ridingo Commission ({simCommission}%):</span>
                        <b className="text-[#855D00]">+ ₹{Math.round(simFare * (simCommission / 100))}</b>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-[#047857] font-semibold">Chauffeur Share ({100 - simCommission}%):</span>
                        <b className="text-[#047857]">₹{Math.round(simFare * ((100 - simCommission) / 100))}</b>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[#E5E7EB] pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[10px] text-[#4B5563] font-bold uppercase tracking-wider block">
                          Monthly Platform Net
                        </span>
                        <div className="font-display text-xl font-extrabold text-[#121316] tracking-tight mt-0.5">
                          ₹{Math.round(simFare * (simCommission / 100) * simTripVolume * 30).toLocaleString("en-IN")}
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#047857] bg-[#ECFDF5] px-2.5 py-1 rounded-md">
                        Projected
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: LIVE TRIPS & DISPATCH */}
          {activeTab === "trips" && (
            <div className="bg-white border border-black/5 rounded-3xl p-7 shadow-xs">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="font-display text-base font-extrabold text-[#121316]">
                    Live Trips & Dispatch Logs
                  </h2>
                  <span className="text-xs text-[#4B5563]">
                    Verified ride telemetry across Kochi and Thiruvananthapuram routes
                  </span>
                </div>
                <span className="text-xs font-bold text-[#10B981] bg-[#ECFDF5] px-2.5 py-1 rounded-md">
                  Real-time
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { id: "TRP-9481", from: "Kakkanad Infopark Phase 2", to: "Cochin International Airport (COK)", fare: 850, time: "12 mins ago" },
                  { id: "TRP-9480", from: "Marine Drive Walkway", to: "Lulu Mall, Edappally", fare: 320, time: "28 mins ago" },
                  { id: "TRP-9479", from: "Panampilly Nagar Main Ave", to: "Fort Kochi Beach", fare: 450, time: "42 mins ago" },
                  { id: "TRP-9478", from: "Vytilla Mobility Hub", to: "Aluva Metro Station", fare: 520, time: "1 hour ago" },
                  { id: "TRP-9477", from: "Thampanoor Central", to: "Technopark Phase 3", fare: 680, time: "2 hours ago" }
                ].map(trip => (
                  <div key={trip.id} className="p-4 rounded-xl bg-[#F5F6F8] border border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#121316] shadow-xs">
                        <Icons.Car />
                      </div>
                      <div>
                        <b className="text-xs text-[#121316]">Trip #{trip.id}</b>
                        <div className="text-[11px] text-[#4B5563] mt-0.5">
                          <span>{trip.from}</span> &rarr; <span>{trip.to}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <b className="text-xs text-[#121316]">₹{trip.fare}</b>
                      <span className="text-[11px] font-bold text-[#047857] bg-[#ECFDF5] px-2.5 py-1 rounded-md">
                        Completed
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CUSTOMER ACCOUNTS */}
          {activeTab === "users" && (
            <div className="bg-white border border-black/5 rounded-3xl p-7 shadow-xs">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="font-display text-base font-extrabold text-[#121316]">
                    Customer Profiles & Lifetime Value
                  </h2>
                  <span className="text-xs text-[#4B5563]">
                    Verified rider accounts synced with Google Authentication & Supabase
                  </span>
                </div>
                <span className="text-xs font-bold text-[#3B82F6] bg-[#EFF6FF] px-2.5 py-1 rounded-md">
                  4 Active Accounts
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { id: "RDU-10821", name: "Anurag K M", email: "anurag@ridingo.in", phone: "+91 98401 23456", city: "Kochi", rides: 14, spent: 11900 },
                  { id: "RDU-29401", name: "Pooja Nair", email: "pooja.nair@gmail.com", phone: "+91 97451 89201", city: "Thiruvananthapuram", rides: 8, spent: 6800 },
                  { id: "RDU-38910", name: "Vishnu Das", email: "vishnu.das@tech.in", phone: "+91 94470 19284", city: "Kozhikode", rides: 22, spent: 18700 },
                  { id: "RDU-48192", name: "Neha Varghese", email: "neha.varghese@gmail.com", phone: "+91 98470 11928", city: "Thrissur", rides: 6, spent: 5100 }
                ].map(usr => (
                  <div key={usr.id} className="p-4 rounded-xl bg-[#F5F6F8] border border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-bold text-xs text-[#121316] shadow-xs">
                        {usr.name[0]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <b className="text-xs text-[#121316]">{usr.name}</b>
                          <span className="text-[10px] bg-white px-1.5 py-0.5 rounded text-[#4B5563]">{usr.id}</span>
                        </div>
                        <div className="text-[11px] text-[#4B5563] mt-0.5">
                          <span>{usr.phone}</span> • <span>{usr.email}</span> • <span>{usr.city}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="text-right">
                        <span className="text-[10px] text-[#6B7280] uppercase block font-semibold">Rides</span>
                        <b className="text-xs text-[#121316]">{usr.rides} rides</b>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-[#6B7280] uppercase block font-semibold">Total Spend</span>
                        <b className="text-xs text-[#047857]">₹{usr.spent.toLocaleString("en-IN")}</b>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* DOCUMENT ZOOM MODAL */}
      {isPhotoPreviewOpen && (
        <div
          onClick={() => setIsPhotoPreviewOpen(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-white rounded-3xl p-6 max-w-xl w-full shadow-2xl flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <b className="text-xs text-[#121316]">Document Inspection Preview</b>
              <button
                type="button"
                onClick={() => setIsPhotoPreviewOpen(null)}
                className="text-[#4B5563] hover:text-black"
              >
                <Icons.Close />
              </button>
            </div>
            <img
              src={isPhotoPreviewOpen}
              alt="Document"
              className="w-full max-h-[70vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}

      {/* REJECT KYC MODAL */}
      {rejectModalDriverId && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl flex flex-col gap-3.5">
            <div className="flex items-center justify-between">
              <b className="text-sm text-[#B91C1C]">Reject Driver KYC</b>
              <button
                type="button"
                onClick={() => setRejectModalDriverId(null)}
                className="text-[#4B5563]"
              >
                <Icons.Close />
              </button>
            </div>
            <p className="text-xs text-[#4B5563]">
              Specify reason for KYC rejection for partner <strong>{rejectModalDriverId}</strong>.
            </p>
            <textarea
              rows={3}
              value={rejectReasonInput}
              onChange={e => setRejectReasonInput(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-[#E5E7EB] text-xs outline-none"
              placeholder="Rejection reason..."
            />
            <div className="flex justify-end gap-2 mt-1">
              <button
                type="button"
                onClick={() => setRejectModalDriverId(null)}
                className="px-3.5 py-1.5 rounded-xl border border-[#E5E7EB] text-xs text-[#121316]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmReject}
                className="px-3.5 py-1.5 rounded-xl bg-[#B91C1C] text-white text-xs font-bold"
              >
                Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD DRIVER MODAL */}
      {isAddDriverOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <form
            onSubmit={handleCreateDriver}
            className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl flex flex-col gap-3.5 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <div>
                <b className="font-display text-base text-[#121316]">Register New Chauffeur Profile</b>
                <span className="text-xs text-[#4B5563] block">Enters executive chauffeur into the active partner pool</span>
              </div>
              <button
                type="button"
                onClick={() => setIsAddDriverOpen(false)}
                className="text-[#4B5563]"
              >
                <Icons.Close />
              </button>
            </div>

            <div className="flex flex-col gap-2.5 text-xs">
              <div>
                <label className="text-[10px] text-[#4B5563] uppercase font-bold block mb-1">Full Legal Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Arun Madhavan"
                  value={newDriverName}
                  onChange={e => setNewDriverName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-[#E5E7EB] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-[#4B5563] uppercase font-bold block mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 94471 28392"
                    value={newDriverPhone}
                    onChange={e => setNewDriverPhone(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#E5E7EB] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-[#4B5563] uppercase font-bold block mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="driver@gmail.com"
                    value={newDriverEmail}
                    onChange={e => setNewDriverEmail(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#E5E7EB] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-[#4B5563] uppercase font-bold block mb-1">Residential Address</label>
                <input
                  type="text"
                  placeholder="TC 14/820, Silver Cascade"
                  value={newDriverAddress}
                  onChange={e => setNewDriverAddress(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-[#E5E7EB] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-[#4B5563] uppercase font-bold block mb-1">City</label>
                  <input
                    type="text"
                    value={newDriverCity}
                    onChange={e => setNewDriverCity(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#E5E7EB] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-[#4B5563] uppercase font-bold block mb-1">PIN Code (6-digit)</label>
                  <input
                    type="text"
                    maxLength={6}
                    value={newDriverPin}
                    onChange={e => setNewDriverPin(e.target.value.replace(/\D/g, ""))}
                    className="w-full p-2.5 rounded-xl border border-[#E5E7EB] outline-none font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-[#4B5563] uppercase font-bold block mb-1">Driving Licence No.</label>
                  <input
                    type="text"
                    placeholder="KL-07-20210049281"
                    value={newDriverDl}
                    onChange={e => setNewDriverDl(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#E5E7EB] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-[#4B5563] uppercase font-bold block mb-1">Aadhaar Number</label>
                  <input
                    type="text"
                    placeholder="4829 1928 4719"
                    value={newDriverAadhar}
                    onChange={e => setNewDriverAadhar(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#E5E7EB] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-2">
              <button
                type="button"
                onClick={() => setIsAddDriverOpen(false)}
                className="px-4 py-2 rounded-xl border border-[#E5E7EB] text-xs text-[#121316]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-[#FFC70A] hover:bg-[#F5BE00] text-black font-extrabold text-xs transition shadow-xs"
              >
                Register & Verify Chauffeur
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
