/* eslint-disable max-params */
import { Character } from "./characters";

export class Squire extends Character {
  constructor(name, house, age, status, speech, served, flattery) {
    super(name, house, age, status, speech);
    this.served = served;
    this.flattery = flattery;
  }
}
