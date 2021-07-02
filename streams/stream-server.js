/**
 * Archivo que ejcuta servidor http.
 * Lee archio big.txt, pero usando stream
 */
const fs = require('fs');
const server = require('http').createServer();

server.on('request',(req, res) => {
    const src = fs.createReadStream('./big.txt');
    src.pipe(res);
});

server.listen(3001);
console.log('Servidor escuchando en puerto 3001 ...');