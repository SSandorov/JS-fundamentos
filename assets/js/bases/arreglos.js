// Una manera poco común de formular un arreglo es
const arr1 = new Array(10);
console.log(arr1);

// Otra menera de declara un arreglo es
const arr2 = [];
console.log(arr2);

// La manera más común es la siguiente
let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Triger'];
console.log({videoJuegos}); // Las llaves simbolizan un objeto literal

// de esta manera mostramos en consola una posición del arreglo
console.log(videoJuegos[0]);

// A diferencia de otros lenguajes, JS al tener tipado débil puede tener distintos tipos de variables en un arreglo
// Puede contener otros arreglos, objetos literales e incluso funciones
let arregloCosas = [
    true,
    123,
    'Stefan',
    1 + 2,
    function(){}, // definición tradicional de una función
    ()=>{}, // definición lambda de una función
    {a:1}, // objeto literal
    ['X', 'Megaman', 'Zero', 'Dr. Light']
];
console.log({arregloCosas});

// Podemos imprimir un elemento de un arreglo dentro de un arreglo, lo hacemos de la siguiente manera
console.log(arregloCosas[7][3]);