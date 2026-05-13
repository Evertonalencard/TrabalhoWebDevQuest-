import VideoPlayer from "../components/VideoPlayer";
import PDFModule from "../components/PDFModule";
import QuestionsModule from "../components/QuestionsModule";
import RatingModule from "../components/RatingModule";

const PANDAS_CODE = `# Manipulação de Dados com Pandas
import pandas as pd

dados = {
    "nome":    ["Ana", "Bruno", "Carla", "Diego"],
    "idade":   [25, 30, 22, 35],
    "salario": [4500, 7200, 3800, 9100],
    "cidade":  ["SP", "RJ", "MG", "SP"],
}
df = pd.DataFrame(dados)
print(df)

resultado = df[(df["cidade"] == "SP") & (df["salario"] > 5000)]
print(resultado)

agrupado = df.groupby("cidade")["salario"].mean()
print(agrupado)

df.to_csv("funcionarios.csv", index=False)
print("Exportado com sucesso!")
`;

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
    explanation: "A filtragem booleana df[condição] é a forma idiomática no Pandas. A condição df['idade'] > 30 retorna uma Series de booleanos, usada como máscara no DataFrame.",
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
    explanation: "groupby() agrupa linhas por valor de coluna e, combinado com mean(), calcula a média da coluna 'salario' para cada grupo (cidade).",
  },
  {
    text: "Qual método exporta um DataFrame para CSV?",
    options: ["df.export_csv()", "df.save('file.csv')", "df.to_csv('file.csv')", "df.write_csv('file.csv')"],
    correct: 2,
    explanation: "df.to_csv('nome.csv') é o método padrão para salvar um DataFrame em arquivo CSV. Use index=False para não incluir o índice numérico como coluna extra.",
  },
];

function Pandas() {
  return (
    <section className="page-content">
      <h2>Python para Ciência de Dados (Pandas)</h2>
      <p>Exemplos práticos de manipulação de dados com Pandas: filtros, agrupamentos e exportação.</p>
      <ul>
        <li>Estruturas DataFrame e Series</li>
        <li>Operações de filtro e transformações</li>
        <li>Exportação de dados para CSV</li>
      </ul>
      <VideoPlayer videoId="vmEHCJofvqE" title="Aula: Python para Ciência de Dados com Pandas" code={PANDAS_CODE} language="python" />
      <PDFModule pdfs={PDFS} />
      <QuestionsModule questions={QUESTIONS} />
      <RatingModule pageKey="pandas" pageTitle="Python para Ciência de Dados (Pandas)" />
    </section>
  );
}

export default Pandas;
