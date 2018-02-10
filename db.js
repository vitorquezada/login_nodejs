var config = require('./config');

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(config.connectionString)
    .then(conn => global.conn = conn.db(config.db))
    .catch(err => console.log(err));