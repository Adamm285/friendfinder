var express = require("express")
var app = express();
var PORT = process.env.PORT || 3000
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.use(require("./routes/htmlRoutes"), require("./routes/apiRoutes"));
app.listen(PORT, function () {
    console.log("App Listening on PORT:", PORT)
})