import { Fighter } from "./fighter";

describe("Given a class Fighter", () => {
  describe("When we instantiate it", () => {
    test("Then it should have an object with the properties of the class", () => {
      const character = new Fighter(
        "Oberyn",
        "Martell",
        41,
        "alive",
        "Que pasa",
        "lance",
        7
      );

      expect(character).toHaveProperty("name", "Oberyn");
      expect(character).toHaveProperty("house", "Martell");
      expect(character).toHaveProperty("age", 41);
      expect(character).toHaveProperty("status", "alive");
      expect(character).toHaveProperty("speech", "Que pasa");
      expect(character).toHaveProperty("weapon", "lance");
      expect(character).toHaveProperty("skill", 7);
    });
  });
});
