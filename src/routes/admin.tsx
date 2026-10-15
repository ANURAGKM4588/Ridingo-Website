import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import ridingoLogo from "@/assets/ridingo-logo.png";
import ridingoLogoWhite from "@/assets/ridingo-logo-white.png";

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

interface DriverProfile {
  id: string;
  name: string;
  firstName?: string;
  lastName?: string;
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
    tripsCompleted: 184,
    totalEarnings: 68420
  },
  {
    id: "DRV-2042",
    name: "Sujith V Nair",
    phone: "+91 97450 19283",
    email: "sujith.nair@gmail.com",
    homeAddress: "Souparnika, SN Junction",
    street: "Civil Line Road, Palarivattom",
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
    tripsCompleted: 342,
    totalEarnings: 124500
  }
];

function AdminPage() {
  const [activeTab, setActiveTab] = useState<"drivers" | "telemetry" | "trips" | "users">("drivers");
  const [driverCategory, setDriverCategory] = useState<"new_registration" | "old_registered">("new_registration");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedDriver, setSelectedDriver] = useState<DriverProfile | null>(null);
  const [isPhotoPreviewOpen, setIsPhotoPreviewOpen] = useState<string | null>(null);

  // Simulation calculator
  const [simFare, setSimFare] = useState(700);
  const [simCommission, setSimCommission] = useState(15);

  const [drivers, setDrivers] = useState<DriverProfile[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem("ridingo_registered_drivers_registry");
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) {}
    }
    return DEFAULT_DRIVERS;
  });

  // Telemetry calculation
  const totalCompletedTrips = 184;
  const totalGmv = 142850;
  const netCommission = Math.round(totalGmv * 0.15);
  const driverPayouts = totalGmv - netCommission;

  const newCount = useMemo(() => drivers.filter(d => d.category === "new_registration" || d.status === "pending").length, [drivers]);
  const oldCount = useMemo(() => drivers.filter(d => d.category === "old_registered" || d.status === "approved").length, [drivers]);

  const filteredDrivers = useMemo(() => {
    return drivers.filter(d => {
      const isNew = d.category === "new_registration" || d.status === "pending";
      if (driverCategory === "new_registration" && !isNew) return false;
      if (driverCategory === "old_registered" && isNew) return false;

      if (statusFilter !== "all" && d.status !== statusFilter) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        d.name.toLowerCase().includes(q) ||
        d.id.toLowerCase().includes(q) ||
        d.phone.toLowerCase().includes(q) ||
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

  const handleReject = (id: string) => {
    const reason = window.prompt("Reason for KYC Rejection:", "Unclear Document / Address Mismatch");
    if (!reason) return;
    const updated = drivers.map(d => {
      if (d.id === id) {
        return { ...d, status: "rejected" as const };
      }
      return d;
    });
    setDrivers(updated);
    try {
      localStorage.setItem("ridingo_registered_drivers_registry", JSON.stringify(updated));
    } catch (e) {}
    if (selectedDriver?.id === id) {
      setSelectedDriver(prev => prev ? { ...prev, status: "rejected" } : null);
    }
  };

  const handleToggleSuspend = (id: string) => {
    const updated = drivers.map(d => {
      if (d.id === id) {
        const nextStatus = d.status === "suspended" ? (d.category === "old_registered" ? "approved" : "pending") : "suspended";
        return { ...d, status: nextStatus as any };
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

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-white flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#111318] border-r border-white/10 p-5 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center gap-2">
              <img src={ridingoLogoWhite || ridingoLogo} alt="Ridingo" className="h-8 object-contain" />
            </Link>
            <span className="text-[10px] font-extrabold uppercase bg-[#FFC70A] text-black px-2 py-0.5 rounded">
              CRM Admin
            </span>
          </div>

          <div className="bg-[#181A22] border border-white/10 rounded-xl p-3 mb-6">
            <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider block mb-2">
              Website Domain
            </span>
            <span className="text-xs text-white font-mono block">ridingo.in/admin</span>
          </div>

          <nav className="flex flex-col gap-1.5">
            {[
              { id: "drivers", label: "Drivers Management", icon: "🚗", badge: newCount > 0 ? `${newCount} New` : null },
              { id: "telemetry", label: "Trip Calculations & CRM", icon: "📊" },
              { id: "trips", label: "All Trips Telemetry", icon: "🗺️", badge: "184" },
              { id: "users", label: "User App Accounts", icon: "👥", badge: "24" }
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
                  className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition ${
                    active ? "bg-[#FFC70A] text-black" : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      active ? "bg-black text-[#FFC70A]" : "bg-white/10 text-white"
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10 text-xs text-gray-400">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Supabase Cloud Connected</span>
          </div>
          <Link to="/" className="text-gray-400 hover:text-[#FFC70A] transition">
            &larr; Return to Website Home
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Header */}
        <header className="h-18 border-b border-white/10 bg-[#111318] px-6 flex items-center justify-between shrink-0">
          <div>
            <h1 className="text-lg font-bold text-white">
              {activeTab === "drivers" && "Chauffeur Drivers Registry"}
              {activeTab === "telemetry" && "All Trip Calculations & Financials"}
              {activeTab === "trips" && "Live Dispatch & Completed Trips"}
              {activeTab === "users" && "User App Customer Accounts"}
            </h1>
            <p className="text-xs text-gray-400">Ridingo CRM Operations Portal</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-gray-300">
              Live Hub: Kochi, Kerala
            </span>
          </div>
        </header>

        {/* Body Content */}
        <div className="p-6 space-y-6">
          {/* Top Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#14161E] border border-white/10 rounded-2xl p-4.5">
              <span className="text-xs font-semibold text-gray-400 uppercase">Gross Trip GMV</span>
              <div className="text-2xl font-extrabold text-white mt-1">₹{totalGmv.toLocaleString("en-IN")}</div>
              <span className="text-xs text-emerald-400 font-medium">↑ 18.4% this month</span>
            </div>

            <div className="bg-[#14161E] border border-white/10 rounded-2xl p-4.5">
              <span className="text-xs font-semibold text-gray-400 uppercase">Net Commission (15%)</span>
              <div className="text-2xl font-extrabold text-[#FFC70A] mt-1">₹{netCommission.toLocaleString("en-IN")}</div>
              <span className="text-xs text-gray-400 font-medium">Platform revenue</span>
            </div>

            <div className="bg-[#14161E] border border-white/10 rounded-2xl p-4.5">
              <span className="text-xs font-semibold text-gray-400 uppercase">Driver Payouts (85%)</span>
              <div className="text-2xl font-extrabold text-white mt-1">₹{driverPayouts.toLocaleString("en-IN")}</div>
              <span className="text-xs text-emerald-400 font-medium">Direct chauffeur income</span>
            </div>

            <div className="bg-[#14161E] border border-white/10 rounded-2xl p-4.5">
              <span className="text-xs font-semibold text-gray-400 uppercase">Completed Trips</span>
              <div className="text-2xl font-extrabold text-sky-400 mt-1">{totalCompletedTrips}</div>
              <span className="text-xs text-gray-400 font-medium">96.8% completion rate</span>
            </div>
          </div>

          {/* TAB 1: DRIVERS MANAGEMENT */}
          {activeTab === "drivers" && (
            <div className="space-y-4">
              {/* Category Sub-tabs and Search */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setDriverCategory("new_registration");
                      setSelectedDriver(null);
                    }}
                    className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition ${
                      driverCategory === "new_registration"
                        ? "bg-[#FFC70A] text-black shadow-lg shadow-[#FFC70A]/20"
                        : "bg-[#14161E] text-white hover:bg-white/5"
                    }`}
                  >
                    <span>🆕 New Registration</span>
                    <span className="bg-black/20 text-xs px-2 py-0.5 rounded-full">{newCount}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setDriverCategory("old_registered");
                      setSelectedDriver(null);
                    }}
                    className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition ${
                      driverCategory === "old_registered"
                        ? "bg-white text-black"
                        : "bg-[#14161E] text-white hover:bg-white/5"
                    }`}
                  >
                    <span>✅ Old Registered Drivers</span>
                    <span className="bg-black/10 text-xs px-2 py-0.5 rounded-full">{oldCount}</span>
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Search by ID, Name, PIN, Phone..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="bg-[#14161E] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC70A] w-full sm:w-64"
                  />
                  <select
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value)}
                    className="bg-[#14161E] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none"
                  >
                    <option value="all">All</option>
                    <option value="pending">Pending KYC</option>
                    <option value="approved">Approved</option>
                    <option value="suspended">Suspended</option>
                  </select>
                </div>
              </div>

              {/* Grid Layout: Drivers List & Detail Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className={selectedDriver ? "lg:col-span-7 space-y-3" : "lg:col-span-12 space-y-3"}>
                  {filteredDrivers.map(drv => {
                    const isSelected = selectedDriver?.id === drv.id;
                    return (
                      <div
                        key={drv.id}
                        onClick={() => setSelectedDriver(drv)}
                        className={`p-4 rounded-2xl bg-[#14161E] border cursor-pointer transition flex items-center justify-between ${
                          isSelected ? "border-[#FFC70A] ring-1 ring-[#FFC70A]" : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="w-12 h-12 rounded-xl bg-white/5 overflow-hidden shrink-0 border border-white/10 flex items-center justify-center font-bold text-lg">
                            {drv.avatar ? (
                              <img src={drv.avatar} alt={drv.name} className="w-full h-full object-cover" />
                            ) : (
                              drv.name[0]
                            )}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-white truncate">{drv.name}</span>
                              <span className="text-[11px] font-extrabold px-1.5 py-0.5 rounded bg-white/5 text-[#FFC70A]">
                                {drv.id}
                              </span>
                            </div>
                            <div className="text-xs text-gray-400 flex items-center gap-3 mt-0.5">
                              <span>📱 {drv.phone}</span>
                              <span>📍 {drv.city} (PIN: {drv.pincode})</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className={`text-[11px] font-bold uppercase px-2.5 py-1 rounded-lg ${
                            drv.status === "approved" ? "bg-emerald-500/10 text-emerald-400" :
                            drv.status === "pending" ? "bg-amber-500/10 text-amber-400" :
                            "bg-red-500/10 text-red-400"
                          }`}>
                            {drv.status === "pending" ? "Pending KYC" : drv.status}
                          </span>
                          {drv.category === "new_registration" && drv.status === "pending" && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleApprove(drv.id);
                              }}
                              className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg"
                            >
                              ✓ Approve
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Selected Driver Profile Card */}
                {selectedDriver && (
                  <div className="lg:col-span-5 bg-[#14161E] border border-white/10 rounded-2xl p-5 space-y-4 h-fit">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase bg-[#FFC70A] text-black px-2.5 py-1 rounded">
                        Profile ID: {selectedDriver.id}
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedDriver(null)}
                        className="text-gray-400 hover:text-white text-sm"
                      >
                        ✕ Close
                      </button>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#FFC70A] mb-2.5">
                        {selectedDriver.avatar ? (
                          <img src={selectedDriver.avatar} alt={selectedDriver.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-2xl bg-white/5">👤</div>
                        )}
                      </div>
                      <h2 className="text-base font-bold text-white">{selectedDriver.name}</h2>
                      <span className="text-xs text-gray-400">
                        {selectedDriver.category === "new_registration" ? "🆕 New Applicant" : "⭐ Verified Chauffeur"}
                      </span>

                      <div className="flex gap-2 mt-2">
                        <a href={`tel:${selectedDriver.phone}`} className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 text-white font-medium">
                          📞 Call
                        </a>
                        <a href={`mailto:${selectedDriver.email}`} className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 text-white font-medium">
                          ✉️ Email
                        </a>
                      </div>
                    </div>

                    <div className="bg-[#0E1015] rounded-xl p-3.5 space-y-2.5 text-xs">
                      <div>
                        <span className="text-gray-400 block font-semibold">Address & Locality</span>
                        <span className="text-white">{selectedDriver.homeAddress}, {selectedDriver.street}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-gray-400 block font-semibold">City</span>
                          <span className="text-white font-bold">{selectedDriver.city}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block font-semibold">PIN Code</span>
                          <span className="text-[#FFC70A] font-bold">{selectedDriver.pincode}</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-400 block font-semibold">State & Country</span>
                        <span className="text-white">{selectedDriver.state}, {selectedDriver.nationality}</span>
                      </div>
                    </div>

                    {/* Documents */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                        KYC Documents Attached
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        <div
                          onClick={() => selectedDriver.dlPhoto && setIsPhotoPreviewOpen(selectedDriver.dlPhoto)}
                          className="bg-[#0E1015] border border-white/10 rounded-xl p-2 cursor-pointer hover:border-white/20"
                        >
                          <span className="text-[11px] text-gray-400 block">Licence No.</span>
                          <span className="text-xs font-bold text-white block mb-1.5">{selectedDriver.dlNumber}</span>
                          {selectedDriver.dlPhoto ? (
                            <img src={selectedDriver.dlPhoto} alt="DL" className="w-full h-12 object-cover rounded-lg" />
                          ) : (
                            <div className="h-12 bg-white/5 rounded-lg flex items-center justify-center text-xs text-gray-400">📄 Doc</div>
                          )}
                        </div>

                        <div
                          onClick={() => selectedDriver.aadharPhoto && setIsPhotoPreviewOpen(selectedDriver.aadharPhoto)}
                          className="bg-[#0E1015] border border-white/10 rounded-xl p-2 cursor-pointer hover:border-white/20"
                        >
                          <span className="text-[11px] text-gray-400 block">Aadhaar No.</span>
                          <span className="text-xs font-bold text-white block mb-1.5">{selectedDriver.aadharNumber}</span>
                          {selectedDriver.aadharPhoto ? (
                            <img src={selectedDriver.aadharPhoto} alt="Aadhaar" className="w-full h-12 object-cover rounded-lg" />
                          ) : (
                            <div className="h-12 bg-white/5 rounded-lg flex items-center justify-center text-xs text-gray-400">🪪 Card</div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Controls */}
                    <div className="space-y-2 pt-2">
                      {selectedDriver.status !== "approved" && (
                        <button
                          type="button"
                          onClick={() => handleApprove(selectedDriver.id)}
                          className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wide"
                        >
                          ✓ Approve KYC Documents & Move to Active
                        </button>
                      )}

                      {selectedDriver.status === "pending" && (
                        <button
                          type="button"
                          onClick={() => handleReject(selectedDriver.id)}
                          className="w-full py-2 rounded-xl border border-red-500 text-red-400 hover:bg-red-500/10 font-bold text-xs"
                        >
                          ✕ Reject Application
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => handleToggleSuspend(selectedDriver.id)}
                        className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs"
                      >
                        {selectedDriver.status === "suspended" ? "▶ Activate Account" : "⏸ Suspend Account"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: TRIP CALCULATIONS CRM */}
          {activeTab === "telemetry" && (
            <div className="space-y-6">
              <div className="bg-[#14161E] border border-white/10 rounded-2xl p-6">
                <h2 className="text-base font-bold text-white">Tariff & Revenue Commission Simulation Engine</h2>
                <p className="text-xs text-gray-400 mt-1">Adjust parameters to forecast platform margins and driver earnings.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-center">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">Ride Tariff Amount:</span>
                        <span className="text-white font-bold">₹{simFare}</span>
                      </div>
                      <input
                        type="range"
                        min="250"
                        max="3000"
                        step="50"
                        value={simFare}
                        onChange={e => setSimFare(Number(e.target.value))}
                        className="w-full accent-[#FFC70A]"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">Platform Commission %:</span>
                        <span className="text-[#FFC70A] font-bold">{simCommission}%</span>
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
                    </div>
                  </div>

                  <div className="bg-[#0E1015] rounded-xl p-4 grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[11px] text-gray-400 uppercase font-semibold">Ridingo Take</span>
                      <div className="text-2xl font-extrabold text-[#FFC70A] mt-1">
                        ₹{Math.round((simFare * simCommission) / 100)}
                      </div>
                      <span className="text-[11px] text-gray-500">Gross fee per ride</span>
                    </div>

                    <div>
                      <span className="text-[11px] text-gray-400 uppercase font-semibold">Chauffeur Share</span>
                      <div className="text-2xl font-extrabold text-emerald-400 mt-1">
                        ₹{simFare - Math.round((simFare * simCommission) / 100)}
                      </div>
                      <span className="text-[11px] text-gray-500">Direct partner payout</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TRIPS */}
          {activeTab === "trips" && (
            <div className="bg-[#14161E] border border-white/10 rounded-2xl p-6">
              <h2 className="text-base font-bold text-white mb-4">Completed & Dispatched Trips</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400">
                      <th className="py-2.5 px-3">Trip ID</th>
                      <th className="py-2.5 px-3">Pickup & Drop</th>
                      <th className="py-2.5 px-3">Fare</th>
                      <th className="py-2.5 px-3">Commission (15%)</th>
                      <th className="py-2.5 px-3">Driver Share</th>
                      <th className="py-2.5 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { id: "TRP-8419", pickup: "Edappally Toll", drop: "Cochin Airport T3", fare: 850 },
                      { id: "TRP-8420", pickup: "Kaloor Stadium", drop: "Lulu Mall Edappally", fare: 450 },
                      { id: "TRP-8421", pickup: "Marine Drive", drop: "Infopark Kakkanad", fare: 650 }
                    ].map(t => (
                      <tr key={t.id}>
                        <td className="py-3 px-3 font-bold text-white">{t.id}</td>
                        <td className="py-3 px-3 text-gray-300">{t.pickup} &rarr; {t.drop}</td>
                        <td className="py-3 px-3 font-bold text-white">₹{t.fare}</td>
                        <td className="py-3 px-3 text-[#FFC70A] font-bold">₹{Math.round(t.fare * 0.15)}</td>
                        <td className="py-3 px-3 text-emerald-400 font-bold">₹{t.fare - Math.round(t.fare * 0.15)}</td>
                        <td className="py-3 px-3"><span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-bold">Completed</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: USERS */}
          {activeTab === "users" && (
            <div className="bg-[#14161E] border border-white/10 rounded-2xl p-6">
              <h2 className="text-base font-bold text-white mb-4">Customer Accounts (24)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { id: "RDU-10821", name: "Anurag K M", phone: "+91 98401 23456", email: "anurag@ridingo.in", rides: 14, spent: 8450 },
                  { id: "RDU-29401", name: "Pooja Nair", phone: "+91 97451 89201", email: "pooja.nair@gmail.com", rides: 8, spent: 4890 },
                  { id: "RDU-38910", name: "Vishnu Das", phone: "+91 94470 19284", email: "vishnu.das@tech.in", rides: 22, spent: 17200 }
                ].map(usr => (
                  <div key={usr.id} className="p-4 rounded-xl bg-[#0E1015] border border-white/10 space-y-2 text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#FFC70A] text-black flex items-center justify-center font-bold">
                        {usr.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-white">{usr.name}</div>
                        <div className="text-[11px] text-gray-500">{usr.id}</div>
                      </div>
                    </div>
                    <div className="text-gray-400 space-y-1 pt-1">
                      <div>📱 {usr.phone}</div>
                      <div>✉️ {usr.email}</div>
                      <div>🚗 Rides: <strong className="text-white">{usr.rides}</strong></div>
                      <div>💳 Spent: <strong className="text-[#FFC70A]">₹{usr.spent}</strong></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Image Preview Modal */}
      {isPhotoPreviewOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setIsPhotoPreviewOpen(null)}
        >
          <div className="relative max-w-2xl max-h-[85vh]">
            <img src={isPhotoPreviewOpen} alt="Preview" className="rounded-2xl max-h-[80vh] object-contain shadow-2xl" />
          </div>
        </div>
      )}
    </div>
  );
}
