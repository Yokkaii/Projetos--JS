function tabuada(){
    var num = document.getElementById('ini')
    var tab = document.getElementById('seltab')
    
    if (num.value.length == 0) {
        window.alert('Por Favor, Digite um Número!')
    } else{
        var n = Number(num.value)
        var c = 1
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}