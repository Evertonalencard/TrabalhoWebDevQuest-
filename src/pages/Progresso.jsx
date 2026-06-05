import { useXP } from "../Context/XPContext";
import "../css/Progresso.css";

const DEFAULT_TOTAL_QUESTIONS = 3;

function Progresso() {
  const {
    xp,
    level,
    moduleList,
    completedModules,
    totalModules,
    xpPercent,
    xpInCurrentLevel,
    XP_PER_LEVEL,
    loading,
  } = useXP();

  if (loading) {
    return (
      <section className="page-content">
        <h2>Progresso</h2>
        <p>Carregando seu progresso...</p>
      </section>
    );
  }

  const xpToNextLevel = XP_PER_LEVEL - xpInCurrentLevel;
  const moduleTotal = totalModules || moduleList.length;
  const progressPercent = moduleTotal
    ? (completedModules / moduleTotal) * 100
    : 0;

  return (
    <section className="page-content">
      <h2>Progresso</h2>

      <div className="card mb-3 progress-overview-card">
        <div className="card-body">
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge text-bg-primary">Nivel {level}</span>
            <span className="fw-semibold">Total: {xp} XP</span>
            <span className="text-muted">
              {xpInCurrentLevel} / {XP_PER_LEVEL} XP neste nivel - faltam{" "}
              {xpToNextLevel} XP para subir
            </span>
          </div>

          <div
            className="progress mt-3"
            role="progressbar"
            aria-label="Progresso de XP no nivel atual"
          >
            <div
              className="progress-bar"
              style={{ width: `${xpPercent}%` }}
              aria-valuenow={xpInCurrentLevel}
              aria-valuemin={0}
              aria-valuemax={XP_PER_LEVEL}
            />
          </div>

          <div className="mt-3">
            <small className="text-muted">
              Voce concluiu {completedModules} de {moduleTotal} modulos (
              {Math.round(progressPercent)}%)
            </small>
          </div>
        </div>
      </div>

      <div className="alert alert-info mb-0" role="note">
        Este painel mostra seu XP total e seu progresso no nivel atual.
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <h4 className="mb-3">Progresso dos Modulos</h4>

          <div className="table-responsive">
            <table className="table align-middle progress-table">
              <thead>
                <tr>
                  <th>Modulo</th>
                  <th>Status</th>
                  <th>XP</th>
                  <th>Nota</th>
                </tr>
              </thead>

              <tbody>
                {moduleList.map((module) => (
                  <tr key={module.id ?? module.key}>
                    <td className="fw-semibold">{module.title}</td>

                    <td>
                      {module.completed ? (
                        <span className="badge text-bg-success">
                          Concluido
                        </span>
                      ) : (
                        <span className="badge text-bg-secondary">
                          Pendente
                        </span>
                      )}
                    </td>

                    <td>
                      <span className="module-xp-badge">
                        {module.gainedXP ? `+${module.gainedXP} XP` : "0 XP"}
                      </span>
                    </td>

                    <td>
                      {module.score !== undefined
                        ? `${module.score}/${DEFAULT_TOTAL_QUESTIONS}`
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Progresso;
