const modelProduto = connection.define(
    'tbl_produto',
    {
        idProduto:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        nome_produto:{
            type: Sequelize.STRING(100),
            allowNull: false,
        },

        qtd_produto:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },

        vl_produto:{
            type: Sequelize.DOUBLE,
            allowNull: false,
        }
    }
);


//modelProduto.sync({force:true});