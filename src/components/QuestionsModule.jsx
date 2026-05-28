import { useState } from "react";
import { useXP } from "../Context/XPContext";
import "../css/QuestionsModule.css";

function QuestionsModule({ questions = [], moduleKey }) {
  const { modules, completeModule } = useXP();
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const [levelUp, setLevelUp] = useState(false);
  const [gainedXP, setGainedXP] = useState(0);
  const [xpAlreadyCounted, setXpAlreadyCounted] = useState(false);
  const [error, setError] = useState(null);

  if (!questions.length) return null;

  function selectAnswer(qIndex, optIndex) {
    if (checked) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
  }

  async function handleCheck() {
    if (Object.keys(answers).length < questions.length) {
      alert("Responda todas as questões antes de corrigir.");
      return;
    }

    let correct = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) correct++;
    });

    setChecked(true);
    setError(null);

    const alreadyCompleted = modules[moduleKey]?.completed;

    try {
      const result = await completeModule(moduleKey, correct, questions.length);
      setGainedXP(result.gainedXP ?? 0);
      setXpAlreadyCounted(alreadyCompleted);
      if (result.leveledUp) {
        setLevelUp(true);
      }
    } catch (e) {
      console.warn("Erro ao enviar progresso do módulo", e);
      setError(
        "Não foi possível salvar seu progresso no servidor. Tente novamente.",
      );
    }
  }

  function handleReset() {
    setAnswers({});
    setChecked(false);
    setLevelUp(false);
    setGainedXP(0);
    setXpAlreadyCounted(false);
    setError(null);
  }

  const score = checked
    ? questions.filter((q, i) => answers[i] === q.correct).length
    : null;

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
        Questões da Aula
      </h4>

      {error && (
        <div className="alert alert-danger mt-2" role="alert">
          {error}
        </div>
      )}

      {checked && (
        <>
          <div
            className={`questions-module__result ${
              score === questions.length
                ? "perfect"
                : score > 0
                  ? "partial"
                  : "none"
            }`}
          >
            {levelUp && (
              <span className="questions-module__levelup">Subiu de nível!</span>
            )}

            <span className="questions-module__score">
              {score}/{questions.length} corretas
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
          const isAnswered = answers[qi] !== undefined;
          const isCorrect = checked && answers[qi] === q.correct;
          const isWrong = checked && answers[qi] !== q.correct;

          return (
            <div
              key={qi}
              className={`question-card ${
                checked ? (isCorrect ? "correct" : "wrong") : ""
              }`}
            >
              <p className="question-card__text">
                <span className="question-card__num">Q{qi + 1}.</span> {q.text}
              </p>

              <ul className="question-card__options">
                {q.options.map((opt, oi) => {
                  let state = "";

                  if (checked) {
                    if (oi === q.correct) {
                      state = "correct-opt";
                    } else if (oi === answers[qi] && oi !== q.correct) {
                      state = "wrong-opt";
                    }
                  } else if (answers[qi] === oi) {
                    state = "selected";
                  }

                  return (
                    <li key={oi}>
                      <button
                        type="button"
                        className={`question-card__opt-btn ${state}`}
                        onClick={() => selectAnswer(qi, oi)}
                        disabled={checked}
                        aria-pressed={answers[qi] === oi}
                      >
                        <span className="question-card__opt-letter">
                          {String.fromCharCode(65 + oi)}
                        </span>

                        {opt}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {checked && (
                <div className="question-card__explanation">
                  <span className="question-card__explanation-label">
                    {isCorrect
                      ? "✅ Correto!"
                      : `❌ Incorreto — a resposta certa é ${String.fromCharCode(
                          65 + q.correct,
                        )}`}
                  </span>

                  <p>{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="questions-module__actions">
        {!checked ? (
          <button
            type="button"
            className="questions-module__check-btn"
            onClick={handleCheck}
            disabled={Object.keys(answers).length < questions.length}
          >
            Corrigir Questões
          </button>
        ) : (
          <button
            type="button"
            className="questions-module__reset-btn"
            onClick={handleReset}
          >
            Tentar Novamente
          </button>
        )}
      </div>
    </div>
  );
}

export default QuestionsModule;
