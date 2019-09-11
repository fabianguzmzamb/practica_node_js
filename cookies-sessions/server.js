const express = require('express');
const cookiesSession = require('cookie-session');

const app = express();

app.use(cookiesSession({
 name:'session',
 keys: ['asqwefe342eds32324jo','3290jdwo0er90ujbjwsa']
}));

app.get('/',function(req,res){
    req.session.visits =req.session.visits || 0 ;

    req.session.visits =req.session.visits + 1 ;
    
    res.send(`${req.session.visits} visita(s)`)
})
app.listen(3000);
