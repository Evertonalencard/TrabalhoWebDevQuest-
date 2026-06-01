import { api } from "./api";

const ALLOWED_DIFFICULTIES = [
  "Muito fácil",
  "Fácil",
  "Médio",
  "Difícil",
  "Muito difícil",
];

const ALLOWED_BOOLEAN_OPTIONS = [
  "Sim",
  "Parcialmente",
  "Não",
];

export async function createRating(
  moduleSlug,
  stars,
  clarity,
  organized,
  difficulty,
  feedback,
) {
  const payload = {
    moduleSlug,
    stars,
    feedback,
  };

  if (
    ALLOWED_BOOLEAN_OPTIONS.includes(
      clarity,
    )
  ) {
    payload.clarity = clarity;
  }

  if (
    ALLOWED_BOOLEAN_OPTIONS.includes(
      organized,
    )
  ) {
    payload.organized = organized;
  }

  if (
    ALLOWED_DIFFICULTIES.includes(
      difficulty,
    )
  ) {
    payload.difficulty =
      difficulty;
  }

  const { data } =
    await api.post(
      "/ratings",
      payload,
    );

  return data.data;
}

export async function getRatingStats(
  moduleId,
) {
  const { data } =
    await api.get(
      `/ratings/stats/${moduleId}`,
    );

  return data.data;
}