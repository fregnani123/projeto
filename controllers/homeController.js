const path = require('path');
 
 exports.paginaTeste = (req,res) => {
    res.sendFile(path.join(__dirname,'teste.html'))
 };

 exports.paginaHome = (req,res) => {
   res.render(path.join(__dirname,'../public/home.ejs'))
 }