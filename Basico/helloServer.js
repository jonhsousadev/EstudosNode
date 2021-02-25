const http = require('http')
const hello = require('./helloMe')

//
http.createServer((req,res) => {
   res.writeHead(200,{'Content-Type': 'text/html'})
   res.end(hello.Hello('Jonh'))
}).listen(8080)