function contar(){
    var ini = document.getElementById('inicial')
    var f = document.getElementById('nfim')
    var p = document.getElementById('npasso')
    var r = document.getElementById('res')
    r.innerHTML = `Resultado: `

    var inicio = Number(ini.value)
    var fim = Number(f.value)
    var passo = Number(p.value)

    if(passo == 0 || fim == 0){

        alert(`Valores Invalidos Tente novamente!!`)

    }else{
        for(i = inicio; i <= fim; i+=passo){
            r.innerHTML += ` - ${i}` 
        }
    }
}