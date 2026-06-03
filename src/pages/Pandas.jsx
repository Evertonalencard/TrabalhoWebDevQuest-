import VideoPlayerYT from "../components/VideoPlayerYT";
import PDFModule from "../components/PDFModule";
import QuestionsModule from "../components/QuestionsModule";
import RatingModule from "../components/RatingModule";
import "../css/VideoModulo.css";
//mudar esta parte

const PDFS = [
  {
    id: "pandas-1",
    name: "Cheatsheet: Pandas",
    description: "Principais métodos e funções do Pandas em uma página",
    url: "/assets/pandas-cheatsheet.pdf",
    filename: "pandas-cheatsheet.pdf",
  },
];

const QUESTIONS = [
  {
    text: "Como filtrar registros em um DataFrame onde a coluna 'idade' seja maior que 30?",
    options: [
      "df.filter(df['idade'] > 30)",
      "df[df['idade'] > 30]",
      "df.where(idade > 30)",
      "df.select(age > 30)",
    ],
    correct: 1,
    explanation:
      "A filtragem booleana df[condição] é a forma idiomática no Pandas. A condição df['idade'] > 30 retorna uma Series de booleanos, usada como máscara no DataFrame.",
  },
  {
    text: "O que o método groupby('cidade')['salario'].mean() faz?",
    options: [
      "Ordena salários por cidade",
      "Calcula a média de salário agrupada por cidade",
      "Filtra funcionários de uma cidade específica",
      "Conta o número de funcionários por cidade",
    ],
    correct: 1,
    explanation:
      "groupby() agrupa linhas por valor de coluna e, combinado com mean(), calcula a média da coluna 'salario' para cada grupo (cidade).",
  },
  {
    text: "Qual método exporta um DataFrame para CSV?",
    options: [
      "df.export_csv()",
      "df.save('file.csv')",
      "df.to_csv('file.csv')",
      "df.write_csv('file.csv')",
    ],
    correct: 2,
    explanation:
      "df.to_csv('nome.csv') é o método padrão para salvar um DataFrame em arquivo CSV. Use index=False para não incluir o índice numérico como coluna extra.",
  },
];
//fazer para videos no youtube
function Pandas() {
  return (
    <section className="page-content">
      <h2>Curso Introdutório de Python para Ciência de Dados (pandas) </h2>
      <p>
        O objetivo é oferecer um curso introdutório de Python com foco em
        Ciência de Dados para a comunidade externa, democratizando o acesso ao
        conhecimento em tecnologia e análise de dados.
      </p>
      <ul>
        <li>Introdução ao Pandas e Dados Tabulares</li>
        <li>Manipulação de DataFrames e Series</li>
        <li>Estrutura Principal: DataFrame</li>
        <li>Leitura de Arquivos (CSV e Excel)</li>
        <li>Tipos de Dados no Pandas</li>
        <li>Seleção de Linhas e Colunas</li>
        <li>Filtros e Consultas</li>
        <li>Operações de Agregação</li>
        <li>Renomeação e Organização de Dados</li>
      </ul>
      <div className="video-grid video-grid--4">
        <VideoPlayerYT
          video="https://www.youtube.com/watch?v=XBxXgJcd5nU&list=PLGTqm-GzPhSHQxLOYmtxeEfMhnQvwOvdr"
          title="aula_01 -  Introdução ao Pandas e Dados Tabulares"
        />
        <VideoPlayerYT
          video="https://youtu.be/i4CsKbhW12k?si=weUYN1-mtJ7A3xNC"
          title="aula_02 - Estruturas Fundamentais: Series"
        />
        <VideoPlayerYT
          video="https://www.youtube.com/watch?v=1K6ZNYpIMZED8vWr7YsphGopY8yisdmLo&list=PLGTqm-GzPhSHQxLOYmtxeEfMhnQvwOvdr" //mudar este link
          title="Aula_03 - Estrutura Principal: DataFrame"
        />
        <VideoPlayerYT
          video="https://youtu.be/ft5XwV2zkUo"
          title="Aula_04 - Leitura de Arquivos (CSV e Excel)"
        />
        <VideoPlayerYT
          video="https://youtu.be/ft5XwV2zkUo"
          title="Aula_05 - Tipos de Dados no Pandas"
        />
        <VideoPlayerYT
          video="https://studio.youtube.com/video/7srOGuyglAg/edit"
          title="Aula_06 - Seleção de Linhas e Colunas"
        />
        <VideoPlayerYT
          video="https://youtu.be/RPkUx27KAiM?si=lJD5MLSetCEaynDL"
          title="Aula_07 - Filtros e Consultas"
        />
        <VideoPlayerYT
          video="https://youtu.be/BytfizH37TA?si=5OsTNlY-dewG1ZpV"
          title="Aula_08 - Operação de Agregação"
        />
        <VideoPlayerYT
          video="https://youtu.be/NF0Jh1wHkOU?si=hsic82ZmGCefJ8xz"
          title="Aula_09 - Renomeação e Organização de Dados"
        />
      </div>

      <PDFModule pdfs={PDFS} />
      <QuestionsModule questions={QUESTIONS} moduleKey="pandas" />
      <RatingModule
        pageKey="pandas"
        pageTitle="Python para Ciência de Dados (Pandas)"
      />
    </section>
  );
}

export default Pandas;
