// Optional Chaining (?)
// Encadeamento Opicional

    const user = {
        name: 'João',
        age: 18,
        adress:{
            street: 'Rua Teste',
            numberStreet: 81,
            cep: {
                code: 17150086,
                city: 'Rio de Janeiro',
            },
        }
    }

// Testa se existe alguma rua em adress caso nao exista escreve 'nao informado'

document.body.innerHTML = user.adress ? user.adress.street : 'nao informado'

    //Aqui Testa se dentro de adress tem cep, caso nao tenha ele retorna 'nao informado'
    // caso tenha ele Testa se tem code dentro de cep, caso nao tenha ele retorna 'nao informado'
    // funciona porém é grande 

    document.body.innerHTML = user.adress 
    ? user.adress.cep
        ? user.adress.cep.code
        : 'nao informado'
    : 'nao informado'

    // Com Optional Chaining (?)
    // Optional chaining nao retorna um erro, retorna undefined
    // entao com nullish é possivel tratar esse retorno
    document.body.innerHTML = user.adress?.cep?.code ?? 'nao informado'

    // Caso tente acessar uma função dentro do objeto e ela nao existir irar dar erro,
    // com o chainning é possivel tratar o erro de uma funcao com o ?.
    // assim retornando undefined e nao um erro.
    // sendo facil tratar com nullish posteriormente
    document.body.innerHTML = user.adress?.showFullAdress?.() ?? 'Nao informado'

    
    // é possivel pesquisar dentro do objeto, com variaveis, usando []
    const chave = 'name'

    document.body.innerHTML = user.adress[chave]





