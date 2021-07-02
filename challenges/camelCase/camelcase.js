/**
 * Challenge
 * Crear una función noe que reciba un cadena de texto y la convierta en camel 
 * case usando streams
 */

const { Transform } = require("stream");

/**
 * Capitaliza palabras
 * @param {string} cadena texto a modificar
 * @returns texto Capitalizado
 */
const capitalizar = (cadena) => {
    return cadena.charAt(0).toUpperCase() + cadena.toLowerCase().slice(1)
}

/**
 * Función que quita espacios, guiones y letras mayusculas entre medio, dejando toda la cadena en formato lowerCase.
 * @param {string} cadena Texto a modificar
 * @returns texto con formato lowerCase
 */
const camelCase = (cadena) => {
    let string = cadena.toLowerCase()
                .replace(/[^A-Za-z0-9]/g, ' ')
                .split(' ')
                .reduce((res, palabra) => res + capitalizar(palabra.toLowerCase()))
    return string.charAt(0).toLowerCase() + string.slice(1);
}

 const cadenaCamelCase = new Transform({
     transform(chunk, enconding, callback){
         this.push(camelCase(chunk.toString()));
         callback();
     }
 });

 process.stdin.pipe(cadenaCamelCase).pipe(process.stdout);