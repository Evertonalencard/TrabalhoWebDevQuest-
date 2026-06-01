import { api } from "./api";

export async function getModules() {
  const { data } = await api.get("/modules");
  return data.data;
}

export async function getModuleBySlug(slug) {
  const { data } = await api.get(`/modules/${slug}`);
  return data.data;
}

export const getModuleById = getModuleBySlug;
