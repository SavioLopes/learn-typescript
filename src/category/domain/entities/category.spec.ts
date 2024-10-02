import { Category } from "./category";

describe("Category Unit Tests", () => {
  test("Category Constructor", () => {
    const EXPECTED_CATEGORY_NAME = "Movie";
    const category = new Category(EXPECTED_CATEGORY_NAME);
    expect(category.name).toBe(EXPECTED_CATEGORY_NAME);
  });
});
