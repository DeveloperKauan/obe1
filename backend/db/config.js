// backend/db/config.js

const sql = require('mssql');

const config = {
  user: 'SEU_USUARIO_SQL',
  password: 'SUA_SENHA_SQL',
  server: 'localhost', // ou o IP do servidor
  database: 'OBE',
  options: {
    encrypt: false, // true se estiver usando Azure
    trustServerCertificate: true
  }
};

module.exports = config;
