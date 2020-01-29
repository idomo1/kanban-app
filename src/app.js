const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "..", "dist")));

app.all('*', (req, res) => {
    res.send(path.join(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
