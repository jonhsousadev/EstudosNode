const http = require('http')
// including the file system module
const fs = require('fs')

// Append contet to a file or create this if not exists
// To replace the content you can use writeFile
// To open, the open function
fs.appendFile('./fileSystemAppend.txt','Text Added',(err) => {
   if (err) throw err
   console.log('ok')
})

http.createServer(function(req,res) {
   fs.readFile('./firstServer.js',function(err,data) {
      res.writeHead(200,{'Content-Type':'text/html'})
      res.write(data)
      res.end()
   })
}).listen(8080)