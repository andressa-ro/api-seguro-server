const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database/database");

class Cotacao extends Model{};

Cotacao.init({
    bem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor_do_bem: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    valor_total_seguro: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    quantidade_parcelas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valor_parcela_seguro: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, { 
    sequelize,
    modelName: "Cotacao",
    tableName: 'Cotacoes',
    freezeTableName: false,
    timestamps: true
});

module.exports = Cotacao;