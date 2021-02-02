document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    // UPDATE
    const changeSleepBtns = document.querySelectorAll('.change-sleep');

    // Set up the event listener for the create button
    if (changeSleepBtns) {
        changeSleepBtns.forEach((button) => {
            button.addEventListener('click', (e) => {
                // Grabs the id of the element that goes by the name, "id"
                const id = e.target.getAttribute('data-id');
                const newSleep = e.target.getAttribute('data-newsleep');

                const newSleepState = {
                    sleepy: newSleep,
                };

                fetch(`/api/cats/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    // make sure to serialize the JSON body
                    body: JSON.stringify(newSleepState),
                }).then((response) => {
                    // Check that the response is all good
                    // Reload the page so the user can see the new quote
                    if (response.ok) {
                        console.log(`changed sleep to: ${newSleep}`);
                        location.reload('/');
                    } else {
                        alert('something went wrong!');
                    }
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
})