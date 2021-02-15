const db = require("../models/model");

module.exports = (app) => {
  app.get("/api/burgers", (req, res) => {
    db.get().then((allBurgers) => res.json(allBurgers));
  });
};
module.exports = (app) => {
  app.put("/api/burgers/:id", (req, res) => {
    const condition = req.params.id;
    db.update(
      {
        when_devoured: req.body.sleepy,
      },
      condition,
      (result) => {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
};
