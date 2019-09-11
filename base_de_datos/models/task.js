'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    description: DataTypes.TEXT ,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    timestamps:true
  });

  return Task;
};
//el modelo maneja las acciones.Por cada tabla hay un modelo
//la nomenclatura del modelo es en singular y la del controlador es en plurar