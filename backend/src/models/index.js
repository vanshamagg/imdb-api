const Sequelize = require("sequelize");
const load = require("dotenv").config();
require("colors");
if (load.error) throw load.error;
const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.PASSWORD, {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    logging: (...msg) => console.log(msg[0].bold.white),
});

// some preflight
(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection to the Db Established".bold.magenta);
        await sequelize.sync({ alter: true });
        console.log("SYNC COMPLETE".bold.magenta);
    } catch (err) {
        console.log(err.message.bold.red);
    }
})();

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Movie = require("./movie.model")(sequelize, Sequelize);
db.Actor = require("./actor.model")(sequelize, Sequelize);
db.User = require("./user.model")(sequelize, Sequelize);
db.Genre = require("./genre.model")(sequelize, Sequelize);

// RELATIONS
// MANY TO MANY MOVIE-ACTOR
db.Movie.belongsToMany(db.Actor, { through: "actormovie" });
db.Actor.belongsToMany(db.Movie, { through: "actormovie" });

// MANY TO MANY MOVIE-GENRE
db.Movie.belongsToMany(db.Genre, { through: "moviegenre" });
db.Genre.belongsToMany(db.Movie, { through: "moviegenre" });


module.exports = db;
