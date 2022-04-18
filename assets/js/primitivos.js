// Primitiva tipo string
let nombre = "Peter Parker";
console.log(nombre);
// cambios el valor del string. No se añade let delante porque sino estaríamos declarando dos veces ña misma variable
// en la mayoría de los casos se emplean comillas simples porque ocupan menos memoria
nombre = "Ben Parker";
console.log(nombre);

// el operador interno typeof nos permite saber que tipo de dato es una variable
console.log(typeof nombre);

// JS tiene tipado débil, por lo que una variable puede pasar de string a number sólo cambiándole el valor
nombre = 123;
console.log(typeof nombre);

// Primitiva de tipo booleana. Se debe escribir en minúscula porque JS es case sensitive
let esMarvel = true;
console.log(typeof esMarvel);
// El tipado débil también se aplica a los booleanos
esMarvel = 5;
console.log(typeof esMarvel);

// Primitiva tipo number
let edad = 33;
edad = 33.001; // en JS 33.001 es igual a 33, no hay float, double u otras primitivas, solo number

// si solo inicializamos una variable es de tipo undefined
let superPoder; // en JS empleamos el camelcase al inicializar una variable
console.log(typeof superPoder);

// La primitiva de tipo null nos devuelve un objeto. 
//En JS todo es un objeto menos las primitivas (hay un debate de si null es una primitiva o un objeto)
let soyNull = null;
console.log(typeof soyNull);

// Primitiva de tipo symbol

let symbol1 = Symbol();
let symbol2 = Symbol();

console.log(typeof symbol1);

// dos símbolos nunca son iguales
console.log(symbol1 === symbol2);
