import { api } from "./api";

export async function completeModule(
  moduleSlug,
  score,
  totalQuestions,
) {
  const { data } =
    await api.post(
      "/progress/complete-module",
      {
        moduleSlug,
        score,
        totalQuestions,
      },
    );

  return data.data;
}