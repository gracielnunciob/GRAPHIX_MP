

//const {Ticket} = require("./model/ticket.js")
//const Ticket = {
//    Ticket
//}

/**  SET UP **/

//const app= express()
//
////makes <forms> readable as request.body//request.query
//const urlencoder = bodyparser.urlencoded({
//    extended: false
//})
//
//app.use(express.static(__dirname + "/public"))
//
//var engines = require('consolidate');
//
//app.engine('html', engines.mustache);
//app.set('view engine', 'html');


let http = require('http');
let fs = require('fs');
 
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
};
 
http.createServer(handleRequest).listen(3000);
console.log("listening at 3000");