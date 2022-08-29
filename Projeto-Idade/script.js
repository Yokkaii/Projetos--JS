function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
   
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.settAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                img.settAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 45) {
                img.settAttribute('src', 'foto-adulto-m.png')
            } else {
                img.settAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.settAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                img.settAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 45) {
                img.settAttribute('src', 'foto-adulto-f.png')
            } else {
                img.settAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}