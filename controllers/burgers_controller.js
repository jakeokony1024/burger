let express = require("express");

let router = express.Router();

let burger = require("../models/burger");

router.get("/", function (request, response) {
    burger.selectAll(function (data) {
        let handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        response.render("index", handlebarsObject);
    });
});

router.post("api/burgers", function (request, response) {
    burger.insertOne(["burger_name", "devoured"], [request.body.burger_name, request.body.devoured], function (result) {
        response.json({ id: result.insertId });
    })
})

module.exports = router;