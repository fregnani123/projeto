const path = require('path');
const express = require('express');


exports.paginaInicial = (req,res) => {
    res.sendFile(res.sendFile(path.join(__dirname,'public','index.html')))
}