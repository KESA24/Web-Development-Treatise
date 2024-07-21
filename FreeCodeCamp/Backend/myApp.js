var express = require('express');
var app = express();


console.log("Hello world");

// app.METHOD(PATH, HANDLER). METHOD is an http method in lowercase. PATH is a relative path on the server (it can be a string, or even a regular expression). HANDLER is a function that Express calls when the route is matched. Handlers take the form function(req, res) {...}, where req is the request object, and res is the response object.

// app.get('/', function(req, res) {
//     res.send('Response String');
//   })

app.use("/public", express.static(__dirname + "/public"));


  app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  })

  app.get('/json',(req, res)=> {
    res.json({"message": "Hello json"})
  })

  app.get('/json',(req, res)=> {
     if (process.env.MESSAGE_STYLE === "uppercase") {
        response = "Hello World".toUpperCase();
      } else {
        response = "Hello World";
      }
  })
  
 
































 module.exports = app;
