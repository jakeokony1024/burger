let connection = require("../config/connection");

let orm = {

    selectAll: function(tableInput, cb){
        let queryString = "SELECT * FROM " +tableInput + ";";
        connection.query(queryString, function(error, results){
            if (error){
                throw error;
            }
            cb (result);
        });
    },

    insertOne: function(table, columns, values, cb){
        let queryString1 = "INSERT INTO" + table;
        connection.query(queryString1, values, function(error, result){

            if (error){
                throw error;
            }
            cb (result)
        })

    },

    updateOne: function(){

    }
}

module.exports = orm;