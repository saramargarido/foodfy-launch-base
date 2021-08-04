const fs = require('fs')
const data = require('../../../data.json')

module.exports = {
        index(req, res) {
            return res.render("recipes/home", { items: data.recipes })
        },
        
        about(req, res) {
            return res.render("recipes/about")
        },
        
        recipesList(req, res) {
            return res.render("recipes/recipes", { items: data.recipes })
        },
        
        show(req, res) {
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
}