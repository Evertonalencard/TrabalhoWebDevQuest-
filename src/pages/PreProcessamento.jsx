import ModuleContent from "../components/ModuleContent";
import "../css/VideoModulo.css";

const QUESTIONS = [
{
  text: "Qual método do Pandas é utilizado para remover linhas duplicadas de um DataFrame?",
  options: [
    ".dropna()",
    ".drop_duplicates()",
    ".remove_duplicates()",
    ".duplicated()"
  ],
  correct: 2,
  explanation: "O método .drop_duplicates() é a função nativa do Pandas para identificar e remover registros duplicados de um DataFrame."
}
,
 {
  text: "Qual função do Pandas é utilizada para converter a coluna 'Data_Checkin' para o formato datetime?",
  options: [
    "pd.convert_to_datetime()",
    "pd.to_datetime()",
    "df_ex['Data_Checkin'].astype('datetime')",
    "pd.to_date()"
  ],
  correct: 2,
  explanation: "A função pd.to_datetime() é a ferramenta padrão do Pandas para converter dados textuais ou numéricos em objetos de data e tempo válidos."
},
  {
  text: "Qual método do Pandas é utilizado para substituir valores ausentes (NaN) pela mediana de uma coluna?",
  options: [
    ".fillna()",
    ".dropna()",
    ".replace_na()",
    ".median_fill()"
  ],
  correct: 1,
  explanation: "O método .fillna() é utilizado para preencher valores ausentes ou nulos em um DataFrame ou Series com um valor específico, como a mediana calculada."
},
];

const PDFS = [
  {
    id: "pre-1",
    name: "Introducao",
    description: "PDF de introducao do modulo 5",
    url: "/assets/modulo-5/01-introducao.pdf",
    filename: "01-introducao.pdf",
  },
  {
    id: "pre-2",
    name: "Overview do Modulo",
    description: "Visao geral do modulo 5",
    url: "/assets/modulo-5/02-overview-do-modulo.pdf",
    filename: "02-overview-do-modulo.pdf",
  },
  {
    id: "pre-3",
    name: "Aula 01",
    description: "Slides da aula 01",
    url: "/assets/modulo-5/03-aula-01.pdf",
    filename: "03-aula-01.pdf",
  },
  {
    id: "pre-4",
    name: "Aula 02",
    description: "Slides da aula 02",
    url: "/assets/modulo-5/04-aula-02.pdf",
    filename: "04-aula-02.pdf",
  },
  {
    id: "pre-5",
    name: "Aula 03",
    description: "Slides da aula 03",
    url: "/assets/modulo-5/05-aula-03.pdf",
    filename: "05-aula-03.pdf",
  },
  {
    id: "pre-6",
    name: "Aula 04",
    description: "Slides da aula 04",
    url: "/assets/modulo-5/06-aula-04.pdf",
    filename: "06-aula-04.pdf",
  },
  {
    id: "pre-7",
    name: "Aula 05",
    description: "Slides da aula 05",
    url: "/assets/modulo-5/07-aula-05.pdf",
    filename: "07-aula-05.pdf",
  },
  {
    id: "pre-8",
    name: "Aula 07",
    description: "Slides da aula 07",
    url: "/assets/modulo-5/08-aula-07.pdf",
    filename: "08-aula-07.pdf",
  },
  {
    id: "pre-9",
    name: "Aula 08",
    description: "Slides da aula 08",
    url: "/assets/modulo-5/09-aula-08.pdf",
    filename: "09-aula-08.pdf",
  },
  {
    id: "pre-10",
    name: "Aula 09",
    description: "Slides da aula 09",
    url: "/assets/modulo-5/10-aula-09.pdf",
    filename: "10-aula-09.pdf",
  },
  {
    id: "pre-11",
    name: "Aula 10",
    description: "Slides da aula 10",
    url: "/assets/modulo-5/11-aula-10.pdf",
    filename: "11-aula-10.pdf",
  },
  {
    id: "pre-12",
    name: "Aula 11",
    description: "Slides da aula 11",
    url: "/assets/modulo-5/12-aula-11.pdf",
    filename: "12-aula-11.pdf",
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
