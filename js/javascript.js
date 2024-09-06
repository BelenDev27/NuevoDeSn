let minombre;

minombre = "MelEmi"

function mayorDeCuatro(a, b, c, d) {
    return Math.max(a, b, c, d);
}

console.log(mayorDeCuatro(3, 7, 2, 8));

function menorDeTres(a, b, c) {
    return Math.min(a, b, c);
}

console.log(menorDeTres(5, 1, 8));

function esParOImpar(n) {
    if (n % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

console.log(esParOImpar(4)); 
console.log(esParOImpar(7)); 