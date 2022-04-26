// Cómo optimizar nuestro código con el operador terciario

/*
const elMayor = (a, b) => {
    return (a > b) ? a : b;
}
*/
// Simplificamos a una sola línea

const elMayor = (a, b) => (a > b) ? a: b;
console.log(elMayor(15, 25));

const tieneMembersía = (miembro) => (miembro) ? '2 euros' : '10 euros';
console.log(tieneMembersía(false));

// Podemos emplear el operador terciario para crear elementos de un arreglo

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    (amigo) ? 'Thor' : 'Loki'
];

console.log(amigosArr);

// Un operador terciario con más de una condición

const nota = 65; // A A+ B B+
const grado =   (nota >= 95) ? 'A+' :
                (nota >= 90) ? 'A'  :
                (nota >= 85) ? 'B+' :
                'F';

console.log({nota, grado});