import React, { useState } from "react";
import { LoginUser } from "../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Tombol diklik, email:", email);
    setError("");
    setLoading(true);

    try {
      const data = await LoginUser(email, password);
      console.log("Respon API:", data);
      alert("Login Berhasil!");
      // Nanti setelah ini kita akan arahkan ke Dashboard
    } catch (err) {
      console.error("Error login:", err);
      setError(err.message || "Terjadi kesalahan saat login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-2xl shadow-xl border border-gray-800">
        <h2 className="text-3xl font-bold text-center">Login TKA</h2>

        {/* Tampilkan pesan error jika ada */}
        {error && (
          <div className="p-3 bg-red-900/20 border border-red-700 text-red-400 text-sm rounded-lg text-center">
            {error}
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

        <div className="text-center text-sm text-gray-400 mt-4">
          Belum punya akun?{" "}
          <a
            href="/register"
            className="text-emerald-500 hover:underline font-semibold"
          >
            Daftar sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
