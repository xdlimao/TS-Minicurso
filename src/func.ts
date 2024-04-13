//Funções
/*                                      Void pode deixar sem tipo
                                        de retorno e sem return

    function nomeDaFunção (parametro:tipo):tipoderetorno {
        return parametro;
    }
*/

function peraltaMaisNumero (numero: number):string {
    return "O Peralta e o número "+ numero
}

console.log(peraltaMaisNumero(2))

//Função dentro de variavel
let peraltaOi = function (nome:string):string {return "Peralta: olá, "+nome}
let fraseDoPeralta:string = peraltaOi("almir")
console.log(peraltaOi("me da comida"))
console.log(fraseDoPeralta)

//Função de objeto
type PeraltersType = {
    name: string
}
let plimplom:PeraltersType = {
    name: "PPPP"
}
function oobjeto(object:PeraltersType):string{
    return object.name
}
console.log(oobjeto(plimplom)) //acho que da pra passar objeto sem tipagem se for tipo any

//Função multitype
function multitype(valor: string|number) {
    return valor //Como o valor é string ou number, o return dele é string ou number, mesmo sem especificar
}
function multitype2(valor: string|number): number | string {
    return valor //No caso, especifiquei, mas eu podia só retornar 1 dos 2
}
console.log(multitype(2))
console.log(multitype("2"))

//Func async
//Sub-entendido
async function funcAsync(valor: string) {
    return valor
}
//ou, que é a mesma coisa
//Definido
async function funcAsync2(valor: string): Promise<string> {
    return valor
}

