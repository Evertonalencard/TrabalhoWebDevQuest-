import ModuleContent from "../components/ModuleContent";

const QUESTIONS = [
  {
    text: "Qual tipo de grafico e mais adequado para mostrar distribuicao de uma variavel continua?",
    options: ["Grafico de pizza", "Histograma", "Grafico de barras", "Scatter plot"],
    correct: 1,
    explanation: "O histograma mostra a frequencia por faixas de valores.",
  },
  {
    text: "Para comparar a relacao entre duas variaveis numericas, o melhor grafico e:",
    options: ["Histograma", "Grafico de linhas", "Scatter plot", "Grafico de barras"],
    correct: 2,
    explanation: "O scatter plot exibe pares de valores numericos.",
  },
  {
    text: "O que e uma boa pratica ao criar visualizacoes?",
    options: [
      "Usar o maximo de cores possivel",
      "Omitir legendas",
      "Garantir que eixos comecem em zero quando relevante",
      "Sempre usar graficos 3D",
    ],
    correct: 2,
    explanation: "Eixos coerentes evitam distorcoes visuais.",
  },
];

const PDFS = [
  {
    id: "viz-1",
    name: "Guia: Visualizacao de Dados",
    description: "Exemplos de graficos e boas praticas",
    url: "/assets/visualizacao-guide.pdf",
    filename: "visualizacao-guide.pdf",
  },
];

function Visualizacao() {
  return (
    <ModuleContent
      slug="visualizacao"
      fallback={{
        title: "Visualizacao de Dados",
        description:
          "Tecnicas para criar graficos claros e informativos, desde histogramas ate graficos de dispersao.",
        topics: [
          "Boas praticas para dashboards",
          "Escolha de cores e legendas",
          "Interpretando visualizacoes com proposito",
        ],
        pdfs: PDFS,
        questions: QUESTIONS,
      }}
    />
  );
}

export default Visualizacao;
