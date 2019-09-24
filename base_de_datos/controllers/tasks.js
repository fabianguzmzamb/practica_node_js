const Task = require ('../models').Task;

module.exports = {
 /*home: function(req,res){
   Task.findAll().then(function(tasks){
       res.render('tasks/index',{tasks: tasks});
       //el metodo findAll retorna una promesa(todos los datos)
   })
 }*/
 index: function(req,res) {
   Task.findAll().then((tasks)=>{
     res.render('tasks/index',{tasks : tasks});
    })
 },
 show: function(req,res){
  //res.send(req.params.id);
  //busco el registro segun el id q se pase
  Task.findByPk(req.params.id).then(function(task){
    res.render('tasks/show',{task})
  });
 },
 create: function (req,res) {
  console.log(req.user.id);
   Task.create({
     description : req.body.description,
     userId: req.user.id
   }).then(
     result=>
     {res.json(result);
  }).catch(
    err=>
    {console.log(err);
      res.json(err);}
    )
 },
 new: function(req,res){
    res.render('tasks/new');
},
edit: function(req,res) {
  //el edit va a hacer lo mismo que show pero para editarlo desde un form
  Task.findByPk(req.params.id).then(function(task){
    res.render('tasks/edit',{task})
  });
},
destroy: function (req,res) {
  Task.destroy({
    where:{
      id : req.params.id
    }
  }).then(function (contadorElementosEliminados){
    res.redirect('/tasks');
  })
},
update: function(req,res){
  Task.update({description : req.body.description},{
    where : {
       id: req.params.id
    }
  }).then(function(response){
    //res.json(response);
    res.redirect('tasks/'+req.params.id);
  })
}
};
//el controlador maneja los modelos.Un controlador por cada modelo
//el .then maneja la promesa
//maneja como se guardan los registros en la tabla