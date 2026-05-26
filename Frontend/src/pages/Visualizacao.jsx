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
    text: "Qual tipo de gráfico é mais adequado para mostrar a distribuição de uma variável contínua? Explique o porquê.",
    expectedAnswer: "O histograma. Ele divide os dados em faixas (bins) e mostra a frequência de cada intervalo, sendo ideal para visualizar a distribuição de variáveis contínuas como renda ou idade.",
  },
  {
    text: "Qual é o melhor gráfico para comparar a relação entre duas variáveis numéricas e o que ele permite visualizar?",
    expectedAnswer: "O scatter plot (gráfico de dispersão). Ele plota pares (x, y) de duas variáveis numéricas, permitindo visualizar correlações, clusters e outliers entre elas.",
  },
  {
    text: "Explique por que é uma boa prática garantir que o eixo Y comece em zero em gráficos de barras.",
    expectedAnswer: "Quando o zero é o ponto de referência natural (como em gráficos de barras, que medem magnitude), iniciar o eixo Y em zero evita distorções visuais e interpretações enganosas das diferenças entre os dados.",
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
      <QuestionsModule questions={QUESTIONS} moduleKey="visualizacao" />
      <RatingModule pageKey="visualizacao" pageTitle="Visualização de Dados" />
    </section>
  );
}

export default Visualizacao;
