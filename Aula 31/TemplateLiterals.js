 // Template Literals ou Template Strings ${}

    const nome = 'diego'
    const message = `bem vindo, ${nome ?? 'visitante'}`

    document.body.innerHTML = message
