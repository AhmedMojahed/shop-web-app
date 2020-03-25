const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = callBack => {
  MongoClient.connect(
    "mongodb+srv://Amogahed:Gdcc67hCzsH7G72H@cluster0-bqmwm.gcp.mongodb.net/test?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log("connected");
      _db = client.db();
      callBack();
    })
    .catch(err => console.log(err));
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "no DataBase Found!";
};

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Amogahed:<password>@cluster0-bqmwm.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
