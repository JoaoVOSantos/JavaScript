let lista = document.querySelector('section#listanumero')
let res = document.querySelector('div#resposta')
let numero = document.querySelector('input#numero')
let vetorNumeros = []

function InLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return false

    }else{

        return true
    }
}

function IsNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true

    }else{
        return false
    }
}
    

function adicionar(){
    // testa se numero atende os requisitos e se numero ja esta ou nao no array
        if(IsNumero(numero.value) && InLista(numero.value , vetorNumeros)){
            vetorNumeros.push(Number(numero.value))

                item = document.createElement(`option`)
                item.text = `${numero.value} Adicionado`
                lista.appendChild(item)
                res.innerHTML = ``

        }else{
            
            alert(`Valor invalido ou ja encontrado na lista`)
        }
        // limpa o input de number e coloca o foco do mouse nele novamente
        numero.value = ``
        numero.focus()


}

function finalizar(){
    if(vetorNumeros.length == 0){
        window.alert(`Adicione valores antes de finalizar`)

    }else{
        let tot = vetorNumeros.length

        let maior = vetorNumeros[0]
        let menor = vetorNumeros[0]
        let soma = 0
        let media = 0

        for(let pos in vetorNumeros){
            soma += vetorNumeros[pos]

            if(vetorNumeros[pos] > maior){
                maior = vetorNumeros[pos]

            }
            if(vetorNumeros[pos] < menor){
                menor = vetorNumeros[pos]
            }

        }
        media = soma / tot

        res.innerHTML = ``
        res.innerHTML += `<p> Ao todo, temos ${tot} Numeros cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p> Ao todo, temos ${tot} Numeros cadastrados </p>`
        res.innerHTML += `<p> A media de todos os valores é de: ${media}. </p>`


    }



}

