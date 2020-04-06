let express = require("express");

let router = express.Router();

let burger = require("../models/burger");

router.get("/", function (request, response) {
    burger.selectAll(function (data) {
        let burgerData = {
            burgers: data
        };
        console.log(burgerData);
        response.render("index", burgerData);
    });
});

router.post("/api/burgers", function (request, response) {
    burger.insertOne(["burger_name", "devoured"], [request.body.burger_name, request.body.devoured], function (result) {
        response.json({
            id: result.insertId
        });
    });
});

router.put("/api/burgers/:id", function(request, response){
    var condition = "id = " + request.params.id;
    console.log("condition ", condition);
    burger.updateOne({
        devoured: request.body.devoured
    },
    condition, function(result){
        if (result.changedRows === 0) {
            return response.status(404).end();
        }
        return status(200).end();
    })
});

module.exports = router;