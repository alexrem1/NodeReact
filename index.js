// import express from "express"
// node js does not have support for ES 2015 modules atm
// On the front end, we have easier access to ES 2015 modules

// so on the server side application we will use common js syntax
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("Access Token:", accessToken);
      console.log("refresh Token:", refreshToken);
      console.log("profile:", profile);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

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
