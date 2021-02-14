const orm = require("../config/orm.js");

const burger = {
  async get() {
    return await orm.getAllBurgers("burgers", "when_devoured");
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
