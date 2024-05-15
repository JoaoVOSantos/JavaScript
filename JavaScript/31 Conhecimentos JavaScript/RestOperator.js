// Rest Operator
// Operador de Resto

    // Rest Com Objeto

    // Objeto
    const user = {
        name: 'João',
        age: 18,
        adress:{
            street: 'Rua Teste',
            numberStreet: 08,
        }
    }   

    // ...rest retorna o resto que nao foi pedido
    // no caso daqui tudo menos o nome, pq ele foi pedido

    const { name, ...rest } = user

    document.body.innerHTML = JSON.stringify(rest)

    // Test Com Array
    
    // Array
    const array = [10 ,20, 30, 40 ,50 ,60 ,70]

    // De maneira Normal, para cada indice é uma linha de codigo
    const indice0 = array[0]
    const indice1 = array[1]

    //  Assim se encurta o codigo, sendo possivel até pular indices
    // , , para pular um indice caso queira e com rest é possivel 

    const [indice01, indice02, , ...rest] = array

    document.innerHTML = `${indice01}`
    document.body.innerHTML = JSON.stringify(rest)

    