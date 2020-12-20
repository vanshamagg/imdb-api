/**
 * MOVIE /api/movie
 */

 /**
  *         FORMAT FOR POSTING A MOVIE
*         {
            "title": "Iron Man 3",
            "year":2013,
            "duration": "2h 10min",
            "date_of_release": "2013-05-03",
            "rating": "PG-13",
            "director": "Jon Favareu",
            "storyline": "Enter some really long text here",
            "actors": [
                "Robert Downey Jr.",
                "Terrence Howard", 
                "Jeff Bridges",
                "Gwyneth Paltrow",
                "Leslie Bibb",
                "Shaun Toub",
                "Faran Tahir",
                "Faran Tahir",
                "Bill Smitrovich"
            ],
    	"genres": [
                "Action",
                "Adventure",
                "Sci-Fi"
            ]
    }
  */
const express = require("express");
const controller = require("../controllers/movie.controllers");
const router = express.Router();
const { validateMovie, isRequestValidated } = require("../validation/movies");
const { requireSignin, adminMiddleware } = require("../middleware/common");

const middlewareStack = [
    requireSignin,
    adminMiddleware,
    validateMovie,
    isRequestValidated
]

router.get("/", controller.getAll);

router.post("/", middlewareStack, controller.create);

router.delete('/:id', requireSignin, adminMiddleware,  controller.destroy);

module.exports = router;
