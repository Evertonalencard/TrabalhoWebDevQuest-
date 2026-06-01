import { useState } from "react";
import { createRating as createRatingApi } from "../services/ratingService";
import "../css/RatingModule.css";

const BOOLEAN_OPTIONS = ["Sim", "Parcialmente", "Não"];

const DIFFICULTY_OPTIONS = [
  "Muito fácil",
  "Fácil",
  "Médio",
  "Difícil",
  "Muito difícil",
];

function StarRating({ value, onChange, label }) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="star-rating" role="group" aria-label={label}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`star-btn ${star <= (hovered || value) ? "filled" : ""}`}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          aria-label={`${star} estrelas`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

function OptionGroup({ options, value, onChange, className, buttonClassName }) {
  return (
    <div className={className}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={`${buttonClassName} ${value === option ? "active" : ""}`}
          onClick={() => onChange(value === option ? null : option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function RatingModule({ pageKey, pageTitle }) {
  const [stars, setStars] = useState(0);
  const [clarity, setClarity] = useState(null);
  const [organized, setOrganized] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!stars) {
      setError("Selecione uma nota.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await createRatingApi(
        pageKey,
        stars,
        clarity,
        organized,
        difficulty,
        feedback.trim(),
      );

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Erro ao enviar avaliação.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rating-module">
        <div className="rating-module__thanks">
          <span className="rating-module__thanks-icon">★</span>
          <h4>Obrigado pela avaliação</h4>
          <p>Sua opinião ajuda a melhorar este módulo.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rating-module">
      <h4 className="rating-module__title">
        Avalie este módulo{pageTitle ? `: ${pageTitle}` : ""}
      </h4>

      <form className="rating-module__form" onSubmit={handleSubmit}>
        {error && (
          <div className="alert alert-danger mb-0" role="alert">
            {error}
          </div>
        )}

        <div className="rating-module__field">
          <span className="rating-module__field-label">Nota</span>
          <StarRating
            value={stars}
            onChange={setStars}
            label="Nota do módulo"
          />
          {stars > 0 && (
            <span className="rating-module__star-label">
              {stars} de 5 estrelas
            </span>
          )}
        </div>

        <div className="rating-module__field">
          <span className="rating-module__field-label">
            O conteúdo foi claro?{" "}
            <span className="rating-module__optional">(opcional)</span>
          </span>
          <OptionGroup
            options={BOOLEAN_OPTIONS}
            value={clarity}
            onChange={setClarity}
            className="rating-module__yn"
            buttonClassName="rating-module__yn-btn"
          />
        </div>

        <div className="rating-module__field">
          <span className="rating-module__field-label">
            O módulo foi organizado?{" "}
            <span className="rating-module__optional">(opcional)</span>
          </span>
          <OptionGroup
            options={BOOLEAN_OPTIONS}
            value={organized}
            onChange={setOrganized}
            className="rating-module__yn"
            buttonClassName="rating-module__yn-btn"
          />
        </div>

        <div className="rating-module__field">
          <span className="rating-module__field-label">
            Dificuldade{" "}
            <span className="rating-module__optional">(opcional)</span>
          </span>
          <OptionGroup
            options={DIFFICULTY_OPTIONS}
            value={difficulty}
            onChange={setDifficulty}
            className="rating-module__difficulty"
            buttonClassName="rating-module__diff-btn"
          />
        </div>

        <div className="rating-module__field">
          <label className="rating-module__field-label" htmlFor={`${pageKey}-feedback`}>
            Comentário <span className="rating-module__optional">(opcional)</span>
          </label>
          <textarea
            id={`${pageKey}-feedback`}
            className="rating-module__textarea"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value.slice(0, 500))}
            rows={4}
            maxLength={500}
            placeholder="Conte o que funcionou bem ou o que poderia melhorar."
          />
          <span className="rating-module__char-count">
            {feedback.length}/500
          </span>
        </div>

        <button
          type="submit"
          className="rating-module__submit-btn"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar avaliação"}
        </button>
      </form>
    </div>
  );
}

export default RatingModule;
