npm install sequelize

npm install express

sqlite3

npm install bodyparser

npm install -g sequelize-cli

Comando de Sequelize(CLI = Command Line Interpretion)

sequelize init (crea las carpetas y configuracion correspondiente)

sequelize model:generate --nmae Task --attributes description:text (estructura para manejar el flujo de datos)

sequelize db:migrate (migracion)

sequelize seed:generate --name <nombre> (genera el seeder)

sequelize db:seed:all (inserta los registros del seeder)

sequelize db:seed:undo (revierte la ultima insercion del seeder)

sequlize db:migrate:undo (revierte la ultima migracion)

sequelize db:migrate:undo:all (revierte todas las migraciones)

npm install pug

npm install method-override

npm install bcrypt

npm install express-session