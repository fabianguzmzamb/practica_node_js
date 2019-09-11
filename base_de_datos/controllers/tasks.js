const Task = require ('../models').Task;

module.exports = {
 home: function(req,res){
   Task.findAll().then(function(tasks){
       res.render('tasks/index',{tasks: tasks});
       //retorna una promesa
   })
 }
};
//el controlador maneja los modelos.Un controlador por cada modelo