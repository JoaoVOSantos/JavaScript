    // Filter
    // Filtra um array

    const array = [1 ,2, 3, 4 ,5, 6]

    // retorna apenas os pares para o novoArray
    const novoArray = array.filter(item => item % 2 == 0 )

    document.body.innerHTML = JSON.stringify(novoArray)
