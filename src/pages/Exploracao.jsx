import ModuleContent from "../components/ModuleContent";

const QUESTIONS = [
  {
    text: "Qual espécie tem as maiores pétalas e as mais consistentes?",
    options: [
      “Iris Virginica”,
      "Iris Versicolor",
      "Iris Setosa",
      “Todas as espécies tem tamanho e consistência iguais”,
    ],
    correct: 1,
    explanation: "A espécie Iris Virginica possui as maiores pétalas (média de 5,55 cm). A Iris Setosa possui as menores (1,46 cm), mas é, de longe, a mais consistente, com um
desvio padrão de apenas 0,17.",
  },
  {
    text: "Qual espécie é mais homegênea internamente?",
    options: [
	"Iris Versicolor",
	“Iris Virginica”,
        "Iris Setosa",
      “Todas as espécies tem a mesma homogeneidade interna”,
	],
    correct: 2,
    explanation: "A Iris Virginica é a espécie mais homogênea, especialmente no comprimento das pétalas.",
  },
  {
    text: "Qual espécie é mais diferente das outras duas?",
    options: [
      "Iris Versicolor",
	“Iris Virginica”,
        "Iris Setosa",
      “Não há diferença entre as espécies”,
    ],
    correct: 3,
    explanation: "A Iris Setosa é a espécie mais distinta do conjunto de dados.",
  },
];

const PDFS = [
  {
    id: "eda-1",
    name: "Modulo 3 - Video 1",
    description: "PDF gerado a partir do notebook do video 1",
    url: "/assets/modulo-3/01-modulo-3-video-1.pdf",
    filename: "01-modulo-3-video-1.pdf",
  },
  {
    id: "eda-2",
    name: "Modulo 3 - Video 2",
    description: "PDF gerado a partir do notebook do video 2",
    url: "/assets/modulo-3/02-modulo-3-video-2.pdf",
    filename: "02-modulo-3-video-2.pdf",
  },
  {
    id: "eda-3",
    name: "Modulo 3 - Video 3",
    description: "PDF gerado a partir do notebook do video 3",
    url: "/assets/modulo-3/03-modulo-3-video-3.pdf",
    filename: "03-modulo-3-video-3.pdf",
  },
  {
    id: "eda-4",
    name: "Modulo 3 - Video 4",
    description: "PDF gerado a partir do notebook do video 4",
    url: "/assets/modulo-3/04-modulo-3-video-4.pdf",
    filename: "04-modulo-3-video-4.pdf",
  },
  {
    id: "eda-5",
    name: "Modulo 3 - Video 5",
    description: "PDF gerado a partir do notebook do video 5",
    url: "/assets/modulo-3/05-modulo-3-video-5.pdf",
    filename: "05-modulo-3-video-5.pdf",
  },
  {
    id: "eda-6",
    name: "Modulo 3 - Video 6",
    description: "PDF gerado a partir do notebook do video 6",
    url: "/assets/modulo-3/06-modulo-3-video-6.pdf",
    filename: "06-modulo-3-video-6.pdf",
  },
  {
    id: "eda-7",
    name: "Modulo 3 - Video 7",
    description: "PDF gerado a partir do notebook do video 7",
    url: "/assets/modulo-3/07-modulo-3-video-7.pdf",
    filename: "07-modulo-3-video-7.pdf",
  },
  {
    id: "eda-8",
    name: "Modulo 3 - Video 8",
    description: "PDF gerado a partir do notebook do video 8",
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
            title: "Video_1",
          },
          {
            videoId: "drive:1kA5EAOZwwyU3ozCwVXJDA14Sl2tC5VmZ",
            title: "Video_2",
          },
          {
            videoId: "drive:1RrunL-bw8kONCkpFQDGMQdWX-XVwTgBX",
            title: "Video_3",
          },
          {
            videoId: "drive:1phQ6SrUAiCIo2PUUKQWu5tJlDN0rFZIt",
            title: "Video_4",
          },
          {
            videoId: "drive:1fDxhMl3zKE82GKbbFr7yb-nUNw83mNvs",
            title: "Video_5",
          },
          {
            videoId: "drive:1QCPWYXEJcFJ9qMxgAgebadZ-GrX0N_Mg",
            title: "Video_6",
          },
          {
            videoId: "drive:1G_qmQRAYz_V55_w-uamNHuPswDP3Ojxp",
            title: "Video_7",
          },
          {
            videoId: "drive:1k2ny6__nx3-XR1zLx3PF3MZJ9DU5T7dF",
            title: "Video_8",
          },
          {
            videoId: "drive:16TOxH2XIUEBWJZUBEmb25GfNbNqsoYoJ",
            title: "Aula_1",
          },
          {
            videoId: "drive:1ikRclglFB2qkAfKE8HkBCEJTronFTkhH",
            title: "Aula_2",
          },
          {
            videoId: "drive:10lQ-w23yxaE36xoOI61zfTBgc3qnqD-f",
            title: "Aula_3",
          },
          {
            videoId: "drive:11se2TD-F-lWGnKM2xhCI-mgLJazj7zUU",
            title: "Aula_4",
          },
          {
            videoId: "drive:1_FQjKk6xMkKlGpEpJ2ci_uFrjcM0T2hj",
            title: "Aula_5",
          },
          {
            videoId: "drive:1DL7WPNH5JeIAsacnva46uS3PJFGlW6rp",
            title: "Aula_6",
          },
          {
            videoId: "drive:1WGg_mC2xgOrnzT0tARksGQtZk4mOMc0S",
            title: "Aula_7",
          },
          {
            videoId: "drive:17YrrIPxPAnRAfLFhFW187imFwYxsbzjt",
            title: "Aula_8",
          },
        ],
        pdfs: PDFS,
        questions: QUESTIONS,
      }}
    />
  );
}

export default Exploracao;
