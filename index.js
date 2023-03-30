const express = require('express')
const app = express()
const port = 3000
const MongoClient = require('mongodb').MongoClient
//const conn_String = 'mongodb+srv://JonathanJ:420019jJ@cluster0.oqnajti.mongodb.net/?retryWrites=true&w=majority'
app.use(express.json());
const Rutas = require('./routes/web');
app.use('/api/v1',Rutas);
const { Connection } = require('./Connection');

app.listen(port, () => {
  //console.log(`Example app listening on port ${port}!`)
  //const client = new MongoClient(conn_String)
  try {
    Connection.open();
    //client.connect()
    //db = client.db('Inventory')
    //console.log('Connected to Mongo')
    //showProducts()
  } catch (error) {
    console.log('Error connecting to Mongo'+ error)
  }
})
