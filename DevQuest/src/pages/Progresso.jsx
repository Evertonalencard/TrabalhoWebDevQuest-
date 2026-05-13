import { useXP } from "../Context/XPContext";

function Progresso() {
  const { xp, level, xpPercent, xpInCurrentLevel, XP_PER_LEVEL, loading } = useXP();

  if (loading) {
    return (
      <section className="page-content">
        <h2>Progresso</h2>
        <p>Carregando seu progresso...</p>
      </section>
    );
  }

  const xpToNextLevel = XP_PER_LEVEL - xpInCurrentLevel;

  return (
    <section className="page-content">
      <h2>Progresso</h2>

      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge text-bg-primary">Nível {level}</span>
            <span className="fw-semibold">Total: {xp} XP</span>
            <span className="text-muted">
              {xpInCurrentLevel} / {XP_PER_LEVEL} XP neste nível • faltam {xpToNextLevel} XP para subir
            </span>
          </div>

          <div className="progress mt-3" role="progressbar" aria-label="Progresso de XP no nível atual">
            <div className="progress-bar" style={{ width: `${xpPercent}%` }} aria-valuenow={xpInCurrentLevel} aria-valuemin={0} aria-valuemax={XP_PER_LEVEL} />
          </div>
        </div>
      </div>

      <div className="alert alert-info mb-0" role="note">
        Este painel mostra seu XP total e seu progresso no nível atual.
      </div>
    </section>
  );
}

export default Progresso;
