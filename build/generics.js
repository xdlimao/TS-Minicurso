"use strict";
//generic que retorna um array de qualquer tipo e recebe também tal
function concatArray(...itens) {
    return new Array().concat(...itens); //o array criado ira virar isso aqui
}
/*
esse ... em itens significa que uma string (no caso seria o literal de char[])
ou um array vai ser adicionado ao parametros ou iterados no lugar que ira receber.
ele é indefinido caso esteja no parametro de entrada da função, ex:
    function name (...a:number):number {
        return sum(...a)
    }
    array = [1,1,4]
    console.log(name(array)) = output: 6

e é definido quando passado de argumento para os parametros que estão na função, ex:
    function name (a:number, b:number, c:number):void {
        let sum:number = a + b + c
    }
    array = [1,2,3]
    console.log(name(array)) = output: 6

veja o link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
*/
const numArray = concatArray([1, 5], [3]);
console.log(numArray);
numArray.push("saitama"); //não queriamos adicionar um string no number
//Para isso adicionamos um termo que fique generico (<T>) na função
function concatArrayGeneric(...itens) {
    return new Array().concat(...itens);
}
//Quando passamos para o generic o tipo de dado, ele faz a variavel ser daquele tipo
const stgArray = concatArrayGeneric(["dan", "iel"], ["peralta"]);
console.log(stgArray);
//Passe o mouse e compare as propriedades dos dois array que criamos
//Resumindo, o generic define qual o tipo de argumentos e resultado a função deve retornar
