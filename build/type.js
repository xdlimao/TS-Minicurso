"use strict";
//Variáveis
//Primitivas
let booleano = false;
let booleano2 = true;
let numero = 1;
let numero2 = 1.1;
let texto = "oi";
let texto2 = "xd";
//Não precisa especificar o tipo quando já tem um tipo
//primito de valor
//Especiais
let nulo = null; //só pode receber valor nulo
let indefinido = undefined; //mesmo caso
let any = 1;
let any2 = "2";
let any3 = true;
//any é bem alto explicativo
let vazio; //Variavel que não pode ter nenhum valor(vazio)
//Objetos
//objetos sem tipagem 
let objeto = {
    nome: "Peralta",
    comida: "Pão",
    idade: 0,
};
let objetosemtipo = {
    música: true
};
//agora vamos usar ele em um objeto
let peraltaTipado = {
    nome: "PeraltaJunior",
    comida: "Bread",
    idade: -1
};
// array
//Não preciso definir o array, ele detecta o que tem dentro
let dados = [1, "2", true]; //Aqui ele vira um array multitype
let dados2 = [1, "2", 3, "4", "5"];
//ou
let arraystring = ["oi", "xd"];
let arraystring2 = ["olá", "lmão"];
let arrayany = [false, 2, `3`];
//Tuplas
//Os dados que estarão la dentro tem que seguir a ordem e não faltar
let tupla = ["1", 2, 3, false];
//Os métodos do arrays no javascript funfa aqui também. (TUDO DO JS funfa no TS)
arrayany.push("o potencia");
arrayany.pop();
let arrayperalta = ["Pe", "ral", "ta"];
let arraycl = arrayperalta.map((valor, index) => valor + `, a ${index + 1}º sílaba.`);
//Passe o mouse em cima do método map para entender os parametros de entrada.
console.log(arraycl);
//Data (Date) (Sempre Date com letra maíscula pois é classe)
let data = new Date();
console.log(data.toString());
