
const express = require('express');
const path = require('path');

exports.paginaInicial = {
app : express().app.use(express.static(path.join(__dirname,'public')))

};

