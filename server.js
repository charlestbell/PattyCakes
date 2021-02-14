const express = require("express");
const exphbs = require("express-handlebars");
require("dotenv").config();

// Sets up the Express App
const app = express();
const PORT = process.env.PORT;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

//Set up handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require("./routes/api-routes.js")(app);
require("./routes/public-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
