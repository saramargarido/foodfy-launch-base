const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/recipes')

// routes.get('/', function(req, res) {
//     return res.send('ok')
// })
routes.get('/', recipes.index)

routes.get("/about", recipes.about)
routes.get("/recipes", recipes.recipesList)
routes.get("/recipes/:id", recipes.show)

module.exports = routes