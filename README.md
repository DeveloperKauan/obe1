### 📄 `README.md`

# 🧠 Olimpíada Brasileira de Estatística - Sistema de Cadastro de Questões

Este projeto é uma aplicação fullstack simplificada para cadastrar e gerenciar questões da OBE. A aplicação é baseada em **Node.js (Express)** no backend, **HTML/CSS/JS vanilla** no frontend e **SQL Server** como banco de dados.

---

## 🧱 Estrutura do Projeto

```
obe-project/
├── backend/
│   ├── controllers/
│   │   └── questionController.js
│   ├── routes/
│   │   └── questionRoutes.js
│   ├── db/
│   │   ├── config.js
│   │   └── procedure.sql
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .gitignore
├── README.md
└── package.json
```

---

## 🚀 Instruções para rodar localmente

### 1. Pré-requisitos

- Node.js e npm instalados
- SQL Server instalado e rodando
- Git (opcional para clonar o repositório)

---

### 2. Clonar o projeto

```bash
git clone https://github.com/seu-usuario/obe-project.git
cd obe-project
```

---

### 3. Instalar as dependências

```bash
npm install
```

---

### 4. Configurar o banco de dados

1. **Crie o banco de dados** no SQL Server (pode ser pelo SSMS ou Azure Data Studio):

```sql
CREATE DATABASE obe_database;
```

2. **Crie a tabela `Questoes`** dentro do banco:

```sql
USE obe_database;

CREATE TABLE Questoes (
    id INT PRIMARY KEY IDENTITY(1,1),
    enunciado NVARCHAR(MAX),
    alternativa_a NVARCHAR(255),
    alternativa_b NVARCHAR(255),
    alternativa_c NVARCHAR(255),
    alternativa_d NVARCHAR(255),
    alternativa_e NVARCHAR(255),
    gabarito CHAR(1),
    resolucao NVARCHAR(MAX),
    elaborador NVARCHAR(255),
    nivel_dificuldade NVARCHAR(50),
    conhecimentos NVARCHAR(255),
    referencia_bibliografica NVARCHAR(255),
    tema NVARCHAR(255),
    status NVARCHAR(50),
    validada BIT,
    nivel_dificuldade_apos_validacao NVARCHAR(50),
    validador NVARCHAR(255)
);
```

3. **Crie a procedure** executando o conteúdo do arquivo `backend/db/procedure.sql`.

---

### 5. Configurar a conexão com o banco de dados

Edite o arquivo `backend/db/config.js` e coloque suas credenciais:

```js
module.exports = {
  user: 'seu_usuario',
  password: 'sua_senha',
  server: 'localhost',
  database: 'obe_database',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};
```

---

### 6. Iniciar o servidor backend

```bash
node backend/server.js
```

O servidor será iniciado em `http://localhost:3000`

---

### 7. Abrir o frontend

Abra o arquivo `frontend/index.html` no navegador. Ou, se quiser servir via live server (VSCode), basta abrir a pasta `frontend/` e clicar em **Go Live**.

---

## 🌐 Acesso via navegador

Após iniciar o backend e abrir o `index.html`, o sistema estará pronto para uso. As questões cadastradas serão enviadas diretamente para o banco SQL Server via API.

---

## ☁️ Como subir para o GitHub

1. Crie um repositório no GitHub
2. Inicialize o git localmente:

```bash
git init
git add .
git commit -m "Versão inicial do sistema OBE"
git remote add origin https://github.com/seu-usuario/obe-project.git
git push -u origin main
```

---

## 📌 Observações

- Esse projeto ainda **não inclui autenticação** ou controle de usuários. Para uma versão mais robusta (multi-nível de acesso), recomenda-se evoluir para um frontend com React e banco de dados com Prisma ORM.
- Para produção, é necessário configurar variáveis de ambiente e deploy com um servidor seguro.

---

## 📚 Créditos

Desenvolvido por Kauan Yuri para a **Olimpíada Brasileira de Estatística - 2025**  
Design inspirado por produtos como Asana, Notion e interfaces educacionais modernas.
