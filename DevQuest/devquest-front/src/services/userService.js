import { api } from "./api";

export async function getProgress() {
  const { data } =
    await api.get(
      "/users/progress",
    );

  return data.data;
}

export async function getProfile() {
  const { data } =
    await api.get(
      "/users/profile",
    );

  return data.data;
}

export async function getXPHistory(
  page = 1,
  limit = 20,
) {
  const { data } =
    await api.get(
      `/users/xp-history?page=${page}&limit=${limit}`,
    );

  return data.data;
}