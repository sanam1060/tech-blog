const router = require("express").Router();
const { Post, Staff, Comment, Customer, Liked } = require("../models");

// get dashboard info
router.get("/", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
