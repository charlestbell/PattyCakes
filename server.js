const express = require("express");
const exphbs = require("express-handlebars");
require("dotenv").config();

// Sets up the Express App
const app = express();
const PORT = process.env.PORT;

// Requiring our models for syncing

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
// app.use(express.static("public"));

//Set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

// Routes
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
