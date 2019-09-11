const express = require('express');

const app = express();
//el motor de vista
app.set('view engine','ejs');
//a revisar porq no toma el css
app.use('/assets',express.static('assets',
//el cache revisa el etag del contenido del archivo para saber si se actualizo o si es la misma peticion
//si lo ponemos en false le decimos q ignore el etag
{etag:false,
//maxAge es para vencer el cache    
maxAge:'5h'}
)); //middleware

app.get('/',function(req,res){
//el render ya hace el trabajo de decirle donde buscar el archivo gracias al motor de vista    
res.render('index');

 //le estoy diciendo q busque el archivo index.html en la carpeta /html   
/* res.sendFile('index.html',{
     root:__dirname
 });*/

 //esto me tira el path
 //res.send(__dirname);
});



app.listen(3000);