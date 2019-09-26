const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride =require('method-override');
const session = require('express-session');
//usando websockets
const socketio = require('socket.io');


const app = express();
//con la ruta ya no hace falta el controlador
//const tasks = require('./controllers/tasks');
const taskrouter = require ('./routes/tasks_routes');
const registrationsRoutes = require ('./routes/registrations_routes');
const sessionsRoutes = require('./routes/sessions_routes');

const findUserMiddleware = require('./middlewares/find_user');
const authUser = require('./middlewares/auth_user');

//el .use es para decir que use el middleware
app.use(bodyParser.urlencoded({extended:true}));

app.use(methodOverride('_method'));

app.set('view engine','pug');

app.use(session({
    secret:['kn3oi21321090j21e231','kondsi1joi98ye897921h12'],
    saveUnitialized:false,
    resave:false
}));
app.use(findUserMiddleware);

app.use(authUser);

app.use(taskrouter);
app.use(registrationsRoutes);
app.use(sessionsRoutes);

app.get('/',function (req,res) {
    res.render('home',{user: req.user});
});
//Si se utilizan modelos esta configuracion no sirve porque instancia muchas veces el objeto    
/*const sequelize = new Sequelize('proyecto backend',null,null,{
    dialect : 'sqlite',
    storage : './proyecto-backend'
});*/

//esta linea no se necesita mas con sequelize
//let db = new sqlite3.Database('proyecto backend');//si le ponemos :memory se crea una anonima

//db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');


/*
YA CON LA RUTA NO HACE FALTA ESTO
app.get('/tasks',tasks.home);

app.post('/pendientes',function(req,res){
//db.run(`INSERT INTO tasks(description) VALUES ('${req.body.description}')`);
//con el ? se borran los parametros
//db.run(`INSERT INTO tasks(description) VALUES (?)`,req.body.description);
res.send('Insercion Finalizada');
});
*/


let server = app.listen(3000);

let io = socketio(server);
let sockets = {};


let usersCount = 0;

io.on('connection',function(socket){

 let userId = socket.request._query.loggeduser;
 if(userId) sockets[userId] = socket;


 //actualiza usuarios en tiempo real   
 usersCount++;
 io.emit('count_updated',{count: usersCount});

 socket.on('new_task',function(data){
  console.log(data);
  if(data.userId){
      let userSocket = sockets[data.userId];
      if(!userSocket) return;
 
      userSocket.emit('new_task',data);
  }
  io.emit('new_task',data);
 })

 socket.on('disconnect',function(){
     Object.keys(sockets).forEach(userId=>{
         let s = sockets[userId];
         if(s.id ==socket.id) sockets[userId] = null;
     })

     usersCount--;
     io.emit('count_updated',{count: usersCount});
 })
});

const client = require('./realtime/client');
process.on('SIGINT',function(){
    console.log('Cerrando servidor');
    //db.close();
    process.exit();
})