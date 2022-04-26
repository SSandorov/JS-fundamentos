// Una función estándar tiene la siguiente estructura
// Así la definimos
function saludar(nombre) {
    console.log('Hola '+ nombre);
}
// Así la llamamos
saludar('Stefan');
/*
El problema con la forma estándar es que el nombre de la función, en este caso
'saludar' va a poder ser redeclarada y afectar a nuestro programa
var | let saludar = x nos rompería la web
*/

// Otra forma es la llamada función anónima
const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}
saludar2('Stefan');
/*
esta forma nos permite evitar el problema de la redeclaración de la variable

Estas dos formas de declarar las funciones tiene implicito un método denominado
arguments. Este método hace que cuando añadimos mas llamadas de argumentos que 
no tenemos escritos, no nos salta ningún error
saludar('Stefan', 27, 'Holanda')
se ejecutaría sin problemas
*/

// La forma actual de declarar una función es la denominada función lambda
// Así se declara

const saludarFlecha = (nombre) => {
    console.log('Hola ' + nombre);
}

saludarFlecha('Stefan');

/*
Se debería utilizar esta forma simpre, ya que es más eficiente y nos evita
problemas con un objeto especial llamado this
*/

/*
Cuando una fución no devuelve ningún valor es de tipo undefined
Para que devuelve algún valor le debemos añadir un return
Después de añadirle un return a una función ya nada se ejecutará
*/
const consoleNoEjecutado = (nombre) => {
    return 1;
    console.log('Esto no se ejecuta'); // esta línea no se ejecuta
}

// Podemos retornar cualquier tipo de valor, pero para devolver dos valores,
// a diferencia de otros lenguajes, debemos crear un arreglo y pedir el
// índice correspondiente

const dobleReturn = (nombre) => {
    return [1,2]; // dos retornos distintos
}

const retornoDobleReturn = dobleReturn();
console.log(retornoDobleReturn[0], retornoDobleReturn[1]);

const sumar = (a, b) => {
    return (a + b);
}

const suma1 = sumar(4, 5);
console.log(suma1);

// si la función flecha sólo tiene una línea, se puede escribir de la siguiente
// manera
const sumar2 = (a, b) => (a + b);
const suma2 = sumar2(9, 15);
console.log(suma2);

// Otra función flecha de una línea
const getAleatorio = () => Math.random();
const numeroAleatorio = getAleatorio();
console.log(numeroAleatorio);