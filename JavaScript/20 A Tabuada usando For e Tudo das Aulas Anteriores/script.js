function tabuada(){
    var n = document.getElementById('ntabuada')
    var opcao = document.getElementsByClassName('t')

    var numero = Number(n.value)

    for(i = 0; i <= 10; i++){

        var r = i * numero
        opcao[i].innerHTML = `${i} x ${numero} = ${r}`

    }
}