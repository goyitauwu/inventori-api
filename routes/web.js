var express = require('express')
var router = express.Router()
var { Connection } = require('../Connection')


router.post('/products', async (req, res) => {
  const product = Connection.db.collection("Products");
  let numDocs = await Connection.db.collection('Products').count({})
  const doc = {
  id: numDocs++,
  name: req.body.name,
  price: req.body.price,
  color: req.body.color,
  size: req.body.size,
  quantity: req.body.quantity,
  image: req.body.image,
  category: req.body.category
  }
  const result = await product.insertOne(doc);
  console.log(`A document was inserted with the _id: ${result.insertedId}`);
  res.send("Product inserted...")
})

router.get('/', (req, res) => res.send('Hi World!'))

router.get('/products',async (req, res) => {
  //const products = await db.collection('Products').find({}).toArray() 
  const products = await Connection.db.collection('Products').find({}).toArray();
  res.send(products)
})
router.get('/products/:product_id',async (req, res) => {
  const products = await Connection.db.collection('Products').find({id:parseInt(req.params.product_id)}).toArray()
  res.send(products)
})

router.get('/users',async (req, res) => {
  const users= await Connection.db.collection('Users').find({}).toArray()
  res.send(users)
})

router.post('/users',async (req,res)=>{
  const users = Connection.db.collection("Users");
  let numDocs = await Connection.db.collection('Users').count({})
  const doc = {
  id: numDocs++,
  fullname: req.body.fullname,
  email: req.body.email,
  phone: req.body.phone,
  username: req.body.username,
  password: req.body.password,
  terms: req.body.terms
  }
  const result = await users.insertOne(doc);
  console.log(`A document was inserted with the _id: ${result.insertedId}`);
  res.send("User inserted...")
})

async function showUsers(){
  const users = await Connection.db.collection('Users').find({}).toArray() 
  users.forEach(u => {
    console.log(u)
  });
}
async function showProducts(){
  const products = await Connection.db.collection('Products').find({}).toArray() 
  products.forEach(p => {
    console.log(p)
  });
}


router.put('/products', async (req, res)=> {//ACTUALIZAR
  const product = Connection.db.collection("Products");
 
  const doc = {
    name: req.body.name,
    price: req.body.price,
    color: req.body.color,
    size: req.body.size,
    quantity: req.body.quantity,
    image: req.body.image,
    category: req.body.category
  }

  const result = await product.updateOne( { "id":req.body.id }, {$set: doc});
  res.send("Product updated...")


})

router.patch('/products', async (req, res)=> {//
  const product = Connection.db.collection("Products");
 
  const doc = req.body

  const result = await product.updateOne( { "id":req.body.id }, {$set: doc});

  res.send("Product patched...")
 
})

router.delete('/products/:id', async (req, res)=> {
  const product = Connection.db.collection("Products");

  const result = await product.deleteOne( { "id":parseInt(req.params.id) });

  res.send("Product deleted...")
 
})


module.exports = router;