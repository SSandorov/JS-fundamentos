// console.log("Hola Mundo");

let a = 10,
    b = 20,
    c = "Hola",
    e = " ",
    d = "Spiderman";

// Las constantes tienen valores inmutables y con conveniencia se escriben en mayúscula a excepción de JS.
// solo se escribirán en mayúscula cuando sean constante globales
// (También pesan menos que let y var)
const saludo = c + e + d;


// var no se emplea hoy en día
var x = 10;

// y = 20; No se puede hacer porque una vez asignado un valor a una constante esta es inmutable
const Y = 10;

// Con este console.log podemos ver el nombre de la variable y su valor
console.log({saludo});

// Llamar a varias variables en una sola función
console.table({a, b, c, d});