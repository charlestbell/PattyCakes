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

module.exports = burger;
