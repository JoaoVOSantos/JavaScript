// Some 
// É como o every mas ao invez de todos precisarem satisfazer a condicao
// apenas um precisa
// retorna true se sim, e false se nao

    const peloMenosUmItensNaoEUmNumero = array.some(item => {

        return typeof(item) ===! 'number'

    })

    document.body.innerHTML = JSON.stringify(peloMenosUmItensNaoEUmNumero)