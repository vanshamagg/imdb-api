const { check, validationResult } = require("express-validator");

exports.validateMovie = [
  check("title").notEmpty().withMessage("title is required"),
  check("year").notEmpty().withMessage("year is required"),
  check("duration").notEmpty().withMessage("duration is required"),
  check("date_of_release").notEmpty().withMessage("date of release is required"),
  check("director").notEmpty().withMessage("director is required"),
  check("storyline").notEmpty().withMessage("storyline is required"),
  check("rating").notEmpty().withMessage("rating is required"),
  
];



exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
