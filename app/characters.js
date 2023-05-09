export class Character {
  constructor(name, house, age, status) {
    this.name = name;
    this.house = house;
    this.age = age;
    this.status = status;
    this.series = "GOT";
  }

  checkIfDead() {
    this.status = "dead";
    return this.status;
  }
}
