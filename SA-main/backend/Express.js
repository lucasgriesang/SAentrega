// Backend: servidor Express.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Habilitar CORS para permitir chamadas do frontend
app.use(cors());

// Middleware para ler JSON no corpo da requisição
app.use(express.json());

// Dados fictícios para exemplo
let clientes = [];

// Rota GET para obter os clientes cadastrados
app.get('/lixoEletronico', (req, res) => {
  res.json(clientes);
});

// Rota POST para cadastrar um novo cliente
app.post('/lixoEletronico', (req, res) => {
  const novoCliente = req.body;
  clientes.push(novoCliente);
  res.status(201).json({ message: 'Cliente cadastrado com sucesso!' });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
