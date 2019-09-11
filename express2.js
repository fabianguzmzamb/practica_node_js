const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//esta linea sirve para poder usar el body de la peticion 
app.use(bodyParser.urlencoded({extended:true}) );

app.get('/saludo',function(req,res){
 //res.send('Hola Mundo desde Express');
 res.send(`Hola ${req.query.name}`)
});

app.post('/',function(req,res){
    res.send(`Hola ${req.body.name}`)
});
app.listen(3000);