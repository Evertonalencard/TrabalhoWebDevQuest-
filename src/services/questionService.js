import { api } from "./api";

export async function answerQuestion(questionId, selectedIndex) {
  const { data } = await api.post("/questions/answer", {
    questionId,
    selectedIndex,
  });

  return data.data;
}
