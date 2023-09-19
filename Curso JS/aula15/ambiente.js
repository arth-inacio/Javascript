let num = [3, 5, 8, 12, 25]
// num.sort()
// num.push(36)

// console.log(num)
// console.log(`Vetor: ${num}`)
// console.log(`Tamanho: ${num.length}`)
// console.log(`Primeiro valor: ${num[0]}`)


// for (let i=0; i<num.length; i++){
//     console.log(`Posição ${i}: ${num[i]}`)
// }

let pos = num.indexOf(1)

if (pos == -1){
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}

