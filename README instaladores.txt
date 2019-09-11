npm install sequelize

npm install express

sqlite3

npm install bodyparser

npm install -g sequelize-cli

Comando de Sequelize(CLI = Command Line Interpretion)

sequelize init (crea las carpetas y configuracion correspondiente)

sequlize model:generate --nmae Task --attributes description:text (estructura para manejar el flujo de datos)

sequlize db:migrate (migracion)

sequelize seed:generate --name <nombre> (genera el seeder)

sequelize db:seed:all (inserta los registros del seeder)

sequelize db:seed:undo (revierte la insercion del seeder)

sequlize db:undo migrate(revisar si esto es asi ... debe revertir la migracion)

npm install pug

