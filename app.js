const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server is running on localhost:3000");
});

//With the Express framework, the req object represents the HTTP request while the res object
//represents the HTTP response. The function res.sendFile() transfers the file at the given path.