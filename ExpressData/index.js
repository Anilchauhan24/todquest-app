const express = require("express");
const mongo = require("mongodb");
const Mongo_Client = mongo.MongoClient;
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
const port = 5000;
const mongo_url = "mongodb://127.0.0.1:27017";
let db;


app.get("/offer", function (req, res) {
    db.collection("seasonOffer").find()
        .toArray((err, result) => {
            if (err) throw err;
            res.send(result)
        })
});

Mongo_Client.connect(mongo_url, (err, client) => {
    console.log("mongodb connected");
    if (err) throw err;
    db = client.db("season");

    app.listen(port, () => console.log("server is running on the port", port));
})