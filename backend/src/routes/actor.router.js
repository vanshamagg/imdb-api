/**     ACTOR /api/actor
 *  
 *              FORMAT FOR POSTING A NEW ACTOR
 *      {
 *            actor: ["Robert Downey Jr", "Emma Watson", "Will Smith"]
 *      }
 */

const express = require("express");
const router = express.Router();
const controller = require("../controllers/actor.controller");
const { requireSignin, adminMiddleware } = require("../middleware/common");
const controllers = require("../controllers/actor.controller");

router.get("/", controller.getAll);

router.post("/", requireSignin, adminMiddleware, controller.createMultiple);

module.exports = router;
