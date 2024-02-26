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

// const rescueArray = [
//     {
//         name:"Marlin",
//         sex:"Neutered Male",
//         size:"Large (71.2 lbs)",
//         color:"White",
//         breed:"German Shepard Dog",
//         lifeStage:"Adult: 3-6 yrs",
//         img:"https://petharbor.com/get_image.asp?RES=Detail&ID=A2045852&LOCATION=LACT3",
//     },
//     {
//         name:"Duce",
//         sex:"Neutered Male",
//         size:"Large (61.0 lbs)",
//         color:"Gray",
//         breed:"American Staffordshire Terrier",
//         lifeStage:"Senior Dog: 7 yrs",
//         img:"https://petharbor.com/get_image.asp?RES=Detail&ID=A2060877&LOCATION=LACT3",
//     },
//     {
//         name:"Sam",
//         sex:"Neutered Male",
//         size:"Small (13.6 lbs)",
//         color:"Cream",
//         breed:"Chihuahua",
//         lifeStage:"Senior Dog: 7 yrs",
//         img:"https://petharbor.com/get_image.asp?RES=Detail&ID=A2063463&LOCATION=LACT4",
//     },
// ]

module.exports =Rescue

