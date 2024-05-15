// Every 
// retorna bollean caso todos os itens(every) satisfazem a condição imposta

const array = [1 ,2, 3, 4 ,5, 6]
    // se sim retorna true, se nao retorna false
const todosItensSaoNumero = array.every(item => {
    return typeof(item) === 'number'
})

document.body.innerHTML = JSON.stringify(todosItensSaoNumero)