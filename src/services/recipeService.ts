export type Recipe = {
  difficulty: string;
};

export type ApiResponse = {
  recipes: Recipe[];
};

export async function recipeService(): Promise<ApiResponse | undefined> {
  let recipesList = undefined;
  try {
    const req = await fetch("https://dummyjson.com/recipes");
    recipesList = await req.json();
    return recipesList;
  } catch (error) {
    console.error(error);
    return recipesList;
  }
}

export function getRecipesByDifficulty(
  recipesObj: ApiResponse | undefined,
  difficulty: string,
) {
  const diff = difficulty.toLowerCase();
  const filteredRecipes = recipesObj?.recipes.filter(
    (recipe) => recipe.difficulty?.toLowerCase() === diff,
  );
  return filteredRecipes?.length !== 0 ? filteredRecipes : undefined;
}
