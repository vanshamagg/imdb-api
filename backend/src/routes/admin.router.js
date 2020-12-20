/**
 * Admin /api/admin
 */

const express = require("express");
const controller = require("../controllers/admin.controllers");
const router = express.Router();
const { validateSigninRequest, validateSignupRequest, isRequestValidated } = require("../validation/user");

router.post("/signup", validateSignupRequest, isRequestValidated, controller.signup);

router.post("/signin", validateSigninRequest, isRequestValidated, controller.signin);

module.exports = router;
