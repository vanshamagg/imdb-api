module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define("movie", {
        title: { type: Sequelize.DataTypes.STRING, allowNull: false },
        year: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, allowNull: false },
        duration: { type: Sequelize.DataTypes.STRING, allowNull: false },
        date_of_release: { type: Sequelize.DataTypes.STRING, allowNull: false },
        rating: { type: Sequelize.DataTypes.STRING(10), allowNull: false },
        director: { type: Sequelize.DataTypes.STRING, allowNull: false },
        storyline: { type: Sequelize.DataTypes.TEXT, allowNull: false },
    });
    return Movie;
};
