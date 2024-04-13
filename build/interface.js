"use strict";
const bot1 = {
    id: 1,
    name: "Peraltabot"
};
class Pessoa1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const bot2 = {
    id: 2,
    name: "Porultobot",
    sayHello: function () {
        return "hello";
    }
};
class Pessoa2 {
    //Caso não defina um valor (no caso id), crie um constructor para ele, se não ela nunca vai ->
    //inicializada.
    //No caso, name tem um valor, então eu não precisaria por ele no name.
    constructor(id, name) {
        this.name = "";
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello. i'm ${this.name}`;
    }
}
const pessoa = new Pessoa2(1, "Denils");
console.log(pessoa.sayHello());
//com readonly eu não posso mudar o valor. ex: bot2.id = 3 (Da erro no código isso)
/*
interface versus type, comparado quando for melhor (mas as duas são bem iguais, só muda no type-aliases)

interface > type quando for gerir uma classe, lembrando que interfaces são contratos de classes

type > interface quando for gerir uma variável/objeto

ver esse ótimo link: https://viniciusestevam.medium.com/principais-diferen%C3%A7as-entre-types-e-interfaces-em-typescript-a00c945e5357#:~:text=interface%3A%20definir%20estruturas%20de%20objetos%20e%20classes.%20type%3A,funcionalidades%20mais%20avan%C3%A7adas%20como%20conditional%20types%2C%20type-guards%2C%20etc.
*/ 
