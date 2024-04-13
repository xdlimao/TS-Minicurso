"use strict";
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    //Método
    attack() {
        console.log(`Ataquei otário`);
    }
}
//public = acessa qualquer lugar
//protected = só classes relacionadas
//private = só a propria classe
class Peralteador extends Character {
    constructor(name, strength, skill, latido) {
        super(name, strength, skill); //Super = método para chamar o construtor da classe super ou pai
        this.latido = latido;
    }
}
let peralter = new Peralteador("Peralta", 6, 9, "awu");
peralter.attack();
