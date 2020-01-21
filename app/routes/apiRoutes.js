var express = require("express")
var friendData = require("../data/friends");
var router = express.Router();

router.get("/api/friends", function (req, res) {
  res.json(friendData);
});

router.post("/api/friends", function (req, res) {
  friendData.push(req.body);
  res.json(true);
});

router.post("/api/clear", function (req, res) {
  friendData.length = 0;
  res.json({
    ok: true
  });
});
module.exports = router;