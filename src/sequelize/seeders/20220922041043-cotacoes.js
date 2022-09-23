'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cotacoes', [
      {
        bem: 'Carro',
        valor_do_bem: 40000,
        valor_total_seguro: 3200,
        quantidade_parcelas: 10,
        valor_parcela_seguro: 320,
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bem: 'Carro',
        valor_do_bem: 50000,
        valor_total_seguro: 3000.00,
        quantidade_parcelas: 2,
        valor_parcela_seguro: 1500.00,
        usuario_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bem: 'Casa',
        valor_do_bem: 600000,
        valor_total_seguro: 48000.00,
        quantidade_parcelas: 12,
        valor_parcela_seguro: 4000.00,
        usuario_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cotacoes', null, {});
  }
};
