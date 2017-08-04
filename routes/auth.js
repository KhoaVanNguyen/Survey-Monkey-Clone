const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
  );

  // get user profile
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
      // Successful authentication, redirect home.
      console.log("req + \n" + req);
      res.redirect("/surveys");
    }
  );
  app.get("/api/current_user", (req, res) => {
    console.log("Hello");
    // console.log(req);
    res.send(req.user);
  });
  app.get('/api/logout', (req,res) => {
    req.logout()
    res.redirect('/')
  })
};
