var express = require("express")

var app = express()

var PORT = process.env.PORT || 3000

app.use(express.urlencoded)({extended:true})
app.use(express.json())

var apiRoutes = require("./routes/apiRoutes")
var htmlRoutes = require("./routes/htmlRoutes")

apiRoutes(app)

htmlRoutes(app)

app.listen(PORT, function () { 
    console.log("App Listening on PORT:", PORT)
 })