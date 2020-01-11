
var friendData = require("../data/friends");


module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  

  app.post("/api/friends", function(req, res) {
    
    if (friendsData.length < 5) {
        friendsData.push(req.body);
      res.json(true);
    }
    
  });


  app.post("/api/clear", function(req, res) {
    
    friendsData.length = 0;
    res.json({ ok: true });
  });
};
