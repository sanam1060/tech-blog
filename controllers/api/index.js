const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const welcomePage = require("./welcome-page.js");
const dashboardRoutes = require("./dashboard-routes.js");
const loginRoutes = require("./login-routes.js");
const chatRoutes = require("./chat-routes.js");
const singlePostRoutes = require("./single-post-routes.js");
// const editCustomerRoutes = require('./edit-customer-routes.js');

router.use("/welcome-page", welcomePage);
router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/login", loginRoutes);
router.use("/chat", chatRoutes);
router.use("/single-post", singlePostRoutes);
// router.use('/edit-customer', editCustomerRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
