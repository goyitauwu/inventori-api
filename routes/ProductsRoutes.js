var express = require('express')
var router = express.Router()
const Product = require('../models/product.js')

router.get('/', (req, res) => res.send('Hi World!'))

router.get('/products',async (req, res) => {
  const products = await Product.find({})
  res.send(products)
})



module.exports = router;