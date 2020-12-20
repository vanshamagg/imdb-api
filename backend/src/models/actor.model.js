module.exports = (sequelize, Sequelize) => {
    const Actor = sequelize.define(
        "actor",
        {
            name: { type: Sequelize.DataTypes.STRING, allowNull: false },
        },
        {
            createdAt: false,
            updatedAt: false,
        }
    );
    return Actor;
};
