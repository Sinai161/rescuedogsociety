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
        const animals = await Rescue.find()
        res.render("index.ejs", {
            animals,
            tabTitle: "Index"
        })
        console.log(animals)
    }catch(err){
        console.log(err)
    }
}

const show = async(req,res) => {
    try{
        console.log(req.params.id)
        const index = req.params.id
        const animal = await Rescue.findById(index)
        res.render("show.ejs", {
            animal,
            tabTitle: animal.name,
        })
    }catch(err){
        console.log(err)
    }
}

const editForm = async(req,res) => {
    try{
        const animal = await Rescue.findById(req.params.animalId)
        res.render("edit.ejs", {
            animal,
            tabTitle: "Edit Animal"
        })
    }catch(err){
        console.log(err)
    }
}

const update = async(req,res) => {
    try{
        await Rescue.findByIdAndUpdate(req.params.animalId, req.body, {new: true})
        res.redirect("/rescue")
    }catch(err){
        console.log(err)
    }
}


module.exports = {
    create,
    new: newForm,
    index,
    show,
    edit: editForm,
    update
}