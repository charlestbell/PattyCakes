const orm = require("./models/orm.js");

module.exports = burger = {
    getUndevourded = async () => {
        try {
         const notDevourde = await orm.selectNotDevoured("burgers", "when_devoured");
        }
        catch(resuts) {
        
        }
        },
}

// On
// orm.selectAndOrder("animal_name", "pets", "price");

// Find a pet in the pets table by an animal_name of Rachel.
// orm.selectWhere("pets", "animal_name", "Rachel");

// Find the buyer with the most pets.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");


burger.getUndevourded()