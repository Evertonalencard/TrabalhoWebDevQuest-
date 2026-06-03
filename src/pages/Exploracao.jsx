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
    text: "O que é IQR (Intervalo Interquartil)?",
    options: [
      "A média dos dados",
      "A diferença entre o 3º e o 1º quartil (Q3 - Q1)",
      "O desvio padrão da amostra",
      "A diferença entre o máximo e o mínimo",
    ],
    correct: 1,
    explanation:
      "O IQR é Q3 - Q1 e mede a dispersão central dos dados. Valores fora do intervalo [Q1 - 1.5×IQR, Q3 + 1.5×IQR] são considerados outliers pelo método de Tukey.",
  },
  {
    text: "Qual função do Pandas retorna a correlação entre todas as colunas numéricas?",
    options: ["df.describe()", "df.info()", "df.corr()", "df.cov()"],
    correct: 2,
    explanation:
      "df.corr() retorna a matriz de correlação de Pearson entre todas as colunas numéricas. Valores próximos de 1 indicam correlação positiva forte, próximos de -1, negativa forte.",
  },
  {
    text: "Para que serve o parâmetro bins em value_counts(bins=5)?",
    options: [
      "Limita o resultado a 5 valores",
      "Agrupa os dados em 5 intervalos contínuos",
      "Arredonda os valores para 5 casas decimais",
      "Filtra os 5 valores mais frequentes",
    ],
    correct: 1,
    explanation:
      "Com bins=5, o value_counts() divide o intervalo dos dados em 5 faixas iguais e conta quantos valores caem em cada faixa — útil para visualizar distribuições de variáveis contínuas.",
  },
];

function Exploracao() {
  return (
    <section className="page-content">
      <h2>Exploração de Dados e Estatística</h2>
      <p>
        Como explorar conjuntos de dados, identificar padrões, detectar outliers
        e interpretar estatísticas.
      </p>
      <ul>
        <li>Introdução ao Módulo e ao Dataset Iris</li>
        <li>Tendência Central — Média, Mediana e Moda</li>
        <li>Dispersão — Variância, Desvio Padrão e IQR</li>
        <li>describe() + Histograma com Curva de Densidade</li>
        <li>Correlação — df.corr() + Scatter Plot</li>
        <li>Heatmap + Spearman + Limites da Correlação Linear</li>
        <li>Pipeline Completo de EDA — groupby, Similaridade e Pairplot</li>
        <li>
          Qualidade de Dados + Checklist do Analista + Considerações Finais
        </li>
      </ul>
      <div className="video-grid video-grid--4">
        <VideoPlayer
          driveFileId="1FepShl-qKbA-FEasi1UkAlpSR8NqltFA"
          title="Video_1"
        />
        <VideoPlayer
          driveFileId="1kA5EAOZwwyU3ozCwVXJDA14Sl2tC5VmZ"
          title="Video_2"
        />
        <VideoPlayer
          driveFileId="1RrunL-bw8kONCkpFQDGMQdWX-XVwTgBX"
          title="Video_3"
        />
        <VideoPlayer
          driveFileId="1phQ6SrUAiCIo2PUUKQWu5tJlDN0rFZIt"
          title="Video_4"
        />
        <VideoPlayer
          driveFileId="1fDxhMl3zKE82GKbbFr7yb-nUNw83mNvs"
          title="Video_5"
        />
        <VideoPlayer
          driveFileId="1QCPWYXEJcFJ9qMxgAgebadZ-GrX0N_Mg"
          title="Video_6"
        />
        <VideoPlayer
          driveFileId="1G_qmQRAYz_V55_w-uamNHuPswDP3Ojxp"
          title="Video_7"
        />
        <VideoPlayer
          driveFileId="1k2ny6__nx3-XR1zLx3PF3MZJ9DU5T7dF"
          title="Video_8"
        />
      </div>
      <div className="video-grid video-grid--4">
        <VideoPlayer
          driveFileId="16TOxH2XIUEBWJZUBEmb25GfNbNqsoYoJ"
          title="Aula_1"
        />
        <VideoPlayer
          driveFileId="1ikRclglFB2qkAfKE8HkBCEJTronFTkhH"
          title="Aula_2"
        />
        <VideoPlayer
          driveFileId="10lQ-w23yxaE36xoOI61zfTBgc3qnqD-f"
          title="Aula_3"
        />
        <VideoPlayer
          driveFileId="11se2TD-F-lWGnKM2xhCI-mgLJazj7zUU"
          title="Aula_4"
        />
        <VideoPlayer
          driveFileId="1_FQjKk6xMkKlGpEpJ2ci_uFrjcM0T2hj"
          title="Aula_5"
        />
        <VideoPlayer
          driveFileId="1DL7WPNH5JeIAsacnva46uS3PJFGlW6rp"
          title="Aula_6"
        />
        <VideoPlayer
          driveFileId="1WGg_mC2xgOrnzT0tARksGQtZk4mOMc0S"
          title="Aula_7"
        />
        <VideoPlayer
          driveFileId="17YrrIPxPAnRAfLFhFW187imFwYxsbzjt"
          title="Aula_8"
        />
      </div>
      <PDFModule pdfs={PDFS} />
      <QuestionsModule questions={QUESTIONS} moduleKey="exploracao" />
      <RatingModule
        pageKey="exploracao"
        pageTitle="Exploração de Dados e Estatística"
      />
    </section>
  );
}

export default Exploracao;
