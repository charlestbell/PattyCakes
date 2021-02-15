const exphbs = require("express-handlebars");
const db = require("../models/model");

module.exports = (app) => {
  app.get("/", (req, res) => {
    db.get((data) => {
      const hbsObject = {
        cats: data,
      };
      res.render("index", hbsObject);
    });
  });
};
