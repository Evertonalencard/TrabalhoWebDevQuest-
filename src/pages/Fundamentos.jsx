import ModuleContent from "../components/ModuleContent";

const QUESTIONS = [
  {
    text: “O que é uma variável em Python?” ,
    options: [“Um comando usado apenas para imprimir textos na tela”, 
"Um espaço utilizado para armazenar um valor durante a execução do programa”, 
“Um tipo de dado usado somente para números inteiros”, 
“Uma função obrigatória em todos os programas Python”],
    correct: 2,
    explanation:
      “Uma variável é um espaço usado para armazenar valores de diferentes tipos.”,
  },
  {
    text: "Qual dos valores abaixo é do tipo float?”,
    options: [“10”, “ ”10” ”, “10.5”, “True”],
    correct: 3,
    explanation:
      “Float é o tipo de variável usado para armazenar valores decimais.”,
  },
  {
    text: “Qual será o resultado da expressão ? 10 + 5 * 2 ”,
    options: [
      “30”,
      "20”,
      "25”,
      "15”,],
    correct: 2,
    explanation:
      “A ordem de precedência também esta presente no Python, primeiro a multiplicação depois a adição.”,
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
