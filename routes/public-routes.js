const exphbs = require("express-handlebars");
const db = require("../models/model");

module.exports = (app) => {
  app.get("/", (req, res) => {
    db.get((data) => {
      console.log("public-routes ", data);
      const hbsObject = {
        cats: data,
      };
      console.log("hbsObject", hbsObject);
      res.render("index", hbsObject);
    });
  });
};
