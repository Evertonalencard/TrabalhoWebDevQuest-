import { useState } from "react";
import {
  createRating as createRatingApi,
} from "../services/ratingService";
import "../css/RatingModule.css";

const DIFFICULTY_OPTIONS = [
  "Muito fácil",
  "Fácil",
  "Médio",
  "Difícil",
  "Muito difícil",
];

function StarRating({
  value,
  onChange,
  label,
}) {
  const [hovered, setHovered] =
    useState(0);

  return (
    <div
      className="star-rating"
      role="group"
      aria-label={label}
    >
      {[1, 2, 3, 4, 5].map(
        (star) => (
          <button
            key={star}
            type="button"
            className={`star-btn ${
              star <=
              (hovered || value)
                ? "filled"
                : ""
            }`}
            onClick={() =>
              onChange(star)
            }
            onMouseEnter={() =>
              setHovered(star)
            }
            onMouseLeave={() =>
              setHovered(0)
            }
          >
            ★
          </button>
        ),
      )}
    </div>
  );
}

function RatingModule({
  pageKey,
}) {
  const [stars, setStars] =
    useState(0);

  const [clarity, setClarity] =
    useState(null);

  const [
    organized,
    setOrganized,
  ] = useState(null);

  const [
    difficulty,
    setDifficulty,
  ] = useState(null);

  const [feedback, setFeedback] =
    useState("");

  const [
    submitted,
    setSubmitted,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e,
  ) {
    e.preventDefault();

    if (!stars) {
      alert(
        "Selecione uma nota.",
      );
      return;
    }

    setLoading(true);

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

      alert(
        "Erro ao enviar avaliação.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rating-module">
        <h4>
          Obrigado pela
          avaliação 🎉
        </h4>
      </div>
    );
  }

  return (
    <div className="rating-module">
      {/* mantém resto igual */}
    </div>
  );
}

export default RatingModule;