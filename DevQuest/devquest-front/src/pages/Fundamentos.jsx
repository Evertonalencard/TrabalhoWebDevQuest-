import VideoPlayer from "../components/VideoPlayer";
import PDFModule from "../components/PDFModule";
import QuestionsModule from "../components/QuestionsModule";
import RatingModule from "../components/RatingModule";

const FUNDAMENTOS_CODE = `# Fundamentos de Ciência de Dados com Python
import pandas as pd
import numpy as np

inteiro = 42
flutuante = 3.14
texto = "Data Science"
booleano = True
lista = [1, 2, 3, 4, 5]

dados = pd.Series([23, 45, 12, 67, 34, 89, 55, 41])

print("Média:   ", dados.mean())
print("Mediana: ", dados.median())
print("Desvio:  ", round(dados.std(), 2))
print("Min/Max: ", dados.min(), "/", dados.max())

etapas = ["1. Coleta","2. Limpeza","3. Exploração","4. Modelagem","5. Visualização","6. Implantação"]
for etapa in etapas:
    print(etapa)
`;

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
    explanation: "Pandas é a biblioteca padrão para manipulação de DataFrames e Series, oferecendo funções de filtro, agrupamento, leitura de CSV/Excel, entre muitas outras.",
  },
  {
    text: "Qual das opções NÃO é uma etapa do ciclo de vida dos dados?",
    options: ["Coleta", "Limpeza", "Compilação", "Modelagem"],
    correct: 2,
    explanation: "Compilação é um processo de programação de baixo nível, não uma etapa do pipeline de Ciência de Dados. As etapas corretas são: Coleta, Limpeza, Exploração, Modelagem, Visualização e Implantação.",
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
    explanation: "df.describe() retorna um resumo estatístico com count, mean, std, min, 25%, 50%, 75% e max para colunas numéricas — ideal para uma visão geral rápida dos dados.",
  },
];

function Fundamentos() {
  return (
    <section className="page-content">
      <h2>Fundamentos de Ciência de Dados e Python</h2>
      <p>Introdução ao ciclo de vida dos dados, tipos de variáveis e os primeiros passos com Python para análise.</p>
      <ul>
        <li>Introdução ao ciclo de vida dos dados</li>
        <li>Tipos de dados e variáveis</li>
        <li>Primeiros passos com Python</li>
      </ul>
      <VideoPlayer videoId="yhp6rgrCjQ0" title="Aula: Fundamentos de Ciência de Dados e Python" code={FUNDAMENTOS_CODE} language="python" />
      <PDFModule pdfs={PDFS} />
      <QuestionsModule questions={QUESTIONS} moduleKey="fundamentos" />
      <RatingModule pageKey="fundamentos" pageTitle="Fundamentos de Ciência de Dados e Python" />
    </section>
  );
}

export default Fundamentos;
