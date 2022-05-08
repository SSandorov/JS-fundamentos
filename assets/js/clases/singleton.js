// Un singleton es una instancia única de una clase
// No importa las veces que cree nuevas instancia o donde en el proyecto, me devolverá
// la misma instancia de la clase

// Es útil cuando queremos compartir información en la aplicación y en bases de datos

// No es necesario que se llama así la clase
class Singleton {

    // Hay dos elementos que son opcionales pero son buena práctica
    // 1. se pone la propiedad privada estática #instancia si la compatibilidad lo permite,
    // sino la dejamos como propiedad pública 
    // esta va a ser la instancia inicilizada de la clase. De esta manera si alguien va a 
    // inicializar la clase pero ya estaba inicilaizada devolverá este valor
    static #instancia; // devuelve undefined
    // vendrían otras propiedades u objetos globales
    nombre = '';

    // 2. el constructor que nos evalúa con un condicional si el código ha sido ejecutado o no,
    // y sólo lo ejecuta una vez
    constructor(nombre = '',) {
        if(!!Singleton.#instancia) {
        /*
        Se pone una doble negación porque de esta manera evalúa un booleano en lugar
        de un undefined, lo cual es más simple de trabajar, como ejemplo lo podemos comprobar
        con:
        const a = undefined;
        console.log(a); --> devuelve undefined
        console.log(!a); --> devuelve true
        console.log(!!a); --> devuelve false
        Es una manera ingeniosa para convertir el condicional de undefined a un booleano
        */
            return Singleton.#instancia;
        }
        /*
        Cuando no hay una instancia creada hace las siguientes líneas de código, pero cuando
        ya está creada, entra en el condicional y nos devuelve la instancia ya creada, y al
        ver un return, ya no ejecuta más líneas de código, de esta manera siempre nos devuelve
        la primera instancia
        */
        Singleton.#instancia = this;
        this.nombre = nombre;

    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');

console.log('Nombre en la instancia 1 es: ', instancia1.nombre);
console.log('Nombre en la instancia 2 es: ', instancia2.nombre);