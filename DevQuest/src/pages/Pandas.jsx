import VideoPlayer from "../components/VideoPlayer";
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
        <VideoPlayer
          driveFileId="1XvE3btfYfydZDy0gxswe8HuuVuBeNVWU"
          title="aula_01"
        />
        <VideoPlayer
          driveFileId="1EYNxgP9egeeO4BiWUcRUYe2NSIEcvUYG"
          title="aula_02"
        />
        <VideoPlayer
          driveFileId="1K6ZNYpIMZED8vWr7YsphGopY8yisdmLo"
          title="Aula 1"
        />
        <VideoPlayer
          driveFileId="1R7AtbHn1jSZ01ZqZXBGUODqDxctBseVk"
          title="Aula 2"
        />
        <VideoPlayer
          driveFileId="1X9cuOROeBQ82eLRWMxA_0jcMia1XWGyY"
          title="Aula 3"
        />
        <VideoPlayer
          driveFileId="16rWhS_MobJkvXzBc98kzuTjp-ApU8g6F"
          title="Aula 4"
        />
      </div>
      <ul>
        <li>Estruturas DataFrame e Series</li>
        <li>Operações de filtro e transformações</li>
        <li>Exportação de dados para CSV</li>
      </ul>

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
