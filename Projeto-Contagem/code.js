function verificar(){
    var inicio = document.getElementById('ini')
    var final = document.getElementById('fin')
    var passo = document.getElementById('pas')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        window.alert ('[ERRO]')
    } else {
        res.innerHTML = 'Contando...'
        var i = Number(inicio.value)
        var f = Number(final.value)
        var p = Number(passo.value)

        if (i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    }
}