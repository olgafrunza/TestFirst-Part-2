/* eslint-disable no-unused-vars, no-throw-literal*/
function Pokemon(name, health, attackBonus) {
    this.name = name;
    this.health = health;
    this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function() {
    return this.attackBonus + 2;
}
Pokemon.prototype.isDefeated = function() {
    if (this.health >= 1) return false; 
    else return true;
}







function simulateBattle(pok1, pok2, firstName) {
    let attacker, defender;
    if (pok1.name === firstName) {
        attacker = pok1;
        defender = pok2;
    }
    else {
        attacker = pok2;
        defender = pok1;
    }
    if (attacker.isDefeated()) return defender.name + " Wins!";
    defender.health -= attacker.biteAttack();
    console.log(defender.name, "was attacked by", attacker.name);
    return simulateBattle(pok1, pok2, defender.name);

}
