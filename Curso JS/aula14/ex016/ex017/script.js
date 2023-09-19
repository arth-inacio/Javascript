function calcular() {
    let txtnum = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if (txtnum.value.length <= 0) {
        window.alert(`Por favor digite um número válido!`)
    }else {
        let n = Number(txtnum.value)
        tab.innerHTML = ''
        for(cont = 1; cont <= 10; cont++) {
            let item = document.createElement('option') 
            item.text += `${n} x ${cont} = ${n * cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
        }
    }
    
}

