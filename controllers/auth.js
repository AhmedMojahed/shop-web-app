const User = require("../models/user");
exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get("Cookie").split("=")[1] === "true";
  console.log(req.session.isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isLoggedIn: req.session.isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  User.findById("5e85f1b82b40e008a5851921")
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      res.redirect("/");
    })
    .catch(err => console.log(err));
};

exports.postLogOut = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect("/");
  });
};
