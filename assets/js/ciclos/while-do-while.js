// Temos que tener cuidado de no crear un bucle infinito. Para ello debemos
// tener en cuenta la condición puesta en el inicio del bucle
// El bucle while es el bucle tradicional

const coches = ['Ford', 'Mazda', 'Honda','Toyota'];

let i = 0;

console.warn('While');

while (i < coches.length) {
    console.log( coches[i] );
    // i = i + 1; es igual a i++
    i++;
    // i += 2 incremento de dos en dos
}

// Para que un bucle se ejecute, la condición debe ser verdadera
// Undefined, null y false se consideran falsos

/*
Podríamos hacer también

while (coches[i]) {
    // Se puede añadir un condicional if si hace falta
    console.log( coches[i] );
    i++;
}
*/

// Bucle do while
// La diferencia entre uno y otro es que do while ejecutará por lo menos
// el 'do'

console.warn('Do while');

let j = 0;

do {
    console.log(coches[j]);
    j++;
} while (coches[j]);