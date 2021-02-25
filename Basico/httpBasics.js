// require the Built-In http module
const http = require('http')

// Use the function createServer to do this
http.createServer((req,res)=>{
   // Add a header to the file
   // First argument is the status code, 200 means that it's ok
   // The second argument is an object with the response headers
   res.writeHead(200,{'Content-Type': 'text/html'})
   res.write(`${req.url}`) // Writes something to the user
   res.end() // ends the conection
   // This server will be listening on the 8080 port
}).listen(8080)