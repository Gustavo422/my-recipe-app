import { test, expect } from "vitest";
import {
  recipeService,
  getRecipesByDifficulty,
} from "@/services/recipeService";

test("Integration test should be return an object", async () => {
  const recipeList = await recipeService();
  expect(typeof recipeList).toBe("object");
});

test("Function should return filtered recipe list", async () => {
  const recipesArray = await recipeService();
  const difficulty = "Medium";
  const filteredRecipes = getRecipesByDifficulty(recipesArray, difficulty);
  expect(typeof filteredRecipes).toBe("object");
});
