// Las propiedades privadas nos protegen el código para que no pueda ser manipulado de
// forma accidental o intencionada

class Rectangulo {
    /*
    Para ello ponemos delante del nombre de la propiedad el caracter #
    Hasta febrero de 2022 esta funcionalidad no estaba aceptada, ahora ya se puede emplear
    */
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
        this.#areaDoble();
    }

    /*
    Igual que las propiedades, a partir de febrero de 2022 se pueden crear métodos
    privados con el uso del caracter #
    */
    #areaDoble() {
        console.log(this.#area*2);
    }

}
/*
El problema surge porque puedo cambiar perfectamente el valor del área
*/
const rectangulo = new Rectangulo(10, 15);
/*
El problema surge porque puedo cambiar perfectamente el valor del área
rectangulo.area = 100;

Por ello, con el uso del caracter # ya se crea la propiedad privada y esta no puede ser
modificada
rectangulo.#area = 100; nos devuelve error
*/

console.log(rectangulo);