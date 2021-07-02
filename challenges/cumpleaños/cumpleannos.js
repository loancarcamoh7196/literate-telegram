/**
 * Challenge
 * Crear un servidor que reciba tu fecha de cumpleaños 
 * y devuelva el día de la semana que nacieron
 */
const http = require("http");
const { DateTime } = require('luxon');
const server = http.createServer();

/**
 * Método que recibe el numero del día de la semana y retorna nombre
 * @param {int} day numero del día de la semana
 * @returns string del nombre del día
 */
function diaSemana ( day )  {
  switch(day){
    case 1:
      return 'Lunes';
      break;
    case 2:
      return 'Martes';
      break;
    case 3:
      return 'Miercoles';
      break;
    case 4:
      return 'Jueves';
      break;
    case 5:
      return 'Viernes';
      break;
    case 6: 
      return 'Sábado';
      break;
    case 7:
      return 'Domingo';
      break;
    default:
      return 'Error: día fuera de rango'
    break;
  }

};

server.on("request", (request, response) => {
  if (request.method === "POST" && request.url == "/cumple") {
    let body = [];

    request
      .on("data", chunk => {
        body.push(chunk);
      })
      .on("end", () => {
        response.writeHead(200, { "Content-Type": "text/plain" });
        
        body = Buffer.concat(body).toString();// Convierte buffer del API en String
        let birthdate = DateTime.fromFormat(body, 'dd-MM-yyyy');// Formato correcto para fecha del ejemplo 15-12-2021

        let now =  DateTime.now().toISODate();// Se formate fecha a fecha entendible
        let timePast = birthdate.weekday; // Extrae el numero del dia la semana

        body = body.concat("\n Fecha hoy: ", now); //Fecha Actual 
        body = body.concat("\n Fecha cumpleaños: ", birthdate.toISODate()); 
        body = body.concat('\n Día de la semana que has nacido: ', timePast);
        body = body.concat(' - ', diaSemana(timePast));
        
        // Retorna respuesta
        response.end(body);
      });
  } else { // Sino cumple con condicionea response con error 404 
    response.statusCode = 404;
    response.end();
  }
});

server.listen(8002); // Puerto por dond escucha APi
console.log("Servidor en la url http://localhost:8002");

