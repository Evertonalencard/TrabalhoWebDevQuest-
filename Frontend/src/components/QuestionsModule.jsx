import { useState } from "react";
import { useXP } from "../Context/XPContext";
import "../css/QuestionsModule.css";

function QuestionsModule({ questions = [], moduleKey }) {
  const { addXP, XP_PER_CORRECT, modules, completeModule } = useXP();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [levelUp, setLevelUp] = useState(false);
  const [gainedXP, setGainedXP] = useState(0);
  const [xpAlreadyCounted, setXpAlreadyCounted] = useState(false);

  if (!questions.length) return null;

  function handleInput(qIndex, text) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: text }));
  }

  // Check if all textareas have at least some text (ignoring pure whitespace)
  const allAnswered = questions.every((_, i) => answers[i] && answers[i].trim().length > 0);

  async function handleSubmit() {
    if (!allAnswered) {
      alert("Por favor, responda todas as questões antes de enviar.");
      return;
    }

    setSubmitted(true);

    // Award XP just for completing the exercise
    const totalXP = questions.length * XP_PER_CORRECT;
    const alreadyCompleted = modules[moduleKey]?.completed;

    if (alreadyCompleted) {
      setGainedXP(0);
      setXpAlreadyCounted(true);
      return;
    }

    setGainedXP(totalXP);

    if (totalXP > 0) {
      const leveled = await addXP(totalXP);
      // We pass the total questions as 'correct' to satisfy the context function's signature
      await completeModule(moduleKey, questions.length, totalXP);

      if (leveled) {
        setLevelUp(true);
      }
    }
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
    setLevelUp(false);
    setGainedXP(0);
    setXpAlreadyCounted(false);
  }

  return (
    <div className="questions-module">
      <h4 className="questions-module__title">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        Questões da Aula (Respostas Abertas)
      </h4>

      {submitted && (
        <>
          <div className="questions-module__result perfect">
            {levelUp && (
              <span className="questions-module__levelup">Subiu de nível!</span>
            )}

            <span className="questions-module__score">
              Respostas enviadas com sucesso!
            </span>

            {gainedXP > 0 && (
              <span className="questions-module__xp-gained">
                +{gainedXP} XP
              </span>
            )}
          </div>

          {xpAlreadyCounted && (
            <div className="alert alert-info mt-2">
              XP deste módulo já foi contabilizado.
            </div>
          )}
        </>
      )}

      <div className="questions-module__list">
        {questions.map((q, qi) => {
          return (
            <div key={qi} className="question-card">
              <p className="question-card__text">
                <span className="question-card__num">Q{qi + 1}.</span> {q.text}
              </p>

              <textarea
                className="question-card__textarea"
                rows="4"
                placeholder="Escreva sua resposta aqui..."
                value={answers[qi] || ""}
                onChange={(e) => handleInput(qi, e.target.value)}
                disabled={submitted}
                style={{ width: "100%", padding: "10px", marginTop: "10px", borderRadius: "6px" }}
              />

              {submitted && (
                <div className="question-card__explanation" style={{ marginTop: "15px", backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "6px", borderLeft: "4px solid #0d6efd" }}>
                  <span className="question-card__explanation-label" style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
                    💡 Resposta Esperada:
                  </span>
                  <p style={{ margin: 0 }}>{q.expectedAnswer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="questions-module__actions">
        {!submitted ? (
          <button
            type="button"
            className="questions-module__check-btn"
            onClick={handleSubmit}
            disabled={!allAnswered}
          >
            Enviar Respostas
          </button>
        ) : (
          <button
            type="button"
            className="questions-module__reset-btn"
            onClick={handleReset}
          >
            Refazer Atividade
          </button>
        )}
      </div>
    </div>
  );
}

export default QuestionsModule;
