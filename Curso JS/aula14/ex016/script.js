function contar() {
    let val_inicial = document.getElementById('txtinicial')
    let val_final = document.getElementById('txtfinal')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    
    if (val_inicial.value.length == 0 || val_final.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível contar!`
        window.alert('[Erro] Faltam dados!')
    }else {
        res.innerHTML = `Contando: `
        let i = Number(val_inicial.value)
        let f = Number(val_final.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert('[Erro] Passo inválido! Considerando passo 1')
            p = 1
        }
        
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else if(i > f){
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        }
        res.innerHTML += `\u{1F6A9}`
    }
    
    res.style.textAlign = 'center' 
