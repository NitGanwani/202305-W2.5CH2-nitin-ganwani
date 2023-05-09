/* eslint-disable max-params */
import { Character } from "./characters";

export class ClassKing extends Character {
  constructor(name, house, age, status, speech, kingYears) {
    super(name, house, age, status, speech);
    this.kingYears = kingYears;
  }
}
