import ModuleContent from "../components/ModuleContent";

const QUESTIONS = [
  {
    text: "Como filtrar registros em um DataFrame onde a coluna idade seja maior que 30?",
    options: [
      "df.filter(df['idade'] > 30)",
      "df[df['idade'] > 30]",
      "df.where(idade > 30)",
      "df.select(age > 30)",
    ],
    correct: 1,
    explanation:
      "A filtragem booleana df[condicao] e a forma idiomatica no Pandas.",
  },
  {
    text: "O que groupby('cidade')['salario'].mean() faz?",
    options: [
      "Ordena salarios por cidade",
      "Calcula a media de salario agrupada por cidade",
      "Filtra funcionarios de uma cidade",
      "Conta funcionarios por cidade",
    ],
    correct: 1,
    explanation:
      "groupby agrupa linhas por valor de coluna e mean calcula a media por grupo.",
  },
  {
    text: "Qual metodo exporta um DataFrame para CSV?",
    options: [
      "df.export_csv()",
      "df.save('file.csv')",
      "df.to_csv('file.csv')",
      "df.write_csv('file.csv')",
    ],
    correct: 2,
    explanation: "df.to_csv('nome.csv') salva um DataFrame em arquivo CSV.",
  },
];

const PDFS = [
  {
    id: "pandas-1",
    name: "Aula 1",
    description: "PDF unico informado para o modulo 2",
    url: "/assets/modulo-2/01-aula-1.pdf",
    filename: "01-aula-1.pdf",
  },
];

function Pandas() {
  return (
    <ModuleContent
      slug="pandas"
      fallback={{
        title: "Python para Ciencia de Dados (Pandas)",
        description:
          "Exemplos praticos de manipulacao de dados com Pandas: filtros, agrupamentos e exportacao.",
        topics: [
          "Estruturas DataFrame e Series",
          "Operacoes de filtro e transformacoes",
          "Exportacao de dados para CSV",
        ],
        videos: [
          {
            videoId: "https://www.youtube.com/watch?v=XBxXgJcd5nU&list=PLGTqm-GzPhSHQxLOYmtxeEfMhnQvwOvdr",
            title: "aula_01 - Introducao ao Pandas e Dados Tabulares",
          },
          {
            videoId: "https://youtu.be/i4CsKbhW12k?si=weUYN1-mtJ7A3xNC",
            title: "aula_02 - Estruturas Fundamentais: Series",
          },
          {
            videoId: "https://www.youtube.com/watch?v=1K6ZNYpIMZED8vWr7YsphGopY8yisdmLo&list=PLGTqm-GzPhSHQxLOYmtxeEfMhnQvwOvdr",
            title: "Aula_03 - Estrutura Principal: DataFrame",
          },
          {
            videoId: "https://youtu.be/ft5XwV2zkUo",
            title: "Aula_04 - Leitura de Arquivos (CSV e Excel)",
          },
          {
            videoId: "https://youtu.be/ft5XwV2zkUo",
            title: "Aula_05 - Tipos de Dados no Pandas",
          },
          {
            videoId: "https://studio.youtube.com/video/7srOGuyglAg/edit",
            title: "Aula_06 - Selecao de Linhas e Colunas",
          },
          {
            videoId: "https://youtu.be/RPkUx27KAiM?si=lJD5MLSetCEaynDL",
            title: "Aula_07 - Filtros e Consultas",
          },
          {
            videoId: "https://youtu.be/BytfizH37TA?si=5OsTNlY-dewG1ZpV",
            title: "Aula_08 - Operacao de Agregacao",
          },
          {
            videoId: "https://youtu.be/NF0Jh1wHkOU?si=hsic82ZmGCefJ8xz",
            title: "Aula_09 - Renomeacao e Organizacao de Dados",
          },
        ],
        pdfs: PDFS,
        questions: QUESTIONS,
      }}
    />
  );
}

export default Pandas;
