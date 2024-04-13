type Peralta = {
    nome: string
    legal: boolean
}

function vapo (objeto: Peralta) {
    console.log(objeto.nome + " é um cachorro muito legal?")
    if (objeto.legal) {
        console.log("Talvez sim")
    } else {
        console.log("Definitivamente não")
    }
}

let thedog: Peralta = {
    nome: "Peralters",
    legal: false
}
vapo(thedog)

