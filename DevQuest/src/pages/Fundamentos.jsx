import VideoPlayer from "../components/VideoPlayer";
import PDFModule from "../components/PDFModule";
import QuestionsModule from "../components/QuestionsModule";
import RatingModule from "../components/RatingModule";
import "../css/VideoModulo.css";

const PDFS = [
  {
    id: "fund-1",
    name: "Slides: Fundamentos de Ciência de Dados",
    description: "PDF com todos os slides da aula",
    url: "/assets/fundamentos-slides.pdf",
    filename: "fundamentos-slides.pdf",
  },
  {
    id: "fund-2",
    name: "Resumo: Python para Ciência de Dados",
    description: "Guia rápido de sintaxe e bibliotecas",
    url: "/assets/python-resumo.pdf",
    filename: "python-resumo.pdf",
  },
];

const QUESTIONS = [
  {
    text: "Qual biblioteca Python é mais usada para manipulação de dados tabulares?",
    options: ["NumPy", "Matplotlib", "Pandas", "Scikit-learn"],
    correct: 2,
    explanation:
      "Pandas é a biblioteca padrão para manipulação de DataFrames e Series, oferecendo funções de filtro, agrupamento, leitura de CSV/Excel, entre muitas outras.",
  },
  {
    text: "Qual das opções NÃO é uma etapa do ciclo de vida dos dados?",
    options: ["Coleta", "Limpeza", "Compilação", "Modelagem"],
    correct: 2,
    explanation:
      "Compilação é um processo de programação de baixo nível, não uma etapa do pipeline de Ciência de Dados. As etapas corretas são: Coleta, Limpeza, Exploração, Modelagem, Visualização e Implantação.",
  },
  {
    text: "O que a função describe() do Pandas retorna?",
    options: [
      "O tipo de cada coluna",
      "Estatísticas descritivas (média, desvio, min, max etc.)",
      "Os primeiros 5 registros do DataFrame",
      "O número de valores nulos",
    ],
    correct: 1,
    explanation:
      "df.describe() retorna um resumo estatístico com count, mean, std, min, 25%, 50%, 75% e max para colunas numéricas — ideal para uma visão geral rápida dos dados.",
  },
];

function Fundamentos() {
  return (
    <section className="page-content">
      <h2>Fundamentos de Ciência de Dados e Python</h2>
      <p>
        O projeto consiste no desenvolvimento de um módulo educacional
        introdutório focado em Fundamentos de Ciência de Dados e Linguagem
        Python. <br />O objetivo central é capacitar a comunidade externa com
        noções básicas de programação aplicada à análise de dados, utilizando
        uma abordagem prática e progressiva.
        <br /> O Módulo 1 servirá como base teórica e técnica para os módulos
        subsequentes da disciplina.
      </p>
      <ul>
        <li>Ciência de Dados</li>
        <li>Python</li>
        <li>Estruturas</li>
        <li>Coleções</li>
        <li>Funções</li>
      </ul>
      <div className="video-grid video-grid--1">
        <VideoPlayer
          driveFileId="1x3I3U8t0PV_rd-uAT2PDlGc-biU1dla6"
          title="aula_01 - Variaveis e operadores"
        />
      </div>
      <PDFModule pdfs={PDFS} />
      <QuestionsModule questions={QUESTIONS} moduleKey="fundamentos" />
      <RatingModule
        pageKey="fundamentos"
        pageTitle="Fundamentos de Ciência de Dados e Python"
      />
    </section>
  );
}

export default Fundamentos;
