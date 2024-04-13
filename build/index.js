"use strict";
function vapo(objeto) {
    console.log(objeto.nome + " é um cachorro muito legal?");
    if (objeto.legal) {
        console.log("Talvez sim");
    }
    else {
        console.log("Definitivamente não");
    }
}
let thedog = {
    nome: "Peralters",
    legal: false
};
vapo(thedog);
