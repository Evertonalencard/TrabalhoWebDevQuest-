import ModuleContent from "../components/ModuleContent";

const QUESTIONS = [
  {
    text: "Qual espécie tem as maiores pétalas e as mais consistentes?",
    options: [
      "Iris Virginica",
      "Iris Versicolor",
      "Iris Setosa",
      "Todas as espécies têm tamanho e consistência iguais",
    ],
    correct: 0,
    explanation:
      "A espécie Iris Virginica possui as maiores pétalas (média de 5,55 cm). A Iris Setosa possui as menores (1,46 cm), mas é, de longe, a mais consistente, com um desvio padrão de apenas 0,17.",
  },
  {
    text: "Qual espécie é mais homogênea internamente?",
    options: [
      "Iris Versicolor",
      "Iris Virginica",
      "Iris Setosa",
      "Todas as espécies têm a mesma homogeneidade interna",
    ],
    correct: 1,
    explanation:
      "A Iris Virginica é a espécie mais homogênea, especialmente no comprimento das pétalas.",
  },
  {
    text: "Qual espécie é mais diferente das outras duas?",
    options: [
      "Iris Versicolor",
      "Iris Virginica",
      "Iris Setosa",
      "Não há diferença entre as espécies",
    ],
    correct: 2,
    explanation: "A Iris Setosa é a espécie mais distinta do conjunto de dados.",
  },
];

const PDFS = [
  {
    id: "eda-1",
    name: "Introdução ao Dataset Iris",
    description:
      "Notebook em PDF com a apresentação inicial do dataset e objetivos da EDA.",
    url: "/assets/modulo-3/01-modulo-3-video-1.pdf",
    filename: "01-modulo-3-video-1.pdf",
  },
  {
    id: "eda-2",
    name: "Medidas de Tendência Central",
    description: "Material sobre média, mediana e moda aplicadas ao dataset Iris.",
    url: "/assets/modulo-3/02-modulo-3-video-2.pdf",
    filename: "02-modulo-3-video-2.pdf",
  },
  {
    id: "eda-3",
    name: "Medidas de Dispersão",
    description: "Análise de variância, desvio padrão e intervalo interquartil.",
    url: "/assets/modulo-3/03-modulo-3-video-3.pdf",
    filename: "03-modulo-3-video-3.pdf",
  },
  {
    id: "eda-4",
    name: "Describe, Histograma e Densidade",
    description: "Resumo estatístico e visualização de distribuições.",
    url: "/assets/modulo-3/04-modulo-3-video-4.pdf",
    filename: "04-modulo-3-video-4.pdf",
  },
  {
    id: "eda-5",
    name: "Correlação e Scatter Plot",
    description: "Relações entre variáveis numéricas e interpretação de dispersão.",
    url: "/assets/modulo-3/05-modulo-3-video-5.pdf",
    filename: "05-modulo-3-video-5.pdf",
  },
  {
    id: "eda-6",
    name: "Heatmap e Correlação de Spearman",
    description: "Visualização de correlações e limites da correlação linear.",
    url: "/assets/modulo-3/06-modulo-3-video-6.pdf",
    filename: "06-modulo-3-video-6.pdf",
  },
  {
    id: "eda-7",
    name: "Pipeline Completo de EDA",
    description: "Fluxo completo com agrupamentos, similaridade e pairplot.",
    url: "/assets/modulo-3/07-modulo-3-video-7.pdf",
    filename: "07-modulo-3-video-7.pdf",
  },
  {
    id: "eda-8",
    name: "Qualidade de Dados e Checklist do Analista",
    description: "Boas práticas para revisar dados e concluir a análise exploratória.",
    url: "/assets/modulo-3/08-modulo-3-video-8.pdf",
    filename: "08-modulo-3-video-8.pdf",
  },
];

function Exploracao() {
  return (
    <ModuleContent
      slug="exploracao"
      fallback={{
        title: "Exploracao de Dados e Estatistica",
        description:
          "Como explorar conjuntos de dados, identificar padroes, detectar outliers e interpretar estatisticas.",
        topics: [
          "Analise exploratoria de dados",
          "Distribuicoes e medidas de tendencia central",
          "Correlacao entre variaveis",
        ],
        videos: [
          {
            videoId: "drive:1FepShl-qKbA-FEasi1UkAlpSR8NqltFA",
            title: "Vídeo 01 - Introdução ao Dataset Iris",
          },
          {
            videoId: "drive:1kA5EAOZwwyU3ozCwVXJDA14Sl2tC5VmZ",
            title: "Vídeo 02 - Média, Mediana e Moda",
          },
          {
            videoId: "drive:1RrunL-bw8kONCkpFQDGMQdWX-XVwTgBX",
            title: "Vídeo 03 - Variância, Desvio Padrão e IQR",
          },
          {
            videoId: "drive:1phQ6SrUAiCIo2PUUKQWu5tJlDN0rFZIt",
            title: "Vídeo 04 - Describe e Histograma com Densidade",
          },
          {
            videoId: "drive:1fDxhMl3zKE82GKbbFr7yb-nUNw83mNvs",
            title: "Vídeo 05 - Correlação e Gráfico de Dispersão",
          },
          {
            videoId: "drive:1QCPWYXEJcFJ9qMxgAgebadZ-GrX0N_Mg",
            title: "Vídeo 06 - Heatmap, Spearman e Limites da Correlação",
          },
          {
            videoId: "drive:1G_qmQRAYz_V55_w-uamNHuPswDP3Ojxp",
            title: "Vídeo 07 - Pipeline Completo de EDA",
          },
          {
            videoId: "drive:1k2ny6__nx3-XR1zLx3PF3MZJ9DU5T7dF",
            title: "Vídeo 08 - Qualidade de Dados e Checklist",
          },
          {
            videoId: "drive:16TOxH2XIUEBWJZUBEmb25GfNbNqsoYoJ",
            title: "Aula 01 - Introdução ao Dataset Iris",
          },
          {
            videoId: "drive:1ikRclglFB2qkAfKE8HkBCEJTronFTkhH",
            title: "Aula 02 - Tendência Central",
          },
          {
            videoId: "drive:10lQ-w23yxaE36xoOI61zfTBgc3qnqD-f",
            title: "Aula 03 - Medidas de Dispersão",
          },
          {
            videoId: "drive:11se2TD-F-lWGnKM2xhCI-mgLJazj7zUU",
            title: "Aula 04 - Describe, Histograma e Densidade",
          },
          {
            videoId: "drive:1_FQjKk6xMkKlGpEpJ2ci_uFrjcM0T2hj",
            title: "Aula 05 - Correlação e Scatter Plot",
          },
          {
            videoId: "drive:1DL7WPNH5JeIAsacnva46uS3PJFGlW6rp",
            title: "Aula 06 - Heatmap e Correlação de Spearman",
          },
          {
            videoId: "drive:1WGg_mC2xgOrnzT0tARksGQtZk4mOMc0S",
            title: "Aula 07 - Pipeline Completo de EDA",
          },
          {
            videoId: "drive:17YrrIPxPAnRAfLFhFW187imFwYxsbzjt",
            title: "Aula 08 - Qualidade de Dados e Checklist",
          },
        ],
        pdfs: PDFS,
        questions: QUESTIONS,
      }}
    />
  );
}

export default Exploracao;
