
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000
app.use(express.static(path.join(__dirname,'public')));

app.get('/menu.js',(req,res)=>{
    res.sendFile(path.join(__dirname,'controllers/menu.js'))
});

app.get('/teste',(req,res)=>{
    res.sendFile(path.join(__dirname,'controllers/teste.html'))
})

app.listen(PORT,()=>{
    console.log('Servidor rodando na PORT: '+ PORT)
});