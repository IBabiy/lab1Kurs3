const express = require('express');
const app = express();


app.listen(80);

app.get('*/', function(req, res) {
    console.log("/post*")
    res.send(req.url + "Hello! It works!"  + req.headers)
})