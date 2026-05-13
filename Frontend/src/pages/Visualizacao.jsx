import PDFModule from "../components/PDFModule";
import QuestionsModule from "../components/QuestionsModule";
import RatingModule from "../components/RatingModule";

const PDFS = [
  {
    id: "viz-1",
    name: "Guia: Visualização de Dados com Matplotlib e Seaborn",
    description: "Exemplos de gráficos e boas práticas",
    url: "/assets/visualizacao-guide.pdf",
    filename: "visualizacao-guide.pdf",
  },
];

const QUESTIONS = [
  {
    text: "Qual tipo de gráfico é mais adequado para mostrar a distribuição de uma variável contínua?",
    options: ["Gráfico de pizza", "Histograma", "Gráfico de barras", "Scatter plot"],
    correct: 1,
    explanation: "O histograma divide os dados em faixas (bins) e mostra a frequência de cada intervalo, sendo ideal para visualizar a distribuição de variáveis contínuas como renda ou idade.",
  },
  {
    text: "Para comparar a relação entre duas variáveis numéricas, o melhor gráfico é:",
    options: ["Histograma", "Gráfico de linhas", "Scatter plot (dispersão)", "Gráfico de barras"],
    correct: 2,
    explanation: "O scatter plot plota pares (x, y) de duas variáveis numéricas, permitindo visualizar correlações, clusters e outliers entre elas.",
  },
  {
    text: "O que é uma boa prática ao criar visualizações?",
    options: [
      "Usar o máximo de cores possível",
      "Omitir legendas para simplificar",
      "Garantir que os eixos comecem em zero quando relevante",
      "Sempre usar gráficos 3D para mais impacto visual",
    ],
    correct: 2,
    explanation: "Quando o zero é o ponto de referência natural (ex: barras), iniciar o eixo Y em zero evita distorções visuais e interpretações enganosas dos dados.",
  },
];

function Visualizacao() {
  return (
    <section className="page-content">
      <h2>Visualização de Dados</h2>
      <p>Técnicas para criar gráficos claros e informativos, desde histogramas até gráficos de dispersão.</p>
      <ul>
        <li>Boas práticas para dashboards</li>
        <li>Escolha de cores e legendas</li>
        <li>Interpretando visualizações com propósito</li>
      </ul>
      <PDFModule pdfs={PDFS} />
      <QuestionsModule questions={QUESTIONS} />
      <RatingModule pageKey="visualizacao" pageTitle="Visualização de Dados" />
    </section>
  );
}

export default Visualizacao;
