'use strict';

const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_URI}`;
let client;

module.exports = async () => {
    try {
      client = await MongoClient.connect(uri, { useNewUrlParser: true });
    } catch (e) {
      console.log("Could not connect to mongodb");
    }
  }
  
  module.exports.get = () => client;
  
  module.exports.close = () => client.close()

