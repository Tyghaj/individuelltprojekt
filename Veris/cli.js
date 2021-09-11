/*
Main for terminal program kmom04
Written by: Fritz Eriksson
*/
"use strict";

const { getLogTable } = require('./src/veris.js');

/**
 * Main function.
 * @returns void
 */
(function() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const eshop = require("./src/veris.js");

    let split;
    console.info("Welcome to Buckstar terminal program");
    printMenu();
    rl.on("line", (line) => {
        line = line.trim();
        split = line.split(" ");
        switch (split[0]) {
            case "exit":
                process.exit();
                break;
            case "menu":
            case "help":
                printMenu();
                break;
            case "log":
                eshop.getLogTable(split[1]);
                break;
            case "shelf":
                eshop.getShelf();
                break;
            case "inventory":
                if (split.length > 1) {
                    eshop.findInTable("produkt", split[1]);
                }
                else {
                    eshop.findAllInTable("produkt");
                }
                break;
            case "invadd":
                eshop.deladd(split);
                break;
            case "invdel":
                split[3] = split[3] - (split[3] * 2);
                eshop.deladd(split);
                break;
            case "order":
                if (split.length > 1) {
                    eshop.getOrderSearch(split[1]);
                }
                else {
                    eshop.getOrders();
                }
                break;
            case "picklist":
                console.info("picklist for order:" + split[1]);
                eshop.getPicklist(split[1]);
                break;
            case "ship":
                eshop.shipOrder(split[1]);
                break;
            case "about":
                eshop.about();
                break;
            default:
                console.info("\nMake a valid choice. Write menu or help");
        }
        rl.prompt();
    });
})();

/** 
 * Show the menu on that can be done.
 *
 * @returns {void}
 */
function printMenu() {
    console.info(
        "---------------------------------------------------------------------------------\n" 
        + "                                     MENU\n"
        + "-------------------------------------------------------------------------------\n" 
        + "log <number>: Shows the <number> rows last logged \n"
        + "shelf: Shows all the shelfs in the storage\n"
        + "inventory: Shows all products in the inventory\n"
        + "inventory <str>: Used to filter the search\n"
        + "invadd <productid> <shelf> <number>: Puts <number> of products on <shelf> \n"
        + "invdel <productid> <shelf> <number>: Removes <number> of products from <shelf>\n"
        + "order <search>: Search for orders\n"
        + "picklist <orderid>: Shows a picklist for a specific order\n"
        + "ship <orderid>: Changes orderstatus from active to sent\n"
        + "about: About page\n"
        + "exit: Exits the program\n"
        + "---------------------------------------------------------------------------------"
    );
}
