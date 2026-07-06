import React, { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // 1. Pastikan ini ada!
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await registerUser(email, password);
      setSuccess("Registrasi Berhasil! Mengalihkan ke Login...");

      // Kasih jeda 2 detik biar user bisa baca notif hijaunya
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.message || "Registrasi gagal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-2xl shadow-xl border border-gray-800">
        <h2 className="text-3xl font-bold text-center">Daftar Akun TKA</h2>

        {/* Box Error */}
        {error && (
          <div className="p-3 bg-red-900/20 border border-red-700 text-red-400 text-sm rounded-lg text-center">
            {error}
          </div>
        )}

        {/* Box Sukses (Warna Hijau) */}
        {success && (
          <div className="p-3 bg-emerald-900/20 border border-emerald-700 text-emerald-400 text-sm rounded-lg text-center">
            {success}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="nama@email.com"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 font-bold rounded-lg transition disabled:bg-gray-700 disabled:cursor-not-allowed"
          >
            {loading ? "Mendaftar..." : "Daftar Sekarang"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-400 mt-2">
          Sudah punya akun?{" "}
          <a
            href="/login"
            className="text-emerald-500 hover:underline font-semibold"
          >
            Login di sini
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
