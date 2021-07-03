const fs = require('fs')
const data = require('../data.json')

exports.index = function (req, res) {
    return res.render("admin/index", { items: data.recipes })
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

    return res.render("admin/recipe", { item: recipe })
}

exports.post = function (req, res) {
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
}

exports.create = function (req, res) {
    return res.render('admin/create')
}
