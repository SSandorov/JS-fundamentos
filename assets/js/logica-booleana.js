const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

// Empezamos con la negación. Es el signo de admiración antes de la condición
console.warn('Not o la negación');
console.log(true) // nos devuelve true
console.log(!true); // nos devuelve falso
// Podemos negar funciones booleanas
console.log(!regresaFalse()); // nos devuelve true

// Seguimos con 'and'. Nos devuelve true si todos los valores son verdaderos
console.log(true && true); // devuelve true
console.log(true && false); // devuelve falso
// Cuando la primera condición es falsa ya ignora todas las demás
console.log('-----------------');
console.log(regresaFalse() && regresaTrue());
console.log('-----------------');
console.log(regresaTrue() && regresaFalse());

// Condicional 'or'. Nos devuelve true si una de las condiciones es cierta
console.warn('OR');
console.log(true || false); // devuelve true
console.log(false || true); // devuelve true
// Cuando la primera condición es true ignora todas las demás
console.log('-----------------');
console.log(regresaFalse() || regresaTrue());
console.log('-----------------');
console.log(regresaTrue() || regresaFalse());

// Los operadores || y && también se emplean para las asignaciones
console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
// const soyVerdadero = true;

const a1 = true && 'Hola Mundo'; // Nos devuelve 'Hola Mundo'
const a2 = true && 'Hola Mundo' && 150; // Nos devuelve 150
console.log({a1, a2});
// como vemos nos devuelve el último valor
// este tipo de asignación no es común hacerlo, se suele hacer con el ||

const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'No soy falso de nuevo';
console.log({a3, a4});
// aunque añadiésemos 1000 condiciones, nos devolvería la primera que se cumpla
// e ignoraría las demás

// Las asignaciones se suelen emplear con los condicionales if, else-if