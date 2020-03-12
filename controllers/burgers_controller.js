let express = require("express");

let router = express.Router();

let burger = require("../models/burger");

router.get("/", function(request, response){
    burger.all(function(data){
        let handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        response.render("index", handlebarsObject);
    });
});

router.post("api/burgers", function(request, response){
    
})