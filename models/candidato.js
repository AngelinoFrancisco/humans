const Sequelize = require("sequelize")

const User = Sequelize.define('user', {
    nome: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    nascimento: {
      type: Sequelize.STRING
    }

  });
  

  Sequelize.sync()
  .then(() => {
    console.log('Tabela Candidato com sucesso!');
  });