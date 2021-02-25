// Include module http
const http = require('http')
// Including my first module
const dateTime = require('./dateTimeModule')


// This method is used to create a HTTP server
http.createServer(function(req,res) {
   res.writeHead(200,{'Content-Type': 'text/html'})
   // Printing this to the browser, using myDateTime function
   // created on dateTimeModule
   res.end('Olá mundo!'+dateTime.myDateTime())
}).listen(8080);