/**
 * General routes.
 */
"use strict";

const express = require("express");
const router  = express.Router();

// Add a route for the path /
router.get("/", (req, res) => {
    let data = {
        title: "Veris"
    };

    res.render("index", data);
});

//Route for index
router.get("/index", (req, res) => {
    let data = {
        title: "Veris"
    };

    res.render("index", data);
});

// Add a route for the path /about
router.get("/about", (req, res) => {
    res.send("About something");
});



module.exports = router;
