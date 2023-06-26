function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if (idade < 55) {
                //adulto
                img.setAttribute('src', 'adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'senhor.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if (idade < 55) {
                //adulto
                img.setAttribute('src', 'adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'senhora.jpg')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos.`)
        res.appendChild(img)
    }
}