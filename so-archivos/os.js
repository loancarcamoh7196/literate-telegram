const os = require('os');

/**
 * Info de CPU
 */
console.log("CPU info: ", os.cpus());

/**
 * IP 
 */
console.log('IP address :', os.networkInterfaces()); 
// -- IP ~ Ethernet
console.log('IP address :', os.networkInterfaces().lo.map(i => i.address));
// -- IP - WiFi
console.log('IP address :', os.networkInterfaces().wlp5s0.map(i => i.address));

/**
 * Cantidad de RAM, en bytes
 */
console.log("Free Memory: ", os.freemem());
console.log("Free Memory: ", (os.freemem() / 1073741824), " GB");

/**
 * SO - info 
 */
console.log("Type OS :", os.type());
console.log("SO version: ", os.release());

/**
 * Usuario
 */
console.log("Usr info: ", os. userInfo());
