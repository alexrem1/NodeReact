// import express from "express"
// node js does not have support for ES 2015 modules atm
// On the front end, we have easier access to ES 2015 modules

// so on the server side application we will use common js syntax
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(5000);

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
