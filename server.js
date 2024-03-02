const express = require("express")
const app = express()
require("dotenv").config()
require("./config/database")

const methodOverride = require("method-override")
const rescueRoutes = require("./routes/rescue")


const userController = require("./controllers/userController.js")
const session = require("express-session")
const sessionsController = require("./controllers/sessions.js")


app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use("/rescue", rescueRoutes)
app.use(
    session({
        secret: process.env.SECRET, 
        resave: false,
        saveUninitialized: false 
    })
)

app.use("/sessions", sessionsController)
app.use("/rescue", rescueRoutes)

app.use("/users", userController)


app.get("/", (req,res) => {
    res.redirect("/rescue")
})




app.listen(process.env.PORT,() => {
    console.log("Server is on 3000 ")
})