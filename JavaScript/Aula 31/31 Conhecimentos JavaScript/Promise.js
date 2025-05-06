// Promise 
// Promessa
// .then / .catch

    // resolve é pra se deu certo
    // reject é pra se deu errado
    const somaDoisNumeros = (a, b) => {
        return new Promise((resolve, reject) => {
        
            //seta um tempo para acontecer algo
            setTimeout(() => {

                resolve(a + b)

            }, 2000)
        })
    }
    // Tem um delay de 2 seg para a resposta
    // .then fica aguardando/olhando até o resultado chegar
    //trata um erro no caso daqui, se cair em reject ele mostra o erro no console
    // .catch pega o erro caso receba.
    somaDoisNumeros(1,5).then(soma =>{
        document.body.innerHTML = soma
    }).catch(err =>{

        console.log(err)

    })

    // fetch() dispara uma requisicao HTTP
    // isso vira uma promise
    // finally() sempre executado mesmo dando certo ou errado, porem no final
        fetch(`https://api.github.com`).then(response =>{
            response.json()
        }).then(body =>{
            console.log(body)
        }).catch(err =>{
            console.log(err)
        }).finally(() => { 
            console.log('deu')
        })

    // async == diz para o javaScrpit que dentro da funcao a um codigo
    // no qual demora a execucao

    async function BuscaDadosNoGibHub(){
        // await espera retornar um valor do fetch() para executar a proxima linha
        const response = await fetch(`https://api.github.com`)
        const body = await response.json()
        console.log(body)
    }

    BuscaDadosNoGibHub()

    // .catch dentro da funcao
    async function BuscaDadosNoGibHub(){
        // try{}catch(){}finally{} = sintaxe try catch
        try{
            const response = await fetch(`https://api.github.com`)
            const body = await response.json()
            console.log(body)
        }
        catch(err){
            console.log(err)
        }finally{
            console.log(`deu`)
        }
    }

    // sempre que usar async a funcao se torna uma promise
    // sempre que quiser algo de um async precisa do .then