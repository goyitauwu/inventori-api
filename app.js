const express = require('express')
const app = express()
const port = 3000

const userRouter = require('./routes/UserRouter')
const authJwt = require('./auth/jwt')
app.use(authJwt())
app.use('/api/v1/users', userRouter)

//const mongoose = require('mongoose');
require('dotenv').config()
const con = require('./MongooseConnection')
const Rutas = require('./routes/ProductsRoutes.js')
//const MongoClient = require('mongodb').MongoClient
//const conn_String = 'mongodb+srv://JonathanJ:420019jJ@cluster0.oqnajti.mongodb.net/?retryWrites=true&w=majority'
app.use(express.json());
//const Rutas = require('./routes/web');
app.use('/api/v1',Rutas);
//const { Connection } = require('./Connection');

app.listen(port, () => {

  /*console.log(`Example app listening on port ${port}!`)
  try {
    mongoose.connect(process.env.CONN_STRING).then(()=>{
      const Cat = mongoose.model('Cat', { name: String });
      const kitty = new Cat({ name: 'Zildjian' });
      kitty.save().then(() => console.log('meow'));
    });
    console.log('Connected to Mongo');
  } catch (error) {
    console.log('Error connecting to Mongo'+ error)
  }*/
})
