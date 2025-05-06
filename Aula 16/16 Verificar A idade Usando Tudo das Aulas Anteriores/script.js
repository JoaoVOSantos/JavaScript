function verificar(){
    // dados necessarios para a conta
    var data = new Date()
    var ano = data.getFullYear()
    // pego do html 
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    // testa se nao for digitado nada ou se o ano digitado é maior que o ano presente
    if(fano.value == 0 || Number(fano.value) > ano){

        window.alert(`Verifique os Dados e tente novamente!!`)

    }else{
            // pega o sexo informado por meio de array[0,1]
            var fsex = document.getElementsByName('radsex')
            // calcula a idade
            var idade = ano - Number(fano.value)
            var genero = ''

            // cria um <img id="foto">
            var img = document.createElement('img')
            img.setAttribute("id", "foto")

            // testa qual radio foi checado e define o genero
            if(fsex[0].checked){

                genero = 'homem'

                if(idade >= 0 && idade <= 5){
                    
                    // manda para a tag <img> criada dinamicamente no atributo src="homembebe.png"
                    img.setAttribute('src', 'homembebe.png')

                }else if(idade <= 14){

                    img.setAttribute('src', 'homemcrianca.png')

                }else if(idade <= 26){

                    img.setAttribute('src', 'homemjovem.png')

                }else if(idade <= 46){

                    img.setAttribute('src', 'homemadulto.png')

                }else{
                    img.setAttribute('src', 'homemidoso.png')
                }

            }else if(fsex[1].checked){

                genero = 'mulher'
                if(idade >= 0 && idade <= 5){
                
                    img.setAttribute('src', 'mulherbebe.png')
    
                }else if(idade <= 14){
    
                    img.setAttribute('src', 'mulhercrianca.png')

                }else if(idade <= 26){
    
                    img.setAttribute('src', 'mulherjovem.png')

                }else if(idade <= 46){
    
                    img.setAttribute('src', 'mulheradulta.png')
    
                }else{

                    img.setAttribute('src', 'mulheridosa.png')
                }

            }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade}`
        res.appendChild(img)
    }

}