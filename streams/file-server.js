/**
 * Archivo que crea y ejecuta servicio web (http).
 * Lee archivo big.txt
 */
const fs = require('fs');
const server = require('http').createServer();

server.on('request',(req, res) => {
    fs.readFile('./big.txt',(err, data) => {
        if (err){
            console.log('Error: ', err);
        }

        res.end(data);

    });
});

server.listen(3000);
