const orm = require("../config/orm.js");

const burger = {
  get(cb) {
    orm.get("burgers", (res) => cb(res));
  },
  update(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, (res) => cb(res));
  },
  create(cols, vals, cb) {
    orm.create("burgers", cols, vals, (res) => cb(res));
  },
};
// On
// orm.selectAndOrder("animal_name", "pets", "price");

// Find a pet in the pets table by an animal_name of Rachel.
// orm.selectWhere("pets", "animal_name", "Rachel");

// Find the buyer with the most pets.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");

// burger.selectNotDevoured();

module.exports = burger;

// printBurgers = async () => {
//   await burger.get((data) => {
//     console.log("burger.get ", data);
//   });
// };
