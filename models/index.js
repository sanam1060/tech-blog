// import all models
const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");

// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// MAYBE ????????
// User.belongsToMany(Post, {
//   // through: Liked,
//   // as: 'liked_posts',
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// MAYBE ????????
// Post.belongsToMany(User, {
//   // through: Liked,
//   // as: 'liked_posts',
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// Liked.belongsTo(User, {
//   foreignKey: 'staff_id',
//   onDelete: 'SET NULL'
// });

// Liked.belongsTo(Post, {
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// User.hasMany(Liked, {
//   foreignKey: 'user_id'
// });

// Post.hasMany(Liked, {
//   foreignKey: 'post_id'
// });

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment };
