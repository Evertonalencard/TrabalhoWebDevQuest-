import ModuleContent from "../components/ModuleContent";

const QUESTIONS = [
  {
    text: “Dado o DataFrame df com as colunas ‘idade’ e ‘cidade’, qual código retorna corretamente os registros com idade maior que 25 e cidade igual a ‘Fortaleza’?”,
    options: [
      "df[df['idade'] > 25, df[‘cidade’] == ‘Fortaleza’]”,
      "df[(df['idade'] > 25) & (df[‘cidade’] == ‘Fortaleza’)]”,
      "df[df['idade'] > 25 and df[‘cidade’] == ‘Fortaleza’]",
      "df[df['idade'] > 25 | df[‘cidade’] == ‘Fortaleza’]",
    ],
    correct: 2,
    explanation:
      "Em Pandas, múltiplas condições usam & (AND) e cada condição deve estar entre parênteses.”,
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
    text: "Qual código renomeia corretamente a coluna ’salario’ para ’Salario’ em um DataFrame df, modificando-o diretamente?”,
    options: [
      "df.columns[’salario’] = ’Salario’”,
      "df.rename(‘salario’, ’Salario’, inplace=True)”,
      "df.rename(columns={’salario’: ’Salario’}, inplace=True)”,
      "df[‘salario’].rename(’Salario’)“,
    ],
    correct: 3,
    explanation: “.rename() exige o argumento columns={} com o mapeamento, e inplace=True para modificar direto.”,
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
