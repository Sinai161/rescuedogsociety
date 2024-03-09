const Rescue = require("../models/Rescue")

const newForm = (req,res) => {
    try{
        res.render("new.ejs",{
            tabTitle: "New Animal",
            currentOwner: req.session.currentOwner
        })
    }catch(err){
        console.log(err)
    }
}

const create = async (req,res) => {
    try{
        req.body.isAdopted = req.body.isAdopted == "on" ? true : false
        const newAnimal = await Rescue.create({...req.body, owner: req.session.currentOwner._id})
        res.redirect("/rescue")
    }catch(err){
        console.log(err)
    }
}

const index = async(req, res) => {
    try{
        const animals = await Rescue.find({isAdopted: false})
        console.log(animals)
        res.render("index.ejs", {
            animals,
            tabTitle: "Index",
            currentOwner: req.session.currentOwner
        })
    }catch(err){
        console.log(err)
    }
}

const myRescue = async(req,res) => {
    try{
        const allAnimals = await Rescue.find({owner: req.session.currentOwner._id})

        const adopted = []
        const animals = []
        allAnimals.map((animal) => animal.isAdopted === true ? adopted.push(animal) : animals.push(animal))

        return res.render("myrescue.ejs", {
            animals,
            adopted,
            tabTitle: "My Rescue",
            currentOwner: req.session.currentOwner
        })
    }catch(err){
        console.log(err)
    }
}

const adopted = async(req,res) => {
    try{
        const adopt = await Rescue.findOne({_id: req.params.id})
        if(adopt.isAdopted === true) {
            return res.render("/error.ejs")
        }
        await Rescue.findOneAndUpdate
        ({_id: req.params.id},
        {owner: req.session.currentOwner._id},
        {upsert: true, new:true})
        const allAnimals = await Rescue.find({owner: req.session.currentOwner._id})
        const adopted = []
        const animals = []
        allAnimals.map((animal) => animal.isAdopted === true ? adopted.push(animal) : animals.push(animal))

        console.log(req.session.currentOwner._id)
        res.render("myrescue.ejs", {
            animals:[],
            adopted:[adopted],
            tabTitle: "Adopted",
            currentOwner: req.session.currentOwner
        })
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
            currentOwner: req.session.currentOwner
        })
    }catch(err){
        console.log(err)
    }
}

const destroy = async(req,res) => {
    try{
        await Rescue.findByIdAndDelete(req.params.animalId)
        res.redirect("/rescue")
    }catch(err){
        console.log(err)
    }
}

const editForm = async(req,res) => {
    try{
        const animal = await Rescue.findById(req.params.animalId)
        res.render("edit.ejs", {
            animal,
            tabTitle: "Edit Animal",
            currentOwner: req.session.currentOwner
        })
    }catch(err){
        console.log(err)
    }
}

const update = async(req,res) => {
    try{
        req.body.isAdopted = req.body.isAdopted == "on" ? true : false
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
    destroy,
    edit: editForm,
    update,
    myRescue,
    adopted
}