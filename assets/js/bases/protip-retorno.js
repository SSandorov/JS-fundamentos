// Vamos a aprender como optimizar nuestro código

const crearPersona1 = (nombre, apellido) => {
    return {
        // si el nombre de la llave es igual que la del valor basta con
        // escribirlo una vez
        // nombre: nombre,
        // apellido: apellido
        // es igual a
        nombre,
        apellido
    }
}

const persona1= crearPersona1('Stefan', 'Sandorov');
console.log(persona1);

// Podríamos convertir la función a una función flecha de una sola línea
/*
Como lo que devuelve la función es un objeto literal, y este empieza por
corchetes, hay que cerrar los corchetes entre paréntesis, para que no 
confunda el objeto literal con la declaración de la función y nos devuelva
undefined
*/
const crearPersona2 = (nombre, apellido) => ({nombre, apellido});
const persona2= crearPersona2('Stefan', 'Sandorov');
console.log(persona2);

/*
Las declaraciones tradicionales de funciones tienen el método arguments que nos
permite asignar argumentos como si de un arreglo se tratase
Este método no existe en las funciones flecha, pero se puede implementar
en caso de que haga flata de la siguiente manera
*/
const devolverArgumentos = (edad, ...argumentos /* , argumento2 no puede */ ) => {
    // console.log({edad, argumentos});
    return argumentos;
}
/* 
Los tres puntos delante del argumento denominado parámetro rest nos permite 
asignar argumentos cuando declaremos una variable que llama a la función y 
devolvernos un arreglo con los argumentos ordenados por orden de creación

Cuando empleamos el parámetro rest, hay que tener las siguientes consideraciones
    1. Después del parámetro no pueden venir más argumentos
    2. Todos los argumentos declarados antes del parámetro tendrán que ser
    llamados por separado

A la hora de asignar un nombre a los argumentos, para evitarnos crear una
variable por cada una de ellos, podemos ponerlo entre llaves cuadradas
y a cada posición del índice le ponemos el nombre del argumento
*/
const [vivo, casado, nombre, apellido] = devolverArgumentos(10, true, false, 'Stefan', 'Sandorov');
console.log({vivo, casado});

// Si queremos cambiar el nombre del argumento para una parte del código
// pero manter en la función el nombre original
const {apellido: nuevoApellido} = crearPersona2('Stefan', 'Sandorov');
console.log({nuevoApellido});

// De esta manera podemos desestructurar un objeto literal de manera más
// eficiente
// en caso de que algún argumento no esté asignado, basta con inicializarlo
// para que no quede undefined
const desestructurarArg = ({nombre, vivo, codeName, edad = 15, trajes}) => {
    
    console.log({nombre});
    console.log({vivo});
    console.log({codeName});
    console.log({edad});
    console.log({trajes});
}

const tony = {
        nombre: 'Tony Stark',
        codeName: 'Iron-Man',
        vivo: false,
        // edad: 40,
        trajes: [
            'Mark I',
            'Mark V', 
            'Hulkbuster'
        ],
};

desestructurarArg(tony);