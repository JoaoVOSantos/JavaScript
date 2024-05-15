// Destructuring
// desestruturação

// Conceito: conseguir remover parte de um objeto para uma variavel

    // Objeto
        const user = {
            name: 'diego',
            nickname: 'Java',
            idade: 27,
            adress:{
                street: 'Rua daaqui da frente',
                numberStreet: 81,
            }
        }

    // Sem desestruturação é preciso fazer desse jeito

    const adress0 = user.adress
    document.body.innerHTML = JSON.stringify(adress0)
    
    // Para substituir const adress = user.adress 
    // Usa-se 
    const {adress} = user 
    // tem o mesmo efeito porém escrevendo menos
    // sendo possivel pegar mais de um campo por vez

    // Caso queira renomear dinamicamente a chave do objeto, é possivel
    // Usando idade:age

    // Caso busque um campo do objeto e nao ter o campo ou nao ter dados nele
    // A à possibilidade de colocar um valor default
    // Usando nickname = 'Visitante'

    const {adress, idade:age, nickname= 'Visitante'} = user
    document.body.innerHTML = JSON.stringify({adress2, age, nickname})

    // Desestruturação é muito util com funçôes

    function mostraridade(user){
        return user.idade
    }

    document.body.innerHTML = mostraridade(user)

    function mostraridade({idade, nickname='Visitante', adress}){
        
        // nesse caso retorna apenas idade
        return idade
        return nickname
        return adress

          // assim retorna como array todos os valores para o parametro
        return [idade, nickname, JSON.stringify(adress)]
    
    }
    
    document.body.innerHTML = mostraridade(user)






    