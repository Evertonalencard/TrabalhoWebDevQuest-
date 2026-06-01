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
