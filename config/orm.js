const connection = require("./connection.js");

const orm = {
  getAllBurgers(tableInput, cb) {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;
