/*
Una estructura de control nos permite alteral el flujo de ejecución tradicional
del código. Hasta ahora el único flujo de control que hemos vsito es con las 
funciones, cuando las llamamos, pero ahora aprenderemos otros flujos de control
*/

// Estructura de control if
let a = 5;

if (a > 10) {
    console.log('A es mayor de 10');
}
// Nunca se ejecuta
console.log('Fin del programa');

if (a < 10) {
    console.log('A es menor de 10');
}
// Siempre se ejecuta

// estructura de control if-else
if (a > 10) {
    console.log('A es mayor de 10');
} else {
    console.log('A es menor de 10');
}

/*
Este tipo de estructura espera un booleano como condición, pero también
se puede poner como condicional
    1. undefined
    2. null
    3. una asignación
*/

const hoy = new Date(); // El new crea una nueva instancia de la función Date()
let dia = hoy.getDay(); // método getDay() de la función Date()

if (dia === 3) {
    console.log('Miércoles');
} else {
    console.log('No es miércoles');
}
/*
ES importante saber
    1. a = b es una asignación
    2. a == b es un operador booleano (a es igual a b) no tiene en cuenta el tipado
    3. a === b ambas variables son idénticas (tanto en valor como tipado)
*/

// Sin emplear if-else o switch (sólo empleando objetos) mostrar el día de la
// semana
// getDay() --> 0:domingo, 1:lunes, ...

const diasSemana = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
];

console.log('El día de la semana es: '+ diasSemana[dia] || 'Día no definido');