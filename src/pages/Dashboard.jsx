import React, { useState } from "react";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState("paket");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Perbaikan: Inisialisasi state dengan nilai tunggal
  const [jenjang, setJenjang] = useState("SD");
  const [mapel, setMapel] = useState("Matematika");

  const packages = [
    { id: 1, title: "Paket TKA-1", kelas: "12", mapel: "Matematika" },
    { id: 2, title: "Paket TKA-2", kelas: "11", mapel: "Fisika" },
    { id: 3, title: "Paket TKA-3", kelas: "12", mapel: "Fisika" },
  ];

  const upgradePlans = [
    { id: 1, title: "1 Paket Soal", price: "15.000" },
    { id: 2, title: "3 Paket Soal", price: "50.000" },
    { id: 3, title: "10 Paket Soal", price: "130.000" },
  ];

  const renderContent = () => {
    if (currentPage === "paket") {
      return (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-700 flex gap-4 items-center">
            <span className="font-bold text-sm">Filter:</span>
            <select
              value={jenjang}
              onChange={(e) => setJenjang(e.target.value)}
              className="bg-emerald-50 dark:bg-emerald-900 border-none rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-emerald-500"
            >
              <option>SD</option>
              <option>SMP</option>
              <option>SMA</option>
            </select>
            <select
              value={mapel}
              onChange={(e) => setMapel(e.target.value)}
              className="bg-emerald-50 dark:bg-emerald-900 border-none rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-emerald-500"
            >
              <option>Matematika</option>
              <option>Bahasa Inggris</option>
              <option>Bahasa Indonesia</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="p-6 border border-emerald-200 dark:border-emerald-700 rounded-xl shadow-sm bg-white dark:bg-slate-800"
              >
                <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-1">
                  {pkg.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Kelas: {pkg.kelas} | {pkg.mapel}
                </p>
                <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition">
                  Mulai
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (currentPage === "report") {
      return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-emerald-200 dark:border-emerald-700 shadow-sm">
          <h1 className="text-xl font-bold mb-4">Riwayat Pengerjaan</h1>
          <p className="text-gray-500">Belum ada history pengerjaan.</p>
        </div>
      );
    }

    if (currentPage === "upgrade") {
      return (
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Pilih Paket Premium</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upgradePlans.map((plan) => (
              <div
                key={plan.id}
                className="p-6 border-2 border-emerald-200 rounded-xl text-center hover:border-emerald-500 transition cursor-pointer"
                onClick={() => setSelectedPlan(plan)}
              >
                <h3 className="text-lg font-bold">{plan.title}</h3>
                <p className="text-2xl font-black text-emerald-600 my-4">
                  Rp{plan.price}
                </p>
                <button className="bg-black text-white px-6 py-2 rounded-lg">
                  Pilih
                </button>
              </div>
            ))}
          </div>
          {selectedPlan && (
            <div className="mt-10 p-6 border rounded-xl text-center bg-gray-50 dark:bg-slate-800">
              <h2 className="text-xl font-bold">QRIS Pembayaran</h2>
              <p>Silakan scan untuk: {selectedPlan.title}</p>
              <div className="w-48 h-48 bg-gray-300 mx-auto my-4 flex items-center justify-center">
                [QRIS Image]
              </div>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-slate-900 text-slate-100" : "bg-emerald-50 text-slate-900"}`}
    >
      <nav className="bg-emerald-600 dark:bg-emerald-950 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">TKA Edutech</h1>
          <div className="flex items-center gap-2">
            {["paket", "report", "upgrade"].map((menu) => (
              <button
                key={menu}
                onClick={() => setCurrentPage(menu)}
                className={`px-4 py-2 rounded-lg capitalize transition ${currentPage === menu ? "bg-emerald-700 font-bold" : "hover:bg-emerald-500"}`}
              >
                {menu}
              </button>
            ))}
            <button onClick={() => setDarkMode(!darkMode)} className="ml-4">
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-8">{renderContent()}</main>
    </div>
  );
};

export default Dashboard;
