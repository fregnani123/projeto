
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const routes = require('./routes')

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));

app.set('views', routes)
app.set('view engine','ejs')

app.use(routes); 

app.get('/menu.js',(req,res)=>{
    res.sendFile(path.join(__dirname,'controllers/menu.js'))
});

app.listen(PORT,()=>{
    console.log('Servidor rodando na PORT: '+ PORT)
});