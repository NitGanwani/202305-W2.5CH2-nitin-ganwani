import { Character } from "./characters";

export class ClassKing extends Character {
  constructor(name, house, age, status, kingYears) {
    super(name, house, age, status);
    this.kingYears = kingYears;
  }
}
