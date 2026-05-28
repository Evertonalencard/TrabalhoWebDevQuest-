# Manual de Boas Práticas para Programar com IA
GERAR CONTEXT.MD A CADA VASCULHAMENTO DE BUG E PRODUÇÃO DE IA -- ELA JÁ VAI TER O CONTEXTO DAQUILO

MODELOS FORTES RESOLVEM PROBLEMAS DIFICEIS RAPIDO GASTANDO MENOS TOKEN. MAS NÃO VALE A PENA UTILIZAR ELES PARA QUESTÕES SIMPLES.

## 1. Regra principal

Nunca trate a IA como alguém que deve “arrumar tudo”.

Trate a IA como:

* analista
* arquiteto
* debugger
* executor
* reviewer

Mas nunca tudo ao mesmo tempo.

**Think first, code later.**

---

## 2. Workflow ideal

### Etapa 1 — Diagnóstico

Use quando há bug, erro ou dúvida.

Prompt:

```txt
Analise o projeto e descubra onde está o problema.
Não altere nada ainda.

Quero:
- causa provável
- arquivos envolvidos
- evidências no código
- riscos
- próximos passos
```

---

### Etapa 2 — Plano

Depois do diagnóstico:

```txt
Monte um plano pequeno e seguro para corrigir isso.
Não implemente ainda.

Divida em passos curtos.
Evite refatoração fora do escopo.
```

---

### Etapa 3 — Implementação

Só depois:

```txt
Implemente apenas o passo 1.
Não altere arquivos fora do escopo.
Não refatore componentes não relacionados.
Não invente APIs, rotas, dados fake ou schemas.
```

---

### Etapa 4 — Testes

```txt
Rode build, lint e testes disponíveis.
Se falhar, corrija apenas os erros relacionados à mudança.
Explique o que falhou e o que foi corrigido.
```

---

### Etapa 5 — Revisão

```txt
Revise o diff.
Aponte:
- bugs possíveis
- mudanças desnecessárias
- riscos
- arquivos alterados sem motivo
- melhorias antes do commit
```

**Review the diff carefully.**

---

## 3. Como dividir threads

Thread não é por arquivo.
Thread é por objetivo.

Bom:

* Auth/Login/Cadastro
* XP/Progresso
* API Integration
* Layout/Navegação
* Migração TypeScript
* Bug Triage

Ruim:

* uma thread para cada service
* uma thread para cada componente
* uma thread para cada CSS
* uma thread para cada controller

**Keep the scope small, but meaningful.**

---

## 4. Quando não sei se o bug está no front ou back

Use uma thread de integração.

Prompt:

```txt
Trace o fluxo completo ponta a ponta.

Não implemente nada ainda.

Siga:
1. UI
2. Context/state
3. Service frontend
4. HTTP request
5. Backend route
6. Controller
7. Service backend
8. Banco de dados
9. Response
10. Renderização no frontend

Descubra onde o fluxo quebra.
```

---

## 5. Como economizar tokens

### Faça

* tarefas pequenas
* prompts curtos
* mande só arquivos relevantes
* use `AGENTS.md`
* use commits pequenos
* peça diagnóstico antes de código
* abra nova thread quando a antiga ficar grande

### Evite

* colar logs gigantes
* mandar projeto inteiro sem necessidade
* pedir “melhore tudo”
* pedir explicações enormes sempre
* deixar a IA refatorar sem limite
* misturar bugs diferentes na mesma tarefa

**Minimal context, maximum clarity.**

---

## 6. Estrutura recomendada de prompt

```txt
Contexto:
[problema]

Objetivo:
[o que deve funcionar]

Escopo:
[arquivos/fluxo permitido]

Restrições:
[o que não pode alterar]

Tarefa:
[o que a IA deve fazer agora]

Saída esperada:
[diagnóstico, plano, diff, testes etc.]
```

---

## 7. Regras para AGENTS.md

```md
# AGENTS.md

## General Rules

- Do not invent APIs, routes, schemas, DTOs or fake data.
- Do not refactor unrelated files.
- Prefer small, focused changes.
- Investigate before implementing.
- Explain the plan before changing code.
- Run build/lint/tests after implementation when available.
- Explain every changed file.
- Respect existing architecture.
- Do not change database schema without documenting it.
- Frontend must consume real backend data.
- If unsure, make the safest minimal change and explain why.
```

---

## 8. Refatoração com IA

Nunca peça:

```txt
Refatore o projeto inteiro.
```

Peça:

```txt
Analise este arquivo e diga se ele precisa de refatoração.
Não altere nada ainda.

Procure:
- duplicação
- responsabilidades misturadas
- nomes ruins
- código morto
- riscos de quebrar comportamento
```

Depois:

```txt
Refatore apenas este arquivo mantendo o mesmo comportamento.
Não altere API pública.
Não altere visual.
Não altere lógica de negócio.
```

**Refactor safely.**

---

## 9. Produzir feature nova

Workflow:

1. peça análise do estado atual
2. peça plano
3. implemente em partes
4. teste
5. revise diff
6. commit pequeno

Prompt:

```txt
Quero adicionar a feature [nome].

Antes de implementar:
- analise a arquitetura atual
- diga onde essa feature deve entrar
- liste arquivos envolvidos
- proponha um plano pequeno
- não altere nada ainda
```

---

## 10. Encontrar bug desconhecido

Prompt:

```txt
Existe um bug, mas não sei onde está.

Não implemente nada.

Faça uma triagem:
- hipóteses prováveis
- arquivos suspeitos
- fluxo afetado
- testes manuais para reproduzir
- logs/comandos úteis
- próxima investigação recomendada
```

---

## 11. Migrar para TypeScript

Não migre tudo de uma vez.

Ordem segura:

1. configurar TypeScript
2. criar tipos globais
3. migrar services
4. migrar contexts
5. migrar componentes pequenos
6. migrar páginas maiores
7. ativar regras mais rígidas aos poucos

Prompt:

```txt
Monte um plano incremental para migrar este frontend de JavaScript para TypeScript.
Não implemente ainda.

Quero:
- ordem dos arquivos
- riscos
- dependências
- configuração necessária
- estratégia para não quebrar o projeto
```

---

## 12. Quando usar App/Web e CLI

### App/Web

Use para:

* pensar
* planejar
* investigar
* revisar
* discutir arquitetura
* comparar opções

### CLI

Use para:

* editar código
* rodar build
* rodar testes
* executar comandos
* corrigir lint
* implementar plano

**Think in the App, execute in the CLI.**

---

## 13. Checklist antes de aceitar alteração

Antes de aceitar o código da IA, verifique:

* alterou só arquivos necessários?
* inventou rota/API?
* colocou mock/fake data?
* mudou schema sem avisar?
* quebrou layout?
* passou build?
* passou lint?
* explicou o diff?
* a mudança é pequena?
* dá para reverter fácil?

---

## 14. Regra de commits

Não faça um commit gigante.

Melhor:

```txt
feat: fix auth integration
fix: correct xp persistence
refactor: simplify auth service
chore: add TypeScript config
```

Um commit deve representar uma mudança clara.

**Small commits are safer.**

---

## 15. Regra de ouro

A IA é mais forte quando você dá:

* contexto suficiente
* escopo pequeno
* objetivo claro
* restrições fortes
* validação com testes

A IA é mais perigosa quando você dá:

* autonomia infinita
* contexto gigante
* tarefa vaga
* permissão para refatorar tudo
* nenhuma revisão humana

**Clarity beats power.**
