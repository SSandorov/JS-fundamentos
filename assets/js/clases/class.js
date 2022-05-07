// La estructura de una clase en JS se compone de la palabra reservada class y del nombre con
// el open camelcase 
/*
Según las buenas prácticas, los elementos de las clases se ordenan de la siguiente manera
    1. Propiedades
    2. Métodos estáticos
    3. Constructor
    4. Sets y Gets
    5. Métodos
Algunas personas se acostumbran a escribir las propiedades privadas al final de la clase
*/

class Persona {
    // Todas las clases tienen por defecto el 'use strict';
    // Se debe tener en cuenta que no son lo mismo que una variable, por lo que no 
    // podríamos escribir
    /*
    nombre = '',
    codigo = '',
    frase = '';
    nos saldría un error
    */
    // También es importante saber que las propiedades se pueden definir en el constructor
    // directamente. Cada uno puede elegirlo como quiera
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

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

    // Set y Get
    // Los set y get son métodos que se emplean para controlar cómo se presentan las propiedades
    // de una clase
    // El set nos establece un valor y el get nos recupera un valor
    // En este ejemplo queremos que la comida esté en mayúscula y para que el usuario no se
    // olvide lo controlaremos nosotros
    // Por ello en el set() escribiremos esta condición

    // es buena práctica añadir el set al nombre del método
    set setComidaFavorita(comida) {
    // el set sólo recibe un argumento
    // hay que tener cuidado con llamar al método igual que la propiedad, porque si lo hacemos
    // creará un bucle infinito
    /*
    si quisiésemos llamar al método igual que la propiedad tendríamos que poner un guión bajo
    a la propiedad, como a continuación
    _comida = '';
    set comida(comida) {
        this._comida = comida;
    }
    pero la buena práctica es llamarlo set setX(){}, así que no debería haber ningún problema
    */
    this.comida = comida.toUpperCase();
    }

    // es buena práctica añadir el get al nombre del método
    get getComidaFavorita() {
    // en un get es conveniente devolver un valor
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    // hay que tener cuidado de no llamar al propio método get, porque hará un bucle infinito
    }

    // Métodos de una clase
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

// De esta manera llamamos al set y get
spiderman.setComidaFavorita = 'El pastel de cereza de la tía May';
console.log(spiderman.getComidaFavorita);
console.log(spiderman);


/*
Uno de los grandes inconvenientes de JS es que podemos crear una propiedad de la
siguiente manera:
spiderman.nemesis = 'Duende Verde';
esto nos creará una propiedad exclusivamente para spiderman sin ni siquiera tener la
propiedad definida anteriormente.
Hay que tener cuidado con esto porque no nos salta ningún error en pantalla ni consola

Y otro de los grandes inconvenientes es si tenemos una propiedad pública que la manipula
un set, puede ser manipulada también simplemente llamándola.
Siguiendo el ejemplo de este ejercicio, después de haber llamada al set y darle un string,
lo podríamos cambiar simplemente con:
spiderman.comida = 'Tarta de Chocolate';
y se nos cambiará el valor de la propiedad
Esto no sucede con las propiedades privadas, así que esa es la manera de solucionar este 
inconveniente
*/
