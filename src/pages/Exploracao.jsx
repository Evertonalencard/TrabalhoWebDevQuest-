import ModuleContent from "../components/ModuleContent";

const QUESTIONS = [
  {
    text: "O que e IQR (Intervalo Interquartil)?",
    options: [
      "A media dos dados",
      "A diferenca entre Q3 e Q1",
      "O desvio padrao da amostra",
      "A diferenca entre maximo e minimo",
    ],
    correct: 1,
    explanation: "O IQR mede a dispersao central dos dados.",
  },
  {
    text: "Qual funcao do Pandas retorna a correlacao entre colunas numericas?",
    options: ["df.describe()", "df.info()", "df.corr()", "df.cov()"],
    correct: 2,
    explanation: "df.corr() retorna a matriz de correlacao.",
  },
  {
    text: "Para que serve o parametro bins em value_counts(bins=5)?",
    options: [
      "Limita o resultado a 5 valores",
      "Agrupa os dados em 5 intervalos continuos",
      "Arredonda valores",
      "Filtra os 5 valores mais frequentes",
    ],
    correct: 1,
    explanation: "bins divide o intervalo dos dados em faixas.",
  },
];

const PDFS = [
  {
    id: "eda-1",
    name: "Guia: Analise Exploratoria de Dados",
    description: "Passo a passo para uma EDA completa",
    url: "/assets/eda-guide.pdf",
    filename: "eda-guide.pdf",
  },
];

const VIDEOS = [
  { driveFileId: "1FepShl-qKbA-FEasi1UkAlpSR8NqltFA", title: "Video_1" },
  { driveFileId: "1kA5EAOZwwyU3ozCwVXJDA14Sl2tC5VmZ", title: "Video_2" },
  { driveFileId: "1RrunL-bw8kONCkpFQDGMQdWX-XVwTgBX", title: "Video_3" },
  { driveFileId: "1phQ6SrUAiCIo2PUUKQWu5tJlDN0rFZIt", title: "Video_4" },
  { driveFileId: "1fDxhMl3zKE82GKbbFr7yb-nUNw83mNvs", title: "Video_5" },
  { driveFileId: "1QCPWYXEJcFJ9qMxgAgebadZ-GrX0N_Mg", title: "Video_6" },
  { driveFileId: "1G_qmQRAYz_V55_w-uamNHuPswDP3Ojxp", title: "Video_7" },
  { driveFileId: "1k2ny6__nx3-XR1zLx3PF3MZJ9DU5T7dF", title: "Video_8" },
  { driveFileId: "16TOxH2XIUEBWJZUBEmb25GfNbNqsoYoJ", title: "Aula_1" },
  { driveFileId: "1ikRclglFB2qkAfKE8HkBCEJTronFTkhH", title: "Aula_2" },
  { driveFileId: "10lQ-w23yxaE36xoOI61zfTBgc3qnqD-f", title: "Aula_3" },
  { driveFileId: "11se2TD-F-lWGnKM2xhCI-mgLJazj7zUU", title: "Aula_4" },
  { driveFileId: "1_FQjKk6xMkKlGpEpJ2ci_uFrjcM0T2hj", title: "Aula_5" },
  { driveFileId: "1DL7WPNH5JeIAsacnva46uS3PJFGlW6rp", title: "Aula_6" },
  { driveFileId: "1WGg_mC2xgOrnzT0tARksGQtZk4mOMc0S", title: "Aula_7" },
  { driveFileId: "17YrrIPxPAnRAfLFhFW187imFwYxsbzjt", title: "Aula_8" },
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
        videos: VIDEOS,
        pdfs: PDFS,
        questions: QUESTIONS,
      }}
    />
  );
}

export default Exploracao;
