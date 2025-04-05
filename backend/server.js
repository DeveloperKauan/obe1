// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const questionRoutes = require('./routes/questionRoutes');
const config = require('./db/config');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Roteamento
app.use('/api/questions', questionRoutes);

// Conectar ao banco de dados e iniciar o servidor
sql.connect(config)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Erro na conexão com o banco de dados:', err);
    });
