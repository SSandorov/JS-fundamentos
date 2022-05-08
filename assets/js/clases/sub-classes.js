// Las sub clases son clases que heredan o extienden las propiedades y los métodos de otra
// clase

// Copiamos la clase del archivo class.js. Las clases no se copian de esta manera, sino que 
// se exportan para emplear en otras secciones del proyecto, pero por ahora lo copiaremos de
// esta manera
class Persona {
    
    static conteo = 0;
    static get getConteo() {
        return Persona.conteo + ' héroes';
    }
    static mensaje() {
        console.log('Hola a todos, soy un método estático');
    }
    
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre, codigo, frase) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona.conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        console.log(`${this.codigo} dice: ${this.frase}`);
        
        this.quienSoy();

    }
}

// Clase que hereda propiedades de la clase Persona
// Para ello empleamos la palabra reservada extends seguida de la clase 'Padre'
class Heroe extends Persona {
    // La clase Heroe heredará las propiedades nombre y código de la clase Persona

    clan = 'sin clan';
    /*
    Sino pusiese un constructor en la clase hija, este emplearía el constructor de la
    clase padre.
    Pero en el momento en el que queremos implementar un constructor en la clase hija debemos
    llamar a la clase padre con la palabra reservada super
    */
    constructor(nombre, codigo, clan) {
        // Llamamos a la clase padre
        super(nombre, codigo);
        // Se debe llamar al constructor padre antes de poder tratar con las propiedades
        // de la clase hija
        this.clan = clan;
    }

    // Los métodos funcionan igual, incluso podemos llamar a los métodos de la clase padre
    // igual que la hija

    quienSoy() {
        console.log(`Soy ${this.codigo}, de los ${this.clan}`);
        // Llamamos al método de la clase padre
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter', 'Spiderman', 'Vengadores');
console.log(spiderman);
spiderman.quienSoy();