import VideoPlayer from "../components/VideoPlayer";
import PDFModule from "../components/PDFModule";
import QuestionsModule from "../components/QuestionsModule";
import RatingModule from "../components/RatingModule";

const EXPLORACAO_CODE = `# Análise Exploratória de Dados (EDA)
import pandas as pd
import numpy as np

np.random.seed(42)
df = pd.DataFrame({
    "idade": np.random.randint(18, 65, 100),
    "renda": np.random.normal(5000, 1500, 100).round(2),
    "score": np.random.uniform(0, 10, 100).round(1),
})

print(df.describe())

Q1 = df["renda"].quantile(0.25)
Q3 = df["renda"].quantile(0.75)
IQR = Q3 - Q1
outliers = df[(df["renda"] < Q1 - 1.5 * IQR) | (df["renda"] > Q3 + 1.5 * IQR)]
print(f"Outliers encontrados: {len(outliers)}")

print(df.corr(numeric_only=True).round(2))
print(df["score"].value_counts(bins=5, sort=False))
`;

const PDFS = [
  {
    id: "eda-1",
    name: "Guia: Análise Exploratória de Dados",
    description: "Passo a passo para uma EDA completa",
    url: "/assets/eda-guide.pdf",
    filename: "eda-guide.pdf",
  },
];

const QUESTIONS = [
  {
    text: "O que é IQR (Intervalo Interquartil) e como ele é utilizado para encontrar outliers?",
    expectedAnswer: "O IQR é a diferença entre o 3º e o 1º quartil (Q3 - Q1) e mede a dispersão central dos dados. Valores que caem fora do limite inferior (Q1 - 1.5×IQR) ou superior (Q3 + 1.5×IQR) são frequentemente considerados outliers (Método de Tukey).",
  },
  {
    text: "Qual função do Pandas retorna a correlação entre todas as colunas numéricas e como interpretamos esses valores?",
    expectedAnswer: "A função df.corr() retorna a matriz de correlação de Pearson. Valores próximos de 1 indicam uma forte correlação positiva, enquanto valores próximos de -1 indicam uma forte correlação negativa.",
  },
  {
    text: "Para que serve o parâmetro 'bins' (ex: bins=5) na função value_counts()?",
    expectedAnswer: "Com bins=5, o value_counts() agrupa os dados dividindo o intervalo contínuo em 5 faixas (ou blocos) de tamanhos iguais e conta quantos valores caem em cada faixa. É útil para visualizar ou tabular distribuições de variáveis contínuas.",
  },
];

function Exploracao() {
  return (
    <section className="page-content">
      <h2>Exploração de Dados e Estatística</h2>
      <p>Como explorar conjuntos de dados, identificar padrões, detectar outliers e interpretar estatísticas.</p>
      <ul>
        <li>Análise exploratória de dados (EDA)</li>
        <li>Distribuições e medidas de tendência central</li>
        <li>Correlação entre variáveis</li>
      </ul>
      <VideoPlayer videoId="ZW-V3_TbKrI" title="Aula: Exploração de Dados e Estatística" code={EXPLORACAO_CODE} language="python" />
      <PDFModule pdfs={PDFS} />
      <QuestionsModule questions={QUESTIONS} moduleKey="exploracao" />
      <RatingModule pageKey="exploracao" pageTitle="Exploração de Dados e Estatística" />
    </section>
  );
}

export default Exploracao;
