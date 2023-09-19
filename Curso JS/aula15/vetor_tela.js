let valores = [2, 5, 9, 11 , 1]

// for (let pos=0; pos < valores.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

// Criando um for como objeto
 for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
 }