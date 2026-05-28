import { apiRequest } from "./api";

export async function getModules() {
  const res = await apiRequest("/modules");
  return res.data;
}

export async function getModuleById(slug) {
  const res = await apiRequest(`/modules/${slug}`);
  return res.data;
}
