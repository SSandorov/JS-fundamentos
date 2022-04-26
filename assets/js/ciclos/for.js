// El bucle for es el más empleado

const heroes = ['Batman', 'Superman', 'Spiderman', 'Ironman'];

console.warn('For tradicional');

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

// El for in es más optimizado que el for estándar
console.warn('For in');

for (let i in heroes) {
    console.log(heroes[i]);
}

// Es empleado para obtener referencias a valores de objetos y arreglos de 
// manera sencilla

console.warn('For in');

for (let heroe of heroes) {
    console.log(heroe);
}
// El bucle for of extrae el valor que se encuentra dento del arreglo y lo 
// devuelve a la variable
// Es una buena práctica llamar a la variable con el nombre del arreglo o el
// objeto pero la versión individual