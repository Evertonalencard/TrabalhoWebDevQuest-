import VideoPlayer from "../components/VideoPlayer";

const FUNDAMENTOS_CODE = `# Fundamentos de Ciência de Dados com Python
import pandas as pd
import numpy as np

# Tipos de dados em Python
inteiro = 42
flutuante = 3.14
texto = "Data Science"
booleano = True
lista = [1, 2, 3, 4, 5]

# Estatística descritiva básica
dados = pd.Series([23, 45, 12, 67, 34, 89, 55, 41])

print("Média:   ", dados.mean())
print("Mediana: ", dados.median())
print("Desvio:  ", round(dados.std(), 2))
print("Min/Max: ", dados.min(), "/", dados.max())

# Ciclo de vida dos dados
etapas = [
    "1. Coleta",
    "2. Limpeza",
    "3. Exploração",
    "4. Modelagem",
    "5. Visualização",
    "6. Implantação",
]
for etapa in etapas:
    print(etapa)
`;

function Fundamentos() {
  return (
    <section className="page-content">
      <h2>Fundamentos de Ciência de Dados e Python</h2>
      <p>
        Esta página apresenta conceitos básicos de ciência de dados, incluindo
        pipeline de dados, estatística descritiva e a importância do Python para
        análise de dados.
      </p>
      <ul>
        <li>Introdução ao ciclo de vida dos dados</li>
        <li>Tipos de dados e variáveis</li>
        <li>Primeiros passos com Python</li>
      </ul>

      <VideoPlayer
        videoId="yhp6rgrCjQ0"
        title="Aula: Fundamentos de Ciência de Dados e Python"
        code={FUNDAMENTOS_CODE}
        language="python"
      />
    </section>
  );
}

export default Fundamentos;
