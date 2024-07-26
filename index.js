const express = require("express");

const serverPort = 3000;

const app = express(); // Objeto de servidor HTTP

app.get("/", (req, res) => {
  res.send('Sei de nada :P');
});

app.get("/manifest", (req, res) => {
  res.send('Aqui é o manifesto po sai foras dkaskdaskfdaskrf');
});

app.listen(serverPort, () => {
  console.log(`Servidor iniciado na porta ${serverPort}...`);
});
