const connection = require("../config/connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
const orm = {
  selectDateNull(tableInput, colToSearch, valOfCol) {
    const queryString = "SELECT * FROM ?? WHERE ?? IS NULL";
    connection.query(
      queryString,
      [tableInput, colToSearch, valOfCol],
      (err, result) => {
        if (err) throw err;
        console.log(result);
        return results;
      }
    );
  },
  create(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table}`;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update(table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table}`;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // selectAndOrder(whatToSelect, table, orderCol) {
  //   const queryString = 'SELECT ?? FROM ?? ORDER BY ?? DESC';
  //   console.log(queryString);
  //   connection.query(
  //     queryString,
  //     [whatToSelect, table, orderCol],
  //     (err, result) => {
  //       if (err) throw err;
  //       console.log(result);
  //     }
  //   );
  // },
  // findWhoHasMost(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
  //   const queryString =
  //     'SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1';

  //   connection.query(
  //     queryString,
  //     [
  //       tableOneCol,
  //       tableOneCol,
  //       tableOne,
  //       tableTwo,
  //       tableTwo,
  //       tableTwoForeignKey,
  //       tableOne,
  //       tableOneCol,
  //     ],
  //     (err, result) => {
  //       if (err) throw err;
  //       console.log(result);
  //     }
  //   );
  // },
};

module.exports = orm;
