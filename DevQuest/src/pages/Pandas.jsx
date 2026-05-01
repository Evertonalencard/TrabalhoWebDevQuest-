import VideoPlayer from "../components/VideoPlayer";

const PANDAS_CODE = `# Manipulação de Dados com Pandas
import pandas as pd

# Criando um DataFrame
dados = {
    "nome":    ["Ana", "Bruno", "Carla", "Diego"],
    "idade":   [25, 30, 22, 35],
    "salario": [4500, 7200, 3800, 9100],
    "cidade":  ["SP", "RJ", "MG", "SP"],
}
df = pd.DataFrame(dados)
print(df)

# Filtro: funcionários de SP com salário > 5000
resultado = df[(df["cidade"] == "SP") & (df["salario"] > 5000)]
print(resultado)

# Agrupamento por cidade
agrupado = df.groupby("cidade")["salario"].mean()
print(agrupado)

# Exportar para CSV
df.to_csv("funcionarios.csv", index=False)
print("Exportado com sucesso!")
`;

function Pandas() {
  return (
    <section className="page-content">
      <h2>Python para Ciência de Dados (Pandas)</h2>
      <p>
        Aqui você encontra exemplos de manipulação de dados com Pandas, leitura
        e limpeza de tabelas, agrupamentos e visualização de resultados.
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
    </section>
  );
}

export default Pandas;
