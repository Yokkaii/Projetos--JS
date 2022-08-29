
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
        
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/Sem-Título-3.png'
        document.body.style.background = '#ff633e'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'img/Sem-Título-2.png'
        document.body.style.background = '#ffc150'
    } else {
        img.src = 'img/Sem-Título-1.png'
        document.body.style.background = '#345980'
    }
}