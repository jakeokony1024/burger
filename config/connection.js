// setting up the mysql connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3300,
    user: "root",
    password: "tomsucks12",
    database: "burgers_db"
});

// make a connection 

connection.connect(function(error){

    if (error ){
        console.log("error connecting: " + error.stack);
        return;
    }
    console.log("connected as id "+connection.threadId);

});

module.exports = connection;



