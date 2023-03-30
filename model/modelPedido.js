

const modelPedido = connection.define(
    'tbl_pedido',
    {
        idPedido:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        cliente_idCliente:{
            foreignkey: true,
            type: Sequelize.INTEGER,
            allowNull: false,
        },

        produto_idProduto:{
            foreignkey: true,
            type: Sequelize.INTEGER,
            allowNull: false,
        },

        data_pedido:{
            type: Sequelize.DATE,
            allowNull: false,
        }
    }
);
//modelPedido.sync({force:true});