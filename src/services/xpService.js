import { api } from "./api";

export async function addXP(
  amount,
  reason,
  moduleId,
) {
  const { data } =
    await api.post(
      "/xp/add",
      {
        amount,
        reason,
        moduleId,
      },
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