import ModuleContent from "../components/ModuleContent";
import "../css/VideoModulo.css";

const QUESTIONS = [
  {
    text: "Qual tecnica ajuda a padronizar valores como ' SP ', 'sp' e 'Sao Paulo' em uma mesma coluna?",
    options: [
      "Apenas remover linhas duplicadas",
      "Aplicar limpeza de strings e mapeamento de categorias",
      "Calcular a media da coluna",
      "Exportar o arquivo para CSV",
    ],
    correct: 1,
    explanation:
      "Limpeza de strings e mapeamento reduzem inconsistencias de representacao.",
  },
  {
    text: "Qual funcao do Pandas converte textos de data para datetime?",
    options: [
      "pd.to_numeric()",
      "pd.to_datetime()",
      "df.astype('category')",
      "df.dropna()",
    ],
    correct: 1,
    explanation:
      "pd.to_datetime() converte strings em datas para ordenar, filtrar e extrair partes do calendario.",
  },
  {
    text: "Ao tratar duplicatas, qual abordagem e mais segura?",
    options: [
      "Excluir todas as linhas repetidas sem analisar contexto",
      "Verificar a chave de negocio antes de usar drop_duplicates()",
      "Substituir duplicatas por zero",
      "Converter todas as colunas para texto",
    ],
    correct: 1,
    explanation:
      "Duplicatas devem ser avaliadas conforme a regra do dataset antes de aplicar drop_duplicates().",
  },
];

const PDFS = [
  {
    id: "pre-1",
    name: "Cheatsheet: Pre-Processamento",
    description: "Principais cuidados antes da analise",
    url: "/assets/preprocessamento-cheatsheet.pdf",
    filename: "preprocessamento-cheatsheet.pdf",
  },
];

const VIDEOS = [
  {
    driveFileId: "1lFBTyQIKwuadr-t0A1dTt63ueYlwjhhP",
    title: "aula_00_introducao",
  },
  {
    driveFileId: "1GnpaF4B7UR84ee1Fi9FQW6QQr0IyD5Ry",
    title: "aula_00_overview",
  },
  {
    driveFileId: "1K6ZNYpIMZED8vWr7YsphGopY8yisdmLo",
    title: "Aula 1",
  },
  {
    driveFileId: "1R7AtbHn1jSZ01ZqZXBGUODqDxctBseVk",
    title: "Aula 2",
  },
  {
    driveFileId: "1X9cuOROeBQ82eLRWMxA_0jcMia1XWGyY",
    title: "Aula 3",
  },
  {
    driveFileId: "16rWhS_MobJkvXzBc98kzuTjp-ApU8g6F",
    title: "Aula 4",
  },
];

function PreProcessamento() {
  return (
    <ModuleContent
      slug="preprocessamento"
      fallback={{
        title: "Pre-Processamento de Dados",
        description:
          "Conceitos introdutorios e problemas praticos comuns em datasets reais, com foco em Python e Pandas.",
        topics: [
          "Introducao",
          "Delimitador nao padrao",
          "Espacos em branco invisiveis",
          "Conversao de tipos de dados",
          "Duplicatas",
          "Outliers",
        ],
        videos: VIDEOS,
        pdfs: PDFS,
        questions: QUESTIONS,
      }}
    />
  );
}

export default PreProcessamento;
