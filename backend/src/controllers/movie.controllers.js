const { Movies } = require("../models");
/**
 * Create a movie entry in DB
 */
async function create(req, res) {
    try {
        const newMovie = req.body;
        console.log(newMovie);
        const row = await Movies.create({ 
            title: newMovie.title,
            year: newMovie.year,
            duration: newMovie.duration,
            date_of_release: newMovie.date_of_release,
            director: newMovie.director,
            storyline: newMovie.storyline,
            rating: newMovie.rating

         });
        console.log(row.dataValues);
        res.send("New Movie Added ");
    } catch (err) {
        console.log(err.message.bold.red);
        res.status(400).json({ message: err.message });
    }
}

/**
 * Get All Movies in the DB
 */
async function getAll(req, res) {
    try {
        const list = await Movies.findAll({});
        res.send(list);
    } catch (err) {
        console.log(err.message.bold.red);
        res.status(400).json({ message: err.message });
    }
}

/**
 * 
 */

const controllers = {};
controllers.create = create;
controllers.getAll = getAll;
module.exports = controllers;
