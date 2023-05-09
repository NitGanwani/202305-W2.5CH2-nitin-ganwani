/* eslint-disable max-params */
import { Character } from "./characters";

export class Fighter extends Character {
  constructor(name, house, age, status, speech, weapon, skill) {
    super(name, house, age, status, speech);
    this.weapon = weapon;
    this.skill = skill;
  }
}
