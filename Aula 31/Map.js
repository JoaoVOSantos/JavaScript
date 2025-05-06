
// Map

    const array = [10 ,20, 30, 40 ,50, 60]

    // Os dois fazem o for até o final do array, nao a mais
    // of = Assimila que i é o indice de array e retorna o conteudo do mesmo
    // in = retorna apena o numero do i acrescentando 1
        for(const i of array){

            document.body.innerHTML += `${i}`
        }

    // ForEach também é um metodo para se percorrer array
    // usando arrow function simplificada
    array.forEach(item => {
        document.body.innerHTML += `${item}`
    })

    // map se usa pois é possivel um retorno durante o loop
    // nesse caso ele esta fazendo para cada conteudo do array * 2
    // e guardando em um array novo

    // map sempre retorna um vetor do mesmo tamanho que o original
    const arrayNovo = array.map(item =>{

        // uma condicional para cada conteudo do array
        if(item%2==0){
        return item * 2

        }else{
            return item

        }
    })

    document.body.innerHTML += JSON.stringify(array) // array antigo
    document.body.innerHTML += JSON.stringify(arrayNovo) // array depois do * 2

    

