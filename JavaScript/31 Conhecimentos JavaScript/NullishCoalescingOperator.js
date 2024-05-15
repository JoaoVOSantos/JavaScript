
// nullish coalescing Operator (??)
// Operador de aderir o nulo

const idade = 0;

// pro javaSript
  // 0, '', [], false, undefined, null => falsy
  //falsy <= valores não validos quando trabalhado com operador || (ou)

// testa se idade recebe null se recebe escreve(`Não informado`)
// nesse caso o 0 é reconhecido como nulo.
document.body.innerHTML = `Sua idade é: ${idade || `Não Informado`} <br> `

//Com Nullish (??)

// null, undefined ou qualquer valor nao significativo
//são tratados diferente de 0, com nullish, 0 é um valor primitivo real
    document.body.innerHTML += `Sua idade é: ${idade ?? `Não Informado`}`


