$(function () {

    $("#addButton").on("submit", function (event) {

        event.preventDefault();
        let newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: false
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurger
        }).then(
            function(){
                console.log("added burger")
                location.reload();
            }
        )
    })


})