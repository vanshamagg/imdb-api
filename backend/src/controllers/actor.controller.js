const { Actor } = require("../models");

/**
 * retrieves all the actors
 */
async function getAll(req, res) {
    try {
        const list = await Actor.findAll({});
        res.json(list);
    } catch (err) {
        res.send({ message: err.message });
    }
}

/**
 * add multiple actors to the db
 */
async function createMultiple(req, res) {
    try {
        if(!req.body.actors[0])
            throw new Error("Empty List, Please Supply Some Names.")
        for await (const actor of req.body.actors) {

            // check if the actor's name already exists
            const temp = await Actor.findOne({ where: { name: actor } });

            // if exists do nothing
            if (temp) continue;
            else {
                // create a new entry
                await Actor.create({ name: actor });
                console.log(actor + " Added");
            }
        }
        res.send({ message: "Added Successfully" });
    } catch (err) {
        res.send({ message: err.message });
    }
}
const controllers = {};
controllers.getAll = getAll;
controllers.createMultiple = createMultiple;

module.exports = controllers;
