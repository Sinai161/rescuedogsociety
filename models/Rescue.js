const mongoose = require("mongoose")

const rescueSchema = new mongoose.Schema({
    name: String,
    sex: String,
    size: String,
    color: String,
    breed: String,
    lifeStage: String, 
    img: String,
})

const Rescue = mongoose.model("Rescue", rescueSchema)


module.exports =Rescue

