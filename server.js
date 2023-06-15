const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes')

app.use(routes.app)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta:${PORT}`);
});

