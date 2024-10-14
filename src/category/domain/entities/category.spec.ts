import { Category } from "./category";

describe("Category Unit Tests", () => {
  test("Category Constructor", () => {
    const EXPECTED_CATEGORY = {
      name: "Movie",
      description: "Movie description",
      is_active: true,
      created_at: new Date(),
    };
    const category = new Category({
      name: EXPECTED_CATEGORY.name,
      description: EXPECTED_CATEGORY.description,
      is_active: EXPECTED_CATEGORY.is_active,
      created_at: EXPECTED_CATEGORY.created_at,
    });
    expect(category.props).toStrictEqual(EXPECTED_CATEGORY);
  });
});
