// index.js
const { Client } = require('pg');
const senha = require('./senha');


// Detalhes da conexão
const client = new Client({
  user: 'postgres',          // Substitua pelo seu usuário do PostgreSQL
  host: 'localhost',            // Endereço do servidor PostgreSQL
  database: 'postgres', // Nome do banco de dados
  password: String(senha),        // Sua senha
  port: 5432,                   // Porta padrão do PostgreSQL
});

// Conecta ao banco de dados



  module.exports = client;
