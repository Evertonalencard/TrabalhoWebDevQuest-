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
        videos: [
          {
            videoId: "drive:1eF-HIBbwo9DB0n0dhMZ9SD1f95R332Ns",
            title: "aula_01",
          },
          {
            videoId: "drive:16a-0reUPxvwoIpMF5sFc3_Zoq5-svIf_",
            title: "aula_02",
          },
          {
            videoId: "drive:1Ue49T8yIuN6RHraR0bIKb2j55qJKUCEp",
            title: "Aula_03",
          },
          {
            videoId: "drive:12xoMJ7JxRki5lNwfCgHVA8dsc9T64P3s",
            title: "Aula_04",
          },
          {
            videoId: "drive:1tKAvyg2awwF-eyztO2y34sasPA2ioQQm",
            title: "Aula_05",
          },
          {
            videoId: "drive:159P41UdNqGnVPM_fdMDxDzBJo9qez1OQ",
            title: "Aula_06",
          },
          {
            videoId: "drive:13-AvlMjB4NOl0IUD6I_XuoDba-2A0vpz",
            title: "Aula_07",
          },
          {
            videoId: "drive:1FKf96qP8NOv2jEr8qcEPcWBgM0APL1Sn",
            title: "Aula_08",
          },
          {
            videoId: "drive:17jAnDDcrcyZiaiC5gvmM5drEBdKL3orF",
            title: "Aula_09",
          },
          {
            videoId: "drive:1j2rD_4V8KOLL-LWJTwtvZKywaflCZNDx",
            title: "Aula_10",
          },
          {
            videoId: "drive:1qzHB63G_htrFooIV_5UC3A2Oe2E2B29E",
            title: "Aula_11",
          },
        ],
        pdfs: PDFS,
        questions: QUESTIONS,
      }}
    />
  );
}

export default Visualizacao;
