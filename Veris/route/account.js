/**
 * Route for login and create account.
 */
"use strict";

const express = require("express");
const router  = express.Router();
const veris   = require("../src/veris.js");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/login", async (req, res) => {
    let data = {
        title: `login`
    };
    res.render("account/login", data);
});

module.exports = router;