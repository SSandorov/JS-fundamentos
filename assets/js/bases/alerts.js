alert("Hola Mundo");

prompt("¿Cuál es tú nombre?", "Pepito Grillo");

confirm("¿Estás seguro de borrar esto?");

/*
Estas tres funciones forman parte del objeto window, por lo que no funcionarán fuera del navegador web, esto quiere
decir que no se pueden utilizar tampoco en el backend. Básicamente las excepciones se encuentran con el objeto window,
ya que este opera en el navegador pero no en el servidor o en la terminal
Lo más cercano es el objeto global de node
Hoy en día ya hay librerías que ofrecen mejores soluciones a estas tres funciones
*/