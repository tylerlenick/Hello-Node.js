const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3009;
const path = require("path");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Start the server
app.listen(PORT, () => {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});

// Routing to serve correct HTML based on URL
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// End point that will send back "Hello World" as JSON.
app.get("/hello", (req, res) => {
    res.json("Hello World");
});

// Sends JSON error if incorrect URL
app.get('*', (req, res) => {
    res.json("404 Error: Page not found");
});