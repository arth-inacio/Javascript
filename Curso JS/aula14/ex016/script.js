function contar() {
    var val_inicial = document.getElementById('txtinicial')
    var val_final = document.getElementById('txtfinal')
    var passo = document.getElementById('txtpasso')

    for (var i = val_inicial.value; i <= val_final.value; i += passo.value) {
        res += `${i} \u{1F449}`

        if (passo.value == 0){
            alert('Passo inválido! Considerando PASSO 1')
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Contando: ${res}`
}