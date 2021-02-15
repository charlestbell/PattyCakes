const db = require("../models/model");

module.exports = (app) => {
  app.get("/api/burgers", (req, res) => {
    db.get().then((allBurgers) => res.json(allBurgers));
  });

  app.put("/api/burgers/:id", (req, res) => {
    const condition = req.params.id;
    db.update(
      {
        when_devoured: req.body.when_devoured,
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

  app.post("/api/burgers", (req, res) => {
    db.create(
      ["burger_name", "when_devoured"],
      [req.body.name, req.body.sleepy],
      (result) => {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      }
    );
  });
};
