import PDFModule from "../components/PDFModule";
import QuestionsModule from "../components/QuestionsModule";
import RatingModule from "../components/RatingModule";
import VideoPlayer from "../components/VideoPlayer";
import "../css/VideoModulo.css";

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
    options: [
      "Gráfico de pizza",
      "Histograma",
      "Gráfico de barras",
      "Scatter plot",
    ],
    correct: 1,
    explanation:
      "O histograma divide os dados em faixas (bins) e mostra a frequência de cada intervalo, sendo ideal para visualizar a distribuição de variáveis contínuas como renda ou idade.",
  },
  {
    text: "Para comparar a relação entre duas variáveis numéricas, o melhor gráfico é:",
    options: [
      "Histograma",
      "Gráfico de linhas",
      "Scatter plot (dispersão)",
      "Gráfico de barras",
    ],
    correct: 2,
    explanation:
      "O scatter plot plota pares (x, y) de duas variáveis numéricas, permitindo visualizar correlações, clusters e outliers entre elas.",
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
    explanation:
      "Quando o zero é o ponto de referência natural (ex: barras), iniciar o eixo Y em zero evita distorções visuais e interpretações enganosas dos dados.",
  },
];

function Visualizacao() {
  return (
    <section className="page-content">
      <h2>Visualização de Dados</h2>
      <p>
        Técnicas para criar gráficos claros e informativos, desde histogramas
        até gráficos de dispersão.
      </p>
      <ul>
        <li>Boas práticas para dashboards</li>
        <li>Escolha de cores e legendas</li>
        <li>Interpretando visualizações com propósito</li>
      </ul>
      <div className="video-grid video-grid--4">
        <VideoPlayer
          driveFileId="1eF-HIBbwo9DB0n0dhMZ9SD1f95R332Ns"
          title="aula_01"
        />
        <VideoPlayer
          driveFileId="16a-0reUPxvwoIpMF5sFc3_Zoq5-svIf_"
          title="aula_02"
        />
        <VideoPlayer
          driveFileId="1Ue49T8yIuN6RHraR0bIKb2j55qJKUCEp"
          title="Aula_03"
        />
        <VideoPlayer
          driveFileId="12xoMJ7JxRki5lNwfCgHVA8dsc9T64P3s"
          title="Aula_04"
        />
        <VideoPlayer
          driveFileId="1tKAvyg2awwF-eyztO2y34sasPA2ioQQm"
          title="Aula_05"
        />
        <VideoPlayer
          driveFileId="159P41UdNqGnVPM_fdMDxDzBJo9qez1OQ"
          title="Aula_06"
        />
        <VideoPlayer
          driveFileId="13-AvlMjB4NOl0IUD6I_XuoDba-2A0vpz"
          title="Aula_07"
        />
        <VideoPlayer
          driveFileId="1FKf96qP8NOv2jEr8qcEPcWBgM0APL1Sn"
          title="Aula_08"
        />
        <VideoPlayer
          driveFileId="17jAnDDcrcyZiaiC5gvmM5drEBdKL3orF"
          title="Aula_09"
        />
        <VideoPlayer
          driveFileId="1j2rD_4V8KOLL-LWJTwtvZKywaflCZNDx"
          title="Aula_10"
        />
        <VideoPlayer
          driveFileId="1qzHB63G_htrFooIV_5UC3A2Oe2E2B29E"
          title="Aula_11"
        />
      </div>
      <PDFModule pdfs={PDFS} />
      <QuestionsModule questions={QUESTIONS} moduleKey="visualizacao" />
      <RatingModule pageKey="visualizacao" pageTitle="Visualização de Dados" />
    </section>
  );
}

export default Visualizacao;
