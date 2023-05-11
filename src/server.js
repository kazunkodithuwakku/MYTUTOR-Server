const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
const router = require('./routes');
const mongo = require('./client/mongoClient');

const collection = require('./schemas/student');

app.use(cors());
app.use('/', router);
mongo.getMongoClient();
const server = app.listen(port, () =>
    console.log(`My Tutor server is running on port : ${port}`)
);

module.exports = {
    app,
    server,
    router
};