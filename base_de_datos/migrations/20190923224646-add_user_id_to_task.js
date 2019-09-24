'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    //queryInterface.addColumn('tasks','userId',Sequelize.INTEGER)
    //agregamos una columna en la tabla tasks que especifica el userId y creamos una clave foranea entre las 2
   return queryInterface.addColumn('tasks','userId',{
      type:Sequelize.INTEGER,
      //clave foranea
      references: {
        model:{tablename: 'Users'},
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
     //dropeamos la columna
      return queryInterface.removeColumn('tasks','userId');
    
  }
};
