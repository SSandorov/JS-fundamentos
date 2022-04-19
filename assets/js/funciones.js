// Una función estándar tiene la siguiente estructura
// Así la definimos
function saludar(nombre) {
    console.log('Hola '+ nombre);
}
// Así la llamamos
saludar('Stefan');
/*
El problema con la forma estándar es que el nombre de la función, en este caso
'saludar' va a poder ser redeclarada y afectar a nuestro programa
var | let saludar = x nos rompería la web
*/

// Otra forma es la llamada función anónima
const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}
saludar2('Stefan');
/*
esta forma nos permite evitar el problema de la redeclaración de la variable

EStas dos formas de declarar las funciones tiene implicito un método denominado
arguments. Este método hace que cuando añadimos mas llamadas de argumentos que 
no tenemos escritos, no nos salta ningún error
saludar('Stefan', 27, 'Holanda')
se ejecutaría sin problemas
*/

// La forma actual de declarar una función es la denominada función lambda
// Así se declara

const saludarFlecha = (nombre) => {
    console.log('Hola ' + nombre);
}

saludarFlecha('Stefan');

/*
Se debería utilizar esta forma simpre, ya que es más eficiente y nos evita
problemas con un objeto especial llamado this
*/