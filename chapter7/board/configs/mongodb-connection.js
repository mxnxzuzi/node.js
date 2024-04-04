const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://iaki111:1234@cluster0.93rxcn0.mongodb.net/test";

module.exports = function (callback) {
    return MongoClient.connect(uri, callback);
};