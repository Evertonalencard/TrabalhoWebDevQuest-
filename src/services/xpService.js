import { api } from "./api";

export async function addXP(
  amount,
  reason,
  moduleId,
) {
  const payload = {
    amount,
    reason,
  };

  if (moduleId) {
    payload.moduleId = moduleId;
  }

  const { data } =
    await api.post(
      "/xp/add",
      payload,
    );

  return data.data;
}

export async function getXPHistory() {
  const { data } =
    await api.get(
      "/xp/history",
    );

  return data.data;
}
