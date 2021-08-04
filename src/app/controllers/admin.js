const fs = require('fs')
const data = require('../../../data.json')

module.exports = {
    index(req, res) {
        return res.render("admin/index", { items: data.recipes })
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
    
        return res.render("admin/recipe", { item: recipe })
    },
    
    create(req, res) {
        return res.render('admin/create')
    },
    
    post(req, res) {
        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Please, fill all fields')
        }
        }
    
        data.recipes.push({
            ...req.body,
        })
    
        fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
            if (err) return res.send("Write file error!")
            
            return res.redirect("/admin/recipes")
        })
    },
    
    edit(req, res) {
        // req.params.id = /:id
        const { id } = req.params
    
        const foundRecipe = data.recipes.find(function(recipe){
            return recipe.id == id
        })
    
        if (!foundRecipe) return res.send('Recipe not found!')
        
        const recipe = {
            ...foundRecipe,
        }
        return res.render('admin/edit', { recipe })
    
    },
    
    put(req, res) {
        const { id } = req.body
        let index = 0
    
        const foundRecipe = data.recipes.find(function(recipe, foundIndex){
            if(id == recipe.id) {
                index = foundIndex
                return true
            }
        })
    
        if (!foundRecipe) return res.send('Recipe not found!')
    
        const recipe = {
            ...foundRecipe,
            ...req.body,
        }
    
        data.recipes[index] = recipe
    
        fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
            if(err) return res.send('Write error!')
    
            return res.redirect(`/admin/recipes/${id}`)
        })
    },
    
    delete(req, res) {
        const { id } = req.body
    
        const filteredRecipes = data.recipes.filter(function(recipe){
            return recipe.id != id
        })
    
        data.recipes = filteredRecipes
    
        fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
            if(err) return res.send('Write error!')
    
            return res.redirect(`/admin/recipes`)
        })
}
}


