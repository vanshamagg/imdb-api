module.exports = (sequelize, Sequelize) => {
    const Genre = sequelize.define(
        "genre",
        {
            name: { type: Sequelize.DataTypes.STRING(20), allowNull: false },
        },
        {
            createdAt: false,
            updatedAt: false,
        }
    );
    return Genre;
};
