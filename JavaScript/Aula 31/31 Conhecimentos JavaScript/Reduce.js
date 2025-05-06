  // reduce
  // reduz o array a algo que queira um valor, objeto, outro array menor
  // no caso aqui
  // retorno o array como um valor de soma de todos os conteudos do array

    const soma = array.reduce((i, item) => {
        return i + item
    
    },0 // 0 para iniciar a variavel soma em 0
    )

    document.body.innerHTML = JSON.stringify(soma)