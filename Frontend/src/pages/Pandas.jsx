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
    text: "Como filtrar registros em um DataFrame onde a coluna 'idade' seja maior que 30? Descreva a sintaxe e como ela funciona.",
    expectedAnswer:
      "A sintaxe correta é df[df['idade'] > 30]. A filtragem booleana é a forma idiomática no Pandas. A condição interna df['idade'] > 30 retorna uma Series de booleanos (Verdadeiro/Falso), que atua como uma máscara para filtrar as linhas do DataFrame.",
  },
  {
    text: "Explique o que o método groupby('cidade')['salario'].mean() faz.",
    expectedAnswer:
      "O método groupby() agrupa as linhas do DataFrame baseando-se nos valores únicos da coluna 'cidade'. Em seguida, ele seleciona a coluna 'salario' e, com o método mean(), calcula a média salarial para cada um desses grupos.",
  },
  {
    text: "Qual método é utilizado para exportar um DataFrame para um arquivo CSV e qual parâmetro evita a exportação do índice?",
    expectedAnswer:
      "O método é df.to_csv('nome_do_arquivo.csv'). Deve-se usar o parâmetro index=False para evitar que o índice numérico do DataFrame seja incluído como uma coluna extra inútil no arquivo CSV exportado.",
  },
];

function Pandas() {
  return (
    <section className="page-content">
      <h2>Python para Ciência de Dados (Pandas)</h2>
      <p>
        Exemplos práticos de manipulação de dados com Pandas: filtros,
        agrupamentos e exportação.
      </p>
      <ul>
        <li>Estruturas DataFrame e Series</li>
        <li>Operações de filtro e transformações</li>
        <li>Exportação de dados para CSV</li>
      </ul>
      <VideoPlayer
        videoId="vmEHCJofvqE"
        title="Aula: Python para Ciência de Dados com Pandas"
        code={PANDAS_CODE}
        language="python"
      />
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
