// ES muy importante saber que todos los primitivos son pasados por valor
// Y todos los objetos son pasados por referencia
// Primitivos
let a = 10;
let b = a;
a= 30;

console.log({a, b});
// a=30 y b=10
// esta es la respuesta lógica, ya que reasignamos el nuevo valor después

// Objeto literal
let juan = {nombre: 'Juan'};
let ana = juan;
ana.nombre = 'Ana';

console.log({juan, ana});
// juan: ana, ana: ana
// como podemos ver a que se cambiaron ambos valores

// Lo mismo pasa con funciones
const cambiaNombre1 = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre1(peter);

console.log({peter, tony});
// me devuelve Tony en ambos

// Para solucionar este problema hacemos lo siguiente
let pepe = {nombre: 'Pepe'};
let maria = {...pepe};
maria.nombre = 'Maria';

console.log({pepe, maria});
/*
el operador spread (...) no hay que confundirlo con el parámetro rest
el segundo funciona para asignar argumentos a una función
fuera de ese caso específico se denomina operador spread y sirve para
separar elementos
*/
// En el caso de una funcion
// al ponerle corchetes ya no es el parámetro rest, sino el operador spread
const cambiaNombre2 = ({...persona}) => {
    persona.nombre = 'Carlos';
    return persona;
}

let pedro = {nombre: 'Pedro'};
let carlos = cambiaNombre2(pedro);

console.log({pedro, carlos});

// En el caso de los arreglos pasa lo siguiente
const frutas1 = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas1 = frutas1;

otrasFrutas1.push('Mango');

console.log({frutas1, otrasFrutas1});
// ambos arreglos son iguales

// Lo arreglamos con el operador spread de la siguiente manera
const frutas2 = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas2 = [...frutas2];
// en lugar de este método podríamos usar
// frutas1.slice(), pero es mejor el anterior
otrasFrutas1.push('Mango');

console.log({frutas2, otrasFrutas2});

// Para poder medir la eficiencia de ciertas funciones o metodologías que
// apliquemos podemos usar lo siguiente
// vamos a emplear el ejemplo del operador spread y el método slice
// Método slice
console.time('slice');
const otrasFrutas3 = [...frutas2];
console.timeEnd('slice');
// Operador spread
console.time('spread');
const otrasFrutas4 = [...frutas2];
console.timeEnd('spread');
// El operador spread es 10 veces más eficiente
// Hay que recordar que esta comprobación funciona en chrome y no en firefox
// (al menos no tal cual. habría que explorar)
// hay que tener en cuenta que si se le da la vuelta en la comprobación son
// casi idénticos