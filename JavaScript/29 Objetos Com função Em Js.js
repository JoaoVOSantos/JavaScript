let amigo = {
    sexo: 'm',
    nome: 'josé',
    peso: 85.4,
    engordar(p=0){
        
        this.peso += p

    }
}

amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}kg`)

console.log(typeof(amigo))