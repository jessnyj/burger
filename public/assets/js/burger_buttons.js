document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    const devourBtn = document.querySelectorAll('.devour-it');

// Update - Devour button
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
                        console.log(response);
                        location.reload('/');
                    
                });
            });
        });
    }
    // Add a new burger
    const createBurgerBtn = document.getElementById('create-form');

    if (createBurgerBtn) {
        createBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();
            const newBurger = {
                burger_name: document.getElementById('submitBurgerForm').value.trim(),
                devoured: false
            };
            console.log(newBurger);
            // Send POST request 
            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(newBurger),
            }).then(() => {
                document.getElementById('submitBurgerForm').value = '';
                console.log('New burger Added!');
                location.reload();
            });
        });
    }
});
