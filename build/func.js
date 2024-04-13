"use strict";
//Funções
/*                                      Void pode deixar sem tipo
                                        de retorno e sem return

    function nomeDaFunção (parametro:tipo):tipoderetorno {
        return parametro;
    }
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function peraltaMaisNumero(numero) {
    return "O Peralta e o número " + numero;
}
console.log(peraltaMaisNumero(2));
//Função dentro de variavel
let peraltaOi = function (nome) { return "Peralta: olá, " + nome; };
let fraseDoPeralta = peraltaOi("almir");
console.log(peraltaOi("me da comida"));
console.log(fraseDoPeralta);
let plimplom = {
    name: "PPPP"
};
function oobjeto(object) {
    return object.name;
}
console.log(oobjeto(plimplom)); //acho que da pra passar objeto sem tipagem se for tipo any
//Função multitype
function multitype(valor) {
    return valor; //Como o valor é string ou number, o return dele é string ou number, mesmo sem especificar
}
function multitype2(valor) {
    return valor; //No caso, especifiquei, mas eu podia só retornar 1 dos 2
}
console.log(multitype(2));
console.log(multitype("2"));
//Func async
//Sub-entendido
function funcAsync(valor) {
    return __awaiter(this, void 0, void 0, function* () {
        return valor;
    });
}
//ou, que é a mesma coisa
//Definido
function funcAsync2(valor) {
    return __awaiter(this, void 0, void 0, function* () {
        return valor;
    });
}
