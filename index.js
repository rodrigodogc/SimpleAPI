const express = require("express");

const serverPort = 3000;

const app = express(); // Objeto de servidor HTTP

app.get("/", (req, res) => {
  res.send('Eae man');
  console.log('Requisição Recebida de: ' + req.originalUrl);
});

app.listen(serverPort, () => {
  console.log(`Servidor iniciado na porta ${serverPort}...`);
});
