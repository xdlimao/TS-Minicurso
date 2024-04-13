class Character {
    name: string //sem nada == public
    public strength: number
    protected skill: number
    private hint?: string //Aqui torna o valor nullable/opcional para ter valor

    constructor(name: string, strength: number, skill: number){
        this.name = name
        this.strength = strength
        this.skill = skill
    }

    //Método
    public attack(): void {
        console.log(`Ataquei otário`)
    }
}
//public = acessa qualquer lugar
//protected = só classes relacionadas
//private = só a propria classe

class Peralteador extends Character {
    latido: string

    constructor (name: string, strength: number, skill:number, latido: string){
        super(name, strength, skill) //Super = método para chamar o construtor da classe super ou pai
        this.latido = latido
    }
}

let peralter = new Peralteador("Peralta", 6, 9, "awu")

peralter.attack()   