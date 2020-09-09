var express = require("express");
var router = express.Router();
var User = require("../UserModel/User");
var mid = require("../Middleware/middleware2");

router.get("/profile", mid.requiresLogin, function (req, res, next) {
  User.findById(req.session.userId).exec(function (error, user) {
    if (error) {
      return next(error);
    } else {
      return res.render("profile", {
        title: "Profile",
        name: user.name,
      });
    }
  });
});

module.exports = router;
