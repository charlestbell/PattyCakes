const db = require("../models/model");

module.exports = (app) => {
  app.get("/api/burgers", (req, res) => {
    db.get().then((allBurgers) => res.json(allBurgers));
  });
};
// res.JSON(notDevoured);
// } catch (error) {
//   res.status(503).send("Failed to read from Database");
// }
