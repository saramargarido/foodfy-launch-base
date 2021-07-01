const express = require('express')
const nunjucks = require ('nunjucks')

const server = express()
const recipes = require("./data")

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res) {
    return res.render("home", { items: recipes })
})

server.get("/about", function (req, res) {
    return res.render("about")
})

server.get("/recipes", function (req, res) {
    return res.render("recipes", { items: recipes })
})

server.get("/recipes/:id", function (req, res) {
    // console.log(req.params.id)
    const id = req.params.id

    const recipe = recipes.find(function(recipe) {
        if (recipe.id == id) {
            return true
        }
    })
    if (!recipe) {
        return res.send("Recipe not found")
    }

    return res.render("recipe", { item: recipe })
})

server.listen(5000, function() {
    console.log("server is runnung")
})