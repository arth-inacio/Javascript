function fatorial (num) { // Recursividade
    if (num == 1) {
        return 1
    }else {
        return num * fatorial(num-1)
    }
}

console.log(fatorial(7))