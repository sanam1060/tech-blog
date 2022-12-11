const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, Staff, Comment, Customer, Liked } = require("../models");

// get all posts
router.get("/", (req, res) => {
  Post.findAll({
    attributes: [
      "id",
      "post_text",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM liked WHERE post.id = liked.post_id)"
        ),
        "liked_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "staff_id", "created_at"],
        include: {
          model: Staff,
          attributes: ["first_name", "last_name"],
        },
      },
      {
        model: Staff,
        attributes: ["first_name", "last_name"],
      },
    ],
  })

    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("chat", {
        posts,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
