import { useXP } from "../Context/XPContext";
import "../css/Progresso.css";
function Progresso() {
  const {
    xp,
    level,
    modules,
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

  const moduleList = [
    {
      key: "fundamentos",
      title: "Fundamentos",
      totalQuestions: 3,
    },
    {
      key: "pandas",
      title: "Pandas",
      totalQuestions: 3,
    },
    {
      key: "exploracao",
      title: "Exploração de Dados",
      totalQuestions: 3,
    },
    {
      key: "visualizacao",
      title: "Visualização de Dados",
      totalQuestions: 3,
    },
  ];

  const completedModules = Object.values(modules).filter(
    (module) => module.completed,
  ).length;

  const progressPercent = (completedModules / moduleList.length) * 100;

  return (
    <section className="page-content">
      <h2>Progresso</h2>

      <div className="card mb-3 progress-overview-card">
        <div className="card-body">
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge text-bg-primary">Nível {level}</span>
            <span className="fw-semibold">Total: {xp} XP</span>
            <span className="text-muted">
              {xpInCurrentLevel} / {XP_PER_LEVEL} XP neste nível • faltam{" "}
              {xpToNextLevel} XP para subir
            </span>
          </div>

          <div
            className="progress mt-3"
            role="progressbar"
            aria-label="Progresso de XP no nível atual"
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
              Você concluiu {completedModules} de {moduleList.length} módulos (
              {Math.round(progressPercent)}%)
            </small>
          </div>
        </div>
      </div>

      <div className="alert alert-info mb-0" role="note">
        Este painel mostra seu XP total e seu progresso no nível atual.
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <h4 className="mb-3">Progresso dos Módulos</h4>

          <div className="table-responsive">
            <table className="table align-middle progress-table">
              <thead>
                <tr>
                  <th>Módulo</th>
                  <th>Status</th>
                  <th>XP</th>
                  <th>Nota</th>
                </tr>
              </thead>

              <tbody>
                {moduleList.map((module) => {
                  const data = modules[module.key];

                  return (
                    <tr key={module.key}>
                      <td className="fw-semibold">{module.title}</td>

                      <td>
                        {data?.completed ? (
                          <span className="badge text-bg-success">
                            Concluído
                          </span>
                        ) : (
                          <span className="badge text-bg-secondary">
                            Pendente
                          </span>
                        )}
                      </td>

                      <td>
                        <span className="module-xp-badge">
                          {data?.gainedXP ? `+${data.gainedXP} XP` : "0 XP"}
                        </span>
                      </td>

                      <td>
                        {data?.score !== undefined
                          ? `${data.score}/${module.totalQuestions}`
                          : "-"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Progresso;
