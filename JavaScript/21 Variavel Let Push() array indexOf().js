let num = [5, 8, 2, 4, 9]
        // 0, 1, 2, 3 ,4
console.log(num)

console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O valor no indice 1 é ${num[1]}`)

num.push(1)

// [5, 8, 2, 4, 9, 1]

console.log(num)

let posicao = num.indexOf(1)
        if(posicao == -1){
                console.log('O valor nao foi encontrado')
        }else{
                console.log(`O valor esta na posicao ${posicao}`)
        }
        