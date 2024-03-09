const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ownerSchema = Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, requires: true}
})

const Owner = mongoose.model("Owner", ownerSchema)

module.exports = Owner