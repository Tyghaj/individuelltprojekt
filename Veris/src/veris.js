/**
 * A module exporting functions to search for products
 */
"use strict";

module.exports = {
    about: about
};

const mysql  = require("promise-mysql");
const config = require("../config/db/veris.json");
let db;


/**
 * Main function.
 * @async
 * @returns void
 */
(async function() {
    db = await mysql.createConnection(config);

    process.on("exit", () => {
        db.end();
    });
})();

async function about() {
    let text = `
testtest
    `;
    console.table(text);
}
