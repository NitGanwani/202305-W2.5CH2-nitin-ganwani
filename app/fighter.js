/* eslint-disable max-params */
import { Character } from "./characters";

export class Fighter extends Character {
  constructor(name, house, age, status, weapon, skill) {
    super(name, house, age, status);
    this.weapon = weapon;
    this.skill = skill;
  }
}
