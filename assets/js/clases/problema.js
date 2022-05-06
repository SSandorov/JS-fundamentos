// Cuando no empleamos clases nos puede pasar que debemos crear dos objetos con la misma
// estructura pero nos equivocamos en uno de los valores. Con las clases esto no pasa, ya que
// creamos una plantilla y siempre se cumple la estructura.
// Lo mismo pasa si tenemos que añadirle argumentos, tendríamos que ir uno por uno


const ssan = {
    nombre: 'Stefan',
    edad: 28
}

const ldou = {
    nombr: 'Lilla', // esto nos lleva a fallo
    edad: 23
}

// Antes del ECMAScript6 se empleaba la siguiente estructura para definir una clase

// Se escribe una función con la palabra reservada function y con Open Camel Case para
// diferenciarla de una función normal. Esta función se la denomina generador de instancias
function Persona(nombre, edad) { // Añadir valores predeterminados a los parámetros es del ECMAScript 6, no del ECMAScript5
    console.log('Este código se ejecuta');

    // Sino hiciésemos estas llamadas a los parámetros, cuando llamásemos a la instancia
    // nos devolvería undefined, ya que no tendría ningún tipo de return
    this.nombre = nombre;
    this.edad = edad;
    // podemos aplicarla a métodos también
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

// La palabra reservada new le indica a JS que quiero crear una nueva instancia
const maria = new Persona('Maria', 40);
console.log(maria);
// Llamamos al método imprimir
maria.imprimir();

/*
Es importante tener en cuenta que esta forma de resolver el problema de las clases se creó
para el ECMA5, y es anterior al año 2015. Si trabajamos con páginas web antiguas nos podemos
encontrar con este tipo de código, y es importante saber tratar con él. También es importante
conocerlo por si necesitamos compatibilidad con navegadores muy antiguos

El mayor inconveniente de este parche, es que necesitas la palabra new para ejecutar el 
código, y no todos lo saben, se podría crear un warning para avisar en caso de que alguien
se olvide, pero sólo se recomienda utilizar esta forma para mantener la compatibilidad
en antiguos navegadores, todos los modernos ya pueden utilizar el código tradicional de clases.
También es importante saber que, para heredar valores de un generador de instancias a otro,
deberíamos emplear el __proto__ y esto no es tan sencillo de manejar

De todas maneras, con esta estructura no puedo crear clases estáticas ni variables privadas de 
manera simple

*/