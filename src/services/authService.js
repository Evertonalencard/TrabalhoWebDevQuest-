import { api } from "./api";

const TOKEN_KEY = "devquest_token";

export async function login(email, password) {
  const { data } = await api.post("/auth/login", {
    email,
    password,
  });

  localStorage.setItem(TOKEN_KEY, data.data.token);

  return data.data.user;
}

export async function register(
  email,
  displayName,
  password,
) {
  const { data } = await api.post("/auth/register", {
    email,
    displayName,
    password,
  });

  localStorage.setItem(TOKEN_KEY, data.data.token);

  return data.data.user;
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export async function getMe() {
  const { data } = await api.get("/auth/me");

  return data.data;
}