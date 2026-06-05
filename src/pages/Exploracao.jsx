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
            videoId: "ZW-V3_TbKrI",
            title: "Aula: Exploracao de Dados e Estatistica",
          },
        ],
        pdfs: PDFS,
        questions: QUESTIONS,
      }}
    />
  );
}

export default Exploracao;
