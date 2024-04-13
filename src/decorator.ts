//decorator -- Pesquisar depois para que serve!!!
function ExibirNome(target: any){
    console.log(target)
}
//porém, eu acho, que é um verificador de função caso aconteça algo em especifico

//Aqui normalmente da um erro porque o decorator é uma feature nova
//ir no tsconfig e habilitar o "experimentalDecorators" tirando as duas barras

//O decorator associou-se com a classe de baixo, igual uma Annotation
@ExibirNome
class Funcionario{}


function apiVersion(version: string){
    return (target:any) => {
        Object.assign(target.prototype, { __version: version})
    }
}

//attribute decorator
function minLength(length: number){
    return (target:any, key: string) => {
        let _value = (target[key])

        const getter = () => _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`)
            } else {
                _value = value
            }
        }
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })
    }
}

@apiVersion("1.10")
class Api {
    @minLength(3)
    name: string;

    constructor(name:string) {
        this.name = name
    }
}

const api = new Api("atchim")
console.log(api.name)
//ele só consegue ser rodado com o ts-node-dev por conta do erro