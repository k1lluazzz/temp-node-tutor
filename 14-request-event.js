const http = require("http");

// const server = http.createServer((req, res)=>{
//     console.log('request event');
//     res.end('hello world')
// })

// Using Event Emitter API
const server = http.createServer();
// emits request event
// subcribe on it / listen to it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome");
});
server.listen(5000);
