// JS no soporta el uso de múltiples constructores a diferencia de Java por ejemplo. Pero
// hay alternativas como veremos ahora
// Se suele emplear para crear instancias de una clase de diferentes formas
// Un ejemplo práctico es cuando hacemos una petición http y queremos crear en base a 
// la respuesta http una instancia de mi clase

class Persona {

    /* 
    En este ejemplo queremos que una instancia se pueda construir con tres variables, 
    pero que también se pueda construir con un objeto literal.
    Por desgracia, JS no permite que una clase tenga dos variables, pero si hay una
    alternativa, que es la siguiente
    */
    // Construimos un método estático que devuelve una instancia de la clase utilizando el
    // constructor. El truco se encuentra en utilizar los mismo parámetros que el constructor
    // para que así nos devuelva una instancia, pero con una estructura distina a la descrita
    // en el constructor
    
    static porObjeto({nombre, apellido, pais}) {
        // Como recuerdo de clases anteriores, estamos desestructurando un objeto, y estamos
        // sacando las llaves para poder utilizarlas
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }



    getInfo() {
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}


const   nombre1     = 'Pepe',
        apellido1   = 'González',
        pais1       = 'España';

const pgon = {
    nombre:     'Pepe',
    apellido:   'González',
    pais:       'España'
}

// Constructor que maneja las variables
const individuo1 = new Persona(nombre1, apellido1, pais1);

// Apaño que maneja los objetos
const individuo2 = Persona.porObjeto(pgon);

individuo1.getInfo();
individuo2.getInfo();

console.log(individuo1);
console.log(individuo2);