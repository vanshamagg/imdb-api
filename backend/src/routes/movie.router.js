/**
 * MOVIE /api/movie
 */
const express = require('express');
const controller = require('../controllers/movie.controllers');
const router = express.Router()
const {validateMovie,isRequestValidated}=require('../validation/movies')
const {requireSignin,adminMiddleware}=require('../middleware/common')

router.get('/', controller.getAll)

router.post('/',requireSignin,adminMiddleware, validateMovie,isRequestValidated, controller.create);


module.exports = router;