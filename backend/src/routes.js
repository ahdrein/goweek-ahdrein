const express = require('express')

const routes = express.Router();

const TweetController = require('./controllers/TweetController')

// routes.get("/", (req, res) => {
//     return res.send("Hello World")
// })

routes.get("/tweets", TweetController.index )
routes.post("/tweets", TweetController.store )

module.exports = routes;
