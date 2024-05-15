  // Find 
  // encontra apenas o primeiro item que satisfas a condicao
  // nesse caso encontra apenas 2 pois é o primeiro numero do array
  // que satisfez a condicao

    const par = array.find(item => {
        return item % 2 == 0
    })
    
    document.body.innerHTML = JSON.stringify(par)