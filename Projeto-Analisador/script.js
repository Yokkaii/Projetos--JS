var list = document.getElementById('addnum')
var nun = document.getElementById('num')
var res = document.getElementById('res')

var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function clique() {
    if(isNumero(nun.value) && isLista(nun.value, valores)){
        window.alert('Tudo OK!')
    } else {
    window.alert('valor INVALIDO ou Ja encontrado na lista.')
    }
}