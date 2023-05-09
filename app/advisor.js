/* eslint-disable max-params */
import { Character } from "./characters";

export class Advisor extends Character {
  constructor(name, house, age, status, speech, advisedCharacter) {
    super(name, house, age, status, speech);
    this.advisedCharacter = advisedCharacter;
  }
}
