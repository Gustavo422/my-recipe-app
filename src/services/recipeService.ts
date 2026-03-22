export async function recipeService() {
  let recipes = {};
  try {
    const req = await fetch("https://dummyjson.com/recipes");
    recipes = await req.json();
    return recipes;
  } catch (error) {
    console.error(error);
    return recipes;
  }
}

export function getRecipesByDifficulty(recipes: object, difficulty: string) {}
