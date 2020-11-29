const fs = require("fs");
const db = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
    
        app.get("/api/notes", function(req, res) {
            res.send(db);
        });

        app.post("/api/notes", function(req, res) {
            
        })
    };

    // '/', funtion (req, res) {
        
    // });
    // step 1 convert json to object
            // var note = JSON.parse(db);


            // step 2 push new info to object
            // step 3 convert object back to json 
            // write to the json file


            // fs.writeFile()