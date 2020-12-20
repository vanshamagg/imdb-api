/**
 * API /api
 */

const express = require('express');

const router = express.Router();

router.use(express.json());
router.use('/movie', require('./movie.router'));
router.use('/actor', require('./actor.router'));
router.use('/user', require('./user.router'));
router.use('/admin', require('./admin.router'));


module.exports = router;