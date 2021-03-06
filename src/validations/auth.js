const { check } = require("express-validator");

// @POST     | Public     | /api/auth/register
const registerValidation = [
  check("name", "Name is required").not().isEmpty(),
  check("name", "Name maximum length is 50 characters").isLength({
    max: 50,
  }),
  check("name", "Name only can contains alphabet").isAlpha("en-US", {
    ignore: " ",
  }),
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password require 8 or more characters").isLength({
    min: 8,
  }),
  check("password", "Password can't above 100 characters").isLength({
    max: 100,
  }),
  check(
    "password",
    "Password must include one lowercase character, one uppercase character, a number, and a special character"
  ).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
];

// @POST     | Public     | /api/auth/login
const loginValidation = [
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password is required").not().isEmpty(),
];

// @POST     | Public     | /api/auth/forgot-password
const forgotPasswordValidation = [
  check("email", "Please include a valid email").isEmail(),
];

// @POST     | Public     | /api/auth/forgot-password/reset
const resetPasswordValidation = [
  check("password", "Password require 8 or more characters").isLength({
    min: 8,
  }),
  check("password", "Password can't above 100 characters").isLength({
    max: 100,
  }),
  check(
    "password",
    "Password must include one lowercase character, one uppercase character, a number, and a special character"
  ).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
];

module.exports = { registerValidation, loginValidation, forgotPasswordValidation, resetPasswordValidation };
