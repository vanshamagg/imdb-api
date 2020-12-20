const { Movie, Actor, Genre } = require("../models");
require("colors");
/**
 * Create a movie entry in DB
 */
async function create(req, res) {
    try {
        const newMovie = req.body;
        const movie = await Movie.create({
            title: newMovie.title,
            year: newMovie.year,
            duration: newMovie.duration,
            date_of_release: newMovie.date_of_release,
            director: newMovie.director,
            storyline: newMovie.storyline,
            rating: newMovie.rating,
        });

        // ASSOCIATING ACTORS
        // ACTORS MUST BE IN THE FORM OF AN ARRAY in req.body
        for await (const actor of newMovie.actors) {
            // checking existence
            const checkActor = await Actor.findOne({ where: { name: actor } });
            // if an actor name doesn't exist
            if (!checkActor) {
                // we create an add one
                await movie.createActor({ name: actor });
            } else {
                await movie.addActor(checkActor);
            }
        }

        // ASSOCIATING GENRES
        // GENRES CAN BE MULTIPLE AND IN AN ARRAY in req.body
        for await (const genre of newMovie.genres) {
            console.log(genre);
            // checking existence
            const checkGenre = await Genre.findOne({ where: { name: genre } });
            // if an genre name doesn't exist
            if (!checkGenre) {
                // we create an add one
                await movie.createGenre({ name: genre });
            } else {
                await movie.addGenre(checkGenre);
            }
        }
        res.send("New Movie Added ");
    } catch (err) {
        console.log(err.message.bold.red);
        res.status(400).json({ message: err.message });
    }
}

/**
 * Get All Movie in the DB
 */
async function getAll(req, res) {
    try {
        const list = await Movie.findAll({
            include: [
                {
                    model: Actor,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    },
                },
                {
                    model: Genre,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    },
                },
            ],
        });
        res.send(list);
    } catch (err) {
        console.log(err.message.bold.red);
        res.status(400).json({ message: err.message });
    }
}

async function destroy(req, res) {
    try {
        await Movie.destroy({ where: { id: req.params.id } });
        console.log("Movie Deleted".white.bold);
        res.send({ message: "Movie Deleted" });
    } catch (err) {
        res.send({ message: err.message });
    }
}


/**
 *
 */

const controllers = {};
controllers.create = create;
controllers.getAll = getAll;
controllers.destroy = destroy;
module.exports = controllers;
