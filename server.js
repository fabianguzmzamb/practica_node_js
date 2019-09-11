// la importacion de http
const http = require ('http');

function responderPeticion(request, response){
    response.end('Hola Mundo');
}

let server = http.createServer(responderPeticion);

//el puerto 
server.listen(3000);