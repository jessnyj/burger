const express = require('express');
const router = express.Router();
const burger = require("../models/burger.js");


// Get Route
router.get('/', (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

// Post Route
router.post('/api/burgers', (req, res) => {
    burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (result) => {
        res.json({ id: result.insertId });
    });
});

// Put Route
router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log('condition', condition);

    burger.update(
        {
            devoured: req.body.devoured,
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});


// Export routes for server.js to use.
module.exports = router;