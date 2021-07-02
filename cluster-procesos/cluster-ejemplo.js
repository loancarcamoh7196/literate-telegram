const cluster = require('cluster'); // <--- Trae modulo cluster
const http = require('http'); // <--- Trae modulo par creación de server
/**
 * Ver la cantidad de CPU de la maquina
 */
const numCPUs = require('os').cpus().length;


if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    /**
     * Crear hijos, como tantas CPu
     */
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    /**
     * En este seccion del codigo, abrimos un evento con ‘.on’ y nos asesoramos de 
     * cuanto el cluster muera con ‘exit’, el siguiente parametro es una funcion y recibe:
     * worker: Este es el cluster o la instancia del proceso.
     * code: Este nos dara el codigo de error si logra pasar algo.
     * signal: Este nos mostrara quien mato a nuestro cluster o instancia del proceso.
     */
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else { //  si se da el caso de que el cluster no se el maestro o el principal hilo, este instanciara nuestro servidor en el puerto 8000 (Bueno, ya esto ustedes lo sabian xd), con el siguiente codigo:
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('hello world\n');
    }).listen(8000);

    //Por ultimo, imprimimos en consola los workers que hemos instanciados anteriormente, accediendo a su codigo de proceso o pid con el siguiente codigo:
    console.log(`Worker ${process.pid} started`);
}

/**
 * En resumen, un cluster ayudara al hilo principal a manejar la carga o procesos utilizando los Cores del CPU.
Piensen en esto, el Hilo principal es la empresa y los hilos hijos (procesos hijos) son los empleados. (Espero que me entiendan).

Espero que les haya ayudado mi explicacion, si me he equivocado en algo por favor aclararlo con un comentario para el estudiante que lo lea pueda tenerlo en cuenta.
 */