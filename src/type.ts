//Variáveis
//Primitivas
let booleano = false
let booleano2:boolean = true
let numero = 1
let numero2:number = 1.1
let texto = "oi"
let texto2:string = "xd"
//Não precisa especificar o tipo quando já tem um tipo
//primito de valor

//Especiais
let nulo:null = null //só pode receber valor nulo
let indefinido:undefined = undefined //mesmo caso

let any:any = 1
let any2:any = "2"
let any3:any = true
//any é bem alto explicativo

let vazio:void //Variavel que não pode ter nenhum valor(vazio)

//Objetos
//objetos sem tipagem 
let objeto:object ={
    nome:"Peralta",
    comida: "Pão",
    idade: 0,
}

let objetosemtipo = {
    música: true
}

//objeto com tipagem
//não precisa de virgula pois estamos definindo um tipo, mas opcional ponto e virgula
type objetoTipado = {
    nome:string
    comida:string
    idade:number
    metood(): string
}
//agora vamos usar ele em um objeto
let peraltaTipado:objetoTipado = {
    nome: "PeraltaJunior",
    comida: "Bread",
    idade: -1,
    metood: function (): string {
        return "stringer"
    }
}

// array
//Não preciso definir o array, ele detecta o que tem dentro
let dados = [1, "2", true] //Aqui ele vira um array multitype
let dados2: (string | number)[] = [1, "2", 3, "4", "5"]

//ou

let arraystring: string[] = ["oi", "xd"]
let arraystring2: Array<string> = ["olá", "lmão"]

let arrayany: any[] = [false, 2, `3`]

//Tuplas
//Os dados que estarão la dentro tem que seguir a ordem e não faltar
let tupla:[string, number, number, boolean] = ["1", 2, 3, false]

//Os métodos do arrays no javascript funfa aqui também. (TUDO DO JS funfa no TS)

arrayany.push("o potencia")
arrayany.pop()

let arrayperalta: string[] = ["Pe", "ral", "ta"]
let arraycl: string[] = arrayperalta.map((valor, index) => valor + `, a ${index+1}º sílaba.`)
//Passe o mouse em cima do método map para entender os parametros de entrada.
console.log(arraycl)

//Data (Date) (Sempre Date com letra maíscula pois é classe)
let data:Date = new Date()
console.log(data.toString())
