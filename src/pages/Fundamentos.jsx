import ModuleContent from "../components/ModuleContent";

const QUESTIONS = [
  {
    text: "Qual biblioteca Python e mais usada para manipulacao de dados tabulares?",
    options: ["NumPy", "Matplotlib", "Pandas", "Scikit-learn"],
    correct: 2,
    explanation:
      "Pandas e a biblioteca padrao para manipulacao de DataFrames e Series.",
  },
  {
    text: "Qual das opcoes nao e uma etapa do ciclo de vida dos dados?",
    options: ["Coleta", "Limpeza", "Compilacao", "Modelagem"],
    correct: 2,
    explanation:
      "Compilacao e um processo de programacao, nao uma etapa do pipeline de dados.",
  },
  {
    text: "O que a funcao describe() do Pandas retorna?",
    options: [
      "O tipo de cada coluna",
      "Estatisticas descritivas",
      "Os primeiros registros do DataFrame",
      "O numero de valores nulos",
    ],
    correct: 1,
    explanation:
      "df.describe() retorna um resumo estatistico para colunas numericas.",
  },
];

const PDFS = [
  {
    id: "fund-1",
    name: "Projeto de Aulas Ciencia de Dados",
    description: "PDF geral do modulo 1",
    url: "/assets/modulo-1/01-projeto-aulas-ciencia-de-dados.pdf",
    filename: "01-projeto-aulas-ciencia-de-dados.pdf",
  },
  {
    id: "fund-2",
    name: "Aula 01 - Introducao a Ciencia de Dados",
    description: "Slides da aula 01",
    url: "/assets/modulo-1/02-aula-01-introducao-ciencia-de-dados.pdf",
    filename: "02-aula-01-introducao-ciencia-de-dados.pdf",
  },
  {
    id: "fund-3",
    name: "Aula 02 - Ciclo do Projeto",
    description: "Slides da aula 02",
    url: "/assets/modulo-1/03-aula-02-ciclo-do-projeto.pdf",
    filename: "03-aula-02-ciclo-do-projeto.pdf",
  },
  {
    id: "fund-4",
    name: "Aula 03 - Python e Config",
    description: "Slides da aula 03",
    url: "/assets/modulo-1/04-aula-03-python-e-config.pdf",
    filename: "04-aula-03-python-e-config.pdf",
  },
  {
    id: "fund-5",
    name: "Aula 04 - Tipos Basicos e Variaveis",
    description: "Slides da aula 04",
    url: "/assets/modulo-1/05-aula-04-tipos-basicos-e-variaveis.pdf",
    filename: "05-aula-04-tipos-basicos-e-variaveis.pdf",
  },
];

function Fundamentos() {
  return (
    <ModuleContent
      slug="fundamentos"
      fallback={{
        title: "Fundamentos de Ciencia de Dados e Python",
        description:
          "Introducao ao ciclo de vida dos dados, tipos de variaveis e primeiros passos com Python para analise.",
        topics: [
          "Introducao ao ciclo de vida dos dados",
          "Tipos de dados e variaveis",
          "Primeiros passos com Python",
        ],
        videos: [
          {
            videoId: "drive:1x3I3U8t0PV_rd-uAT2PDlGc-biU1dla6",
            title: "aula_01 - Variaveis e operadores",
          },
        ],
        pdfs: PDFS,
        questions: QUESTIONS,
      }}
    />
  );
}

export default Fundamentos;
