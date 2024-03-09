const mongoose = require("mongoose")
const Owner = require("./Owner")

const rescueSchema = new mongoose.Schema({
    name: String,
    sex: String,
    size: String,
    color: String,
    breed: String,
    lifeStage: String, 
    img: String,
    isAdopted: { type: Boolean, default: false},
    owner: {type: mongoose.Types.ObjectId, ref: Owner}
})

const Rescue = mongoose.model("Rescue", rescueSchema)


module.exports = Rescue

