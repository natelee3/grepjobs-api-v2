'use strict';

const { MongoClient } = require('mongodb');
let client;

module.exports = async () => {

    try {
      client = await MongoClient.connect(`mongodb+srv://${process.env.DB_URI}`, { useNewUrlParser: true });
    } catch (e) {
      console.log("Could not connect to mongodb");
    }
  }
  
  module.exports.get = () => client;
  
  module.exports.close = () => client.close()

