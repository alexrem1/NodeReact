// import express from "express"
// node js does not have support for ES 2015 modules atm
// On the front end, we have easier access to ES 2015 modules

// so on the server side application we will use common js syntax
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/user");
require("./services/passport");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// app: express app to register this route handler with
// get: watch for incoming requests with this method
// "/": watch for requests trying to access "/"
// req: object representing the incoming request
// res: object representing the outgoing response
// res.send({hi: "there"}): immediately send some JSON back to who ever made the request

// Other Methods
// post: send info
// put: update all the properties of something
// delete: delete something
// patch: update one or two properties of something
