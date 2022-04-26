// El operador switch evalúa un condicionante con un tipado estricto
// como si fuese un ===

const dia = 3; // 0: domingo 1: lunes ...

switch (dia) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 0:
        console.log('Martes');
        break;

    default:
        console.log('No es lunes, martes o domingo');
        break;
}

// el break lo empleamos para que se salga cuando encuentra el valor,
// si quisiésemos que nos devolviese varios valores seguidos tenemos que 
// quitar el break