import ModuleContent from "../components/ModuleContent";

const QUESTIONS = [
  {
    text: "O que é uma variável em Python?",
    options: [
      "Um comando usado apenas para imprimir textos na tela",
      "Um espaço utilizado para armazenar um valor durante a execução do programa",
      "Um tipo de dado usado somente para números inteiros",
      "Uma função obrigatória em todos os programas Python",
    ],
    correct: 1,
    explanation:
      "Uma variável é um espaço usado para armazenar valores de diferentes tipos.",
  },
  {
    text: "Qual dos valores abaixo é do tipo float?",
    options: ["10", "'10'", "10.5", "True"],
    correct: 2,
    explanation:
      "Float é o tipo de variável usado para armazenar valores decimais.",
  },
  {
    text: "Qual será o resultado da expressão 10 + 5 * 2?",
    options: ["30", "20", "25", "15"],
    correct: 1,
    explanation:
      "A ordem de precedência também está presente no Python: primeiro a multiplicação, depois a adição.",
  },
];

const PDFS = [
  {
    id: "fund-1",
    name: "Plano de Estudos do Módulo",
    description: "Visão geral das aulas, objetivos e sequência de aprendizagem.",
    url: "/assets/modulo-1/01-projeto-aulas-ciencia-de-dados.pdf",
    filename: "01-projeto-aulas-ciencia-de-dados.pdf",
  },
  {
    id: "fund-2",
    name: "Aula 01 - Introdução à Ciência de Dados",
    description: "Conceitos iniciais, aplicações e papel da ciência de dados.",
    url: "/assets/modulo-1/02-aula-01-introducao-ciencia-de-dados.pdf",
    filename: "02-aula-01-introducao-ciencia-de-dados.pdf",
  },
  {
    id: "fund-3",
    name: "Aula 02 - Ciclo de um Projeto de Dados",
    description: "Etapas de coleta, preparação, análise, modelagem e comunicação.",
    url: "/assets/modulo-1/03-aula-02-ciclo-do-projeto.pdf",
    filename: "03-aula-02-ciclo-do-projeto.pdf",
  },
  {
    id: "fund-4",
    name: "Aula 03 - Ambiente Python e Configuração",
    description: "Preparação do ambiente de desenvolvimento para análise de dados.",
    url: "/assets/modulo-1/04-aula-03-python-e-config.pdf",
    filename: "04-aula-03-python-e-config.pdf",
  },
  {
    id: "fund-5",
    name: "Aula 04 - Tipos Básicos e Variáveis",
    description: "Fundamentos de variáveis, operadores e tipos de dados em Python.",
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
            title: "Aula 01 - Variáveis e Operadores em Python",
          },
        ],
        pdfs: PDFS,
        questions: QUESTIONS,
      }}
    />
  );
}

export default Fundamentos;
