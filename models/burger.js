var orm = require("../config/orm.js");

let burger = {

    selectAll: function(cb){
        orm.selectAll("burgers", function(response){
            cb (response);
        });
    },

    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(response){
            cb(response);
        });
    },

    updateOne: function(objectColVals, condition, cb){
        orm.updateOne("burgers",objectColVals, condition, function(response) {
            cb(response);
        });
    }
};

module.exports = burger;