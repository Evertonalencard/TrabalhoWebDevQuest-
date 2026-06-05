import { useState } from "react";
import { useXP } from "../Context/XPContext";
import { answerQuestion } from "../services/questionService";
import "../css/QuestionsModule.css";

function QuestionsModule({
  questions = [],
  moduleKey,
  locked: propLocked = false,
}) {
  const { modules, completeModule } = useXP();
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const [levelUp, setLevelUp] = useState(false);
  const [gainedXP, setGainedXP] = useState(0);
  const [xpAlreadyCounted, setXpAlreadyCounted] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const locked = propLocked || modules[moduleKey]?.locked;

  if (!questions.length) return null;

  if (locked) {
    return (
      <div className="alert alert-warning" role="alert">
        Módulo bloqueado — conclua o módulo anterior para liberar as questões.
      </div>
    );
  }

  function selectAnswer(qIndex, optIndex) {
    if (checked || submitting) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
  }

  async function resolveQuestion(question, index) {
    if (!question.id) {
      const correctIndex = question.correct;
      return {
        isCorrect: answers[index] === correctIndex,
        correctIndex,
        explanation: question.explanation,
        selectedIndex: answers[index],
      };
    }

    return answerQuestion(question.id, answers[index]);
  }

  async function handleCheck() {
    if (Object.keys(answers).length < questions.length) {
      alert("Responda todas as questoes antes de corrigir.");
      return;
    }

    setError(null);
    setSubmitting(true);

    const alreadyCompleted = modules[moduleKey]?.completed;

    try {
      const resolvedResults = await Promise.all(
        questions.map((question, index) => resolveQuestion(question, index)),
      );

      const nextResults = resolvedResults.reduce((acc, result, index) => {
        acc[index] = result;
        return acc;
      }, {});

      const correct = resolvedResults.filter(
        (result) => result.isCorrect,
      ).length;
      const progressResult = await completeModule(
        moduleKey,
        correct,
        questions.length,
      );

      setResults(nextResults);
      setChecked(true);
      setGainedXP(progressResult.gainedXP ?? 0);
      setXpAlreadyCounted(alreadyCompleted);

      if (progressResult.leveledUp) {
        setLevelUp(true);
      }
    } catch (e) {
      console.warn("Erro ao enviar progresso do modulo", e);
      setError(
        "Nao foi possivel salvar seu progresso no servidor. Tente novamente.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handleReset() {
    setAnswers({});
    setChecked(false);
    setLevelUp(false);
    setGainedXP(0);
    setXpAlreadyCounted(false);
    setError(null);
    setResults({});
  }

  const score = checked
    ? Object.values(results).filter((result) => result.isCorrect).length
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
        Questoes da Aula
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
              <span className="questions-module__levelup">Subiu de nivel!</span>
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
              XP deste modulo ja foi contabilizado.
            </div>
          )}
        </>
      )}

      <div className="questions-module__list">
        {questions.map((question, qi) => {
          const result = results[qi];
          const correctIndex = result?.correctIndex ?? question.correct;
          const isCorrect = checked && result?.isCorrect;

          return (
            <div
              key={question.id ?? qi}
              className={`question-card ${
                checked ? (isCorrect ? "correct" : "wrong") : ""
              }`}
            >
              <p className="question-card__text">
                <span className="question-card__num">Q{qi + 1}.</span>{" "}
                {question.text}
              </p>

              <ul className="question-card__options">
                {question.options.map((option, oi) => {
                  let state = "";

                  if (checked) {
                    if (oi === correctIndex) {
                      state = "correct-opt";
                    } else if (oi === answers[qi] && oi !== correctIndex) {
                      state = "wrong-opt";
                    }
                  } else if (answers[qi] === oi) {
                    state = "selected";
                  }

                  return (
                    <li key={option}>
                      <button
                        type="button"
                        className={`question-card__opt-btn ${state}`}
                        onClick={() => selectAnswer(qi, oi)}
                        disabled={checked || submitting}
                        aria-pressed={answers[qi] === oi}
                      >
                        <span className="question-card__opt-letter">
                          {String.fromCharCode(65 + oi)}
                        </span>

                        {option}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {checked && (
                <div className="question-card__explanation">
                  <span className="question-card__explanation-label">
                    {isCorrect
                      ? "Correto!"
                      : `Incorreto - a resposta certa e ${String.fromCharCode(
                          65 + correctIndex,
                        )}`}
                  </span>

                  <p>{result?.explanation ?? question.explanation}</p>
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
            disabled={
              submitting || Object.keys(answers).length < questions.length
            }
          >
            {submitting ? "Corrigindo..." : "Corrigir Questoes"}
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
