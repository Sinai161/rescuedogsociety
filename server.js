const express = require("express")
const app = express()
const methodOverride = require("method-override")


app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))





port = 3000

app.listen(port,() => {
    console.log("Server is on 3000 ")
})