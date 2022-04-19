// Un objeto literal es un diccionario en Python
// se compone de varios elementos cada uno compuesto de una llave y un valor
/*
    Si hiciésemos
    const personaje = {...}
    no permitiríamos asignarle otro tipo a la variable, pero sí podríamos
    añadirle o quitarle elemento como lo hemos hecho hasta ahora
*/
let personaje = {
//  Llave       Valor
    nombre: 'Tony Stark',
    codeName: 'Iron-Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: [
        'Mark I',
        'Mark V', 
        'Hulkbuster'
    ],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima pelicula': 'Infinity War' // No es una muy buena práctica, pero se puede hacer
};

console.log(personaje);

// La manera común de acceder a un elemento del objeto literal
console.log('Nombre: ', personaje.nombre);

// Otra manera de acceder a un elemento del objeto literal, se suele emplear
// cuando la llave no está escrita con el estándar (un espacio en medio por ejemplo)
console.log('Nombre en código: ', personaje['codeName']);
console.log('Última película: ', personaje['ultima pelicula']);

// acceder a un elemento anidado dentro de un objeto literal
console.log('Latitud: ', personaje.coords.lat);

// número de trajes de iron-man
console.log('Número de trajes: ', personaje.trajes.length);

// el último traje
console.log('último traje: ', personaje.trajes[personaje.trajes.length-1]);

// manera dinámica de buscar en un objeto literal
const x = 'vivo';
console.log('Vivo: ', personaje[x]);

// Para eliminar un elemento de un objeto literal
delete personaje.edad;
console.log(personaje);

// Alguna vez nos interesará convertir cada elemento en un array con dos valores
// en los que los valores del array serán la llave y el valor de cada elemento
// del objeto literal
// como es un array no ordena alfabéticamente
const entriesPares = Object.entries(personaje); // el método Object forma parte de JS
console.log(entriesPares);

// si queremos añadir un elemento nuevo lo podemos hacer de la siguiente manera
personaje.casado = true;
console.log(personaje);

// Para bloquear un objeto literal para así no poder añadirle, quitarle 
// o modificarle elementos
Object.freeze(personaje);
personaje.dinero = 1000000000;
console.log(personaje);
// como vemos no se añade este elemento
// Hay que tener en cuenta que se podrán modificar otros objetos literales
// anidados
personaje.direccion.ubicacion = "Costa Rica";
console.log(personaje);
// Para bloquear este elemento volvemos a hacer
Object.freeze(personaje.direccion);
personaje.direccion.ubicacion = "España";
console.log(personaje);
// como vemos no se añade este elemento

// Para tener un listado de las llaves de un objeto literal
const personajeLlaves = Object.getOwnPropertyNames(personaje);
console.log({personajeLlaves});
// nos devuelve un arreglo con las llaves ordenadas por creación

// Para un listado de valores del objeto literal
const personajeValores = Object.values(personaje);
console.log({personajeValores});
