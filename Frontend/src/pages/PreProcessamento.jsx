import VideoPlayer from "../components/VideoPlayer";
import PDFModule from "../components/PDFModule";
import QuestionsModule from "../components/QuestionsModule";
import RatingModule from "../components/RatingModule";
import "../css/VideoModulo.css";

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
      "A sintaxe correta é df[df['idade'] > 30]. A filtragem booleana é a forma idiomática no Pandas. A condição interna df['idade'] > 30 retorna uma Series de booleanos (Verdadeiro ou Falso), que é usada como máscara para filtrar as linhas do DataFrame.",
  },
  {
    text: "Explique o que o método groupby('cidade')['salario'].mean() faz.",
    expectedAnswer:
      "O método groupby() agrupa as linhas do DataFrame baseando-se nos valores únicos da coluna 'cidade'. Em seguida, ele seleciona a coluna 'salario' e, com o método mean(), calcula a média salarial para cada um desses grupos (cidades).",
  },
  {
    text: "Qual método é utilizado para exportar um DataFrame para um arquivo CSV? Cite um parâmetro importante ao usá-lo.",
    expectedAnswer:
      "O método é df.to_csv('nome_do_arquivo.csv'). É altamente recomendável usar o parâmetro index=False para evitar que o índice numérico do DataFrame seja incluído como uma coluna extra no arquivo exportado.",
  },
];

function PreProcessamento() {
  return (
    <section className="page-content">
      <h2>Pré-Processamento de Dados</h2>
      <p>
        Este módulo abrange desde conceitos introdutórios até problemas práticos
        comuns encontrados em datasets reais, com foco em resolução utilizando
        Python e Pandas.
      </p>
      <ul>
        <li>Introdução</li>
        <li>Delimitador Não Padrão</li>
        <li>Espaços em Branco Invisíveis</li>
        <li>Conversão de Tipos de Dados</li>
        <li>Mistura de Tipos na Mesma Coluna</li>
        <li>Duplicatas</li>
        <li>Dados Agrupados em uma Coluna</li>
        <li>Datas em Formatos Diferentes</li>
        <li>Inconsistência de Representação</li>
        <li>Outliers (Valores Atípicos)</li>
        <li>Unidades de Medida Inconsistentes</li>
      </ul>

      {/*
        type="drive" → usa embed do Google Drive
        videoId      → cole aqui o ID do arquivo ou a URL pública completa
        Exemplos aceitos:
          videoId="1A2B3C4D5E6F7G8H9I0J"
          videoId="https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0J/view?usp=sharing"
      */}
      <div className="video-grid video-grid--4">
        <VideoPlayer
          driveFileId="1lFBTyQIKwuadr-t0A1dTt63ueYlwjhhP"
          title="aula_00_introdução"
        />
        <VideoPlayer
          driveFileId="1GnpaF4B7UR84ee1Fi9FQW6QQr0IyD5Ry"
          title="aula_00_overview"
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

      <PDFModule pdfs={PDFS} />
      <QuestionsModule questions={QUESTIONS} moduleKey="pandas" />
      <RatingModule
        pageKey="PreProcessamento"
        pageTitle="Pré-Processamento de Dados"
      />
    </section>
  );
}

export default PreProcessamento;
