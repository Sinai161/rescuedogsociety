const router = require("express").Router()
const bcrypt = require("bcrypt")
const Owner = require("../models/Owner")

router.get("/new", (req,res) => {
    res.render("owners/new.ejs", {
        currentOwner: req.session.currentOwner
    })
})

router.post("/", async(req,res) => {
    try{
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        console.log(req.body)
        const newOwner = await Owner.create(req.body)
        console.log(newOwner)
        res.redirect("/")
    }catch(err){
        console.log(err)
    }
})

module.exports = router