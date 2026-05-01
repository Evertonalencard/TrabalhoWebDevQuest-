import VideoPlayer from "../components/VideoPlayer";

const EXPLORACAO_CODE = `# Análise Exploratória de Dados (EDA)
import pandas as pd
import numpy as np

# Gerando dados de exemplo
np.random.seed(42)
df = pd.DataFrame({
    "idade": np.random.randint(18, 65, 100),
    "renda": np.random.normal(5000, 1500, 100).round(2),
    "score": np.random.uniform(0, 10, 100).round(1),
})

# Visão geral
print(df.describe())

# Detectando outliers com IQR
Q1 = df["renda"].quantile(0.25)
Q3 = df["renda"].quantile(0.75)
IQR = Q3 - Q1
outliers = df[(df["renda"] < Q1 - 1.5 * IQR) | (df["renda"] > Q3 + 1.5 * IQR)]
print(f"Outliers encontrados: {len(outliers)}")

# Correlação entre variáveis
print(df.corr(numeric_only=True).round(2))

# Distribuição por faixas
print(df["score"].value_counts(bins=5, sort=False))
`;

function Exploracao() {
  return (
    <section className="page-content">
      <h2>Exploração de Dados e Estatística</h2>
      <p>
        Esta página mostra como explorar conjuntos de dados, identificar
        padrões, detectar outliers e interpretar estatísticas básicas.
      </p>
      <ul>
        <li>Análise exploratória de dados (EDA)</li>
        <li>Distribuições e medidas de tendência central</li>
        <li>Correlação entre variáveis</li>
      </ul>

      <VideoPlayer
        videoId="ZW-V3_TbKrI"
        title="Aula: Exploração de Dados e Estatística"
        code={EXPLORACAO_CODE}
        language="python"
      />
    </section>
  );
}

export default Exploracao;
