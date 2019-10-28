// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
    if(this.health > 0)
    return `${this.name} has received ${theDamage} points of damage`;
    else
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
    if(this.health > 0)
    return `A Saxon has received ${theDamage} points of damage`;
    else
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let ranSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let ranViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let attackResult = ranSaxon.receiveDamage(ranViking.attack);

    // if the saxon is dead remove it from the army
    if(ranSaxon.health <= 0)
    this.saxonArmy.splice(this.saxonArmy.indexOf(ranSaxon), 1);

    return attackResult;
  }
  // saxonAttack()
  // showStatus()
}
