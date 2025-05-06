
function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = getHours()
  //var hora = 1
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora < 6){

        img.src = 'noite.png'
        document.body.style.background = '#13264a'
    }else if(hora >= 6 && hora <= 12){

        img.src = 'manha.png'
        document.body.style.background = '#ffde6f'

    }else if(hora <= 18){

        img.src = 'tarde.png'
        document.body.style.background = '#9b6267'

    }else{

        document.body.style.background = '#2e4b62'
        img.src = 'madrugada.png'

    }
}
