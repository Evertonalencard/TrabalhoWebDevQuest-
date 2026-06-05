import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  timeout: Number(import.meta.env.VITE_API_TIMEOUT ?? 30000),
  headers: {
    "Content-Type": "application/json",
  },
});

// adiciona token automaticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("devquest_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// trata erros da api
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Erro na API";

    return Promise.reject(new Error(message));
  },
);

export { api };