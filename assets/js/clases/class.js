// La estructura de una clase en JS se compone de la palabra reservada class y del nombre con
// el open camelcase 

class Persona {
    // Todas las clases tienen por defecto el 'use strict';
    // Las propiedades de clase se escriben aquí. Se debe tener en cuenta que no son lo mismo
    // que una variable, por lo que no podríamos escribir
    /*
    nombre = '',
    codigo = '',
    frase = '';
    nos saldría un error
    */
    nombre = '';
    codigo = '';
    frase = '';

    // El constructor() es el primer método de una clase. Este se ejecuta en el momento
    // en el que una instancia de la clase Persona() es creada
    // El constructor() es el único método que no devuelve undefined
    constructor(nombre, codigo, frase) {
        // el this.x nos llama a las propiedades del scope superior
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        // return undefined; --> aunque pongamos esto, no nos lo devuelve
    }

    // Los métodos de la clase se construyen debajo del constructor
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        console.log(`${this.codigo} dice: ${this.frase}`);
        
        // Podemos llamar un método dentro de otro método
        this.quienSoy();

    }
}

// Por último creamos la instancia y llamamos a la clase
const spiderman = new Persona('Peter', 'Spiderman', 'Your friendly neighbour spiderman');
console.log(spiderman);

// De esta manera llamamos al método quienSoy()
spiderman.quienSoy();
spiderman.miFrase();