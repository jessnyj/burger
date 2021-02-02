const createBurgerBtn = document.getElementById('create-form');

if (createBurgerBtn) {
    createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();

        // Grabs the value of the textarea that goes by the name, "quote"
        const newCat = {
            burger_name: document.getElementById('ca').value.trim(),
        };

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
            document.getElementById('ca').value = '';

            // Reload the page so the user can see the new quote
            console.log('New burger Added!');
            location.reload();
        });
    });
}