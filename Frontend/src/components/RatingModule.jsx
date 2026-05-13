import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "../css/RatingModule.css";

const DIFFICULTY_OPTIONS = ["Muito fácil", "Fácil", "Médio", "Difícil", "Muito difícil"];

function StarRating({ value, onChange, label }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="star-rating" role="group" aria-label={label}>
      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          type="button"
          className={`star-btn ${star <= (hovered || value) ? "filled" : ""}`}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          aria-label={`${star} estrela${star > 1 ? "s" : ""}`}
        >
          ★
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

  async function handleSubmit(e) {
    e.preventDefault();
    if (!stars) { alert("Selecione uma nota em estrelas."); return; }
    if (clarity === null) { alert("Responda: O conteúdo foi claro?"); return; }
    if (organized === null) { alert("Responda: O conteúdo está organizado?"); return; }
    if (!difficulty) { alert("Selecione a dificuldade."); return; }

    setLoading(true);
    try {
      await addDoc(collection(db, "ratings"), {
        page: pageKey,
        pageTitle,
        stars,
        clarity,
        organized,
        difficulty,
        feedback: feedback.trim(),
        createdAt: serverTimestamp(),
      });
    } catch (e) {
      console.warn("Firebase offline, avaliação não salva remotamente");
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="rating-module">
        <div className="rating-module__thanks">
          <span className="rating-module__thanks-icon">🎓</span>
          <h4>Obrigado pela avaliação!</h4>
          <p>Seu feedback ajuda a melhorar as aulas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rating-module">
      <h4 className="rating-module__title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
        Avalie esta Aula
      </h4>

      <form className="rating-module__form" onSubmit={handleSubmit} noValidate>
        {/* Estrelas */}
        <div className="rating-module__field">
          <label className="rating-module__field-label">Nota geral</label>
          <StarRating value={stars} onChange={setStars} label="Nota geral em estrelas" />
          {stars > 0 && (
            <span className="rating-module__star-label">
              {["", "Muito ruim", "Ruim", "Regular", "Boa", "Excelente"][stars]}
            </span>
          )}
        </div>

        {/* Clareza */}
        <div className="rating-module__field">
          <label className="rating-module__field-label">O conteúdo foi claro?</label>
          <div className="rating-module__yn">
            {["Sim", "Parcialmente", "Não"].map(opt => (
              <button
                key={opt}
                type="button"
                className={`rating-module__yn-btn ${clarity === opt ? "active" : ""}`}
                onClick={() => setClarity(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Organização */}
        <div className="rating-module__field">
          <label className="rating-module__field-label">O conteúdo está organizado?</label>
          <div className="rating-module__yn">
            {["Sim", "Parcialmente", "Não"].map(opt => (
              <button
                key={opt}
                type="button"
                className={`rating-module__yn-btn ${organized === opt ? "active" : ""}`}
                onClick={() => setOrganized(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Dificuldade */}
        <div className="rating-module__field">
          <label className="rating-module__field-label">Qual a dificuldade?</label>
          <div className="rating-module__difficulty">
            {DIFFICULTY_OPTIONS.map((opt, i) => (
              <button
                key={opt}
                type="button"
                className={`rating-module__diff-btn ${difficulty === opt ? "active" : ""}`}
                style={{ "--i": i }}
                onClick={() => setDifficulty(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Feedback livre */}
        <div className="rating-module__field">
          <label className="rating-module__field-label" htmlFor="free-feedback">
            Comentário livre <span className="rating-module__optional">(opcional)</span>
          </label>
          <textarea
            id="free-feedback"
            className="rating-module__textarea"
            placeholder="Escreva sua sugestão, dúvida ou elogio..."
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            rows={3}
            maxLength={500}
          />
          <span className="rating-module__char-count">{feedback.length}/500</span>
        </div>

        <button type="submit" className="rating-module__submit-btn" disabled={loading}>
          {loading ? "Enviando..." : "Enviar Avaliação"}
        </button>
      </form>
    </div>
  );
}

export default RatingModule;
