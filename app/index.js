import { ClassKing } from "./classKing.js";
import { Advisor } from "./advisor.js";
import { Fighter } from "./fighter.js";
import { Squire } from "./squire.js";

const character1 = new ClassKing("Joffrey", "Baratheon", 20, "alive", 1);
const character2 = new Fighter("Jaime", "Lannister", 43, "alive", "sword", 8);
const character3 = new Fighter(
  "Daenerys",
  "Targaryen",
  23,
  "alive",
  "dragon",
  9
);
const character4 = new Advisor("Tyrion", "Lannister", 32, "alive", "Daenerys");
const character5 = new Squire("Bronn", "Lannister", 46, "alive", "Jaime", 8);

character4.checkIfDead();
console.log(character1, character2, character3, character4, character5);
