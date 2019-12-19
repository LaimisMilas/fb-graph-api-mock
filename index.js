const express = require('express');
const fs = require("fs");
const path = require("path");
const app = express();
const https = require('https');
const stringPrefix = "laimis_krabas";
const port = 443;
const ip = "10.0.0.1";

//app.listen(port, ip);

//GET home route
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post("/me/messages", (req, res) => {
    console.log(stringPrefix + " body: " + JSON.stringify(req.body));
});

app.post("/me/messenger_profile", (req, res) => {
    console.log(stringPrefix + " body: " + JSON.stringify(req.body));
});

app.post("/:appId/subscriptions", (req, res) => {
    console.log(stringPrefix + " body: " + JSON.stringify(req.body));
});

app.post("/:pageId/subscribed_apps", (req, res) => {
    console.log(stringPrefix + " body: " + JSON.stringify(req.body));
});

app.get("/:senderPsid", (req, res) => {
    console.log(stringPrefix + " body: " + JSON.stringify(req.body));

});

app.get("/me/personas", (req, res) => {
    console.log(stringPrefix + " body: " + JSON.stringify(req.body));
});

app.post("/me/personas", (req, res) => {
    console.log(stringPrefix + " body: " + JSON.stringify(req.body));
});

app.post("/me/nlp_configs", (req, res) => {
    console.log(stringPrefix + " body: " + JSON.stringify(req.body));
});

app.post("/:appId/activities", (req, res) => {
    console.log(stringPrefix + " body: " + JSON.stringify(req.body));
});

https.createServer({
    key: fs.readFileSync('./ssl/privatekey.pem'),
    cert: fs.readFileSync('./ssl/certificate.pem'),
    passphrase: 'vagina_22'
}, app)
.listen(port, function () {
    console.log("Express server listening on port " + port);
});