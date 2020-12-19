/**
 * API /api
 */

const express = require('express');

const router = express.Router();

router.use(express.json());
router.use('/movie', require('./movie.router'));

module.exports = router;