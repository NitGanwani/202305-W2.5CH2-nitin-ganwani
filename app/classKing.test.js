import { ClassKing } from "./classKing";

describe("Given a class ClassKing", () => {
  describe("When we instantiate it", () => {
    test("Then it should have an object with the properties of the class", () => {
      const character = new ClassKing("Tywin", "Lannister", 48, "alive", 4);

      expect(character).toHaveProperty("name", "Tywin");
      expect(character).toHaveProperty("house", "Lannister");
      expect(character).toHaveProperty("age", 48);
      expect(character).toHaveProperty("status", "alive");
      expect(character).toHaveProperty("kingYears", 4);
    });
  });
});
