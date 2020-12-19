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
        await sequelize.sync();
        console.log("SYNC COMPLETE".bold.magenta);
    } catch (err) {
        console.log(err.message.bold.red);
    }
})();

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Movies = require("./movie.model")(sequelize, Sequelize);

module.exports = db;
