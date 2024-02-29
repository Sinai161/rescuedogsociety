const express = require("express")
const app = express()
require("dotenv").config()
require("./config/database")

const methodOverride = require("method-override")
const rescueRoutes = require("./routes/rescue")




app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use("/rescue", rescueRoutes)


app.get("/", (req,res) => {
    res.redirect("/rescue")
})


port = 3000

app.listen(port,() => {
    console.log("Server is on 3000 ")
})