/**
 * Imprime canción
 */
const {Readable} = require('stream');
const readableStream = new Readable();


readableStream.push(`${0/0}`.repeat(10).concat("Batman, batman!"));
readableStream.push(null);

readableStream.pipe(process.stdout);
