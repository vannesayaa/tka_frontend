import React, { useState } from "react";
import { LoginUser } from "../services/authService"; // Pastikan importnya sesuai
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const data = await LoginUser(email, password);

      // Simpan token ke localStorage (Penting buat sesi login)
      localStorage.setItem("token", data.access_token);

      setSuccess("Login berhasil! Mengalihkan...");

      setTimeout(() => {
        navigate("/dashboard"); // Arahkan ke halaman utama/dashboard
      }, 1500);
    } catch (err) {
      setError(err.message || "Login gagal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-2xl shadow-xl border border-gray-800">
        <h2 className="text-3xl font-bold text-center">Login TKA</h2>

        {/* Box Error */}
        {error && (
          <div className="p-3 bg-red-900/20 border border-red-700 text-red-400 text-sm rounded-lg text-center">
            {error}
          </div>
        )}

        {/* Box Sukses (Hijau) */}
        {success && (
          <div className="p-3 bg-emerald-900/20 border border-emerald-700 text-emerald-400 text-sm rounded-lg text-center">
            {success}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
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
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
