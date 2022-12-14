const path = require("path");
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const routes = require("./controllers");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });
const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

//handlebards middleware
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Express MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// cors
app.use(cors({ origin: "*" }));

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static("views/images"));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log("Now listening on: http://localhost:" + PORT)
  );
});
