 port = 3000
//create instance of http by required the http module
var http = require('http');
//Create the server Instance using http.createServer()
let server = http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-type":"text/html;charset=utf-8",
    })
     res.write('<h1>Hello world</h1>');
     res.end();
});
//let the server listen to the port
server.listen(3000,function(){
    console.log('Server Started on PORT =',3000);
});