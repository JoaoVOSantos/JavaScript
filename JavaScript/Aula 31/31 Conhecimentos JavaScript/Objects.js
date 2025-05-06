// Objects 
    // Objetos

    const user = {
        name: 'João',
        age: 18,
        adress:{
            street: 'Rua Teste',
            numberStreet: 08,
        }
    }

// in > testa se dentro do Objeto user tem a chave 'name'
// e returna true se sim e false se nao

    document.body.innerHTML = (`${'name' in user} <br>`)
    document.body.innerHTML += (`${'nome' in user} <br>`)

// Object.keys(user) retorna como um array todas as chaves do objeto

document.body.innerHTML += `${Object.keys(user)} <br>`

// Object.values(user) retorna todos os conteudos das chaves como array
// Nota-se que o Objeto dentro do Objeto nao foi lido corretamente
document.body.innerHTML += Object.values(user)
document.body.innerHTML += `<br>`

// Object.values() nao retorna toda a informacao caso tenha uma arvore de dados
// entao é mais aconcelhavel e pratico usar o JSON.stringfy()

// JSON.stringify() retorna como um array toda a informação

document.body.innerHTML += JSON.stringify(Object.values(user))

// Object.entries() retorna um Vetor 
// fazendo com que cada chave vire um vetor

document.body.innerHTML = JSON.stringify(Object.entries(user))















