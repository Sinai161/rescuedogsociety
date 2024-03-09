const express = require("express")
const app = express()
require("dotenv").config()
require("./config/database")

const methodOverride = require("method-override")
const rescueRoutes = require("./routes/rescue")


const ownerController = require("./controllers/ownerController.js")
const session = require("express-session")
const sessionsController = require("./controllers/sessions.js")
// const Owner = require("./models/Owner.js")


app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use(
    session({
        secret: process.env.SECRET, 
        resave: false,
        saveUninitialized: false 
    })
)

app.use("/sessions", sessionsController)
app.use("/rescue", rescueRoutes)

app.use("/owners", ownerController)


app.get("/", (req,res) => {
    res.redirect("/rescue")
})



app.listen(process.env.PORT,() => {
    console.log("Server is on 3000 ")
})