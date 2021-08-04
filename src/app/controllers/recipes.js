const fs = require('fs')
const data = require('../../../data.json')

exports.index = function (req, res) {
    return res.render("recipes/home", { items: data.recipes })
}

exports.about = function (req, res) {
    return res.render("recipes/about")
}

exports.recipesList = function (req, res) {
    return res.render("recipes/recipes", { items: data.recipes })
}

exports.show = function (req, res) {
    const id = req.params.id

    const recipe = data.recipes.find(function(recipe) {
        if (recipe.id == id) {
            return true
        }
    })
    if (!recipe) {
        return res.send("Recipe not found")
    }

    return res.render("recipes/recipe", { item: recipe })
}