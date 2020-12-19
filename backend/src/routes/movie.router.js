/**
 * MOVIE /api/movie
 */
const express = require('express');
const controller = require('../controllers/movie.controllers');
const router = express.Router()

router.get('/', controller.getAll)

router.post('/', controller.create);


module.exports = router;