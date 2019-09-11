const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

const tasks = require('./controllers/tasks');

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','pug');
//Si se utilizan modelos esta configuracion no sirve porque instancia muchas veces el objeto    
/*const sequelize = new Sequelize('proyecto backend',null,null,{
    dialect : 'sqlite',
    storage : './proyecto-backend'
});*/

//esta linea no se necesita mas con sequelize
//let db = new sqlite3.Database('proyecto backend');//si le ponemos :memory se crea una anonima

//db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');

app.get('/tasks',tasks.home);

app.post('/pendientes',function(req,res){
//db.run(`INSERT INTO tasks(description) VALUES ('${req.body.description}')`);
//con el ? se borran los parametros
//db.run(`INSERT INTO tasks(description) VALUES (?)`,req.body.description);
res.send('Insercion Finalizada');
});



app.listen(3000);

process.on('SIGINT',function(){
    console.log('Cerrando servidor');
    //db.close();
    process.exit();
})