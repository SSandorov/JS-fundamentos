// Los operadores ternarios son una manera de simplificar los if-else

/*
Días de semana abrimos a las 11
Los fines de semana abrimos a las 9
*/

// Entra e un sitio web, para consultar si está abierto hoy

const dia = 0; // 0: domingo, 1: lunes, ...
/*
se podría crear otro orden para enumerar los días de la semana, pero si sabemos
que las librerías en JS empiezan por el domingo, deberíamos mantener la 
estructura normalizada del sistema, es una buena práctica
*/
const horaActual = 10; // consulta el domingo a las 10:00 am

let horaApertura;
let mensaje; // EStá abierto, está cerrado, hoy abrimos a las xx

/* 
Está es la manera tradicional

if (dia === 0 || dia === 6 ) { // fin de semana
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Día de la semana');
    horaApertura = 11;
}

if (horaActual >= horaApertura) {
    mensaje = 'Está abierto'
} else {
    // empelamos el backtick para concatenar, es la buena práctica
    mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`;
}
*/
/*
Vamos a crearlo con el operador terciario
Primero debemos asignar a una variable el condicionante
Ponemos la condición dentro del paréntesis seguido del interrogante,
siendo este el inicio del operador terciario. Entonces ponemos la
condición verdadero, dos puntos, condición falsa
*/

horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});