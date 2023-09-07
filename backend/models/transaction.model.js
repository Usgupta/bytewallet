module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("transactions", {
        request_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        from_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        to_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        amount: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        status: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        timestamp: {
            type: Sequelize.DATE,
            allowNull: false
        }
    },
        {freezeTableName: true}
    )
};