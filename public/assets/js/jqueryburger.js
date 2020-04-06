$(function () {

    $("#addButton").on("submit", function (event) {

        event.preventDefault();
        let newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: false
        };
        console.log(newBurger);

        // $.ajax("/api/burgers", {
        //     type: "POST",
        //     data: newBurger
        // }).then(function() {
        //     console.log(newBurger + " Created!")
        //     location.reload();
        // });

        // $.ajax("/api/burgers/" + id, {
        //     type: "PUT",
        //     data: newBurger
        // }).then(
        //     function(){
        //         console.log("added burger")
        //         location.reload();
        //     }
        // )
        // $("#burgerSpot").append(newBurger)
    });


});