/* eslint-disable max-params */
import { Character } from "./characters";

export class Advisor extends Character {
  constructor(name, house, age, status, advisedCharacter) {
    super(name, house, age, status);
    this.advisedCharacter = advisedCharacter;
  }
}
