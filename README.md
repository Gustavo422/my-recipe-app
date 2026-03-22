# 🧪 Desafio TDD: Backend de Receitas com Next.js

Bem-vindo ao seu desafio de **Test-Driven Development (TDD)**! O objetivo aqui não é apenas "fazer o código funcionar", mas sim habituar sua mente ao ciclo de desenvolvimento guiado por testes.

Neste projeto, vamos construir uma camada de serviço para um backend em **Next.js** que consome a API do [DummyJSON Recipes](https://dummyjson.com/docs/recipes).

---

## 🔄 O Ciclo TDD (Red-Green-Refactor)

Para cada função abaixo, você **deve** seguir rigorosamente estes passos:

1.  🔴 **RED**: Escreva um teste que falha para a funcionalidade que você deseja implementar.
2.  🟢 **GREEN**: Escreva o código mínimo necessário para fazer o teste passar.
3.  🔵 **REFACTOR**: Melhore o código (limpeza, performance, legibilidade) garantindo que os testes continuem passando.

---

## 🛠️ Setup do Projeto

Recomendo utilizar **Vitest** pela sua velocidade e integração nativa com o ecossistema Vite/Next.js.

1.  **Inicie um projeto Next.js**:
    ```bash
    npx create-next-app@latest my-recipe-app --ts --eslint --tailwind --app
    ```
2.  **Instale as dependências de teste**:
    ```bash
    npm install -D vitest @vitejs/plugin-react jsdom
    ```
3.  **Configure o Vitest**: Crie um arquivo `vitest.config.ts` na raiz.

---

## 🎯 O Desafio

Você criará um arquivo chamado `src/services/recipeService.ts`. Todas as funções devem ser testadas em `src/services/recipeService.test.ts`.

### 1. Filtrar por Dificuldade (`getRecipesByDifficulty`)

**Dificuldade:** Fácil
**Tags:** #API #Filter

A API do DummyJSON retorna todas as receitas, mas não possui um endpoint nativo para filtrar por dificuldade (ex: "Easy", "Medium").

- **O que deve fazer:** Receber uma lista de receitas e uma string de dificuldade, retornando apenas as que correspondem.
- **Regra educacional:** Comece testando o caso onde a lista está vazia. Depois, teste com uma lista que contém diferentes dificuldades.
- **Input esperado:** `(recipes: Recipe[], difficulty: string)`
- **Output esperado:** `Recipe[]`

### 2. Média de Tempo de Preparo (`calculateAveragePrepTime`)

**Dificuldade:** Média
**Tags:** #Logic #Math

- **O que deve fazer:** Calcular a média aritmética do campo `prepTimeMinutes` de um array de receitas.
- **Regra educacional:** No TDD, o "Green" deve ser o mais simples possível. Se a média de `[20, 40]` é `30`, seu código inicial pode ser apenas o cálculo. No "Refactor", trate casos como divisão por zero (lista vazia).
- **Input esperado:** `(recipes: Recipe[])`
- **Output esperado:** `number` (retorne `0` se a lista for vazia).

### 3. Sumarizador de Ingredientes (`formatRecipeSummary`)

**Dificuldade:** Média
**Tags:** #DataTransformation

- **O que deve fazer:** Transformar o objeto da receita em um resumo simplificado para o frontend.
- **Regra educacional:** O resumo deve conter o `id`, `name` e uma string `ingredientsSummary` que lista os 3 primeiros ingredientes seguidos de "...and X more" se houver mais.
- **Exemplo:** Se tiver 5 ingredientes, deve retornar: `"Ingrediente 1, Ingrediente 2, Ingrediente 3... and 2 more"`.
- **Input esperado:** `(recipe: Recipe)`
- **Output esperado:** `{ id: number, name: string, ingredientsSummary: string }`

### 4. Busca Integrada com Cache Simulado (`searchRecipesWithLimit`)

**Dificuldade:** Difícil
**Tags:** #Async #Integration

- **O que deve fazer:** Uma função assíncrona que chama a API `https://dummyjson.com/recipes/search?q=QUERY`, mas limita o resultado a um número `X` definido pelo usuário, independente de quantos a API retornar.
- **Regra educacional:** Aqui você aprenderá a fazer **Mock de API**. Seu teste não deve chamar a API real, mas sim simular a resposta do `fetch`.
- **Input esperado:** `(query: string, limit: number)`
- **Output esperado:** `Promise<Recipe[]>`

---

## 💡 Dicas de TDD

- **Não antecipe problemas:** Se o teste pede para filtrar "Easy", não implemente suporte a "Medium" até que você escreva um teste para isso.
- **Mocks são seus amigos:** Para a Tarefa 4, use `vi.fn()` do Vitest para simular o `fetch`.
- **Interfaces:** Defina uma interface `Recipe` baseada no retorno da API para facilitar o TypeScript.

```typescript
export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  prepTimeMinutes: number;
  difficulty: string;
  // ... adicione outros campos se necessário
}
```

Boa sorte! O segredo do TDD é a **paciência** no início para ganhar **confiança** no final.
