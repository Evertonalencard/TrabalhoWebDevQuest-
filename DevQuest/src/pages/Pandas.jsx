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
    name: "Cheatsheet: Pandas",
    description: "Principais metodos e funcoes do Pandas em uma pagina",
    url: "/assets/pandas-cheatsheet.pdf",
    filename: "pandas-cheatsheet.pdf",
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
            videoId: "vmEHCJofvqE",
            title: "Aula: Python para Ciencia de Dados com Pandas",
          },
        ],
        pdfs: PDFS,
        questions: QUESTIONS,
      }}
    />
  );
}

export default Pandas;
