// Import MySQL connection.
var connection = require("../config/connection.js");

function selectAll() {

}

function insertOne() {

}

function updateOne(table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table}`;

    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
        if (err) {
            throw err;
        }

        cb(result);
    });
},
delete (table, condition, cb) {
    let queryString = `DELETE FROM ${table}`;
    queryString += ' WHERE ';
    queryString += condition;

    connection.query(queryString, (err, result) => {
        if (err) {
            throw err;
        }

        cb(result);
    });
},
};


// Export the orm object for the model (cat.js).
// module.exports = orm;