var path = require("path");
var express = require("express")
var router = express.Router()
// console.log(__dirname)
router.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/survey.html"));
});

// If no matching route is found default to home
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
});

module.exports = router;