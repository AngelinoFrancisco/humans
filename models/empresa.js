const Sequelize = require("sequelize")

const User = Sequelize.define('user', {
    nome: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRINGk
    }
  });
  

  Sequelize.sync()
  .then(() => {
    console.log('Tabela Empresa com sucesso!');
  });
