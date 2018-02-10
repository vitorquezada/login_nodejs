var config = require('./config');

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(config.connectionString)
    .then(client => global.db = client.db(config.db))
    .catch(err => console.log(err));