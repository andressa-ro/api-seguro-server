'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [
      {
        nome: 'user1',
        email: 'user1@gmail.com',
        password: '123',
        telefone: '(11)911112222',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'user2',
        email: 'user2@gmail.com',
        password: '123',
        telefone: '(11)911112222',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'user3',
        email: 'user3@gmail.com',
        password: '123',
        telefone: '(11)911112222',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
