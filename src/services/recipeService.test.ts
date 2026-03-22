import { test, expect } from "vitest";
import {
  recipeService,
  getRecipesByDifficulty,
} from "@/services/recipeService";

test("Integration test should be return an object", async () => {
  const recipeList = await recipeService();
  expect(typeof recipeList).toBe("object");
});
