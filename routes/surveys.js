const mongoose = require("mongoose");
const Survey = mongoose.model("survey");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
module.exports = app => {
  app.delete("/api/surveys/:surveyId", async (req, res) => {
     const { surveyId } = req.params;
    console.log(req.params);
    console.log("alo");
    // console.log(req)
    try {
      await Survey.findByIdAndRemove(surveyId);
      res.send({ result: "delete survey with Id: " + surveyId });
    } catch (error) {
      res.status(401).send({ error });
    }
  });
  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id });
    try {
      console.log("data");
      console.log(surveys);
      res.send({ results: surveys });
    } catch (error) {
      res.status(401).send({ error });
    }
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));
    console.log("Hi there");

    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = req.user.save();
      res.send(user);
    } catch (error) {
      res.status(422).send({ error });
    }
  });
};
