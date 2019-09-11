//'use strict';

module.exports = {
  //up es para las instrucciones q se van insertar
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('tasks', [
        {id:1,description :'Grabar el curso de Backend',createdAt: new Date(),updatedAt: new Date()},
        {id:2,description :'Editar los videos del curso de Backend',createdAt: new Date(),updatedAt: new Date()},
        {id:3,description :'Subir los videos',createdAt: new Date(),updatedAt: new Date()}
        /*{id:1,description :'Grabar el curso de Backend'},
        {id:2,description :'Editar los videos del curso de Backend'},
        {id:3,description :'Subir los videos'}*/
      ], {});
  },
//down es para revertir la insercion 
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('tasks', null, {});
  }
};
