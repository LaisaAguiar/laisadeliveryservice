//APRENDENDO FUNÇÕES JAVASCRIPT

//PARTE 1 DESAFIO
//fç anonima atribuida a uma const que recebe dois parametros:
/*const subtrai = function (x, y) {
    return x - y;
}
console.log(typeof subtrai)
console.log(subtrai);*/


//PARTE 2 DESAFIO
//arrow function atribuida a uma constante que recebe um parametro e imprime se é zero ou não:
const testazero = (a) => {
    if (a === 0) {
        return console.log("O valor é zero");
    } else {
        return console.log("O valor não é zero");
    }
}
console.log(testazero);
//console.log(testazero(0))
//console.log(testazero(2))
//obs: o return não é necessário na arrow function.

//PARTE 3 DESAFIO

function subtrai(x, y) {
    return x - y;
}

function testasinal(x, y) {
    if (subtrai(x, y) === 0) {
        console.log("O valor é zero");
    } else if ((x > 0 & y > 0) || (x < 0 & y < 0)) {
        console.log("Subtração entre dois numeros de mesmo sinal");
    } else {
        console.log("Subtração entre dois numeros de sinais diferentes");
    }
}

console.log(testasinal);
//console.log(testasinal(5,5))
//console.log(testasinal(5,6))
//console.log(testasinal(5,-5))
