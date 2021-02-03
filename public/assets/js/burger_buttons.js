document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    // UPDATE
    const devourBtn = document.querySelectorAll('.devour-it');

    // Set up the event listener for the create button
    if (devourBtn) {
        devourBtn.forEach((button) => {
            button.addEventListener('click', (e) => {
                // Grabs the id of the element that goes by the name, "id"
                const id = e.target.getAttribute('data-id');
                const newBurger = e.target.getAttribute('data-hungry');

                const eatBurger = {
                    devoured: newBurger,
                };

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    // make sure to serialize the JSON body
                    body: JSON.stringify(eatBurger),
                }).then((response) => {
                    // Check that the response is all good
                    // Reload the page so the user can see the new quote
                        console.log(response);
                        location.reload('/');
                    
                });
            });
        });
    }
    const createBurgerBtn = document.getElementById('create-form');

    if (createBurgerBtn) {
        createBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();

            // Grabs the value of the textarea that goes by the name, "quote"
            const newBurger = {
                burger_name: document.getElementById('submitBurgerForm').value.trim(),
                devoured: false
            };
            console.log(newBurger);
            // Send POST request to create a new quote
            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                // make sure to serialize the JSON body
                body: JSON.stringify(newBurger),
            }).then(() => {
                // Empty the form
                document.getElementById('submitBurgerForm').value = '';

                // Reload the page so the user can see the new quote
                console.log('New burger Added!');
                location.reload();
            });
        });
    }
});









// $(function () {
//     $(".devour-it").on("click", function (event) {
//         var id = $(this).data("id");
//         var newBurger = $(this).data("newBurger");

//         var hungry = {
//             devoured: newBurger
//         };

//         // Send the PUT request.
//         $.ajax("/api/cats/" + id, {
//             type: "PUT",
//             data: hungry
//         }).then(
//             function () {
//                 console.log("changed sleep to", newBurger);
//                 // Reload the page to get the updated list
//                 location.reload();
//             }
//         );
//     });

//     $(".create-form").on("submit", function (event) {
//         // Make sure to preventDefault on a submit event.
//         event.preventDefault();

//         var newCat = {
//             name: $("#ca").val().trim(),
//             sleepy: $("[name=sleepy]:checked").val().trim()
//         };

//         // Send the POST request.
//         $.ajax("/api/cats", {
//             type: "POST",
//             data: newCat
//         }).then(
//             function () {
//                 console.log("created new cat");
//                 // Reload the page to get the updated list
//                 location.reload();
//             }
//         );
//     });
// });
