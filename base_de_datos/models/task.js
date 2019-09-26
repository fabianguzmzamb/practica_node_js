'use strict';

const socket = require('../realtime/client');

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    description: DataTypes.TEXT 
  }, {});
 Task.asociate = function (models) {
   //esto quiere decir que una tarea le pertenece a un usuario
   Task.belongsTo(models.User,{
     as:'user',
     foreignKey: 'userId'
   });
 }
  Task.afterCreate(function(task,options){
    socket.emit('new_task',task);
  })
  return Task;
};
//el modelo maneja las acciones.Por cada tabla hay un modelo
//la nomenclatura del modelo es en singular y la del controlador es en plurar