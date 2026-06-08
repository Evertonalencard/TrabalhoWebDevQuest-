# DevQuest Frontend

Aplicação React + Vite do DevQuest. O frontend consome a API do backend e apresenta módulos, vídeos, PDFs, quizzes, progresso e XP.

## 🐳 Rodando com Docker

A configuracao Docker do projeto completo fica em um repositorio separado:

```text
https://github.com/paulo-edvandro/devquest-docker
```

Para subir PostgreSQL, backend e frontend juntos, clone os tres repositorios como pastas irmas:

```text
DevQuest/
├── devquest-docker/
├── devquest-back/
└── devquest-front/
```

Depois siga o README do `devquest-docker`. Este repositorio do frontend nao possui mais Dockerfile nem configuracao Nginx propria.

## 🚀 Tecnologias

- **React**
- **Vite**
- **Axios**
- **Bootstrap**
- **React Router DOM**
- **Firebase** (integrado no projeto)

## 📁 Estrutura do projeto

```
DevQuest/devquest-front/
├── public/                  # Arquivos estáticos acessíveis pelo navegador
│   └── assets/              # PDFs e arquivos de módulo usados pelo app
├── src/
│   ├── components/          # Componentes reutilizáveis
│   ├── Context/             # Contextos de autenticação e XP
│   ├── css/                 # Estilos customizados
│   ├── pages/               # Páginas principais da aplicação
│   ├── services/            # Chamadas à API e lógica de integração
│   ├── assets/              # Imagens e recursos do frontend
│   ├── App.jsx              # Componente raiz
│   └── main.jsx             # Entrada do aplicativo
└── package.json
```

## 🔧 Como o frontend conversa com o backend

- `src/services/api.js` cria um cliente Axios com `baseURL` apontando para a API.
- O token JWT é lido do `localStorage` e enviado automaticamente no cabeçalho `Authorization`.
- Serviços usam esse cliente para conectar com a API:
  - `src/services/authService.js`
  - `src/services/moduleService.js`
  - `src/services/questionService.js`
  - `src/services/progressService.js`
  - `src/services/ratingService.js`
  - `src/services/xpService.js`

## 🌐 Configuração de ambiente

Crie um arquivo `.env` na pasta `DevQuest/devquest-front/` com:

```env
VITE_API_BASE_URL=http://localhost:3001
VITE_API_TIMEOUT=30000
```

Se não existir `.env`, o frontend usa `http://localhost:3001` como API padrão.

## 🚀 Rodando o frontend

1. Vá para a pasta do frontend:

```bash
cd DevQuest/devquest-front
```

2. Instale dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse em:

```text
http://localhost:5173
```

## ✅ Usando com o backend

1. Execute o backend em `http://localhost:3001`.
2. Configure `VITE_API_BASE_URL=http://localhost:3001`.
3. Inicie o frontend com `npm run dev`.
4. Faça login com o usuário de teste do backend: `test@devquest.com` / `123456`.

## 📌 O que o app faz

- login e cadastro
- listagem de módulos
- detalhes do módulo com vídeos, PDFs e perguntas
- envio de resposta para questões
- conclusão de módulo com ganhos de XP
- painel de progresso e nível
- avaliações de módulo

## 📄 Onde estão os arquivos de estudo

- PDFs: `public/assets/` são arquivos estáticos servidos diretamente pelo frontend.
- Vídeos: o backend salva `videoId`/links; o frontend exibe esses vídeos usando os dados retornados pela API.

## 🔗 Endpoints principais consumidos

- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/auth/me`
- `GET /api/modules`
- `GET /api/modules/:slug`
- `GET /api/modules/:slug/questions`
- `GET /api/modules/:slug/videos`
- `GET /api/modules/:slug/materials`
- `POST /api/progress/complete-module`
- `POST /api/questions/answer`

## 📦 Scripts disponíveis

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## 💡 Dica para apresentação

Explique que o frontend é a interface do aluno e que todas as operações de conteúdo e progresso passam pela API do backend.
O token JWT é salvo no navegador e usado automaticamente em todas as requisições protegidas.
