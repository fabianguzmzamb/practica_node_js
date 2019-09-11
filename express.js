const express = require('express');

const app = express();

app.get('/saludo',function(req,res){
 //res.send('Hola Mundo desde Express');
 res.send(`Hola ${req.query.name}`)
});

app.listen(3000);