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
    name: "Slides: Fundamentos de Ciencia de Dados",
    description: "PDF com todos os slides da aula",
    url: "/assets/fundamentos-slides.pdf",
    filename: "fundamentos-slides.pdf",
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
            videoId: "yhp6rgrCjQ0",
            title: "Aula: Fundamentos de Ciencia de Dados e Python",
          },
        ],
        pdfs: PDFS,
        questions: QUESTIONS,
      }}
    />
  );
}

export default Fundamentos;
