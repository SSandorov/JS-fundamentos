// En esta sección hablaremos de los métodos de un arreglo
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

// En primer lugar tenemos el método length, para saber el número de elementos que
// tiene un arreglo
console.log('Largo: ', juegos.length);

// El primer elemento
let primero = juegos[0];

// El último elemento
let ultimo = juegos[juegos.length -1];
console.log({primero, ultimo});

// El método forEach() nos devuelve los valores de cada posición del arreglo
juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
} );

// El método push() añade un elemento nuevo en la último posición del arreglo y
// devuelve la nueva longitud del elemento
let nuevaLongitud = juegos.push('Ori');
console.log({nuevaLongitud, juegos});

// El método unshift() añade un elemento al principio del arreglo y devuelve
// la nueva longitud

nuevaLongitud = juegos.unshift('Doom');
console.log({nuevaLongitud, juegos});

// El método pop() saca el último elemento del arreglo y nos devuelve su valor
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

// El método splice() saca uno o varios elementos de un arreglo, y nos devuelve
// otro areglo con los elementos eliminados
// El segundo argumento del método especifica el número de elementos que tendrá
// el nuevo arreglo con los alementos del arreglo a cortar

let posicion1 = 1; // posición del segundo juego

let juegosBorrados = juegos.splice(posicion1, 2); 
console.log({juegosBorrados, juegos});

// El método indexOf() busca el índice de un elemento dentro de un arreglo y nos
// devuelve el índice

let metroidIndice = juegos.indexOf('Metroid'); // el argumento es case sensitive
console.log({metroidIndice});