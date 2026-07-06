import axios from "axios";
const API_URL = "http://localhost:8000";

export const LoginUser = async (email, password) => {
  try {
    const response = await axios.post("${API_URL}/Login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Email atau password salah, coba lagi.");
    }
    throw new Error("Terjadi masalah pada server, coba lagi nanti.");
  }
};

export const registerUser = async (email, password) => {
  // Gabungin manual jadi satu string utuh
  const url = `${API_URL}/auth/register?role=free`;

  const response = await axios.post(url, {
    email: email,
    password: password,
  });

  return response.data;
};
