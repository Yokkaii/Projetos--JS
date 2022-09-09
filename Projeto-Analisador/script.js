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
    if(isNumero(nun.value) && !isLista(nun.value, valores)){
        valores.push(Number(nun.value))
        var item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
    window.alert('valor INVALIDO ou Ja encontrado na lista.')
    }
    nun.value = ''
    nun.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione um Valor!')    
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        for(var pos in valores) {
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] > menor)
            menorr = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}. </p>`
        res.innerHTML += `<p>O menor valor foi ${menor}. </p>`
    }
}