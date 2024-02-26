const Rescue = require("../models/Rescue")

const newForm = (req,res) => {
    try{
        res.render("new.ejs",{
            tabTitle: "New Animal"
        })
    }catch(err){
        console.log(err)
    }
}

const create = async (req,res) => {
    try{
        const newAnimal = await Rescue.create(req.body)
        console.log(newAnimal)
        res.redirect("/rescue")
    }catch(err){
        console.log(err)
    }
}

const index = async(req, res) => {
    try{
        const animal = await Rescue.find()
        res.render("index.ejs", {
            animal,
            tabTitle: "Index"
        })
        console.log(animal)
    }catch(err){
        console.log(err)
    }
}


module.exports = {
    create,
    new: newForm,
    index
}