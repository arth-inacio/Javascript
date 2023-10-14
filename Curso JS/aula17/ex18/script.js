function adicionar() {
    let txtnum = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    let lista_num = []

    if (txtnum.value.length <= 0) {
        window.alert(`Por favor digite um número válido!`)
    }else {
        let n = Number(txtnum.value)
        lista_num.push(n)
        let item = document.createElement('option') 
        item.text += `Valor ${n} adicionado.`
        // item.value = `tab${cont}`
        tab.appendChild(item)
    }
}