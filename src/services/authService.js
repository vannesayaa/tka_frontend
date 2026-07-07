import axios from "axios";
const API_URL = "http://localhost:8000";

export const LoginUser = async (email, password) => {
  try {
    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);

    const response = await axios.post(`${API_URL}/auth/login`, formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Email atau password salah.");
    }
    throw new Error(
      error.response?.data?.detail || "Terjadi masalah pada server.",
    );
  }
};

export const registerUser = async (email, password) => {
  // Gunakan backtick (`) untuk template literal agar variabel API_URL terbaca
  const url = `${API_URL}/auth/register?role=free`;

  const response = await axios.post(url, {
    email: email,
    password: password,
  });

  return response.data;
};
